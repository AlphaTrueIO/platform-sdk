import { DateTime } from "@arkecosystem/platform-sdk-intl";
import { BigNumber, Censor } from "@arkecosystem/platform-sdk-support";
import emoji from "node-emoji";

import { MultiPaymentRecipient, TransactionDataMeta } from "../contracts/coins/data";
import { KeyValuePair } from "../contracts/types";

export abstract class AbstractTransactionData {
	/**
	 * Various coins need post-processing to determine things like
	 * "isSent" or "isReceived" with data that comes from outside
	 * of the transaction or network data itself. This object can
	 * be used to store the data necessary for those actions.
	 */
	readonly #meta: Record<string, TransactionDataMeta> = {};

	readonly #types = {
		transfer: "isTransfer",
		secondSignature: "isSecondSignature",
		delegateRegistration: "isDelegateRegistration",
		vote: "isVote",
		unvote: "isUnvote",
		multiSignature: "isMultiSignature",
		ipfs: "isIpfs",
		multiPayment: "isMultiPayment",
		delegateResignation: "isDelegateResignation",
		htlcLock: "isHtlcLock",
		htlcClaim: "isHtlcClaim",
		htlcRefund: "isHtlcRefund",
		businessRegistration: "isBusinessRegistration",
		businessResignation: "isBusinessResignation",
		businessUpdate: "isBusinessUpdate",
		bridgechainRegistration: "isBridgechainRegistration",
		bridgechainResignation: "isBridgechainResignation",
		bridgechainUpdate: "isBridgechainUpdate",
		entityRegistration: "isEntityRegistration",
		entityResignation: "isEntityResignation",
		entityUpdate: "isEntityUpdate",
	};

	public constructor(protected readonly data: KeyValuePair) {}

	abstract id(): string;

	public type(): string {
		for (const [type, method] of Object.entries(this.#types)) {
			if (this[method]()) {
				return type;
			}
		}

		return "transfer";
	}

	abstract timestamp(): DateTime | undefined;

	abstract confirmations(): BigNumber;

	abstract sender(): string;

	abstract recipient(): string;

	abstract recipients(): MultiPaymentRecipient[];

	abstract amount(): BigNumber;

	abstract fee(): BigNumber;

	abstract memo(): string | undefined;

	abstract asset(): Record<string, unknown>;

	abstract isConfirmed(): boolean;

	abstract isSent(): boolean;

	abstract isReceived(): boolean;

	abstract isTransfer(): boolean;

	abstract isSecondSignature(): boolean;

	abstract isDelegateRegistration(): boolean;

	abstract isVote(): boolean;

	abstract isUnvote(): boolean;

	abstract isMultiSignature(): boolean;

	abstract isIpfs(): boolean;

	abstract isMultiPayment(): boolean;

	abstract isDelegateResignation(): boolean;

	abstract isHtlcLock(): boolean;

	abstract isHtlcClaim(): boolean;

	abstract isHtlcRefund(): boolean;

	abstract isBusinessRegistration(): boolean;

	abstract isBusinessResignation(): boolean;

	abstract isBusinessUpdate(): boolean;

	abstract isBridgechainRegistration(): boolean;

	abstract isBridgechainResignation(): boolean;

	abstract isBridgechainUpdate(): boolean;

	abstract isEntityRegistration(): boolean;

	abstract isEntityResignation(): boolean;

	abstract isEntityUpdate(): boolean;

	public toObject(): KeyValuePair {
		return {
			id: this.id(),
			type: this.type(),
			timestamp: this.timestamp(),
			confirmations: this.confirmations(),
			sender: this.sender(),
			recipient: this.recipient(),
			amount: this.amount(),
			fee: this.fee(),
			vendorField: this.memo(),
			asset: this.asset(),
		};
	}

	public raw(): KeyValuePair {
		return this.data;
	}

	public hasPassed(): boolean {
		return Boolean(this.data);
	}

	public hasFailed(): boolean {
		return !this.hasPassed();
	}

	public getMeta(key: string): TransactionDataMeta {
		return this.#meta[key];
	}

	public setMeta(key: string, value: TransactionDataMeta): void {
		this.#meta[key] = value;
	}

	protected censorMemo(memo?: string): string | undefined {
		if (memo) {
			const processor: Censor = new Censor();

			if (processor.isBad(memo)) {
				return undefined;
			}

			return processor.process(emoji.emojify(memo));
		}

		return memo;
	}
}
