import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AddItems from './Pages/BeUser/AddItems';
import ManageInventory from './Pages/BeUser/ManageInventorys';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Inventorys from './Pages/Home/Inventory/Inventorys';
import InventoryDetails from './Pages/Home/InventoryDetails/InventoryDetails';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import ProtectedRoute from './Pages/Shared/ProtectedRoute'; import Blogs from './Pages/Home/Blogs';
import NotFound from './Pages/Shared/NotFound';
import MyItems from './Pages/BeUser/MyItems';
import BlogDetails from './Pages/Home/BlogDetails';
import { useEffect, useState } from 'react';
import CycleLoading from './components/Loading/CycleLoading';
;
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CycleLoading />;
  }
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
        <Route path="/manageInventory" element={
          <ProtectedRoute>
            <ManageInventory />
          </ProtectedRoute>
        }></Route>
        <Route path="/addInventory" element={
          <ProtectedRoute>
            <AddItems />
          </ProtectedRoute>
        }></Route>
        <Route path="/myItems" element={
          <ProtectedRoute>
            <MyItems />
          </ProtectedRoute>
        }></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={
          <ProtectedRoute>
            <BlogDetails />
          </ProtectedRoute>
        }></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
