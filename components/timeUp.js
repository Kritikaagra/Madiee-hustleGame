import React from 'react';

function timeUp() {
  return (
    <div> 
    <section className="h-screen w-screen rulebg-img">
    <div className='vegeCardDiv flex flex-col items-center text-white'>
    <div className="flex">
      <img src="../Icons/timesUp.png" alt="TimeUp" className='w-[260px] h-[320px]' />
      <div className="flex flex-col justify-center">
      <h1 className='text-[80px]  font-[Staatliches]'>TIME UP!</h1>
      <h3 className='text-[45px] -mt-2 font-[Staatliches]'>00:00 MINS</h3>
      </div>
    </div>
      <h3 className='text-[25px] mb-10 font-[viga]'>Press below button to go for results</h3>
      <button className='bg-[#FF7800] w-64 h-12 loginButton'>RESULTS</button>
    </div>
    </section>

    </div>
  )
}

export default timeUp;