import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Condact from './Components/Condact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <br>
     
     </br>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/contact' element={<Condact/>}></Route>
      
      
      </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
