import { getExploreFoodData, getAllExploreFoods } from '@/lib/markdown'
import Link from 'next/link'

export async function generateStaticParams() {
  const foods = getAllExploreFoods()
  return foods.map((food: any) => ({
    slug: food.slug,
  }))
}

export default async function ExploreFoodPage({ params }: { params: { slug: string } }) {
  const foodData = await getExploreFoodData(params.slug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/explore" className="text-primary hover:text-secondary mb-4 inline-block">
        ← Back to Explore Foods
      </Link>
      
      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: foodData.contentHtml }} />
      </article>
    </div>
  )
}
