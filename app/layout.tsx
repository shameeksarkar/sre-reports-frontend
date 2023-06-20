import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Site Reliability Engineering'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='container mx-auto max-w-6xl'>{children}</body>
    </html>
  )
}
