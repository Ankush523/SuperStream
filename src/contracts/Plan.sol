//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Payment {
    uint256 public nextPlanId;
    struct Plan {
        address merchant;
        uint256 amount;
        uint256 frequency;
    }

    mapping(uint256 => Plan) public plans;

    event PlanCreated(address merchant, uint256 planId, uint256 date);

    function createPlan(uint256 amount, uint256 frequency) external {
        require(amount > 0, "amount needs to be > 0");
        require(frequency > 0, "frequency needs to be > 0");
        plans[nextPlanId] = Plan(msg.sender, amount, frequency);
        nextPlanId++;
    }

    function receivePid() external view returns (uint256) {
        return (nextPlanId - 1);
    }

    function planList(uint256 planId) public view returns (Plan memory) {
        return plans[planId];
    }
}
