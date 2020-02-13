import { SitemapStream, streamToPromise } from 'sitemap'
import data from './_data/collection'
const { createGzip } = require('zlib')


export default (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    })
    const pipeline = smStream.pipe(createGzip())

    const art_collections = data.filter(item => item.collectionType === 'Art')
    const design_collections = data.filter(item => item.collectionType === 'Design')
    const web_projects = data.filter(item => item.projectType === 'Web')

    smStream.write({
      url: '/',
      changefreq: 'daily',
      priority: 0.9
    })
    smStream.write({
      url: '/about',
      changefreq: 'daily',
      priority: 0.9
    })
    smStream.write({
      url: '/contact',
      changefreq: 'daily',
      priority: 0.9
    })
    smStream.write({
      url: 'https://shop.jsnkng.com/',
      changefreq: 'daily',
      priority: 0.9
    })
    smStream.write({
      url: '/projects/Web',
      changefreq: 'daily',
      priority: 0.9
    })
    smStream.write({
      url: '/collections/Art',
      changefreq: 'daily',
      priority: 0.9
    })
    smStream.write({
      url: '/collections/Design',
      changefreq: 'daily',
      priority: 0.9
    })


    art_collections.forEach(collection => {
      smStream.write({
        url: `/collections/Art/collection/${collection.collectionName}`,
        changefreq: 'daily',
        priority: 0.9
      })
      collection.images.forEach(image => {
        smStream.write({
          url: `/collections/Art/collection/${collection.collectionName}/image/${image.name}`,
          changefreq: 'daily',
          priority: 0.9
        })
      })
    })

    design_collections.forEach(collection => {
      smStream.write({
        url: `/collections/Design/collection/${collection.collectionName}`,
        changefreq: 'daily',
        priority: 0.9
      })
      collection.images.forEach(image => {
        smStream.write({
          url: `/collections/Design/collection/${collection.collectionName}/image/${image.name}`,
          changefreq: 'daily',
          priority: 0.9
        })
      })
    })

    web_projects.forEach(project => {
      smStream.write({
        url: `/projects/Web/project/${project.projectName}`,
        changefreq: 'daily',
        priority: 0.9
      })
    })
    // End sitemap stream
    smStream.end()
    // XML sitemap string
    const sitemapOutput = streamToPromise(smStream).toString()


    res.statusCode = 200
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip')
    // res.end(sitemapOutput)
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}
