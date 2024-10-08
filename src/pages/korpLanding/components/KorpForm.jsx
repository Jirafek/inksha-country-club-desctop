import { useEffect, useState } from "react"

import Button from "common/Button"
import arrow from "icons/arrow.png"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom"
import { useURLData } from "utils/URLData"
import { useTranslation } from 'react-i18next'

const Form = ({ additionalData = null,
   additionalDataType = null }) => {
   const { t } = useTranslation()
   const navigate = useNavigate()
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")

   const [isValid, setIsValid] = useState(true)
   const [phoneError] = useState("")
   const [isError, setIsError] = useState(true) // State for tracking errors
   const { utm_campaign, utm_content, utm_source } = useURLData()
   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         email: '-',
         groupID: import.meta.env.VITE_GROUP_ID,
      }


      let sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType:
            additionalDataType === null
               ? "Корп лендинг"
               : additionalDataType,
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
            setTimeout(() => {
               navigate("/thanks")
            }, 1000)
            // ... ваша существующая логика ...
            setPhone("") // Очищаем состояние телефона
            setName("") // Очищаем состояние телефона

         } else {
            alert("Произошла ошибка при отправке данных")
         }
      } catch (error) {
         console.error(error)
         alert("Произошла ошибка при отправке данных")
      }
   }

   useEffect(() => {

      // Проверка на ошибки при изменении полей формы
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


   const handleSubmit = (e) => {
      e.preventDefault()
      if (isError) {
         alert("Ошибка с номером")
         return
      }

      handleSubmitBot()
   }
   return (
      <div id="form" className="bg-brown py-[4%]">
         <div className="">
            <form
               className="montserrat flex justify-center flex-col items-center mx-auto w-[90%] md:max-w-[840px] rounded-[40px] bg-korpPrimary px-[20px] py-[30px] md:px-[50px] md:py-[70px]"
               name="Form"
               action=""
            >
               <h2 className="mb-10 text-center text-md text-white">

                  {t('korpform.leave')}
               </h2>
               <input
                  type="text"
                  placeholder={t('common.name')}
                  className="mb-5 h-[40px] pl-[25px] md:pl-[50px]  md:h-[80px] w-[80%] md:w-full rounded-[20px] bg-[#ECE9E9] p-2 text-[14px] text-black outline-none md:text-[27px]"
                  onChange={handleNameChange}
                  value={name}
               />
               <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar=" "
                  value={phone}
                  onChange={handlePhoneChange}
               >
                  {(inputProps) => (
                     <input
                        type="text"
                        placeholder={t('common.phone')}
                        className={`mb-5 h-[40px] pl-[25px] md:pl-[50px]  md:h-[80px] w-[80%] md:w-full rounded-[20px] bg-[#ECE9E9] p-2 text-[14px] text-black outline-none md:text-[27px] ${phoneError ? "border-red-500" : ""
                           }`}
                        {...inputProps}
                     />
                  )}
               </InputMask>



               <Button
                  onClick={handleSubmit}
                  className="mx-auto h-[40px]  md:h-[60px] montserrat gap-10 md:w-[600px] w-1/2 bg-brown text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
               >
                  {t('common.send')}
                  <img src={arrow} className="h-5 w-9" alt="" />
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Form
