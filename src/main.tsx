import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvider} from './components/ui/provider.tsx'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
       <QueryClientProvider client={new QueryClient()}>
         <App />
       </QueryClientProvider>
    </ChakraProvider>
   
  </StrictMode>,
)
