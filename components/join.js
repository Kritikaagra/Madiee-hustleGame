import React, { useState, useRef } from "react";
import UsernameCard from "./usernameCard";
import vendors from './vendors.json'

function join() {
  var [totalPlayer, setTotalPlayer] = useState(vendors.length);

  return (
    <div>
      <section className="h-screen w-screen rulebg-img">
        <div className="flex h-screen">
          <div className="playerInfo w-1/4 bg-white h-screen">
            <div className="bg-[#FF7800] text-[#E1E8EB] h-1/4 text-center text-[22px] py-4">
              Players joined : {totalPlayer}
              <div className="flex place-content-center my-4 text-black">
                <UsernameCard
                  img="1"
                  username="Ranjiith Raj"
                  read="true"
                  idToEdit="idToEdit"
                />
              </div>
            </div>
            <div className="bg-black h-3/4 pt-6 flex flex-col items-center overflow-y-scroll">
              {vendors.map((entry, i) => (
                <UsernameCard
                  key={i}
                  img={entry.img}
                  username={entry.username}
                  svgStyle="none"
                  read="true"
                />
              ))}
            </div>
          </div>

          <div className="ruleSection h-screen w-3/4 pt-6 pl-14 text-white">
            <div className="text-[52px] text-white font-bold">HOW TO PLAY?</div>
            <div className="my-10">
              <span className="text-[26px]">Room Code:</span>
              <span className="text-[26px] ml-28" id="roomCode">
                23fr45t
              </span>
              <span
                className=" absolute bg-black px-4 py-2 mx-28 rounded-lg items-center cursor-pointer"
                onClick={copyToClipboard}
              >
                <svg
                  style={{ position: "absolute" }}
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.71023 3.4563V13.826C1.71007 14.852 2.10018 15.8397 2.80142 16.5887C3.50266 17.3376 4.46253 17.7918 5.48633 17.8591L5.75144 17.8672H12.8866C12.7195 18.3399 12.4099 18.7492 12.0006 19.0387C11.5913 19.3282 11.1022 19.4836 10.6009 19.4837H4.94319C3.65704 19.4837 2.42357 18.9728 1.51412 18.0633C0.604673 17.1539 0.0937503 15.9204 0.0937503 14.6343V5.74362C0.0934874 5.24199 0.248816 4.75262 0.538328 4.34296C0.82784 3.9333 1.23728 3.62351 1.71023 3.4563V3.4563ZM13.8338 0.0859375C14.4769 0.0859375 15.0937 0.341399 15.5484 0.796122C16.0031 1.25085 16.2586 1.86758 16.2586 2.51066V13.826C16.2586 14.4691 16.0031 15.0858 15.5484 15.5406C15.0937 15.9953 14.4769 16.2508 13.8338 16.2508H5.75144C5.10836 16.2508 4.49162 15.9953 4.0369 15.5406C3.58217 15.0858 3.32671 14.4691 3.32671 13.826V2.51066C3.32671 1.86758 3.58217 1.25085 4.0369 0.796122C4.49162 0.341399 5.10836 0.0859375 5.75144 0.0859375H13.8338ZM13.8338 1.70242H5.75144C5.53708 1.70242 5.3315 1.78757 5.17992 1.93915C5.02835 2.09072 4.94319 2.2963 4.94319 2.51066V13.826C4.94319 14.0404 5.02835 14.246 5.17992 14.3975C5.3315 14.5491 5.53708 14.6343 5.75144 14.6343H13.8338C14.0482 14.6343 14.2538 14.5491 14.4054 14.3975C14.5569 14.246 14.6421 14.0404 14.6421 13.826V2.51066C14.6421 2.2963 14.5569 2.09072 14.4054 1.93915C14.2538 1.78757 14.0482 1.70242 13.8338 1.70242Z"
                    fill="white"
                  />
                </svg>
                <p className="pl-6" id="copyCode">
                  Copy Code
                </p>
              </span>
            </div>
            <div className="text-[26px] pr-28">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. <br />
              <br /> Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
              et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
              minim tempor enim. Elit aute irure tempor cupidatat <br />
              <br /> incididunt sint deserunt ut voluptate aute id deserunt
              nisi.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default join;

function copyToClipboard() {
  var roomCode = document.getElementById("roomCode");
  var copyCode = document.getElementById("copyCode");
  navigator.clipboard.writeText(roomCode.innerText);
  copyCode.innerText = "Copied!";
}
