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
    const result = {}
    const [data] = collection.filter(item => item.collectionName === collectionName)
    result.collection = data
    callback(result)
  }

  getCollection(result => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  })
}
