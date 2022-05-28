import React, { useState } from 'react';
import PopUp from "./popUp";
import cards from './cards.json'
function Godown() {
    let [buttonPopUp, setButtonPopUp] = useState(false);

    var [isModal, setIsModal] = useState(false);

    const togglePopup = () => {
        setButtonPopUp(!buttonPopUp);
        if (!buttonPopUp) {
            document.getElementById("token_time").style.display = "none";
            document.getElementById("token_extra").style.display = "none";
        } else {
            document.getElementById("token_time").style.display = "block";
            document.getElementById("token_extra").style.display = "block";
        }
    };
    return (<div className="bg-godown">

        <section style={{ backgroundColor: '#00000099', height: '100%', width: '100%', position: 'absolute' }}>
            <h1 className="time_scratch" id="token_time">
                120:00 <span>MINS</span>
            </h1>
            <span className="scratch_title">
                <h1>YOUR GODOWN</h1>
            </span>
            <div id="token_extra" className="absolute scratch_pumpkin text-center  top-2 right-5">
                <img src="../Icons/pumpkin.png" />
                <h1 className="text-white ">Extras</h1>
            </div>
            <div className="flex absolute bottom-0 justify-center items-center w-screen">
                <img src="../Market/tray_w_hand.png" width="100%" />
            </div>
            <div className="flex  vegeCardDiv mt-48  ">
                {cards.map((card, i) => (
                    <div
                        className="flex -mx-5 flex-col scale-[0.7] place-content-evenly items-center"
                        key={i}
                    >
                        <div
                            className="vegeCard w-[175px] h-[260px] flex place-items-center"
                            style={{ backgroundImage: `url(${card.cardSrc}) ` }}
                        >
                            <button
                                className="font-bold text-[24px] px-6 cursor-pointer"
                                onClick={() => togglePopup()}
                            >
                                {card.cardText}
                            </button>
                        </div>
                        <div className="text-white w-24 mt-14 py-1 cardNoGodown text-center rounded-lg text-[32px]">
                            {card.cardCount}
                        </div>
                    </div>
                ))}
            </div>
            {buttonPopUp && <PopUp handleClose={() => togglePopup()}> </PopUp>}

            <div onClick={() => setIsModal(!isModal)} className={`${isModal ? "hidden" : "block"} bag`} id="bagIcon">
                <span className="bg-[#F30002] ml-10 mt-2 text-xl text-white rounded-full text-center h-8 w-8 absolute">1</span>
                <img src="../Icons/bag.png" alt="bag logo" className="mt-2 ml-2" width="80%" />
            </div>
            <div id="bagContent" className={isModal ? "block" : "hidden"}>
                <div className="bagOnClick text-center" >
                    <button onClick={() => setIsModal(!isModal)} className="text-center bag_click">
                        <svg className="ml-8" width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.19798 3.09402C0.197164 3.36802 0.250169 3.63874 0.353099 3.8863C0.456031 4.13386 0.606273 4.35196 0.792785 4.52458L10.4382 13.3831C10.7259 13.6528 11.0867 13.8003 11.459 13.8003C11.8314 13.8003 12.1922 13.6528 12.4799 13.3831L22.1253 4.21279C22.4536 3.90148 22.6601 3.45413 22.6993 2.96916C22.7384 2.48419 22.6072 2.00132 22.3343 1.62677C22.0614 1.25223 21.6693 1.01669 21.2442 0.971977C20.8192 0.927263 20.3959 1.07704 20.0676 1.38834L11.451 9.58657L2.8344 1.66345C2.59844 1.43918 2.3111 1.29672 2.00638 1.25292C1.70167 1.20912 1.39233 1.26583 1.11498 1.41632C0.837631 1.56682 0.60387 1.8048 0.44136 2.10212C0.27885 2.39944 0.194393 2.74365 0.19798 3.09402Z" fill="white" />
                        </svg>
                    </button>
                    <ul>
                        <li>
                            <button >
                                <img className="bag_icons mx-auto nb" src="../Icons/book.png" width="80%" />
                                <h2 className="bag_txt">Notepad</h2>
                            </button>
                        </li>
                        <li>
                            <button >
                                <img className="mx-auto bag_icons " src="../Icons/phone.png" width="80%" />
                                <h2 className="bag_txt">Phone</h2>

                            </button>
                        </li>
                        <li>
                            <button >
                                <img className="mx-auto bag_icons " src="../Icons/diary.png" width="80%" />
                                <h2 className="bag_txt">Records</h2>

                            </button>
                        </li>
                    </ul>


                </div>

            </div>
            <button className="peek_market">
                <h2>
                    Peek<br /> Market
                </h2>
                <img src="../Icons/door.png" />
            </button>
        </section>


    </div>);
}

export default Godown;
