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
import CheckAutehnication from '../../BackEndDevelopment/Middleware/CheckAuthentication'
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
          <CheckAutehnication>
            <ProductPage/>
          </CheckAutehnication>
        }/>
        <Route path='/collection/:id' element={
          <CheckAutehnication>
            <ProductPage/>
          </CheckAutehnication>
        }/>
        <Route path='/Bestproduct/:id' element={
          <CheckAutehnication>
            <BestProductPage/>
          </CheckAutehnication>
        }/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/payment' element={
          <CheckAutehnication>
            <PaymentPage/>
          </CheckAutehnication>
        }/>
        <Route path='/collection' element={
          <CheckAutehnication>
            <Collection/>
          </CheckAutehnication>
        }/>
        <Route path='/search' element={
          <CheckAutehnication>
            <SearchFilter/>
          </CheckAutehnication>
        }/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/SignIn' element={<SignInPage/>}/>
        <Route path='/wishlist' element={
          <CheckAutehnication>
            <AddtoCart/>
          </CheckAutehnication>
        }/>
        <Route path='/buynow' element={
          <CheckAutehnication>
            <BuyNowPage/>
          </CheckAutehnication>
        }/>
      </Routes>
      {showFooter && <FooterPage/>}
    </div>
  )
}
export default App
