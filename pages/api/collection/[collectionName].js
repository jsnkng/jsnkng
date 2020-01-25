/*
API endpoint returns images in a collection by their collectionName i.e. "Mythologies"
Arguments:
  collectionName (required) This is the Gallery name assigned by the developer.
  example:
  http://localhost:3000/collection/[collectionName]
Returns:
  Array of JSON objects containing parks for the specified collectionName.
  Upon init reads list of directories (images) from public/gallery/[collectionName]
  This functionality is designed to work with the filesystem since the basic filesystem API
  provides the simplest solution to storing the data i.e. image file/.jpg and the metadata
  i.e. collectionName and imageName.
*/

// import fs from 'fs'
// import path from 'path'
import collection from '../_data/collection'

export default (req, res) => {
  const {
    query: { collectionName }
  } = req

  const getCollection = async (callback) => {
    const [result] = collection.filter(item => item.collectionName === collectionName)
    callback(result)
  }

  getCollection(result => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  })
}

// export default (req, res) => {
//   const {
//     query: { collectionName }
//   } = req

//   const collectionDir = path.join('./public/gallery/', collectionName)


//   const getCollection = async (callback) => {

//     const getAllCollection = dir => fs.readdirSync(dir)
//       .reduce((collection, name) => {
//         const file = `${collectionDir}/${name}`
//         const url = `/gallery/${collectionName}/${name}`
//         const isDirectory = fs.statSync(file).isDirectory()
//         console.log(file)
//         const imageData = {
//           name,
//           url
//         }
//         return isDirectory ? [...collection, imageData] : [...collection]
//       }, [])

//     const result = {}
//     result.collection = collectionName
//     result.images = getAllCollection(collectionDir)
//     console.log(JSON.stringify(result))
//     callback(result)
//   }

//   getCollection(result => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(result))
//   })
// }
