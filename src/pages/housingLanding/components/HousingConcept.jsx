import React from 'react'
import logo from "images/housing/pngs/logo.png"
import conceptImg from "images/housing/conceptImg.webp"
import s from './../housing.module.scss'

const GetConceptList = () => {
   const list = [
      "Домик мечты на берегу Икшинского водохранилища",
      "Пляж в 100 метрах",
      "Круглосуточная охрана",
      "Еженедельная уборка",
      "Раздолье для вашего питомца",
      "Скидки на развлечения",
      "Баня и купель",
      "Спортивные площадки",
      "Регулярные мероприятия",
   ]
   return list
}

const HousingConcept = () => {
   return (
      <div key="concept" id="concept" className='text-white p-[60px] bg-[#221C1C] w-full h-full'>
         <div className='flex justify-between gap-1 items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='text-36px font-bold'>Дома выходного дня:<span className='text-brown'>концепт</span></h2>
               <p className='text-md-'>А что если у вас будет свой укромный уголок на природе, куда можно выбраться всей семьёй в любой момент времени по цене аренды небольшой квартиры в Москве?</p>
            </div>
            <img src={logo} className='object-cover aspect-square max-w-[200px] max-h-[200px]' alt="" />
         </div>

         <div className='flex max-h-[700px] text-left'>
            <div className='flex flex-col justify-center items-center gap-[32px]'>
               <div className='text-brown font-bold w-full text-left text-md+'>Что мы предлагаем?</div>
               <ul className={`${s.conceptList} `}>
                  {GetConceptList().map((item, i) => {
                     return (
                        <li className='text-24px mb-[12px]' key={i}>{item}</li>
                     )
                  })}
               </ul>
            </div>
            <img src={conceptImg} className='object-cover w-full h-full ' alt="" />
         </div>

      </div>
   )
}

export default HousingConcept