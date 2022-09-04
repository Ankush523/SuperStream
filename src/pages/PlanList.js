import React, { useState } from "react";
import GetContract from "../hooks/GetContract";
import "../Styles/planList.css"
const PlanList = () => {
  const [planList, setPlanList] = useState([]);
  const contract = GetContract();

  const getList = async () => {
    var len = await contract.receivePid();
    var parseList = len.toString();

    // console.log(parseList)

    setPlanList([]);

    for (let i = 1; i <= parseList; i++) {
      var list = await contract.planList(i);
      setPlanList((planList) => [...planList, list]);
    }
  };
  return (
    <div>
        <div className="header3">
        <h1>WELCOME TO PLANS PORTAL</h1>
        </div>
      <button className="getlist" onClick={getList}>Get List of Plans</button>
      <br />
      <br/>
      <div className="list">
        
        <br/>
        <div className="list-head">
        <label>Amount</label>
        <label>Time Period</label>
        <label>Subscribe</label>
        </div>
        <br/>
        <br/>
        <div className="items">
          {Object.keys(planList).map((list, index) => (
            <div>
              <div className="items1">
                <label>{(planList[index].amount).toString()} </label>

                <label>{(planList[index].frequency).toString()}</label>
                <a href='createflow'><button>Subscribe</button></a>
              </div>
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanList;
