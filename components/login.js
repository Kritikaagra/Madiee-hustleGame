import React, { useState } from "react";

function Login() {
  var [imgNum, setImgNum] = useState(0);

  let avatar = new Array();
  var url = "./Avatar/vendor";
  for (var i = 1; i <= 10; i++) {
    var path = url + i + ".png";
    avatar.push(path);
  }
  const next = () => {
    console.log("next");
    setImgNum(imgNum + 1);
  };
  const prev = () => {
    console.log("prev");
    setImgNum(imgNum - 1);
  };

  if (imgNum <= avatar.length - 1) {
    if (imgNum < 0) {
      imgNum = avatar.length - 1;
    }
  } else {
    imgNum = 0;
  }

  return (
    <div>
      <section className="bg-gray-300 h-screen w-screen market_bg">
        <div className="grid grid-cols-4 text-center h-screen gap-4 mx-20 place-items-center justify-middle">
          <div className="col-span-2 bg-gray-500 avatar">
            <div
              className="avatar_img"
              style={{ backgroundImage: `url('${avatar[imgNum]}')` }}
            ></div>
            <div className="button-next-prev">
              <button onClick={prev} className="float-left py-4 pl-5  w-20 ">
                <svg
                  width="14"
                  height="27"
                  viewBox="0 0 14 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6399 26.2308C11.3659 26.2318 11.0951 26.1713 10.8476 26.0539C10.6 25.9364 10.3819 25.765 10.2093 25.5522L1.35082 14.5479C1.08106 14.2197 0.933594 13.8081 0.933594 13.3833C0.933594 12.9585 1.08106 12.5468 1.35082 12.2186L10.5211 1.21431C10.8324 0.83977 11.2798 0.604232 11.7647 0.559519C12.2497 0.514805 12.7326 0.664577 13.1071 0.975887C13.4817 1.2872 13.7172 1.73454 13.7619 2.21952C13.8066 2.70449 13.6569 3.18736 13.3455 3.5619L5.14731 13.3924L13.0704 23.223C13.2947 23.4922 13.4372 23.82 13.481 24.1677C13.5248 24.5153 13.4681 24.8682 13.3176 25.1846C13.1671 25.5011 12.9291 25.7678 12.6318 25.9532C12.3344 26.1386 11.9902 26.2349 11.6399 26.2308Z"
                    fill="white"
                  />
                </svg>
              </button>
              <span className="float-left ">
                <svg
                  width="3"
                  height="55"
                  viewBox="0 0 3 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.85938 0.242676L1.85937 54.5979"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <button onClick={next} className="float-right w-20 py-4  pl-12">
                <svg
                  width="14"
                  height="27"
                  viewBox="0 0 14 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66091 0.551883C2.93491 0.550952 3.20564 0.611425 3.4532 0.728856C3.70076 0.84629 3.91886 1.0177 4.09148 1.23049L12.95 12.2348C13.2197 12.563 13.3672 12.9746 13.3672 13.3994C13.3672 13.8243 13.2197 14.2359 12.95 14.5641L3.77969 25.5684C3.46838 25.9429 3.02103 26.1785 2.53606 26.2232C2.05108 26.2679 1.56821 26.1181 1.19367 25.8068C0.819122 25.4955 0.583586 25.0482 0.538872 24.5632C0.494158 24.0782 0.64393 23.5954 0.95524 23.2208L9.15347 13.3903L1.23035 3.55973C1.00608 3.29052 0.863612 2.9627 0.819817 2.61506C0.77602 2.26742 0.832723 1.9145 0.983218 1.59807C1.13371 1.28165 1.3717 1.01496 1.66902 0.829553C1.96634 0.644147 2.31055 0.54779 2.66091 0.551883Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-span-2 loginForm">
            <div className="col-span-2 flex place-content-evenly text-white text-xl loginPanel">
              <button onClick={hostPanel} id="host">
                HOST
              </button>
              <button className="activePanel" onClick={playerPanel} id="player">
                PLAYER
              </button>
            </div>
            <div className="loginFields flex flex-col items-center place-content-evenly relative top-14 h-64">
              <div className="inputFields">
                <div className="bg-black text-white w-32 h-8 text-lg rounded-t-lg">
                  Your name
                </div>
                <input
                  type="text"
                  className="w-80 h-9 rounded-r-lg rounded-b-lg focus:outline-none px-6"
                />
              </div>
              <div className="inputFields">
                <div
                  className="bg-black text-white w-32 h-8 text-lg rounded-t-lg"
                  id="roomCode"
                >
                  Room Code
                </div>
                <input
                  type="text"
                  className="w-80 h-9 rounded-r-lg rounded-b-lg focus:outline-none px-6"
                />
              </div>
            </div>
            <button className="relative top-16 bg-[#FF7800] w-80 h-12 loginButton">
              Login
            </button>
            <div className="relative top-24 text-white bold underline cursor-pointer">
              New? ask MADIEE for Login
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

function hostPanel() {
  var roomCode = document.getElementById("roomCode");
  var host = document.getElementById("host");
  var player = document.getElementById("player");

  roomCode.innerText = "Password";
  host.classList.add("activePanel");
  player.classList.remove("activePanel");
}

function playerPanel() {
  var password = document.getElementById("roomCode");
  var host = document.getElementById("host");
  var player = document.getElementById("player");

  password.innerText = "Room Code";
  host.classList.remove("activePanel");
  player.classList.add("activePanel");
}
