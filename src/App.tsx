import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

function App() {
  return (
    <BrowserRouter>
      <CheckoutContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </CheckoutContextProvider>
    </BrowserRouter>
  )
}

export default App
