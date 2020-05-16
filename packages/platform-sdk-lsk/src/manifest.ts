export const manifest = {
	name: "Lisk",
	networks: {
		mainnet: {
			explorer: "https://explorer.lisk.io/",
			currency: {
				ticker: "LSK",
				symbol: "LSK",
			},
			crypto: {
				slip44: 134,
			},
		},
		testnet: {
			explorer: "https://testnet-explorer.lisk.io/",
			currency: {
				ticker: "LSK",
				symbol: "LSK",
			},
			crypto: {
				slip44: 134,
			},
		},
		betanet: {
			explorer: "https://betanet-explorer.lisk.io/",
			currency: {
				ticker: "LSK",
				symbol: "LSK",
			},
			crypto: {
				slip44: 134,
			},
		},
	},
	abilities: {
		Client: {
			transaction: true,
			transactions: true,
			wallet: true,
			wallets: true,
			delegate: true,
			delegates: true,
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
				passphrase: true,
				multiSignature: false,
				publicKey: true,
				privateKey: false,
				wif: false,
			},
			publicKey: {
				passphrase: true,
				multiSignature: false,
				wif: false,
			},
			privateKey: {
				passphrase: true,
				wif: false,
			},
			wif: {
				passphrase: false,
			},
			keyPair: {
				passphrase: true,
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
			searchWithPlugin: false,
			searchWithoutEstimates: false,
		},
		Transaction: {
			transfer: true,
			secondSignature: true,
			delegateRegistration: true,
			vote: true,
			multiSignature: true,
			ipfs: false,
			multiPayment: false,
			delegateResignation: false,
			htlcLock: false,
			htlcClaim: false,
			htlcRefund: false,
		},
	},
};
