/*
API endpoint returns collections by their collectionType i.e. "Art"
Arguments:
  projectType (required) This is the project typeassigned by the developer.
  example:
  http://localhost:3000/collections/[collectionType]
Returns:
  Array of JSON objects containing collections for the specified collectionType.
*/

import collection from '../_data/collection'

export default (req, res) => {
  const {
    query: { collectionType }
  } = req
  const getProjects = async (callback) => {
    const result = {}
    result.collections = collection.filter(item => item.collectionType === collectionType)
    callback(result)
  }

  getProjects(result => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  })
}
