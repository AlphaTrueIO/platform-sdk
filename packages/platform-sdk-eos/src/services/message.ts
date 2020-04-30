import { Contracts } from "@arkecosystem/platform-sdk";
import ecc from "eosjs-ecc";

export class MessageService implements Contracts.MessageService {
	public async sign(input): Promise<Contracts.SignedMessage> {
		return {
			message: input.message,
			publicKey: ecc.privateToPublic(input.passphrase),
			signature: ecc.sign(input.message, input.passphrase),
		};
	}

	public async verify(input): Promise<boolean> {
		return ecc.verify(input.signature, input.message, input.publicKey);
	}
}
