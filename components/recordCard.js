import React, {useState} from "react";

function RecordCard({ username, success, time, avatar, gaveCards, gotCards }) {
  const [tempGot, setTempGot] = useState(gotCards.slice(0,8));
  const [indexGot, setIndexGot] = useState(7);

  const [tempGave, setTempGave] = useState(gaveCards.slice(0,8));
  const [indexGave, setIndexGave] = useState(7);

  function viewmoreGot() {
    setTempGot(gotCards.slice(indexGot, indexGot+8));
    setIndexGot(indexGot+7);
  }

  function viewmoreGave() {
    setTempGave(gaveCards.slice(indexGave, indexGave+8));
    setIndexGave(indexGave+7);
  }

  return (
    <div className="recordDiv flex place-content-between items-center">
      <div className="flex">
        <div className="flex flex-col text-center">
          <img
            src={`Avatar/vendor${avatar}.png`}
            alt="Avatar"
            className="-mt-12 h-48 w-40"
          />
          <div className="font-bold text-[1.5rem] -mt-7">{username}</div>
          <div className="font-[600] text-[grey] text-[1.2rem]">{time}</div>
        </div>
        <svg
          width="4"
          height="177"
          viewBox="0 0 4 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: "10px" }}
        >
          <path
            d="M2.27344 2.15625L2.27343 175"
            stroke="#E0E0E0"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="h-full">
        <div className="flex flex-wrap mt-3 h-[80%] w-[15rem] justify-start">
          {tempGot.map((card, i) => {
            if (i <= 6) {
              return (
                <img
                  key={i}
                  src={card}
                  alt="got cards"
                  className="h-[4.4rem] w-12 m-1"
                />
              );
            }
            if (i == tempGot.length - 1) {
              return (
                <div
                  key={i}
                  className="h-[4.4rem] w-12 m-1 font-bold flex items-center justify-center flex-col"
                >
                  <div>+{gotCards.length - indexGot}</div>
                  <div
                    className="text-[#FF0000] cursor-pointer"
                    onClick={viewmoreGot}
                  >
                    View
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="font-bold text-[1.2rem] text-center -mt-1">
          got these
        </div>
      </div>

      <svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9688 12.6224V0.922363L39.4689 20.4224H4.36876V12.6224H19.9688ZM0.46875 28.2224H35.5689V36.0225H19.9688V47.7225L0.46875 28.2224Z"
          fill="#C8C8C8"
        />
      </svg>

      <div className="h-full">
        <div className="flex flex-wrap mt-3 h-[80%] w-[15rem] opacity-[0.3] ">
          {tempGave.map((card, i) => {
            if (i <= 6) {
              return (
                <img
                  key={i}
                  src={card}
                  alt="gave cards"
                  className="h-[4.4rem] w-12 m-1"
                />
              );
            }
            if (i == tempGave.length - 1) {
              return (
                <div
                  key={i}
                  className="h-[4.4rem] w-12 m-1 font-bold flex items-center justify-center flex-col"
                >
                  <div>+{gaveCards.length - indexGave}</div>
                  <div
                    className="text-[#FF0000] cursor-pointer"
                    onClick={viewmoreGave}
                  >
                    View
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="font-bold text-[1.2rem] text-center -mt-1">
          gave these
        </div>
      </div>

      {success == "yes" ? (
        <div
          style={{ writingMode: "vertical-rl" }}
          className="bg-[#52B32E] text-white font-bold rounded-l-[9px] text-[1.5rem] w-[3rem] h-full rotate-180 text-center"
        >
          Deal Success
        </div>
      ) : (
        <div
          style={{ writingMode: "vertical-rl" }}
          className="bg-[#F30002] text-white font-bold rounded-l-[9px] text-[1.5rem] w-[3rem] h-full rotate-180 text-center"
        >
          Deal Deleted
        </div>
      )}
    </div>
  );
}

export default RecordCard;
