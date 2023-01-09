import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import All from './components/All';
import Design from './components/Design';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Learn from './components/Learn';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <All />
      <Routes>
        <Route path='/learn' element={<Learn/>} />
        <Route path='/' element={<Design/>} />
        <Route path='/design' element={<Design />} />
        <Route path='/frontend' element={<Frontend />} />
        <Route path='/backend' element={<Backend />} />
      </Routes>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
