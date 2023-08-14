import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const NotFound = () => {
  return <Navigate to="/" />;
}

const Home = lazy(() => import('pages/Home'));
const Keytering = lazy(() => import('pages/Keytering'));
const LocationId = lazy(() => import('pages/LocationId'));
const Korporativy = lazy(() => import('pages/Korporativy'));
const FAQ = lazy(() => import('pages/FAQ'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/keytering' element={<Keytering />} />
      <Route path='/location/:id' element={<LocationId />} />
      <Route path='/korporativy' element={<Korporativy />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
