import React from 'react'

import bg from "images/housing/contacts.webp"

const HousingContacts = () => {
   return (
      <div className='bg-white p-[30px]' id="contacts" key="contacts">
         <div className='bg-[#221C1C] grid grid-cols-3 rounded-[100px]'>
            <div className='flex flex-col col-span-2 justify-center gap-[120px] items-center'>
               <div className='text-36px text-brown text-center font-bold'>
                  КОНТАКТНАЯ <span className='text-white'>ИНФОРМАЦИЯ</span>
               </div>

               <div className='max-w-[70%]'>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>Адрес:</div>
                     <div className='font-bold'>Московская область, городской округ Мытищи, посёлок Менжинец   </div>
                  </div>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>Телефон:</div>
                     <a href="tel:+74995055031" target='_blank' className='font-bold underline'>+7 (499) 505 50 31</a>
                  </div>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>E-mail:</div>
                     <a target="_blank" href="mailto:contact@ikshacountryclub.com" className='font-bold underline'>contact@ikshacountryclub.com</a>
                  </div>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>Официальный сайт:</div>
                     <a target="_blank" href="https://ikshacountryclub.com" className='font-bold underline'>www.ikshacountryclub.com</a>
                  </div>

               </div>
            </div>
            <img src={bg} className='object-cover col-span-1 w-full h-full' alt="photo" />
         </div>
      </div>
   )
}

export default HousingContacts