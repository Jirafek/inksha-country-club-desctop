import { domAnimation, LazyMotion } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./fonts.css";
import "./index.css";
import "./fonts/Lato-Regular.ttf";
import "./fonts/MontserratAlternates-Regular.ttf";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { QueryParamProvider } from "use-query-params";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
         <LazyMotion features={domAnimation} strict>
            <Suspense
               fallback={
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                     {" "}
                     <img
                        src="/image/download.gif"
                        alt="Изображение анимации загрузки"
                     />{" "}
                  </div>
               }
            >
               <AppWithDelay />
            </Suspense>
         </LazyMotion>
      </QueryParamProvider>
   </BrowserRouter>
);

function AppWithDelay() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleResize = () => {
      setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
      // Установка лиснера при монтировании
      window.addEventListener("resize", handleResize);

      // Удаление лиснера при размонтировании
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   // Выводим сообщение в консоль, если ширина экрана меньше 421 пикселя
   if (windowWidth < 768) {
      // const currentUrl = window.location.href;
      // const paramsOnly = currentUrl.split("?")[1];

      // let dops = "";

      // if (currentUrl.includes("halloween")) {
      //    dops = "/halloween";
      // }

      window.location.href = `https://mobile.ikshacountryclub.com` + window.location.search;
   }
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 3000);
   }, []);

   return isLoading ? (
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4">
         {" "}
         <p className="text-center text-[22px] font-bold">Загрузка</p>{" "}
         <img
            className="rounded-[15px]"
            src="/image/download.gif"
            alt="Изображение анимации загрузки"
         />{" "}
      </div>
   ) : (
      <App />
   );
}
