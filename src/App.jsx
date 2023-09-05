import { lazy, useEffect, useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

const NotFound = () => {
  return <section className='bg-[#201E1F] h-screen relative'>
    <div className='h-full w-screen flex flex-col justify-center items-center'>
      <h1 className='text-[64px] text-white'>404</h1>
      <Link className='text-[26px] hover:bg-[#AB8E67] duration-500 py-1 px-8 border border-[#AB8E67] text-white' to={'/'}>На главную</Link>
    </div>
  </section>;
}

const Home = lazy(() => import('pages/Home'));
const Keytering = lazy(() => import('pages/Keytering'));
const LocationId = lazy(() => import('pages/LocationId'));
const Korporativy = lazy(() => import('pages/Korporativy'));
const FAQ = lazy(() => import('pages/FAQ'));
const Privacy = lazy(() => import('pages/Privacy'));
const Thanks = lazy(() => import('pages/Thanks'));

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/keytering' element={<Keytering />} />
      <Route path='/location/:id' element={<LocationId />} />
      <Route path='/korporativy' element={<Korporativy />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/thanks' element={<Thanks />} />
      {/* <Route path='/privacy' element={<Privacy title={'Политика данных'} />} /> */}
      <Route path='/rules' element={<Privacy title={'Правила проживания'} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
