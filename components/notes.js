import React, { useState } from "react";
import cards from "./cards.json";
import PopUp from "./popUp";

function notes() {
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
          <h1 className="w-80">NOTES</h1>
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

          <div className="bg_handNotes scale-[1]">
            <div className="h-[70vh] w-[30%] left-[15.2vw] top-[7.8vh] absolute text-center font-[Montserrat]">
              <h3 className="font-bold text-[1.2rem]">Take notes</h3>
              <h3 className="font-[600] mt-1">(enter your predicted values)</h3>
              <div className="flex flex-col w-full">

                <div className="flex border-b-2 border-[#C2C2C2] mx-6 mt-3 mb-1 pb-1">
                  <p className="w-[100%] flex justify-start font-[600]">Tomato =</p>
                  <div className="flex justify-end">
                    <p className="text-[grey]">Rs.</p>
                    <input type="text" className="w-[50%] rounded-[3px] ml-2 px-1 focus:outline-none" />
                  </div>
                </div>
                <div className="flex border-b-2 border-[#C2C2C2] mx-6 mb-1 pb-1">
                  <p className="w-[100%] flex justify-start font-[600]">Brinjal =</p>
                  <div className="flex justify-end">
                    <p className="text-[grey]">Rs.</p>
                    <input type="text" className="w-[50%] rounded-[3px] ml-2 px-1 focus:outline-none" />
                  </div>
                </div>
                <div className="flex border-b-2 border-[#C2C2C2] mx-6 mb-1 pb-1">
                  <p className="w-[100%] flex justify-start font-[600]">Lemon =</p>
                  <div className="flex justify-end">
                    <p className="text-[grey]">Rs.</p>
                    <input type="text" className="w-[50%] rounded-[3px] ml-2 px-1 focus:outline-none" />
                  </div>
                </div>
                <div className="flex border-b-2 border-[#C2C2C2] mx-6 mb-1 pb-1">
                  <p className="w-[100%] flex justify-start font-[600]">Carrot =</p>
                  <div className="flex justify-end">
                    <p className="text-[grey]">Rs.</p>
                    <input type="text" className="w-[50%] rounded-[3px] ml-2 px-1 focus:outline-none" />
                  </div>
                </div>
                <div className="flex border-b-2 border-[#C2C2C2] mx-6 mb-1 pb-1">
                  <p className="w-[100%] flex justify-start font-[600]">Green pea =</p>
                  <div className="flex justify-end">
                    <p className="text-[grey]">Rs.</p>
                    <input type="text" className="w-[50%] rounded-[3px] ml-2 px-1 focus:outline-none" />
                  </div>
                </div>

                <textarea name="textarea" id="notesText" cols="20" rows="6" placeholder="Click here & make random notes" className="rounded-[16px] m-5 p-2 focus:outline-none" style={{resize:'none'}}></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default notes;
