import React from 'react';
import LeaderboardCard from './leaderboardCard';
import Vendors from './vendors.json';

function leaderboard() {
  return (
    <div>
    <section className="h-screen w-screen rulebg-img">
        <div className="scratch_title">
            <h1>LEADERBOARD</h1>
        </div>
        <div className='text-white text-[1rem] pl-16 pt-12'>(all quantities are in basket counts)</div>
        <div className="leaderboard">
        <div className="overflow-auto h-full w-full pr-2">
        {Vendors.map((vendor,i)=>{
          return(
            <LeaderboardCard
                img={vendor.img}
                username={vendor.username}
                brinjal='3'
                carrot='3'
                peas='3'
                tamato='3'
                lemon='3'
                money='450'
                badge={i+1}
            />
          )
        })}
        </div>
        </div>
    </section>
    </div>
  )
}

export default leaderboard;
