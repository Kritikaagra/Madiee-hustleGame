import React from 'react';

function dealDone() {
  return (
    <div> 
    <section className="h-screen w-screen rulebg-img">
    <div className='vegeCardDiv flex flex-col items-center text-white'>
      <h1 className='text-[80px]  font-[Staatliches]'>DEAL DONE</h1>
      <h3 className='text-[45px] -mt-2 font-[Staatliches]'>00:00 MINS</h3>
      <h3 className='text-[25px] mt-20 mb-10 font-[viga]'>Press below button to go for results</h3>
      <button className='bg-[#FF7800] w-64 h-12 loginButton'>RESULTS</button>
    </div>
    </section>

    </div>
  )
}

export default dealDone;