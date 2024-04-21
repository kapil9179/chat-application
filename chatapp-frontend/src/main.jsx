import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './contextApi/Context.jsx'
import ContextPersonProvider from "./contextApi/contextperson.jsx";
import ThemeContextProvider from './contextApi/ThemeContext.jsx';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import { ThemeContext } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ContextProvider>
      <ContextPersonProvider>
      <ThemeContextProvider>
         <App />
     </ThemeContextProvider>
     </ContextPersonProvider>
     <ToastContainer/>
    </ContextProvider>
)
