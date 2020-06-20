export const manifest = {
	name: "LSK",
	networks: {
		mainnet: {
			id: "mainnet",
			name: "Mainnet",
			explorer: "https://explorer.lisk.io/",
			currency: {
				ticker: "LSK",
				symbol: "LSK",
			},
			crypto: {
				networkId: "ed14889723f24ecc54871d058d98ce91ff2f973192075c0155ba2b7b70ad2511",
				slip44: 134,
			},
			hosts: [
				"https://hub21.lisk.io",
				"https://hub22.lisk.io",
				"https://hub23.lisk.io",
				"https://hub24.lisk.io",
				"https://hub25.lisk.io",
				"https://hub26.lisk.io",
				"https://hub27.lisk.io",
				"https://hub28.lisk.io",
				"https://hub31.lisk.io",
				"https://hub32.lisk.io",
				"https://hub33.lisk.io",
				"https://hub34.lisk.io",
				"https://hub35.lisk.io",
				"https://hub36.lisk.io",
				"https://hub37.lisk.io",
				"https://hub38.lisk.io",
			],
			voting: {
				enabled: true,
				singular: false,
			},
		},
		testnet: {
			id: "testnet",
			name: "Testnet",
			explorer: "https://testnet-explorer.lisk.io/",
			currency: {
				ticker: "LSK",
				symbol: "LSK",
			},
			crypto: {
				networkId: "da3ed6a45429278bac2666961289ca17ad86595d33b31037615d4b8e8f158bba",
				slip44: 134,
			},
			hosts: ["https://testnet.lisk.io"],
			voting: {
				enabled: true,
				singular: false,
			},
		},
		betanet: {
			id: "betanet",
			name: "Betanet",
			explorer: "https://betanet-explorer.lisk.io/",
			currency: {
				ticker: "LSK",
				symbol: "LSK",
			},
			crypto: {
				networkId: "7158c297294a540bc9ac6e474529c3da38d03ece056e3fa2d98141e6ec54132d",
				slip44: 134,
			},
			hosts: ["https://betanet.lisk.io"],
			voting: {
				enabled: true,
				singular: false,
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
				mnemonic: true,
				multiSignature: false,
				publicKey: true,
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
	signingMethods: {
		mnemonic: true,
		privateKey: false,
		wif: false,
	},
};
