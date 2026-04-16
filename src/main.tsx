import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    ) : (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Missing Clerk config</h1>
        <p>Set VITE_CLERK_PUBLISHABLE_KEY in frontend/.env and restart npm run dev.</p>
      </div>
    )}
  </StrictMode>,
)
