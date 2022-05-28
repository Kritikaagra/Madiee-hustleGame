import React from "react";

function leaderboardCard({ img, username, brinjal, carrot, peas, tamato, lemon, money, badge }) {
  return (
    <div>
      <div className="bg-white w-full h-[50px] rounded-[7px] flex items-center justify-between mb-[15px]">
      <div className="flex items-center">
      {badge <=3 ? <img src={`Badge/${badge}Badge.png`} alt="Badge" className="h-10 w-16 ml-2" /> : <div className="h-10 w-16 ml-2 font-bold text-center leading-[2.5rem]">{badge}.</div> }
        
        <img
          src={`Avatar/vendor${img}.png`}
          alt="Vendor icon"
          className="h-14 w-14 mr-2"
        />
        <svg
          width="3"
          height="37"
          viewBox="0 0 3 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85767 1.73633V35.1797"
            stroke="#DEDEDE"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <div className="font-bold pl-4 text-[1.2rem]">{username}</div>
        </div>
      <div className="flex items-center">
        <img
          src={`VegeIcon/brinjal.png`}
          alt="Vendor icon"
          className="h-10 w-10 ml-5 mr-1"
        />
        <div className="font-bold mr-5 ml-1"> X {brinjal}</div>
        <svg
          width="3"
          height="37"
          viewBox="0 0 3 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85767 1.73633V35.1797"
            stroke="#DEDEDE"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <img
          src={`VegeIcon/carrot.png`}
          alt="Vendor icon"
          className="h-10 w-10 ml-5 mr-1"
        />
        <div className="font-bold mr-5 ml-1"> X {carrot}</div>
        <svg
          width="3"
          height="37"
          viewBox="0 0 3 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85767 1.73633V35.1797"
            stroke="#DEDEDE"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <img
          src={`VegeIcon/peas.png`}
          alt="Vendor icon"
          className="h-10 w-10 ml-5 mr-1"
        />
        <div className="font-bold mr-5 ml-1"> X {peas}</div>
        <svg
          width="3"
          height="37"
          viewBox="0 0 3 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85767 1.73633V35.1797"
            stroke="#DEDEDE"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <img
          src={`VegeIcon/tamato.png`}
          alt="Vendor icon"
          className="h-10 w-10 ml-5 mr-1"
        />
        <div className="font-bold mr-5 ml-1"> X {tamato}</div>
        <svg
          width="3"
          height="37"
          viewBox="0 0 3 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85767 1.73633V35.1797"
            stroke="#DEDEDE"
            stroke-opacity="0.6"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <img
          src={`VegeIcon/lemon.png`}
          alt="Vendor icon"
          className="h-10 w-10 ml-5 mr-1"
        />
        <div className="font-bold mr-5 ml-1"> X {lemon}</div>
        <div className="bg-[#FF7800] text-white font-[600] h-full leading-[50px] rounded-l-[50px] rounded-[7px] px-10 ml-10">Money = {money}</div></div>
      </div>
    </div>
  );
}

export default leaderboardCard;
