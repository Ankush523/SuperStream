import React from "react";
import "../Style/home.css"
const Home = () => {
  return (
    <div className="maindiv">
      {/* <img src={Bg} className="w-[100vw] h-[100vh]" /> */}
      <div>
        <label>Stream your Recurring Payments</label>
        <div>
          <a href="/startpage">
            <button>Let's Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
