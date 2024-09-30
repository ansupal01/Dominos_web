import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Menu from './Pages/Menu'
import Orders from './Pages/Orders'
import Services from './Pages/Services'
// import TrialMenu from './Pages/TrialMenu'

function App() {
  return (
    <div>
      <BrowserRouter>   
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          {/* <Route path='/tiralmenu' element='{<TrialMenu/>}'></Route> */}
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;