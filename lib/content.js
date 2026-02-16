import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content')

export function getCuisine(slug) {
  const fullPath = path.join(contentDirectory, 'cuisines', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const { data, content } = matter(fileContents)
  const htmlContent = marked(content)
  
  return {
    slug,
    frontmatter: data,
    content: htmlContent
  }
}

export function getAllCuisines() {
  const cuisinesDirectory = path.join(contentDirectory, 'cuisines')
  const filenames = fs.readdirSync(cuisinesDirectory)
  
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      return getCuisine(slug)
    })
}
