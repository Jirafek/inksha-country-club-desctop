import React from 'react'

import bg from 'images/housing/hero.webp'

import qr from 'images/housing/pngs/qr.png'

const HousingHero = () => {
   return (
      <div className='relative h-screen w-full'>
         <img src={bg} className='w-full h-full object-cover' alt="Housing Hero Background" />
         <div className='absolute inset-0 z-10 flex '>
            <div className='h-full w-full relative'>
               <div className='text-white absolute left-1/2 transform -translate-x-1/2 top-5 font-extrabold text-xl text-nowrap bg-[#4D382B] bg-opacity-80 p-5'>
                  ОБРЕТИ ВТОРОЙ ДОМ<br />
                  <span className='text-HousingGreen'>В ИКША КАНТРИ КЛАБ</span>
               </div>

               <div className='bg-[#4D382B] rounded-[20px] bg-opacity-80 p-5 font-extrabold absolute transform right-[40px]  text-white max-w-[700px] flex justify-between gap-1 top-[40vh]'>
                  <div className='text-36px p-0 m-0 w-auto'>
                     Дома выходного дня для вашего отдыха круглый год
                  </div>
                  <div className='text-md- self-end text-right'>
                     <div className='text-md+ text-nowrap'>от 60</div>
                     тысяч в месяц
                  </div>
               </div>

               <div className='bg-[#4D382B] rounded-[20px] bg-opacity-80 p-5 absolute transform text-white max-w-[500px] flex justify-between gap-4 bottom-5 right-5'>
                  <div className='flex flex-col justify-between gap-1'>
                     <div className='text-md- font-bold'>
                        Присоединяйся сейчас!
                     </div>
                     <div className='font-normal'>
                        Заполняй анкету онлайн
                        или уточняй у администратора
                     </div>
                     <div className='text-md- font-extrabold'>
                        + 7-499-505-50-31
                     </div>
                  </div>

                  <img className='object-contain aspect-square' src={qr} alt="" />
               </div>

            </div>
         </div>
      </div>
   )
}

export default HousingHero
