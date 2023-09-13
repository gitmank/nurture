import SessionProviderClientComponent from '@/components/SessionProviderClientComponent'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

// setting nunito as default text font
const nunito = Nunito({ subsets: ['latin'] })

// title and description show up while sharing links, in browser tabs and search results
export const metadata: Metadata = {
  title: 'Nurture - Mental Health & Well-being',
  description: 'built by Team Nurture for SIH 2023',
}

// adding SessionProvider to use useSession() in client components
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProviderClientComponent>
        <body className={nunito.className}>
          {children}
        </body>
      </SessionProviderClientComponent>
    </html>
  )
}
