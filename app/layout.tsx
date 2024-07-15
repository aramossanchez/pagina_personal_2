import type { Metadata } from 'next';

// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'Armando Ramos Sánchez - Web personal',
  description: '¡Conóceme!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>
        
      <link rel='icon' href='/images/logo.png' sizes='any' />
        {children}
      </body>
    </html>
  )
}