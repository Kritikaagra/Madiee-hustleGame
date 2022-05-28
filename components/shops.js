import React from "react";
import shopsData from "./shopsData.json";

function shops() {
  return (
    <>
      <div className="windowShop_bg w-screen h-screen">
        <section
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        >
          <h1 className="time_scratch">
            120:00 <span>MINS</span>
          </h1>
          <div className="scratch_title">
            <h1>SHOPS</h1>
          </div>

          <div className="absolute w-screen flex place-content-center text-white top-[13%]">(*choose one shop to go there)</div>
          <div className="absolute flex place-content-center w-screen top-[23%]">
          <div className=" flex flex-wrap place-content-start w-[72vw]">
              {shopsData.map((shop, i)=>{
                  return(
                    <div className="shopCard" key={i}>{shop.shopNo}</div>
                  );
              }

              )}
          </div>
</div>
          <div className="absolute scratch_pumpkin text-center  top-2 right-5">
            <img src="../Icons/pumpkin.png" />
            <h1 className="text-white ">Extras</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default shops;
