import React from "react";

const tokensyouwant = [
  "../Cards/greenPeaCard.png",
  "../Cards/carrotCard.png",
  "../Cards/tomatoCard.png",
  "../Cards/lemonCard.png",
  "../Cards/brinjalCard.png",
  "../Cards/ruleCard.png",
];
const tokensyouown = [
  "../Cards/greenPeaCard.png",
  "../Cards/carrotCard.png",
  "../Cards/tomatoCard.png",
  "../Cards/lemonCard.png",
  "../Cards/brinjalCard.png",
  "../Cards/ruleCard.png",
];

const theirCards = [
  "../Cards/lemonCard.png",
  "../Cards/lemonCard.png",
  "../Cards/greenPeaCard.png",
];

const yourCards = [
  "../Cards/greenPeaCard.png",
  "../Cards/carrotCard.png",
  "../Cards/carrotCard.png",
  "../Cards/tomatoCard.png",
  "../Cards/ruleCard.png",
];

function makeAdeal() {
  return (
    <div>
      <section className="h-screen w-screen tablenomat">
        <h1 className="time_scratchRight">
          120:00 <span className="text-[30px]">MINS</span>
        </h1>

        {/* tokensyouwant */}
        <div className="flex w-[50vw] items-center justify-evenly py-4 px-2">
          <p className="text-white">Tokens you want:</p>
          {tokensyouwant.map((item, i) => {
            return (<div>
            <img src={item} alt="card" className="w-[5vw]" />
            <p className="bg-black text-white rounded-full px-[0.4rem] font-bold relative -top-28 -right-2 float-right">+</p>
            </div>);
          })}
        </div>

          {/* theirCards */}
        <div
          className="w-[60vw] flex items-center py-4 mx-10 h-[130px] rounded-[18px] "
          style={{
            background: "rgba(255, 255, 255, 0.25)",
          }}
        >
          <p
            className="text-white rotate-180 h-[130px] text-center rounded-r-[18px] px-2 bg-black text-[18px] font-[600]"
            style={{ writingMode: "vertical-lr" }}
          >
            their cards
          </p>

          <div className="flex justify-center w-full">
            {theirCards.map((item, i) => {
              return (<div>
                  <img src={item} alt="card" className="w-[4.5vw] mx-2 pt-6" />
                  <p className="bg-black text-white rounded-full px-[0.5rem] -py-[0.1rem] font-bold relative -top-24 -right-0 float-right">-</p>
                  </div>
                  );
            })}
          </div>
        </div>

            {/* yourCards */}
        <div
          className="w-[60vw] flex items-center py-4 my-5 mx-10 h-[130px] rounded-[18px] "
          style={{
            background: "rgba(255, 255, 255, 0.25)",
          }}
        >
          <p
            className="text-white rotate-180 h-[130px] text-center rounded-r-[18px] px-2 bg-black text-[18px] font-[600]"
            style={{ writingMode: "vertical-lr" }}
          >
            your cards
          </p>

          <div className="flex justify-center w-full">
            {yourCards.map((item, i) => {
              return(<div>
                <img src={item} alt="card" className="w-[4.5vw] mx-2 pt-6" />
                <p className="bg-black text-white rounded-full px-[0.5rem] -py-[0.1rem] font-bold relative -top-24 -right-0 float-right">-</p>
              </div>);
            })}
          </div>
        </div>

            {/* tokensyouown */}
        <div className="flex w-[50vw] items-center justify-evenly py-4 px-2">
          <p className="text-white">Tokens you own:</p>
          {tokensyouown.map((item, i) => {
            return (<>
            <div >
            <img src={item} alt="card" className="w-[5vw] mx-2" />
            <span className="bg-black text-white rounded-full px-[0.5rem] font-bold relative -top-28 -right-1 float-right">+</span>
            <p className="text-center text-white mx-4 font-[500]">2</p>
            </div>
            </>);

          })}
        </div>

        <div className="bg_phoneDown scale-[0.9]">
        <div className="bg-[#EBEBEB] h-[64.6vh] w-[27.8%] left-[16.8vw] top-[7.8vh] absolute border-t-[15px] border-t-[#FF7800]">
        <p className="font-bold my-4 mx-2 text-[16px]">Type a catchy Heading</p>
        <textarea name="textarea" cols="24" rows="3" placeholder="Very value cards." className="rounded-[4px] mx-2 p-2 focus:outline-none bg-[#C4C4C4] text-black" style={{resize:'none'}}></textarea>
        <p className="font-bold my-4 mx-2 text-[16px]">wants 3 cards for 5 cards</p>
        <button className="loginButton relative bg-[#FF7800] px-10 mx-12">
              Send
        </button>

        </div>

        </div>

        <button className="loginButton relative float-right -top-16 -left-40 bg-[#FF7800] px-8">
              make Deal
        </button>

      </section>
    </div>
  );
}

export default makeAdeal;
