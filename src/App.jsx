import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Keytering = lazy(() => import('pages/Keytering'));
const LocationId = lazy(() => import('pages/LocationId'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/keytering' element={<Keytering />} />
      <Route path='/location/:id' element={<LocationId />} />
    </Routes>
  );
}

export default App;
