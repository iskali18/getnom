import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getCuisineData(slug: string) {
  const fullPath = path.join(contentDirectory, 'cuisines', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  }
}

export function getAllCuisines() {
  const cuisinesDirectory = path.join(contentDirectory, 'cuisines')
  
  if (!fs.existsSync(cuisinesDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(cuisinesDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(cuisinesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        ...data,
      }
    })
}

export async function getExploreFoodData(slug: string) {
  const fullPath = path.join(contentDirectory, 'explore', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  }
}

export function getAllExploreFoods() {
  const exploreDirectory = path.join(contentDirectory, 'explore')
  
  if (!fs.existsSync(exploreDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(exploreDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(exploreDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        ...data,
      }
    })
}
