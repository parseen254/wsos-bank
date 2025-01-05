# Solana PDAs Bank Program

A Solana program built with Anchor framework for managing bank accounts using Program Derived Addresses (PDAs).

## Description

This program demonstrates the implementation of bank accounts using Solana's Program Derived Addresses (PDAs), built with the Anchor framework.

## Prerequisites

- [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools) v1.17.0 or later
- [Anchor Framework](https://www.anchor-lang.com/docs/installation) v0.29.0
- [Node.js](https://nodejs.org/) v16 or later
- [Rust](https://rustup.rs/) v1.69.0 or later
- [Yarn](https://yarnpkg.com/)

## Project Structure

```plaintext
├── programs/              # Solana program source code
│   └── solanapdas/       # Main program directory
├── tests/                # Test files
├── migrations/           # Deployment scripts
├── Anchor.toml          # Anchor configuration
└── package.json         # Node.js dependencies
```

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd wsos-bank
```

2. Install dependencies
```bash
yarn install
```

## Development Commands

Build the program:
```bash
anchor build
```

Run tests:
```bash
anchor test
```

Deploy to devnet:
```bash
solana config set --url devnet
anchor deploy
```

Create a bank account:
```bash
anchor run create-account
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.