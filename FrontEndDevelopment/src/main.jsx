import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  // check the spelling and if the dependencies are not installed go to the specific folder and install it there
  <BrowserRouter>
   {/* you have to use the cartprovider which has been used in the cartcontext page also */}
    <CartProvider> 
      <App />
    </CartProvider>
  </BrowserRouter>,
)
