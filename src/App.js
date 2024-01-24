import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Home from './components/Home';
import Pay from './components/Pay';
function App() {



  return (
    <>
    <div className=" flex">
      <div className='my-4 mx-4'>
    <img src="/products/logo.png" alt="logo" width ="100" height="100"/>
    </div>
    <h1 className=' my-4 w-full flex justify-center font-bold text-4xl grow'>
      Shop Here
    </h1>
    <a href="https://portfolio1-kappa-puce.vercel.app/learnings/quickmart" target="_blank">
    <h2 className='my-3 mx-2 text-2xl'>
      {/* Learnings */}
    </h2>
    </a>
    </div>


    <BrowserRouter>
     <Footer/> 
  <Routes>
 
  <Route path = "/" element={<Home/>}/>
  <Route path = "/checkout" element={<Checkout/>}/>
  <Route path = "/pay" element={<Pay/>}/>
  </Routes>

  
  </BrowserRouter>
    </>
  );
}

export default App;
