import Link from 'next/link'

export default function Home() {
  const cuisines = [
    { name: 'Indian', slug: 'indian', emoji: '🇮🇳' },
    { name: 'Thai', slug: 'thai', emoji: '🇹🇭' },
    { name: 'Japanese', slug: 'japanese', emoji: '🇯🇵' },
    { name: 'Vietnamese', slug: 'vietnamese', emoji: '🇻🇳' },
    { name: 'Mexican', slug: 'mexican', emoji: '🇲🇽' },
    { name: 'BBQ', slug: 'bbq', emoji: '🔥' },
  ]

  const exploreFoods = [
    { name: 'Curries Around the World', slug: 'curries', emoji: '🍛' },
    { name: 'Noodles & Pasta', slug: 'noodles', emoji: '🍜' },
    { name: 'Soups & Stews', slug: 'soups', emoji: '🍲' },
    { name: 'Sandwiches Worldwide', slug: 'sandwiches', emoji: '🥪' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Know What to Order<br />Before You Try It
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            GetNom explains global cuisines and dishes so you can explore new foods with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/cuisines" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Browse Cuisines
            </Link>
            <Link 
              href="/explore" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-orange-50 transition"
            >
              Explore Foods
            </Link>
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Cuisines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuisines.map((cuisine) => (
            <Link
              key={cuisine.slug}
              href={`/cuisines/${cuisine.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
            >
              <div className="text-4xl mb-3">{cuisine.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900">{cuisine.name}</h3>
              <p className="text-gray-600 mt-2">
                Learn what to order and how to navigate {cuisine.name.toLowerCase()} menus
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore Foods Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Foods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exploreFoods.map((food) => (
              <Link
                key={food.slug}
                href={`/explore/${food.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
              >
                <div className="text-4xl mb-3">{food.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900">{food.name}</h3>
                <p className="text-gray-600 mt-2">
                  Compare versions from different cultures around the world
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          How GetNom Helps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Know Before You Go</h3>
            <p className="text-gray-600">
              Understand dishes before you step into a restaurant
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🪜</div>
            <h3 className="text-lg font-semibold mb-2">Progress at Your Pace</h3>
            <p className="text-gray-600">
              Start with beginner-friendly options, explore when ready
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Discover Globally</h3>
            <p className="text-gray-600">
              Compare how different cultures prepare similar foods
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
