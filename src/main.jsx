import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/js/src/collapse.js";
import { BrowserRouter } from 'react-router-dom'
import { GeneralContextProvider } from './context/GeneralContext.jsx'
import { ThemeProvider } from 'styled-components'
import { ThemeColors } from './Styled/Theme/Theme.js'
import { GlobalStyles } from './Styled/Global/GlobalStyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeColors}>
    <GlobalStyles/>
    <GeneralContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GeneralContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
