import './globals.css'
import { Nunito } from 'next/font/google'

// setting nunito as default text font
const nunito = Nunito({ subsets: ['latin'] })

// title and description show up while sharing links, in browser tabs and search results
export const metadata = {
  title: 'Nurture - Mental Health & Well-being',
  description: 'a community service project by VITB students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={nunito.className}>
          {children}
        </body>
    </html>
  )
}