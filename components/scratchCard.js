import React from 'react';

function ScratchCard() {
    let items = ['../ScratchCards/blueScratch.png', '../ScratchCards/greenScratch.png', '../ScratchCards/purpleScratch.png', '../ScratchCards/redScratch.png', '../ScratchCards/yellowScratch.png'];

    let itemList = [];

    items.forEach((item, index) => {

        itemList.push(<div style={{ backgroundImage: `url(${item})` }} className="scratch_card" key={index}>
            <h1>SCRATCH CARD</h1>

        </div>)

    })
    return (<div>
        <section className="scratch">
            <h1 className="time_scratch">120:00 <span>MINS</span></h1>
            <div className="scratch_title">
                <h1>CHOOSE ONE SCRATCH CARD</h1>
            </div>
            <div className="absolute flex w-screen h-screen justify-center">
                <grid className="scratch_grid place-items-center ">
                    {itemList}
                    {itemList}
                    {itemList}
                </grid>
            </div>
            <div className="absolute scratch_pumpkin text-center  top-2 right-5">
                <img src="../Icons/pumpkin.png" />
                <h1 className="text-white ">Extras</h1>
            </div>
            <div className="center_btn">
                <button className="scratch_btn">Choose</button>
            </div>
        </section>

    </div>);
}

export default ScratchCard;
