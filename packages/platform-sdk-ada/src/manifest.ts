export const manifest = {
	name: "Cardano",
	networks: {
		mainnet: {
			id: "mainnet",
			type: "live",
			name: "Mainnet",
			explorer: "https://explorer.cardano.org/",
			currency: {
				ticker: "ADA",
				symbol: "ADA",
			},
			crypto: {
				slip44: 1815,
			},
			hosts: [],
			hostsMultiSignature: [],
			voting: {
				enabled: false,
				singular: false,
			},
		},
		testnet: {
			id: "testnet",
			type: "test",
			name: "Testnet",
			explorer: "https://shelleyexplorer.cardano.org/",
			currency: {
				ticker: "ADA",
				symbol: "ADA",
			},
			crypto: {
				slip44: 1815,
			},
			hosts: [],
			hostsMultiSignature: [],
			voting: {
				enabled: false,
				singular: false,
			},
		},
	},
	abilities: {
		Client: {
			transaction: false,
			transactions: false,
			wallet: false,
			wallets: false,
			delegate: false,
			delegates: false,
			votes: false,
			voters: false,
			configuration: false,
			fees: false,
			syncing: false,
			broadcast: false,
		},
		Fee: {
			all: false,
		},
		Identity: {
			address: {
				mnemonic: false,
				multiSignature: false,
				publicKey: false,
				privateKey: false,
				wif: false,
			},
			publicKey: {
				mnemonic: false,
				multiSignature: false,
				wif: false,
			},
			privateKey: {
				mnemonic: false,
				wif: false,
			},
			wif: {
				mnemonic: false,
			},
			keyPair: {
				mnemonic: false,
				privateKey: false,
				wif: false,
			},
		},
		Ledger: {
			getVersion: false,
			getPublicKey: false,
			signTransaction: false,
			signMessage: false,
		},
		Link: {
			block: false,
			transaction: false,
			wallet: false,
		},
		Message: {
			sign: false,
			verify: false,
		},
		Peer: {
			search: false,
		},
		Transaction: {
			transfer: false,
			secondSignature: false,
			delegateRegistration: false,
			vote: false,
			multiSignature: false,
			ipfs: false,
			multiPayment: false,
			delegateResignation: false,
			htlcLock: false,
			htlcClaim: false,
			htlcRefund: false,
		},
	},
	signingMethods: {
		mnemonic: false,
		privateKey: false,
		wif: false,
	},
};
