import React from "react";

function hustle() {
  return (
    <div>
      <div className="h-screen w-screen market_bg blur-[5px]">
        <section
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        ></section>
      </div>
      <img
        src="../logo/hustleLogo.png"
        alt="Hustle Logo"
        className="absolute z-20 vegeCardDiv h-[400px] w-[50%] animation"
      />
    </div>
  );
}

export default hustle;
