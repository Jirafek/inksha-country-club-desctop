import React from 'react'
import logo from "images/housing/pngs/pig.png"

import img1 from "images/housing/finLeft.webp"
import img2 from "images/housing/finRight.webp"

import underImg from "images/housing/finUnderImg.png"

const HousingFinancies = () => {
   return (
      <div id="finances" key="finances">
         <div className='flex justify-between gap-[60px] px-[60px] pt-[60px] mb-[60px] items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='text-36px font-bold'>ФИНАНСОВЫЕ<span className='text-brown'> ВОЗМОЖНОСТИ</span></h2>
               <p className='text-24px'>Мы стремимся сделать приобретение вашего собственного дома в Икша Кантри Клабе доступным и удобным для каждого. У нас вы найдёте разнообразные финансовые варианты и возможности, чтобы сделать вашу мечту о загородном доме реальностью. </p>
            </div>
            <img src={logo} className='object-cover aspect-square max-w-[200px] max-h-[200px]' alt="" />
         </div>

         <div className='w-full px-[30px] flex justify-between items-center'>

            <div className='max-w-[560px]  flex justify-center items-center flex-col'>
               <div className='mb-[40px] pl-[40px]'>
                  <div className='text-brown underline text-24px font-bold'>Финансовая поддержка</div>
                  <div className='text-20px'>Наши специалисты по финансам всегда готовы помочь вам подобрать оптимальный финансовый план и ответить на все ваши вопросы</div>
               </div>
               <img src={img1} className='rounded-[10px]' alt="" />
            </div>

            <div className='max-w-[560px] flex justify-center items-center text-right flex-col-reverse'>
               <div className='mt-[40px] pr-[40px]'>
                  <div className='text-brown underline text-24px font-bold'>Гибкие финансовые планы</div>
                  <div className='text-20px'>Мы предлагаем гибкие условия финансирования, чтобы помочь вам выбрать оптимальный план оплаты, который соответствует вашим потребностям и возможностям.</div>
               </div>
               <img src={img2} className='rounded-[10px]' alt="" />
            </div>

         </div>

         <img src={underImg} className='w-full h-[120px] object-center object-cover mt-[50px]' alt="" />
      </div>
   )
}

export default HousingFinancies