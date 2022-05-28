import React from "react";


function usernameCard({img, username, svgStyle, read, idToEdit}) {

  function editUsername(){
    var username = document.getElementById('idToEdit');
    username.readOnly = false;
    username.focus();
  }

  return (
    <div>
      <div className="bg-white rounded-lg w-64 h-15.5 mb-4 flex place-content-left items-center">
        <img src={`Avatar/vendor${img}.png`}  alt="Vendor icon" className="h-14 w-14 mx-2"/>
        <svg
          width="3"
          height="36"
          viewBox="0 0 3 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.43945 1.04395V34.4873"
            stroke="#DEDEDE"
            stroke-opacity="0.9"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <textarea style={{resize:'none'}} className="font-bold mx-4 text-lg leading-5 w-28 pt-4 focus:outline-none" id={idToEdit} readOnly={read}>{username}</textarea>
        <div className="relative text-[12px] pr-2 cursor-pointer" onClick={editUsername}>
            <svg
                style={{display: `${svgStyle}`}}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1049 4.17345L16.2229 6.29045L14.1049 4.17345ZM15.4669 2.30845L9.73986 8.03545C9.44395 8.33095 9.24214 8.70744 9.15986 9.11745L8.63086 11.7655L11.2789 11.2355C11.6889 11.1535 12.0649 10.9525 12.3609 10.6565L18.0879 4.92945C18.26 4.75735 18.3965 4.55305 18.4896 4.32819C18.5827 4.10333 18.6307 3.86233 18.6307 3.61895C18.6307 3.37557 18.5827 3.13457 18.4896 2.90971C18.3965 2.68486 18.26 2.48055 18.0879 2.30845C17.9158 2.13635 17.7115 1.99984 17.4866 1.9067C17.2617 1.81356 17.0207 1.76562 16.7774 1.76562C16.534 1.76563 16.293 1.81356 16.0681 1.9067C15.8433 1.99984 15.639 2.13635 15.4669 2.30845V2.30845Z"
                  stroke="black"
                  stroke-opacity="0.33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6309 13.7656V16.7656C16.6309 17.2961 16.4201 17.8048 16.0451 18.1798C15.67 18.5549 15.1613 18.7656 14.6309 18.7656H3.63086C3.10043 18.7656 2.59172 18.5549 2.21665 18.1798C1.84157 17.8048 1.63086 17.2961 1.63086 16.7656V5.76562C1.63086 5.23519 1.84157 4.72648 2.21665 4.35141C2.59172 3.97634 3.10043 3.76563 3.63086 3.76562H6.63086"
                  stroke="black"
                  stroke-opacity="0.33"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
            </svg>
            </div>
      </div>
    </div>
  );
}

export default usernameCard;
