import Link from 'next/link'

export default function ExplorePage() {
  const exploreFoods = [
    { 
      name: 'Curries Around the World', 
      slug: 'curries', 
      emoji: '🍛',
      description: 'Compare curry styles from India, Thailand, Japan, and beyond'
    },
    { 
      name: 'Noodles & Pasta', 
      slug: 'noodles', 
      emoji: '🍜',
      description: 'Explore noodle traditions from Asia to Italy'
    },
    { 
      name: 'Soups & Stews', 
      slug: 'soups', 
      emoji: '🍲',
      description: 'Global soup traditions from pho to pozole'
    },
    { 
      name: 'Sandwiches Worldwide', 
      slug: 'sandwiches', 
      emoji: '🥪',
      description: 'Handheld foods from banh mi to bocadillo'
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Foods</h1>
      <p className="text-xl text-gray-600 mb-12">
        Compare how different cultures prepare similar types of food
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exploreFoods.map((food) => (
          <Link
            key={food.slug}
            href={`/explore/${food.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-8 border border-gray-200"
          >
            <div className="text-6xl mb-4">{food.emoji}</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{food.name}</h2>
            <p className="text-gray-600">{food.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
