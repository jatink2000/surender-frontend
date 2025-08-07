import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import { useState } from 'react';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import DashboardLayout from './components/DashboardLayout';
import Category from './pages/Category';
import Orders from './pages/Orders';
import Seller from './pages/Seller';
import Customers from './pages/Customers';
import Reviews from './pages/Reviews';
import MenuLevel from './pages/MenuLevel';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import AddProduct from './pages/AddProduct';
import AddCategory from './pages/AddCategory';
import Checkout from './pages/Checkout';
// import DashboardLayout from './layouts/DashboardLayout'; // 👈 new import

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();
  
  const hideNavbarPaths = ['/signin', '/signup', '/forgotpassword'];
const hideNavbar = location.pathname.startsWith('/dashboard') || hideNavbarPaths.includes(location.pathname);


  // const hideNavbar = location.pathname.startsWith('/dashboard');

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />

      {!hideNavbar && (
        <>
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
      )}

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/Checkout' element={<Checkout />} />

        {/* Dashboard Layout with nested routes */}
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='categories' element={<Category />} />
          <Route path='orders' element={<Orders />} />
          <Route path='sellers' element={<Seller />} />
          <Route path='customers' element={<Customers />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='menulevel' element={<MenuLevel />} />
          <Route path='Products/AddProducts' element={<AddProduct />} />
          <Route path='Categories/AddCategory' element={<AddCategory />} />
          {/* Add more dashboard routes here */}
        
        </Route>
      </Routes>
    </>
  );
}

export default App;
