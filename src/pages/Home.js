import React from "react";
import "../Styles/home.css"
const Home = () => {
  return (
    <div className="maindiv">
      {/* <img src={Bg} className="w-[100vw] h-[100vh]" /> */}
      <div >
        <label className="heading">Stream your Recurring Payments</label>
        <div>
          
        </div>
      </div>


      <div className="">

        <label className="heading">How would you like to Continue as </label>
      <div className="flex-container">
        <a href="/planlist">
          <button className="button1">
            User
          </button>
        </a>
        <a href="/plancreate">
          <button className="button1">
            Merchant
          </button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Home;
