import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <App />
        <ToastContainer/> 
  </div>  
  </React.StrictMode>// har ek toast use krne ke liye toastconatiner banana padega

)
