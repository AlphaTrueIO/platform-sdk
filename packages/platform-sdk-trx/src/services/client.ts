import { Coins, Contracts, DTO, Exceptions, Helpers } from "@arkecosystem/platform-sdk";
import { Arr } from "@arkecosystem/platform-sdk-support";
import TronWeb from "tronweb";

import { WalletData } from "../dto";
import * as TransactionDTO from "../dto";

export class ClientService implements Contracts.ClientService {
	readonly #connection: TronWeb;

	readonly #broadcastErrors: Record<string, string> = {
		SIGERROR: "ERR_INVALID_SIGNATURE",
		CONTRACT_VALIDATE_ERROR: "ERR_CONTRACT_VALIDATE_ERROR",
		CONTRACT_EXE_ERROR: "ERR_CONTRACT_EXE_ERROR",
		BANDWITH_ERROR: "ERR_BANDWITH_ERROR",
		DUP_TRANSACTION_ERROR: "ERR_DUP_TRANSACTION_ERROR",
		TAPOS_ERROR: "ERR_TAPOS_ERROR",
		TOO_BIG_TRANSACTION_ERROR: "ERR_TOO_BIG_TRANSACTION_ERROR",
		TRANSACTION_EXPIRATION_ERROR: "ERR_TRANSACTION_EXPIRATION_ERROR",
		SERVER_BUSY: "ERR_SERVER_BUSY",
		NO_CONNECTION: "ERR_NO_CONNECTION",
		NOT_ENOUGH_EFFECTIVE_CONNECTION: "ERR_NOT_ENOUGH_EFFECTIVE_CONNECTION",
		OTHER_ERROR: "ERR_OTHER_ERROR",
	};

	private constructor(peer: string) {
		this.#connection = new TronWeb({
			fullHost: peer,
		});
	}

	public static async construct(config: Coins.Config): Promise<ClientService> {
		try {
			return new ClientService(config.get<string>("peer"));
		} catch {
			return new ClientService(Arr.randomElement(config.get<Coins.CoinNetwork>("network").hosts));
		}
	}

	public async destruct(): Promise<void> {
		//
	}

	public async transaction(id: string): Promise<Contracts.TransactionData> {
		const result = await this.#connection.trx.getTransaction(id);

		return Helpers.createTransactionDataWithType(result, TransactionDTO);
	}

	public async transactions(query: Contracts.ClientTransactionsInput): Promise<Coins.TransactionDataCollection> {
		throw new Exceptions.NotImplemented(this.constructor.name, "transactions");
	}

	public async wallet(id: string): Promise<Contracts.WalletData> {
		const result = await this.#connection.trx.getAccount(id);

		return new WalletData(result);
	}

	public async wallets(query: Contracts.ClientWalletsInput): Promise<Coins.WalletDataCollection> {
		throw new Exceptions.NotImplemented(this.constructor.name, "wallets");
	}

	public async delegate(id: string): Promise<Contracts.WalletData> {
		throw new Exceptions.NotImplemented(this.constructor.name, "delegate");
	}

	public async delegates(query?: Contracts.KeyValuePair): Promise<Coins.WalletDataCollection> {
		throw new Exceptions.NotImplemented(this.constructor.name, "delegates");
	}

	public async votes(id: string, query?: Contracts.KeyValuePair): Promise<Coins.TransactionDataCollection> {
		throw new Exceptions.NotImplemented(this.constructor.name, "votes");
	}

	public async voters(id: string, query?: Contracts.KeyValuePair): Promise<Coins.WalletDataCollection> {
		throw new Exceptions.NotImplemented(this.constructor.name, "voters");
	}

	public async syncing(): Promise<boolean> {
		throw new Exceptions.NotImplemented(this.constructor.name, "syncing");
	}

	public async broadcast(transactions: DTO.SignedTransactionData[]): Promise<Contracts.BroadcastResponse> {
		const result: Contracts.BroadcastResponse = {
			accepted: [],
			rejected: [],
			errors: {},
		};

		for (const transaction of transactions) {
			const response = await this.#connection.trx.sendRawTransaction(transaction.data());

			if (response.result) {
				result.accepted.push(transaction.id());
			}

			if (response.code) {
				result.rejected.push(transaction.id());

				if (!Array.isArray(result.errors[transaction.id()])) {
					result.errors[transaction.id()] = [];
				}

				for (const [key, value] of Object.entries(this.#broadcastErrors)) {
					if (response.code.includes(key)) {
						result.errors[transaction.id()].push(value);
					}
				}
			}
		}

		return result;
	}
}
