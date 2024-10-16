import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Todoheader from './Components/Todoheader.jsx'
import Cardbody from './Components/Cardbody.jsx'

createRoot(document.getElementById('root')).render(
   <App/>
)
