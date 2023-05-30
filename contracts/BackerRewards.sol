//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 < 0.9.0;

import "./ProjectDetails.sol";

contract BackerRewards {
    ProjectDetails public projectDetails;

    mapping(uint256 => mapping(address => RewardChoice)) public rewardChoices;

    struct RewardChoice {
        bool choseRewards;
        bool choseShares;
    }

    constructor(address _projectDetailsAddress) {
        projectDetails = ProjectDetails(_projectDetailsAddress);
    }

    function chooseRewards(uint256 _projectId) public {
        // require(projectDetails.getProjectOwner(_projectId) != address(0), "Invalid project ID");
        rewardChoices[_projectId][msg.sender].choseRewards = true;
        rewardChoices[_projectId][msg.sender].choseShares = false;
    }

    function chooseShares(uint256 _projectId) public {
        // require(projectDetails.getProjectOwner(_projectId) != address(0), "Invalid project ID");
        rewardChoices[_projectId][msg.sender].choseRewards = false;
        rewardChoices[_projectId][msg.sender].choseShares = true;
    }

    function getRewardChoice(uint256 _projectId, address _backer) public view returns (bool choseRewards, bool choseShares) {
        RewardChoice memory choice = rewardChoices[_projectId][_backer];
        return (choice.choseRewards, choice.choseShares);
    }
}
