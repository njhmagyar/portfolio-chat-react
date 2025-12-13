import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft, faArrowRight)

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
