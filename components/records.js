import React from "react";
import RecordCard from "./recordCard";

var gaveCardArray1 = [
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
];
var gotCardArray1 = [
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
];
var gotCardArray2 = [
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/ruleCard.png",
];
var gaveCardArray2 = [
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
  "../Cards/greenPeaCard.png",
];

function records() {
  return (
    <div className="recordbg">
      <div className=" mt-4 recordbg1 scale-[0.95] absolute -top-[20px]">
        <button className="relative my-3 mx-3 bg-[#FF7800] w-48 h-12 loginButton cursor-pointer">
          Back
        </button>

        <span className="scratch_title -mt-3">
          <h1 className="w-80">RECORDS</h1>
        </span>
        <div
          id="token_extra"
          className="absolute scratch_pumpkin text-center -top-3 -right-5"
        >
          <img src="../Icons/pumpkin.png" />
          <h1 className="text-white cursor-pointer">Extras</h1>
        </div>

        <div className="vegeCardDiv h-[75vh] overflow-y-scroll pt-2">   
          <RecordCard
            username="Shankar"
            time="3mins ago"
            success="yes"
            avatar="5"
            gaveCards={gaveCardArray1}
            gotCards={gotCardArray1}
          />
          <RecordCard
            username="Priya"
            time="just now"
            success="no"
            avatar="2"
            gaveCards={gaveCardArray2}
            gotCards={gotCardArray2}
          />    
        </div>
      </div>
    </div>
  );
}

export default records;
