import React from "react";
import "../Style/startpage.css"
const StartPage = () => {
  return (
    <div class="p-3 mb-2 bg-dark text-white">

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
