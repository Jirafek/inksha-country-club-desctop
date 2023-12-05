import { lazy, useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AnimationButton from "./common/AnimationButton";
import MainPopup from "./common/MainPopup";
import { BooleanParam, useQueryParam } from "use-query-params";
import Cookies from "js-cookie";
import { updateURLData, useURLData } from "utils/URLData";
import Cookie from './common/Cookie';
import NYLanding from 'pages/newYear/NYLanding';
// import Korporativy from "./pages/Korporativy";
// import Keytering from "./pages/Keytering";
// import Home from "./pages/Home";
// import Privacy from "./pages/Privacy";
// import LocationId from "./pages/LocationId";
// import FAQ from "./pages/FAQ";
// import Thanks from "./pages/Thanks";
// import Helloween from "./pages/Helloween";

const NotFound = () => {
   return (
      <section className="relative h-screen bg-[#201E1F]">
         <div className="flex h-full w-screen flex-col items-center justify-center">
            <h1 className="text-[64px] text-white">404</h1>
            <Link
               className="border border-[#AB8E67] px-8 py-1 text-[26px] text-white duration-500 hover:bg-[#AB8E67]"
               to={"/"}
            >
               На главную
            </Link>
         </div>
      </section>
   );
};

const Home = lazy(() => import("pages/Home"));
const Keytering = lazy(() => import("pages/Keytering"));
const LocationId = lazy(() => import("pages/LocationId"));
const Korporativy = lazy(() => import("pages/Korporativy"));
const FAQ = lazy(() => import("pages/FAQ"));
const Privacy = lazy(() => import("pages/Privacy"));
const Thanks = lazy(() => import("pages/Thanks"));
const Helloween = lazy(() => import("pages/Helloween"));
const KorpLanding = lazy(() => import("pages/korpLanding/KorpLanding"));
// const NYLanding = lazy(() => import("pages/newYear/NYLanding"));

function App() {
   const { updateData, utm_campaign, utm_content, utm_source } = useURLData();

   useEffect(() => {
      setUrlParams();
   }, []);

   const setUrlParams = (isCoockieOnRight = undefined) => {
      const isCookieOn = Cookies.get('cookies_on');

      if (isCoockieOnRight === undefined && isCookieOn === undefined) {
         return;
      }

      if (isCoockieOnRight === 'false') {
         return;
      }

      const urlParams = new URLSearchParams(window.location.search);

      const cookieData = {
         utm_source: Cookies.get('utm_source'),
         utm_campaign: Cookies.get('utm_campaign'),
         utm_content: Cookies.get('utm_content'),
      };


      const UTMSource = urlParams.get("utm_source") ? (urlParams.get("utm_source").toLowerCase().includes('vk') ? 'vkontakte' : urlParams.get("utm_source")) : '';

      const settedData = [
         cookieData.utm_source !== undefined ? cookieData.utm_source : utm_source
             ? utm_source
             : UTMSource || "Сайт",

         cookieData.utm_campaign !== undefined ? cookieData.utm_campaign : utm_campaign
             ? utm_campaign
             : urlParams.get("utm_campaign") || "",

         cookieData.utm_content !== undefined ? cookieData.utm_content : utm_content
             ? utm_content
             : urlParams.get("utm_content") || ""
      ];

      console.log(settedData);

      updateData(
         ...settedData
      );

      updateURLData(
          ...settedData
      );

      if (cookieData.utm_source === undefined && UTMSource !== null) {
         Cookies.set('utm_source', UTMSource, { expires: Infinity })
      }
      if (cookieData.utm_campaign === undefined && urlParams.get("utm_campaign") !== null) {
         Cookies.set('utm_campaign', urlParams.get("utm_campaign"), { expires: Infinity });
      }
      if (cookieData.utm_content === undefined && urlParams.get("utm_content") !== null) {
         Cookies.set('utm_content', urlParams.get("utm_content"), { expires: Infinity });
      }
   }

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const isCookieOn = Cookies.get('cookies_on');
   const [isCookieOpen, setIsCookieOpen] = useState(isCookieOn === undefined ? true : isCookieOn !== 'true');
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev);
   };
   const [isKorpOpen, setIsKorpOpen] = useQueryParam("korpOpen", BooleanParam);
   const toggleKorp = () => {
      setIsKorpOpen((prev) => !prev);
   };
   return (
      <div>
         <Cookie isCookieOpen={isCookieOpen} setIsCookieOpen={setIsCookieOpen} callBack={setUrlParams} />
         <div className="fixed bottom-[20px] right-[240px] z-[10000]">
            <AnimationButton
               h={72}
               w={72}
               className=" flex  justify-end shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
               onClick={togglePopup}
            // onClick={() => {
            //    setIsKorpOpen(!isKorpOpen);
            // }}
            >
               Свяжитесь со мной
            </AnimationButton>
         </div>
         <MainPopup togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
         <Korporativy toggleKorp={toggleKorp} isKorpOpen={isKorpOpen} />
         <Routes className="relative">
            <Route
               path="/"
               element={
                  <Home togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
               }
            />
            <Route path="/keytering" element={<Keytering />} />
            <Route path="/location/:id" element={<LocationId />} />
            {/* <Route
               path="/korporativy"
               element={}
            /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/halloween" element={<Helloween />} />
            <Route path="/korp-landing" element={<KorpLanding />} />
            <Route path="/New-Year" element={<NYLanding />} />
            <Route
               path="/rules"
               element={<Privacy title={"Правила проживания"} />}
            />

            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
