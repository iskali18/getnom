import { getCuisineData, getAllCuisines } from '@/lib/markdown'
import Link from 'next/link'

export async function generateStaticParams() {
  const cuisines = getAllCuisines()
  return cuisines.map((cuisine: any) => ({
    slug: cuisine.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function CuisinePage({ params }: Props) {
  const { slug } = await params
  const cuisineData = await getCuisineData(slug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/cuisines" className="text-primary hover:text-secondary mb-4 inline-block">
        ← Back to Cuisines
      </Link>

      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: cuisineData.contentHtml }} />
      </article>
    </div>
  )
}
