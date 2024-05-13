import { RouterProvider } from "react-router-dom"
import { router } from "@/router/routes"
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '@/styles/theme'
import { Provider } from "@/states/context"
import './global.css';


function App() {

  return (
    <ThemeUIProvider theme={theme}>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </ThemeUIProvider>
  )
}

export default App
