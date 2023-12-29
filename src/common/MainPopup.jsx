import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useURLData } from 'utils/URLData'
import close from "./../assets/close.png"
import FormInput from "./FormInput"
import TellInput from "./TellInput"
import { useTranslation } from 'react-i18next'

const MainPopup = ({ isPopupOpen, togglePopup, additionalData = null, additionalDataType = null }) => {
   const { t } = useTranslation()
   const { utm_campaign, utm_content, utm_source } = useURLData()
   const [isPopupCompleted, setIsPopupCompleted] = useState(false)
   const [isError, setIsError] = useState(true)
   const [name, setName] = useState("")
   const [isValid, setIsValid] = useState(true)
   const [phone, setPhone] = useState("")
   const navigate = useNavigate()

   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         email: "-",
         groupID: import.meta.env.VITE_GROUP_ID,
      }

      let sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: additionalDataType === null ? t('form.namePhoneForm') : additionalDataType,
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
         } else {
            alert(t('form.submitError'))
         }
      } catch (error) {
         console.error(error)
         alert(t('form.submitError'))
      }
   }

   useEffect(() => {
      const newIsError = !name || !phone || !isValid
      setIsError(newIsError)
   }, [name, phone])

   const handlePhoneChange = (e) => {
      const inputValue = e.target.value
      const numericValue = inputValue.replace(/[^\d]/g, "")
      const isValidPhone = numericValue.length === 11
      setPhone(numericValue)
      setIsValid(isValidPhone)
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
      const data = {
         name,
         phone,
         email: "-",
      }
      handleSubmitBot()
      setPhone("")
      setName("")
      setIsPopupCompleted(!isPopupCompleted)
   }

   return (
      <div className="montery">
         {isPopupOpen && (
            <div>
               {isPopupCompleted ? (
                  <div className={`fixed left-1/2 top-1/2 z-[2000] flex min-h-[300px] w-[70%] -translate-x-1/2  -translate-y-1/2 transform flex-col  items-center justify-center rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl lg:w-[60%]`}>
                     <div className="absolute right-5 top-5">
                        <img className="h-7 w-7 cursor-pointer object-cover" onClick={handlePopupClose} src={close} alt="close" />
                     </div>
                     <p className="text-[16px] font-bold text-[#6C6053]">
                        {t('form.successMessage')}
                     </p>
                     <button onClick={handlePopupClose} className={`mt-4 flex h-[40px] w-full items-center justify-center rounded-[10px] border bg-[#7C6F61] text-white`}>
                        {t('form.close')}
                     </button>
                  </div>
               ) : (
                  <div className="fixed left-1/2 top-1/2 z-[2000] flex min-h-[300px] w-[70%] -translate-x-1/2  -translate-y-1/2 transform flex-col  items-center justify-center rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl lg:w-[60%]">
                     <div className="absolute right-5 top-5">
                        <img className="h-7 w-7 cursor-pointer object-cover" onClick={togglePopup} src={close} alt="close" />
                     </div>
                     <p className="text-[25px] font-bold text-[#6C6053]">
                        {t('form.fillForm')}
                     </p>
                     <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
                        <FormInput
                           placeholder={t('common.name')}
                           name="name"
                           value={name}
                           onChange={handleNameChange}
                           type="text"
                        />
                        <TellInput
                           value={phone}
                           isValid={isValid}
                           onChange={handlePhoneChange}
                        />
                        <button type="submit" disabled={isError} className={`h-[40px] rounded-[10px] ${isError ? "border-none bg-[#D0C9C9]" : "white border-[2px] border-green-400"} w-full`}>
                           {t('form.send')}
                        </button>
                     </form>
                  </div>
               )}
            </div>
         )}
      </div>
   )
}

export default MainPopup
