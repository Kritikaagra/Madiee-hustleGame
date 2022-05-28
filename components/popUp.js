import React from "react";

let rules = [
  {
    ruleSrc: "../Cards/ruleCard.png",
    ruleHeading: "RULE 1",
    ruleText:
      "take them and haggle to make a valueable set take them and haggle to make a valueable set",
  },
  {
    ruleSrc: "../Cards/ruleCard.png",
    ruleHeading: "RULE 3",
    ruleText: "take them and haggle to make a valueable set",
  },
];

function PopUp(props) {

  return(
    <div className="popUp">
      <div className="fixed w-screen h-screen flex place-content-center place-items-center z-10">
                <span className="scratch_title z-10">
                  <h1>RULE CARDS</h1>
                </span>
                <div className="flex flex-col h-fit w-fit place-items-center popUpDiv">
                  <span
                    onClick={props.handleClose}
                    className=" ml-auto mr-4 mt-5 cursor-pointer text-white text-[24px]"
                  >
                    Close
                    <span className="text-[#C4BFBD] font-bold pl-2">X</span>
                  </span>

                  <div className=" w-full flex items-center place-content-between mt-4">
                    <div className="bg-black rounded-r-lg px-3.5 py-4">
                      <svg
                        width="14"
                        height="27"
                        viewBox="0 0 14 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3205 26.1195C11.0465 26.1204 10.7758 26.06 10.5282 25.9425C10.2807 25.8251 10.0626 25.6537 9.88997 25.4409L1.03148 14.4366C0.761725 14.1084 0.614255 13.6968 0.614256 13.2719C0.614256 12.8471 0.761725 12.4355 1.03148 12.1073L10.2018 1.10299C10.5131 0.728444 10.9604 0.492906 11.4454 0.448192C11.9304 0.403479 12.4132 0.553251 12.7878 0.864561C13.1623 1.17587 13.3979 1.62322 13.4426 2.10819C13.4873 2.59316 13.3375 3.07603 13.0262 3.45058L4.82798 13.2811L12.7511 23.1117C12.9754 23.3809 13.1178 23.7087 13.1616 24.0563C13.2054 24.404 13.1487 24.7569 12.9982 25.0733C12.8477 25.3897 12.6097 25.6564 12.3124 25.8418C12.0151 26.0272 11.6709 26.1236 11.3205 26.1195Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    {rules.map((rule, i) => (
                      <div
                        className="flex  place-content-evenly items-center w-[254px] h-[380px] mb-4 ruleCard"
                        key={i}
                      >
                        <div
                          className="w-64 h-full flex place-items-center"
                          style={{
                            backgroundImage: `url(${rule.ruleSrc})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="flex flex-col text-center font-bold w-[254px] h-[380px]">
                            <div className="text-[28px] mt-12">
                              {rule.ruleHeading}
                            </div>
                            <div className="text-[20px] px-10 pt-8">
                              {rule.ruleText}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="bg-black rounded-l-lg px-3.5 py-4">
                      <svg
                        width="13"
                        height="27"
                        viewBox="0 0 13 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.16091 0.440555C2.43491 0.439624 2.70564 0.500096 2.9532 0.617528C3.20076 0.73496 3.41886 0.906369 3.59148 1.11916L12.45 12.1235C12.7197 12.4517 12.8672 12.8633 12.8672 13.2881C12.8672 13.7129 12.7197 14.1246 12.45 14.4527L3.27969 25.4571C2.96838 25.8316 2.52103 26.0672 2.03606 26.1119C1.55108 26.1566 1.06821 26.0068 0.693666 25.6955C0.319121 25.3842 0.0835858 24.9368 0.0388719 24.4519C-0.00584202 23.9669 0.14393 23.484 0.45524 23.1095L8.65347 13.2789L0.730351 3.44841C0.506077 3.17919 0.363613 2.85137 0.319817 2.50373C0.27602 2.15609 0.332724 1.80317 0.483218 1.48675C0.633713 1.17032 0.871701 0.90363 1.16902 0.718224C1.46634 0.532819 1.81055 0.436461 2.16091 0.440555Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" text-white text-center text-[20px] py-4 pb-6">
                    {" "}
                    you have : 1,3
                  </div>
                </div>
              </div>
            
    </div>
  );
}

export default PopUp;
