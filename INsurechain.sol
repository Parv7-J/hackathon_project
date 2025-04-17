// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title InsureChainAI
 * @dev Smart contract for decentralized insurance claim processing
 */
contract InsureChain {
    address public owner;
    
    uint256 public fraudScoreThreshold;
    
    enum ClaimStatus { Pending, Approved, Denied, PaidOut }
    
    struct Claim {
        uint256 claimId;
        address policyholder;
        uint256 requestedAmount;
        uint256 approvedAmount;
        uint256 fraudScore;       
        ClaimStatus status;
        uint256 timestamp;
        string ipfsDocumentHash;  
        address verifier;         
    }
    
    mapping(uint256 => Claim) public claims;
    
    mapping(address => uint256[]) public policyholderClaims;
    
    uint256 public totalClaims;
    
    event ClaimSubmitted(uint256 indexed claimId, address indexed policyholder, uint256 requestedAmount);
    event ClaimVerified(uint256 indexed claimId, uint256 fraudScore, uint256 approvedAmount);
    event ClaimStatusUpdated(uint256 indexed claimId, ClaimStatus status);
    event PayoutExecuted(uint256 indexed claimId, address indexed policyholder, uint256 amount);
    event FraudScoreThresholdUpdated(uint256 newThreshold);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor(uint256 _fraudScoreThreshold) {
        require(_fraudScoreThreshold <= 100, "Threshold must be between 0 and 100");
        owner = msg.sender;
        fraudScoreThreshold = _fraudScoreThreshold;
    }
    
    /**
     * @dev Submit a new claim
     * @param _requestedAmount Amount requested for the claim
     * @param _ipfsDocumentHash IPFS hash of claim documents
     */
    function submitClaim(uint256 _requestedAmount, string memory _ipfsDocumentHash) external {
        require(_requestedAmount > 0, "Requested amount must be greater than 0");
        
        uint256 claimId = totalClaims;
        
        claims[claimId] = Claim({
            claimId: claimId,
            policyholder: msg.sender,
            requestedAmount: _requestedAmount,
            approvedAmount: 0,
            fraudScore: 0,
            status: ClaimStatus.Pending,
            timestamp: block.timestamp,
            ipfsDocumentHash: _ipfsDocumentHash,
            verifier: address(0)
        });
        
        policyholderClaims[msg.sender].push(claimId);
        totalClaims++;
        
        emit ClaimSubmitted(claimId, msg.sender, _requestedAmount);
    }
    
    /**
     * @dev Verify a claim (called by ML oracle or admin)
     * @param _claimId ID of the claim to verify
     * @param _fraudScore Fraud score determined by ML model
     * @param _predictedAmount Predicted legitimate claim amount by ML model
     */
    function verifyClaim(uint256 _claimId, uint256 _fraudScore, uint256 _predictedAmount) external {
        require(_claimId < totalClaims, "Claim does not exist");
        require(claims[_claimId].status == ClaimStatus.Pending, "Claim is not pending");
        
        Claim storage claim = claims[_claimId];
        claim.fraudScore = _fraudScore;
        claim.approvedAmount = _predictedAmount;
        claim.verifier = msg.sender;
        
        if (_fraudScore < fraudScoreThreshold) {
            claim.status = ClaimStatus.Approved;
        } else {
            claim.status = ClaimStatus.Denied;
        }
        
        emit ClaimVerified(_claimId, _fraudScore, _predictedAmount);
        emit ClaimStatusUpdated(_claimId, claim.status);
    }
    
    /**
     * @dev Admin override for claim verification
     * @param _claimId ID of the claim to override
     * @param _approved Whether to approve or deny the claim
     * @param _approvedAmount Amount to approve (if approved)
     */
    function adminOverrideClaim(uint256 _claimId, bool _approved, uint256 _approvedAmount) external onlyOwner {
        require(_claimId < totalClaims, "Claim does not exist");
        
        Claim storage claim = claims[_claimId];
        
        if (_approved) {
            claim.status = ClaimStatus.Approved;
            claim.approvedAmount = _approvedAmount;
        } else {
            claim.status = ClaimStatus.Denied;
        }
        
        emit ClaimStatusUpdated(_claimId, claim.status);
    }
    
    /**
     * @dev Execute payout for approved claim
     * @param _claimId ID of the claim to pay out
     */
    function executePayout(uint256 _claimId) external payable onlyOwner {
        require(_claimId < totalClaims, "Claim does not exist");
        Claim storage claim = claims[_claimId];
        
        require(claim.status == ClaimStatus.Approved, "Claim is not approved");
        require(address(this).balance >= claim.approvedAmount, "Insufficient contract balance");
        
        claim.status = ClaimStatus.PaidOut;
        
        payable(claim.policyholder).transfer(claim.approvedAmount);
        
        emit PayoutExecuted(_claimId, claim.policyholder, claim.approvedAmount);
        emit ClaimStatusUpdated(_claimId, claim.status);
    }
    
    /**
     * @dev Fund the contract to pay out claims
     */
    function fundContract() external payable {
    }
    
    /**
     * @dev Update fraud score threshold
     * @param _newThreshold New threshold value
     */
    function updateFraudScoreThreshold(uint256 _newThreshold) external onlyOwner {
        require(_newThreshold <= 100, "Threshold must be between 0 and 100");
        fraudScoreThreshold = _newThreshold;
        emit FraudScoreThresholdUpdated(_newThreshold);
    }
    
    /**
     * @dev Get claim details
     * @param _claimId ID of the claim
     */
    function getClaimDetails(uint256 _claimId) external view returns (
        address policyholder,
        uint256 requestedAmount,
        uint256 approvedAmount,
        uint256 fraudScore,
        ClaimStatus status,
        uint256 timestamp,
        string memory ipfsDocumentHash,
        address verifier
    ) {
        require(_claimId < totalClaims, "Claim does not exist");
        Claim storage claim = claims[_claimId];
        
        return (
            claim.policyholder,
            claim.requestedAmount,
            claim.approvedAmount,
            claim.fraudScore,
            claim.status,
            claim.timestamp,
            claim.ipfsDocumentHash,
            claim.verifier
        );
    }
    
    /**
     * @dev Get all claim IDs for a policyholder
     * @param _policyholder Address of the policyholder
     */
    function getPolicyholderClaimIds(address _policyholder) external view returns (uint256[] memory) {
        return policyholderClaims[_policyholder];
    }
    
    /**
     * @dev Get contract balance
     */
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    /**
     * @dev Transfer ownership of the contract
     * @param _newOwner Address of new owner
     */
    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "New owner cannot be zero address");
        owner = _newOwner;
    }
    
    /**
     * @dev Withdraw funds from contract (emergency function)
     * @param _amount Amount to withdraw
     */
    function withdrawFunds(uint256 _amount) external onlyOwner {
        require(_amount <= address(this).balance, "Insufficient contract balance");
        payable(owner).transfer(_amount);
    }
}