import { domAnimation, LazyMotion } from 'framer-motion';
import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts.css';
import './index.css';
import './fonts/Lato-Regular.ttf'
import './fonts/MontserratAlternates-Regular.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LazyMotion features={domAnimation} strict>
      <Suspense fallback={<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <img src="/image/download.gif" alt="Изображение анимации загрузки" /> </div>}>
        <AppWithDelay />
      </Suspense>
    </LazyMotion>
  </BrowserRouter>
);

function AppWithDelay() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Установка лиснера при монтировании
    window.addEventListener('resize', handleResize);

    // Удаление лиснера при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Выводим сообщение в консоль, если ширина экрана меньше 421 пикселя
  if (windowWidth < 768) {
    const currentUrl = window.location.href;
    const paramsOnly = currentUrl.split('?')[1];

    let dops = '';

    if (currentUrl.includes('halloween')) {
      dops = '/halloween';
    }

    window.location.href = `https://mobile.ikshacountryclub.com${dops}/?${paramsOnly}`;
  }
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4'> <p className='font-bold text-[22px] text-center'>Загрузка</p> <img className='rounded-[15px]' src="/image/download.gif" alt="Изображение анимации загрузки" /> </div> : <App />;
}
