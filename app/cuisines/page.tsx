import Link from 'next/link'

export default function CuisinesPage() {
  const cuisines = [
    { name: 'Indian', slug: 'indian', emoji: '🇮🇳', description: 'Rich spices, curries, and diverse regional flavors' },
    { name: 'Thai', slug: 'thai', emoji: '🇹🇭', description: 'Balance of sweet, sour, salty, and spicy' },
    { name: 'Japanese', slug: 'japanese', emoji: '🇯🇵', description: 'Fresh ingredients with subtle, refined flavors' },
    { name: 'Vietnamese', slug: 'vietnamese', emoji: '🇻🇳', description: 'Light, fresh, herb-forward dishes' },
    { name: 'Mexican', slug: 'mexican', emoji: '🇲🇽', description: 'Bold flavors with corn, beans, and chilies' },
    { name: 'BBQ', slug: 'bbq', emoji: '🔥', description: 'Slow-smoked meats from American and global traditions' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Cuisines</h1>
      <p className="text-xl text-gray-600 mb-12">
        Learn what to order and how to navigate menus from around the world
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.slug}
            href={`/cuisines/${cuisine.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
          >
            <div className="text-5xl mb-4">{cuisine.emoji}</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{cuisine.name}</h2>
            <p className="text-gray-600">{cuisine.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
