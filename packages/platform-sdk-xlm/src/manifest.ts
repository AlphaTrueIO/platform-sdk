export const manifest = {
	name: "XLM",
	networks: {
		mainnet: {
			id: "mainnet",
			type: "live",
			name: "Mainnet",
			explorer: "https://steexp.com/",
			currency: {
				ticker: "XLM",
				symbol: "XLM",
			},
			crypto: {
				slip44: 148,
			},
			hosts: ["https://horizon.stellar.org"],
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
			explorer: "https://testnet.steexp.com/",
			currency: {
				ticker: "XLM",
				symbol: "XLM",
			},
			crypto: {
				slip44: 148,
			},
			hosts: ["https://horizon-testnet.stellar.org"],
			hostsMultiSignature: [],
			voting: {
				enabled: false,
				singular: false,
			},
		},
	},
	abilities: {
		Client: {
			transaction: true,
			transactions: true,
			wallet: true,
			wallets: false,
			delegate: false,
			delegates: false,
			votes: false,
			voters: false,
			configuration: false,
			fees: false,
			syncing: false,
			broadcast: true,
		},
		Fee: {
			all: false,
		},
		Identity: {
			address: {
				mnemonic: true,
				multiSignature: false,
				publicKey: false,
				privateKey: false,
				wif: false,
			},
			publicKey: {
				mnemonic: true,
				multiSignature: false,
				wif: false,
			},
			privateKey: {
				mnemonic: true,
				wif: false,
			},
			wif: {
				mnemonic: false,
			},
			keyPair: {
				mnemonic: true,
				privateKey: true,
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
			block: true,
			transaction: true,
			wallet: true,
		},
		Message: {
			sign: true,
			verify: true,
		},
		Peer: {
			search: false,
		},
		Transaction: {
			transfer: true,
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
		mnemonic: true,
		privateKey: false,
		wif: false,
	},
};
