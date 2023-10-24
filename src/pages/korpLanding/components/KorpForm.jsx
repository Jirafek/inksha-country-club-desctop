import React, { useState } from "react";
import Button from "common/Button";
import arrow from "icons/arrow.png";
import InputMask from "react-input-mask";
import { URLData } from "./../../../utils/URLData";
const Form = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");

   const [phoneError, setPhoneError] = useState("");

   const handleSubmit = async () => {
      const data = {
         name: name,
         phone: phone,
         email: email,
         groupID: 981875757,
      };

      const sendingData = {
         ...data,
         source: "https://mobile.ikshacountryclub.com",
         formType: "Корпоратив лендинг",
         link: window.location.href,
         ...URLData,
      };

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
         );

         if (response.ok) {
            setTimeout(() => {
               setName("");
               setPhone("");
               setNavigation(true);
               navigate("/thanks");
            }, 1000);
         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }
   };
   const validatePhoneNumber = (phoneNumber) => {
      const phonePattern = /^\+?([0-9]{1,4})?[0-9]{10}$/; // Пример регулярного выражения
      return phonePattern.test(phoneNumber);
   };

   return (
      <div className="bg-brown pt-[14%]">
         <div className="">
            <form
               className="montserrat mx-auto max-w-[840px] rounded-[40px] bg-black px-[50px] py-[70px]"
               name="Form"
               action=""
            >
               <h2 className="mb-10 text-center text-md text-white">
                  Оставьте ваши данные, и наш менеджер свяжется с вами для
                  уточнения деталей
               </h2>
               <input
                  type="text"
                  placeholder="Имя"
                  className="mb-5 h-[80px] w-full rounded-[20px] bg-[#ECE9E9] p-2 text-[20px] text-black outline-none md:text-[27px]"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
               />
               <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar=" "
                  value={phone}
                  onChange={(e) => {
                     setPhone(e.target.value);
                  }}
               >
                  {(inputProps) => (
                     <input
                        type="text"
                        placeholder="Телефон"
                        className={`mb-5 h-[80px] w-full rounded-[20px] bg-[#ECE9E9] p-2 text-[20px] text-black outline-none md:text-[27px] ${
                           phoneError ? "border-red-500" : ""
                        }`}
                        {...inputProps}
                     />
                  )}
               </InputMask>

               <input
                  type="text"
                  placeholder="Email"
                  className="mb-5 h-[80px] w-full rounded-[20px] bg-[#ECE9E9] p-2 text-[20px] text-black outline-none md:text-[27px]"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
               />

               <Button
                  onClick={handleSubmit}
                  className="mx-auto  h-[40px] w-1/2 bg-brown text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
               >
                  Отправить
                  <img src={arrow} className="h-5 w-9" alt="" />
               </Button>
            </form>
         </div>
      </div>
   );
};

export default Form;
