import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GetNom - Discover Global Cuisines & Foods',
  description: 'Understand cuisines, dishes, and food styles so you know what to order before trying something new.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                  🍜 GetNom
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/cuisines" className="text-gray-700 hover:text-primary transition">
                  Cuisines
                </Link>
                <Link href="/explore" className="text-gray-700 hover:text-primary transition">
                  Explore Foods
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">
              © 2025 GetNom. Helping you discover global cuisines with confidence.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
