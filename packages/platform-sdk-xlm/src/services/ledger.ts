import { Coins, Contracts, Exceptions } from "@arkecosystem/platform-sdk";
import Stellar from "@ledgerhq/hw-app-str";

export class LedgerService implements Contracts.LedgerService {
	#ledger: Contracts.LedgerTransport;
	#transport!: Stellar;

	public static async construct(config: Coins.Config): Promise<LedgerService> {
		return new LedgerService();
	}

	public async destruct(): Promise<void> {
		await this.disconnect();
	}

	public async connect(transport: Contracts.LedgerTransport): Promise<void> {
		this.#ledger = await transport.open();
		this.#transport = new Stellar(this.#ledger);
	}

	public async disconnect(): Promise<void> {
		await this.#ledger.close();
	}

	public async getVersion(): Promise<string> {
		const { version } = await this.#transport.getAppConfiguration();

		return version;
	}

	public async getPublicKey(path: string): Promise<string> {
		const { publicKey } = await this.#transport.getPublicKey(path, true, true);

		return publicKey;
	}

	public async signTransaction(path: string, payload: Buffer): Promise<string> {
		const { signature } = await this.#transport.signTransaction(path, payload);

		return signature.toString("hex");
	}

	public async signTransactionWithSchnorr(path: string, payload: Buffer): Promise<string> {
		throw new Exceptions.NotImplemented(this.constructor.name, "signTransactionWithSchnorr");
	}

	public async signMessage(path: string, payload: Buffer): Promise<string> {
		throw new Exceptions.NotImplemented(this.constructor.name, "signMessage");
	}

	public async signMessageWithSchnorr(path: string, payload: Buffer): Promise<string> {
		throw new Exceptions.NotImplemented(this.constructor.name, "signMessageWithSchnorr");
	}
}
