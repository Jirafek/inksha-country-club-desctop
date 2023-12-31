import { useEffect, useState } from 'react'
import InputMask from "react-input-mask"
import { useURLData } from 'utils/URLData'
import style from './../helpPopup.module.scss'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
const HelpPhoneForm = ({ isPhoneCall, setIsPhoneCall, addInfo = '', questInput = '', additionalData = null,
   additionalDataType = null, }) => {
   const { utm_campaign, utm_content, utm_source } = useURLData()
   const [isPopupCompleted, setIsPopupCompleted] = useState(false)
   const [isError, setIsError] = useState(true) // State for tracking errors
   const [name, setName] = useState("")
   const [isValid, setIsValid] = useState(true)
   const [phone, setPhone] = useState("")
   const { t } = useTranslation()


   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         message: questInput,
         email: '-',
         groupID: import.meta.env.VITE_GROUP_ID,
      }

      let sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: isPhoneCall ? "Call Back" : (additionalDataType === null
            ? "Форма имя + телефон"
            : additionalDataType),
         link: window.location.href,
         utm_source: utm_source,
         utm_campaign: utm_campaign,
         utm_content: utm_content,
      }

      if (additionalData !== null) {
         sendingData = { ...sendingData, ...additionalData }
      }

      try {
         const response = await fetch(
            "https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Access-Control-Allow-Origin": "*",
               },
               body: new URLSearchParams(sendingData).toString(),
            }
         )

         if (response.ok) {
            Cookies.set('isTimerOn', 'false', { expires: 7 })
            console.log(!Cookies.get('isTimerOn'))
            setTimeout(() => {
               window.location.href = 'https://ikshacountryclub.com/thanks'
            }, 1000)
         } else {
            alert("Произошла ошибка при отправке данных")
         }
      } catch (error) {
         console.error(error)
         alert("Произошла ошибка при отправке данных")
      }
   }


   useEffect(() => {

      const newIsError = !name || !phone || !isValid
      setIsError(newIsError)
   }, [name, phone])

   const handlePhoneChange = (e) => {
      const inputValue = e.target.value
      const numericValue = inputValue.replace(/[^\d]/g, "") // Убираем все символы, кроме цифр
      const isValidPhone = numericValue.length === 11 // Проверяем, что длина равна 11
      setPhone(numericValue)
      setIsValid(isValidPhone) // Устанавливаем валидность номера телефона
   }
   const handleNameChange = (e) => {
      const { value } = e.target
      setName(value)
   }

   const handlePopupClose = () => {
      setIsPopupCompleted(false)
      togglePopup()
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (isError) {
         return
      }
      handleSubmitBot()
      setPhone("") // Очищаем состояние телефона
      setIsPopupCompleted(!isPopupCompleted)
   }
   return (
      <div className="">

         <p className='font-bold text-md mb-2'>{t('form.leaveYourData')}</p>
         <p className='text-sm mb-3'>{t('form.administratorsAlwaysAvailable')}</p>

         <form onSubmit={handleSubmit} className='mb-3' >
            {/* <input name='input' className='border h-[50px] mb-4 border-[#334727] text-[14px] my-2 rounded-[10px] w-full p-2' onChange={changeQuestInput} value={questInput} type="text" /> */}
            {/* <button type='submit' disabled={!isValid} className={` w-full h-[30px] rounded-[10px] text-white bg-[#334727] ${style.btn}`}>Отправить</button> */}


            <input
               placeholder={t('common.name')}
               name='name'
               className='border h-[50px] text-black border-black text-[17px] my-2 rounded-[10px] w-full p-2'
               value={name}
               onChange={handleNameChange}
               type="text"
            />

            <div>
               <InputMask
                  mask="+7 (999) 999-99-99"
                  placeholder={t('common.phone')}
                  className={`border h-[50px] border-black text-black text-[17px] my-2 rounded-[10px] w-full p-2 ${!isValid ? "text-[#7d756d]" : ""
                     }`}
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
               />
               {/* {!isValid && <p className="error-message">Введите 11 цифр</p>} */}
            </div>
            <div className='w-full flex items-center justify-center'>

               <button type='submit' disabled={isError} className={`w-[550px] h-[50px] rounded-[10px] text-white bg-[#4D382B] mx-auto ${style.btn}`}>{t('common.send')}</button>
            </div>

         </form >
         <div className='flex flex-col gap-3'>
            {/* <button disabled={!isValid} onSubmit={() => { }} className={` w-full h-[30px] rounded-[10px] text-sm flex items-center justify-center bg-white border border-[#334727] text-[#334727]`}>Перезвоним в течение минуты</button> */}
         </div>


      </div>
   )
}

export default HelpPhoneForm