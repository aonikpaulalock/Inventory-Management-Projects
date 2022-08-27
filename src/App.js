import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Inventorys from './Pages/Home/Inventory/Inventorys';
import InventoryDetails from './Pages/Home/InventoryDetails/InventoryDetails';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import ProtectedRoute from './Pages/Shared/ProtectedRoute';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/inventory" element={<Inventorys />}></Route>
        <Route path="/inventory/:id" element={
          <ProtectedRoute>
            <InventoryDetails />
          </ProtectedRoute>
        }></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
