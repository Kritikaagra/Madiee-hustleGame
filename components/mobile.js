import React, { useState } from "react";
import cards from "./cards.json";
import PopUp from "./popUp";
import PhoneCard from "./phoneCard";
import vendors from "./vendors.json";

var readyToGiveCardsArray = ['../Cards/carrotCard.png', '../Cards/greenPeaCard.png'];
var wantedCardsArray = ['../Cards/lemonCard.png', '../Cards/lemonCard.png', '../Cards/lemonCard.png'];

function mobile() {
  let [buttonPopUp, setButtonPopUp] = useState(false);

  const togglePopup = () => {
    setButtonPopUp(!buttonPopUp);
    if (!buttonPopUp) {
      document.getElementById("token_extra").style.display = "none";
    } else {
      document.getElementById("token_extra").style.display = "block";
    }
  };

  return (
    <div className="bg-godown">
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      >
        <button className="relative my-8 mx-8 bg-[#FF7800] w-48 h-12 loginButton cursor-pointer">
          Back
        </button>

        <span className="scratch_title">
          <h1 className="w-80">MOBILE</h1>
        </span>
        <div
          id="token_extra"
          className="absolute scratch_pumpkin text-center  top-2 right-5"
        >
          <img src="../Icons/pumpkin.png" />
          <h1 className="text-white cursor-pointer">Extras</h1>
        </div>

        <div className="absolute flex flex-col w-[55vw] mx-8 my-10">
          <div className="text-white text-[22px]">
            NOTE : <br /> Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </div>

          <div className="flex vegeCardDiv mt-60">
            {cards.map((card, i) => (
              <div
                className="flex -mx-6 flex-col scale-[0.6] place-content-evenly items-center"
                key={i}
              >
                <div
                  className="vegeCard w-[175px] h-[260px] flex"
                  style={{ backgroundImage: `url(${card.cardSrc}) ` }}
                >
                  <button
                    className="font-bold text-[24px] px-6 cursor-pointer"
                    onClick={() => togglePopup()}
                  >
                    {card.cardText}
                  </button>
                </div>
                <div className="text-white w-20 my-6 py-2 font-bold cardNo text-center rounded-lg text-[26px]">
                  {card.cardCount}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -left-8 -top-36">
            {buttonPopUp && <PopUp handleClose={() => togglePopup()}> </PopUp>}
          </div>

          <div className="bg_phone scale-[1]">
            <div className="bg-[#EBEBEB] h-[64.6vh] w-[27.8%] left-[16.8vw] top-[7.8vh] absolute border-t-[15px] border-[#FF7800] overflow-y-scroll">
              <div className="flex place-content-evenly mb-1">
                <button
                  className=" text-[16px] font-bold w-full py-2"
                  onClick={received}
                  id="received"
                >
                  Received(2)
                </button>
                <button
                  className=" text-[16px] font-bold bg-[#C4C4C4] w-full py-2"
                  onClick={sent}
                  id="sent"
                >
                  Sent
                </button>
              </div>
              <div className="flex flex-col w-full h-full items-center">
                {vendors.map((data, i) => {
                  if (i == 0) {
                    return(
                    <PhoneCard
                      key={i}
                      img={data.img}
                      from="abu"
                      heading="High value cards for low price"
                      deal="wants 3 cards for 2 cards "
                      readyToGiveCards={readyToGiveCardsArray}
                      wantedCards={wantedCardsArray}
                    />);
                  } else {
                    return(
                    <PhoneCard
                      key={i}
                      img={data.img}
                      from="abu"
                      heading="High value cards for low price"
                      deal="wants 3 cards for 2 cards "
                      readyToGiveCards={readyToGiveCardsArray}
                      wantedCards={wantedCardsArray}
                      newStyle="none"
                    />);
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default mobile;

function received() {
  document.getElementById("received").style.background = "#EBEBEB";
  document.getElementById("sent").style.background = "#C4C4C4";
}

function sent() {
  document.getElementById("sent").style.background = "#EBEBEB";
  document.getElementById("received").style.background = "#C4C4C4";
}
