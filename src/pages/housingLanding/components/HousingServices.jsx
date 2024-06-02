import React from 'react'
import bg from "images/housing/services.webp"


const GetServices = () => {
   const list = [
      ["Рестораны и кафе", "Незабываемый опыт кулинарного искусства ждёт вас в нащих ресторанах и кафе, где вы сможете насладиться изысканными блюдами и напитками в уютной атмосфере. Для любителей BBQ работает наш повар"],
      ["Рестораны и кафе", "Незабываемый опыт кулинарного искусства ждёт вас в нащих ресторанах и кафе, где вы сможете насладиться изысканными блюдами и напитками в уютной атмосфере. Для любителей BBQ работает наш повар"],
      ["Рестораны и кафе", "Незабываемый опыт кулинарного искусства ждёт вас в нащих ресторанах и кафе, где вы сможете насладиться изысканными блюдами и напитками в уютной атмосфере. Для любителей BBQ работает наш повар"],
      ["Рестораны и кафе", "Незабываемый опыт кулинарного искусства ждёт вас в нащих ресторанах и кафе, где вы сможете насладиться изысканными блюдами и напитками в уютной атмосфере. Для любителей BBQ работает наш повар"],

   ]

   return list
}


const HousingServices = () => {
   return (
      <div id="services" key="services" className='pl-[60px] pt-[60px] border-y border-brown'>
         <div className='flex justify-between mb-[20px] gap-1 items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='text-36px font-bold'>УСЛУГИ И<span className='text-brown'> УДОБСТВА</span></h2>
               <p className='text-24px'>В Икша Кантри Клабе мы гордимся широким спектром развлекательных<br /> программ и мероприятий для всех наших гостей</p>
            </div>
         </div>

         <div className='flex justify-between'>
            <div className='flex flex-col py-[20px] justify-center gap-[20px] items-center'>
               {GetServices().map((item, i) => {
                  return (
                     <div key={i} className='px-[30px] py-[15px] max-w-[420px] text-brown border border-brown rounded-[10px]'>
                        <div className='text-17px underline'>{item[0]}</div>
                        <div className='text-14px'>{item[1]}</div>
                     </div>
                  )
               })}
            </div>
            <img src={bg} className='object-cover rounded-tl-[10px]' alt="" />
         </div>
      </div>
   )
}

export default HousingServices