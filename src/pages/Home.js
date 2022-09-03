import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
const Home = () => {
  return (
    <div >
      {/* <img src={Bg} className="w-[100vw] h-[100vh]" /> */}
      <div >
        <label >
          Stream your Recurring Payments
        </label>
        <div >
          <a href="/startpage"><button>Let's Get Started</button></a>
          <ConnectButton/>
        </div>
      </div>
    </div>
  );
};

export default Home;