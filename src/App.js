import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Login/Signup';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
