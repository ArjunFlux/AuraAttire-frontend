import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import HeroSection from './Components/HeroSection/HeroSection'
import FirstPage from './Components/FirstPage/FirstPage'
import ProductPage from './pages/ProductPage'
import BestSellerPage from './Components/BestSellerPage/BestSellerPage'
import BestProductPage from './pages/BestProductPage'
import FooterPage from './Components/FooterPage/FooterPage'
import ContactPage from './pages/ContactPage'
import AboutUsPage from './pages/AboutUsPage'
import Collection from './Components/Collection/Collection'
import SearchFilter from './pages/SearchFilter'
import LoginPage from './pages/LoginPage'
import SignInPage from './pages/SignInPage'
import AddtoCart from './pages/AddtoCart'
import BuyNowPage from './pages/BuyNowPage'
import PaymentPage from './pages/PaymentPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const location = useLocation();
  const noFooterPages = ['/login', '/SignIn', '/buynow',"/wishlist","/about","/contact"]
  const showFooter = !noFooterPages.includes(location.pathname)
  return (
    <div>
      <ToastContainer />
      {/* navbar should load always but the HeroSection and the FirstPage is to be load only when the 
      path is / which means home page and the ProductPage should be load when the the url is /product.:id  */}
      <NavBar/>
      <Routes> 
        <Route path='/' element={
          <>
            <HeroSection/>
            <FirstPage/>
            <BestSellerPage/>
          </>
        }/>
        <Route path='/product/:id' element={
            <ProductPage/>
        }/>
        <Route path='/collection/:id' element={
            <ProductPage/>
        }/>
        <Route path='/Bestproduct/:id' element={
            <BestProductPage/>
        }/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/payment' element={
            <PaymentPage/>
        }/>
        <Route path='/collection' element={
            <Collection/>
        }/>
        <Route path='/search' element={
            <SearchFilter/>
        }/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/SignIn' element={<SignInPage/>}/>
        <Route path='/wishlist' element={
            <AddtoCart/>
        }/>
        <Route path='/buynow' element={
            <BuyNowPage/>
        }/>
      </Routes>
      {showFooter && <FooterPage/>}
    </div>
  )
}
export default App
