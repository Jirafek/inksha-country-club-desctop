import closeIcon from "icons/close.png"
import { useEffect, useState } from 'react'
import HelpPhoneForm from './components/HelpPhoneForm'
import style from './helpPopup.module.scss'
import { useTranslation } from 'react-i18next'

const HelpPopup = ({ isHelpPopupOpen, setIsHelpPopupOpen, className = '', setIsHelpButtonActive }) => {
   const { t } = useTranslation()
   const [isValid, setIsValid] = useState(false)
   const [path, setPath] = useState(1)
   const [isPhoneCall, setIsPhoneCall] = useState(false)
   const [questInput, setQuestInput] = useState(t('helpPopup.defaultQuestion'))

   const changeQuestInput = (e) => {
      setQuestInput(e.target.value)
   }

   const submitFirstForm1 = (e) => {
      e.preventDefault()
      setIsPhoneCall(false)
      setPath(2)
   }

   const submitFirstForm2 = (e) => {
      e.preventDefault()
      setIsPhoneCall(true)
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

         <div className='border w-[70vw] mx-auto  h-[400px] text-white  relative montery border-black bg-[#75624A] rounded-[20px] p-5'>
            <div className="absolute cursor-pointer right-3 z-[60] p-2 top-3">
               <img
                  onClick={handlePopupClose}
                  src={closeIcon}
                  alt="close"
               />
            </div>
            {path === 1 && <div>

               <p className='font-bold text-md mb-2'>{t('helpPopup.needHelp')}</p>
               <p className='text-sm mb-3'>{t('helpPopup.administrators')}</p>
               <form>
                  <input name='input' className='border h-[100px] mb-4 border-black text-black text-sm my-2 rounded-[10px] w-full p-2' onChange={changeQuestInput} value={questInput} type="text" />
               </form>
               <div className='flex flex-col gap-3'>
                  <button disabled={!isValid} onClick={submitFirstForm1} className={` w-full max-w-[560px] mx-auto h-[50px] rounded-[10px] font-bold text-white hover:bg-transparent duration-300 hover:border-2 hover:border-[#4D382B]  bg-[#4D382B] ${style.btn}`}>{t('helpPopup.send')}</button>
                  <button onClick={submitFirstForm2} className={` w-full h-[50px] max-w-[560px] mx-auto rounded-[10px] text-sm flex font-bold items-center hover:opacity-75 duration-300 justify-center bg-white border border-brown text-brown`}>{t('helpPopup.callBack')}</button>
               </div>
            </div>}
            {path === 2 && <div>
               <HelpPhoneForm isPhoneCall={isPhoneCall} setIsPhoneCall={setIsPhoneCall} questInput={questInput} addInfo={questInput} />
            </div>}
         </div>
      </div>
   )
}

export default HelpPopup
