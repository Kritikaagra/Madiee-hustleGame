import React, { useState } from "react";

function phoneCard({
  img,
  from,
  heading,
  deal,
  newStyle,
  readyToGiveCards,
  wantedCards,
}) {
  var [gototable, setGototable] = useState(true);

  function phnDelete(e) {
    e.target.nextSibling.classList.remove("phn_button_active");
    e.target.classList.add("phn_button_active");
    e.target.nextSibling.classList.add("text-[#FF7800]");
    e.target.nextSibling.innerText = "View";
    setGototable(true);
  }
  function phnView(e) {
    e.target.previousSibling.classList.remove("phn_button_active");
    e.target.classList.remove("text-[#FF7800]");

    if (e.target.classList[0] == "phn_button_active") {
      setGototable(false);
      e.target.innerText = "Go to table";
    }
    e.target.classList.add("phn_button_active");
  }

  return (
    <>
      <div className="bg-white h-full w-[92%] mx-4 my-2 rounded-[6px] rounded-tl-[20px]">
        <div className="flex place-items-start items-center mb-2">
          <img
            src={`Avatar/vendor${img}.png`}
            alt="Vendor icon"
            className="h-14 w-14 -my-3"
          />
          <span className="text-[#888888] text-[12px] font-[600]">
            {" "}
            From {from}
          </span>
          <span
            className="text-[#FF7800] text-[10px] mx-2 font-[800]"
            style={{ display: `${newStyle}` }}
          >
            {" "}
            New
          </span>
        </div>
        <div className="font-[600] text-[14px] ml-2">{heading}</div>
        {gototable ? (
          <div className="font-[600] text-[#888888] text-[12px] ml-2">
            {deal}
          </div>
        ) : (
          <div className="flex flex-col place-content-start text-[12px] ml-2 font-[700]">
            <div className="flex place-content-start my-5 w-[20%] ">
              <div className="mr-2">Ready to give :</div>
              {readyToGiveCards.map((card, i) => {
                return (
                  <img
                    key={i}
                    src={card}
                    alt="ready to give cards"
                    className="scale-[1]"
                  />
                );
              })}
            </div>

            <div className="flex place-content-start w-[20%]">
              <div className="mr-2">Wanted Cards :</div>
              {wantedCards.map((card, i) => (
                <img
                  key={i}
                  src={card}
                  alt="ready to give cards"
                  className="scale-[1]"
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex place-content-evenly my-4">
          <button
            className="text-[#FF7800] font-[600] text-center"
            onClick={phnDelete}
          >
            Delete
          </button>
          <button
            className="phn_button_active"
            onClick={phnView}
            style={{ fontWeight: "600" }}
          >
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default phoneCard;
