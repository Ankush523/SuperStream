import React, { useState } from "react";
import GetContract from "../hooks/GetContract";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../Styles/createPlan.css"
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
        <ConnectButton/>
    <div className="header1">
        <h1>WELCOME TO PLAN CREATION PORTAL</h1>
    </div>
    
    <div >
        <div >
            <div >
                <label className="header2">Enter Plan Details</label>
                <br/>
                <br/>
                <div >
                    <label className="amount-label">Amount : </label>
                    <input className="input" required type="number" name="amount" onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <br/>
                <div >
                    <label className="time-label">Time Interval : </label>
                    <input className="input" required type="number" name="frequency" onChange={(e) => setFreq(e.target.value)}/>
                </div>
                <br/>
                <div >
                    <button className="button" onClick={()=>planDetails()}>Create Plan</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default PlanCreate;
