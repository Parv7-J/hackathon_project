# INsureChain: AI-Powered Blockchain Insurance Claim System

![WhatsApp Image 2025-04-17 at 16 49 04_448c68ac](https://github.com/user-attachments/assets/0e0ed7b2-3cf0-4b34-9d5f-c21e48fbe012)


## Overview

INsureChain revolutionizes vehicle insurance claims by combining advanced machine learning and blockchain technology to create a transparent, efficient, and fraud-resistant claim processing system. Our platform automatically assesses claims through document and image analysis, predicts fraud in real-time, and uses smart contracts to autonomously approve or reject claims based on transparent, verifiable logic.

## Problem Statement

Traditional vehicle insurance claim processes are manual, time-consuming, and susceptible to fraud. Insurance companies often rely on middlemen, lengthy verifications, and paperwork, which leads to:

- Delays in claim processing and settlements
- Increased operational costs
- Customer dissatisfaction
- Lack of transparency in claim validation
- Vulnerability to fraudulent claims

This affects:
- **Insurance companies**: Heavy losses due to fraud and high verification costs
- **Policyholders**: Delayed or unfair claim outcomes
- **Regulators**: Difficulty enforcing transparency and accountability

According to industry data:
- 15-20% of insurance claims are fraudulent, costing companies billions annually
- Middlemen take up to 25-50% in hidden commissions, increasing premiums
- Delayed payouts undermine trust in the insurance system and affect customer retention

## Our Mission

To revolutionize vehicle insurance claims by combining machine learning and blockchain to:

- Automatically assess claims through document and image analysis
- Predict fraud in real time with ML models
- Use smart contracts to autonomously process claims based on transparent logic
- Provide an immutable, audit-friendly history of each claim on blockchain
- Empower users through a simple, decentralized interface for faster, fairer claim processing

## 🛠️ Tech Stack

### Frontend
- **Next.js/TailwindCSS**: React-based frontend with responsive design
- **Clerk**: Authentication and user management
- **MetaMask**: Wallet connectivity for blockchain interaction

### Backend
- **Express API**: RESTful API service
- **Supabase**: Database client for off-chain data management
- **Wagmi**: Contract interaction relay

### Storage
- **IPFS**: Decentralized storage for claim images and documents
- **PostgreSQL**: Persistent storage for structured data

### AI Services
- **Scikit-learn/XGBoost**: ML models for payout prediction and fraud scoring
- **Pandas**: Data processing and feature engineering
- **OpenCV/OCR**: Image analysis and document verification

### Blockchain
- **Ethereum.js**: Blockchain interaction library
- **Claim Contract**: Smart contract for automated claim processing
- **Hardhat/Truffle**: Smart contract development and testing

## ⚙️ System Architecture

Our architecture consists of four main modules:

1. **User Interface Layer**
   - Secure login via Clerk
   - Wallet connection through MetaMask
   - Claim submission and tracking

2. **Backend API**
   - Claim data processing
   - Smart contract interaction
   - AI model integration

3. **AI Services**
   - Fraud detection models
   - Document verification
   - Damage assessment

4. **Blockchain Module**
   - Smart contract execution
   - Transaction recording
   - Immutable claim history

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MetaMask browser extension
- Local Ethereum development environment (optional for full testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/insurechain.git
cd insurechain

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Testing

```bash
# Run unit tests
npm test
# or
yarn test

# Run end-to-end tests
npm run test:e2e
# or
yarn test:e2e
```

## Features

- **Decentralized Identity Management**: Secure user authentication and wallet connection
- **Automated Claim Assessment**: ML-powered analysis of claim documents and images
- **Fraud Detection**: Real-time scoring system to identify suspicious claims
- **Smart Contract Execution**: Automated approval and payout for verified claims
- **Blockchain Verification**: Immutable record of all claim transactions
- **User Dashboard**: Track claim status and history in real-time

## API Documentation

API endpoints are available at `/api`. Key endpoints include:

- `POST /api/claims/new`: Submit a new claim
- `GET /api/claims/:id`: Retrieve claim details
- `GET /api/claims/user/:userId`: Get all claims for a user
- `POST /api/verification/documents`: Submit documents for verification

For full API documentation, see our [API docs](https://your-repo-url.com/api-docs).

## Security Features

- End-to-end encryption for sensitive data
- Multi-factor authentication
- Blockchain-based audit trail
- ML-powered fraud detection

## Contributing

We welcome contributions to INsureChain! Please see [CONTRIBUTING.md](https://your-repo-url.com/contributing.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Ethereum Foundation](https://ethereum.org)
- [OpenAI](https://openai.com) for research in ML for fraud detection
- [IPFS](https://ipfs.io) for decentralized storage solutions
