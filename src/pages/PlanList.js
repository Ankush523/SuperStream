import React, { useState } from "react";
import GetContract from "../hooks/GetContract";

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
      <br />
      <br />
      <button className="getlist" onClick={getList}>Get List of Plans</button>
      <br />
      <div>
        <div>
          <label>Plan List</label>
        </div>
        <div>
          {Object.keys(planList).map((list, index) => (
            <div>
              <div>
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
