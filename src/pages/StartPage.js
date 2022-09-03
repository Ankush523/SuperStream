import React from "react";

const StartPage = () => {
  return (
    <div className="bg-[#151019] h-[100vh] w-[100vw] p-[220px]">

        <label className="text-white text-[40px] font-montserrat">How would you like to Continue as </label>
      <div className="flex flex-row justify-around pt-[20px]">
        <a href="/planlist">
          <button className="text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:bg-pink-500 p-[8px] bg-purple-700 text-white">
            User
          </button>
        </a>
        <a href="/plancreate">
          <button className="text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:bg-pink-500 p-[8px] bg-purple-700 text-white">
            Merchant
          </button>
        </a>
      </div>
    </div>
  );
};

export default StartPage;
