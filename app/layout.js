import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'GetNom - Understand Global Cuisines',
  description: 'Learn what to order at restaurants with confidence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-orange-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold hover:text-orange-100">
                🍜 GetNom
              </Link>
              <div className="flex gap-6">
                <Link href="/cuisines/thai" className="hover:text-orange-100">
                  Thai
                </Link>
                {/* More cuisines will go here */}
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-gray-100 mt-16 py-8 text-center text-gray-600">
          <p>© 2025 GetNom - Explore Food with Confidence</p>
        </footer>
      </body>
    </html>
  )
}
