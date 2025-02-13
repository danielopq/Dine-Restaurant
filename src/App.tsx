import { Route, Routes } from 'react-router-dom';
import Home from './assets/components/home/Home';
import Reservations from './assets/components/reservations/Reservations';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservations />} />
      </Routes>
    </>
  )
}

export default App
