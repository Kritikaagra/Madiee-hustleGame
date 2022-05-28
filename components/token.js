import React, { useState } from "react";
import PopUp from "./popUp";
import cards from './cards.json'

function token() {
  let [buttonPopUp, setButtonPopUp] = useState(false);

  const togglePopup = () => {
    setButtonPopUp(!buttonPopUp);
    if (!buttonPopUp) {
      document.getElementById("token_time").style.display = "none";
      document.getElementById("token_extra").style.display = "none";
      document.getElementById("token_text").style.opacity = "0.5";
      document.getElementById("token_startHustle").style.opacity = "0.4";
    } else {
      document.getElementById("token_time").style.display = "block";
      document.getElementById("token_extra").style.display = "block";
      document.getElementById("token_text").style.opacity = "1";
      document.getElementById("token_startHustle").style.opacity = "1";
    }
  };

  return (
    <div>
      <section className=" h-screen w-screen rulebg-img" id="yo">
        <h1 className="time_scratch" id="token_time">
          120:00 <span>MINS</span>
        </h1>
        <span className="scratch_title">
          <h1>YOUR TOKENS</h1>
        </span>
        <div className="flex place-content-evenly w-screen vegeCardDiv mt-6">
          {cards.map((card, i) => (
            <div
              className="flex flex-col place-content-evenly items-center"
              key={i}
            >
              <div
                className="vegeCard w-[175px] h-[260px] flex place-items-center"
                style={{ backgroundImage: `url(${card.cardSrc}) ` }}
              >
                <button
                  className="font-bold text-[24px] px-6 cursor-pointer"
                  onClick={() => togglePopup()}
                >
                  {card.cardText}
                </button>
              </div>
              <div className="text-white w-14 my-6 py-1 cardNo text-center rounded-lg text-[20px]">
                {card.cardCount}
              </div>
            </div>
          ))}
        </div>

        {buttonPopUp && <PopUp handleClose={() => togglePopup()}> </PopUp>}

        <div className="relative top-[85%] flex place-content-between mx-12">
          <div className="relative text-[24px] text-white " id="token_text">
            take them and haggle to make a valueable set
          </div>
          <button
            className="relative bg-[#FF7800] w-64 h-12 loginButton"
            id="token_startHustle"
          >
            Start hustling
          </button>
        </div>
        <div
          className="absolute scratch_pumpkin text-center  top-2 right-5"
          id="token_extra"
        >
          <img src="../Icons/pumpkin.png" />
          <h1 className="text-white ">Extras</h1>
        </div>
      </section>
    </div>
  );
}

export default token;
