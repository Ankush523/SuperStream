import React, { useState } from "react";
import GetContract from "../hooks/GetContract";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const PlanCreate = () => {
  const [amount, setAmount] = useState(null);
  const [freq, setFreq] = useState(null);

  const contract = GetContract();

  console.log(contract)
  
  const planDetails = async() => {
    await contract.createPlan(amount,freq);
  }

  return(
    <div>
    <div >
        <h1>WELCOME TO PLAN CREATION PORTAL</h1>
    </div>
    <ConnectButton/>
    <div >
        <div >
            <div >
                <label >Enter Plan Details</label>
                <div >
                    <label >Amount : </label>
                    <input  required type="number" name="amount" onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div >
                    <label >Time Interval : </label>
                    <input required type="number" name="frequency" onChange={(e) => setFreq(e.target.value)}/>
                </div>
                <div >
                    <button onClick={()=>planDetails()}>Create Plan</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default PlanCreate;
