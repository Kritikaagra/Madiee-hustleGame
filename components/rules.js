import React from 'react';

let ruleData = [
    {
      ruleSrc: "../Cards/ruleCard.png",
      ruleHeading: "RULE 2",
      ruleText:"brinjal =2",
    },
    {
      ruleSrc: "../Cards/ruleCard.png",
      ruleHeading: "RULE 4",
      ruleText: "t=$5",
    },
    {
      ruleSrc: "../Cards/ruleCard.png",
      ruleHeading: "RULE 2",
      ruleText:"lemon =23",
    },
    {
      ruleSrc: "../Cards/ruleCard.png",
      ruleHeading: "RULE 4",
      ruleText: "t=$5",
    },
  ];

function rules() {
  return (
    <div>
      <section className="h-screen w-screen rulebg-img">
          <div className="ruleDivBg vegeCardDiv flex flex-col items-center place-content-evenly">
          <div className="flex w-full justify-evenly mt-12">
          {ruleData.map((rule, i) => (
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
            </div>
          <div className=" text-white text-center text-[20px] py-4 pb-6">you have : 1,3</div>
          </div>
         
      </section>
    </div>
  )
}

export default rules;
