import React from 'react'
import bg from 'images/housing/hero.webp'

const HousingHero = () => {
   return (
      <div className='relative h-screen w-full'>
         <img src={bg} className='w-full h-full' alt="" />
         <div className='absolute z-10'>
            <div>Hello world</div>
         </div>
      </div>
   )
}

export default HousingHero