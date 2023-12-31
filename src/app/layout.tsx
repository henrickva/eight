import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Theme from '@/components/Theme.'
import AuthProvider from '@/components/AuthProvider'
const raleway = Raleway({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "eight's",
  description: 'the social network you will learn to love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 

  return (
    <html lang="pt-br">
        <body className={raleway.className}>
          <AuthProvider>
            <Theme>
              {children}
              <Footer />
            </Theme>
          </AuthProvider>
        </body>
    </html>
  )
}
