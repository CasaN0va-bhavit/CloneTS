import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Syndicate | Clone',
  description: 'This is a clone of tech syndicate website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='C:/Users/bhavi/OneDrive/Desktop/TSClone/tsclone2/components/ts.png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
