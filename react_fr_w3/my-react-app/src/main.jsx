// tis honestky good to finally put my hands on this project as it will help me in knowing react
// special thanks to W3Schools ; as I was learning this via their platform

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//the `createRoot` function  is a built-in function 
// that is used to create a root node for a React application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
