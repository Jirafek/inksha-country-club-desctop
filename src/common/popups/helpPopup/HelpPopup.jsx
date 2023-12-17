
import close from "icons/close.png"
import { useEffect, useState } from 'react'

import HelpPhoneForm from './components/HelpPhoneForm'
import style from './helpPopup.module.scss'
const HelpPopup = ({ isHelpPopupOpen, setIsHelpPopupOpen, className = '', setIsHelpButtonActive }) => {
   const [isValid, setIsValid] = useState(false)
   const [path, setPath] = useState(1)

   const [questInput, setQuestInput] = useState('Как забронировать домик?')

   const changeQuestInput = (e) => {
      setQuestInput(e.target.value)
   }
   const submitFirstForm = (e) => {
      e.preventDefault()
      setPath(2)
   }

   const handlePopupClose = () => {
      setIsHelpPopupOpen(false)
      setIsHelpButtonActive(true)
   }

   useEffect(() => {
      if (questInput.length >= 3) {
         setIsValid(true)
      } else {
         setIsValid(false)
      }

   }, [questInput, setQuestInput])

   return (
      <div className={` ${className} fixed left-1/2  top-1/2 -translate-x-1/2  -translate-y-1/2 transform z-[100000]`}>
         {/* <div
            style={{ transform: "translateX(-50%)" }}
            className="absolute left-1/2 -top-[155px] z-30 w-[215px] bg-transparent"
         >
            <img
               className="bg-transparent"
               src="/image/girman.gif"
               alt="Икша Кантри Клаб"
            />
         </div> */}
         <div className='border w-[70vw] mx-auto  h-[400px] text-white  relative montery border-black bg-[#75624A] rounded-[20px] p-5'>
            <div className="absolute cursor-pointer right-3 z-[60] p-2 top-3">
               <img
                  onClick={handlePopupClose}
                  src={close}
                  alt="close"
               />
            </div>
            {path === 1 && <div>

               <p className='font-bold text-md mb-2'>Нужна помощь?</p>
               <p className='text-sm mb-3'>Наши администраторы всегда на связи!</p>
               <form onSubmit={submitFirstForm}>
                  <input name='input' className='border h-[100px] mb-4 border-black text-sm my-2 rounded-[10px] w-full p-2' onChange={changeQuestInput} value={questInput} type="text" />
               </form>
               <div className='flex flex-col gap-3'>
                  <button disabled={!isValid} onClick={submitFirstForm} className={` w-full max-w-[560px] mx-auto h-[50px] rounded-[10px] font-bold text-white hover:bg-transparent duration-300 hover:border-2 hover:border-[#4D382B]  bg-[#4D382B] ${style.btn}`}>Отправить</button>
                  <button onClick={submitFirstForm} className={` w-full h-[50px] max-w-[560px] mx-auto rounded-[10px] text-sm flex font-bold items-center hover:opacity-75 duration-300 justify-center bg-white border border-brown text-brown`}>Перезвоним в течение минуты</button>
               </div>
            </div>}
            {path === 2 && <div>
               <HelpPhoneForm addInfo={questInput} />
            </div>}



         </div>



      </div>
   )
}

export default HelpPopup