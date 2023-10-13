import { lazy, useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AnimationButton from "./common/AnimationButton";
import MainPopup from "./common/MainPopup";

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

function App() {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev);
   };

   return (
      <div>
         <AnimationButton
            h={72}
            w={72}
            className="fixed bottom-[20px] right-[240px] z-[10000] flex min-w-[300px] justify-end"
            onClick={togglePopup}
         >
            Свяжитесь со мной
         </AnimationButton>
         <MainPopup togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
         <Routes className="relative">
            <Route
               path="/"
               element={
                  <Home togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
               }
            />
            <Route path="/keytering" element={<Keytering />} />
            <Route path="/location/:id" element={<LocationId />} />
            <Route path="/korporativy" element={<Korporativy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/halloween" element={<Helloween />} />
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
