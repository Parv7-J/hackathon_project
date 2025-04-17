export const InsureChainConfig = {
  address: "0x6e0a2D53176b560c8DF83Da53657ADDD3b165F11",
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_fraudScoreThreshold",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "claimId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "enum InsureChain.ClaimStatus",
          name: "status",
          type: "uint8",
        },
      ],
      name: "ClaimStatusUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "claimId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "policyholder",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "requestedAmount",
          type: "uint256",
        },
      ],
      name: "ClaimSubmitted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "claimId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fraudScore",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "approvedAmount",
          type: "uint256",
        },
      ],
      name: "ClaimVerified",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newThreshold",
          type: "uint256",
        },
      ],
      name: "FraudScoreThresholdUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "claimId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "policyholder",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "PayoutExecuted",
      type: "event",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_claimId", type: "uint256" },
        { internalType: "bool", name: "_approved", type: "bool" },
        { internalType: "uint256", name: "_approvedAmount", type: "uint256" },
      ],
      name: "adminOverrideClaim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "claims",
      outputs: [
        { internalType: "uint256", name: "claimId", type: "uint256" },
        { internalType: "address", name: "policyholder", type: "address" },
        { internalType: "uint256", name: "requestedAmount", type: "uint256" },
        { internalType: "uint256", name: "approvedAmount", type: "uint256" },
        { internalType: "uint256", name: "fraudScore", type: "uint256" },
        {
          internalType: "enum InsureChain.ClaimStatus",
          name: "status",
          type: "uint8",
        },
        { internalType: "uint256", name: "timestamp", type: "uint256" },
        { internalType: "string", name: "ipfsDocumentHash", type: "string" },
        { internalType: "address", name: "verifier", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_claimId", type: "uint256" }],
      name: "executePayout",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "fraudScoreThreshold",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "fundContract",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_claimId", type: "uint256" }],
      name: "getClaimDetails",
      outputs: [
        { internalType: "address", name: "policyholder", type: "address" },
        { internalType: "uint256", name: "requestedAmount", type: "uint256" },
        { internalType: "uint256", name: "approvedAmount", type: "uint256" },
        { internalType: "uint256", name: "fraudScore", type: "uint256" },
        {
          internalType: "enum InsureChain.ClaimStatus",
          name: "status",
          type: "uint8",
        },
        { internalType: "uint256", name: "timestamp", type: "uint256" },
        { internalType: "string", name: "ipfsDocumentHash", type: "string" },
        { internalType: "address", name: "verifier", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getContractBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_policyholder", type: "address" },
      ],
      name: "getPolicyholderClaimIds",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "policyholderClaims",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_requestedAmount", type: "uint256" },
        { internalType: "string", name: "_ipfsDocumentHash", type: "string" },
      ],
      name: "submitClaim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalClaims",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_newThreshold", type: "uint256" },
      ],
      name: "updateFraudScoreThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_claimId", type: "uint256" },
        { internalType: "uint256", name: "_fraudScore", type: "uint256" },
        { internalType: "uint256", name: "_predictedAmount", type: "uint256" },
      ],
      name: "verifyClaim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
      name: "withdrawFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
