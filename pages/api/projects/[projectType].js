/*
API endpoint returns projects of a type by their projectType i.e. "Web"
Arguments:
  projectType (required) This is the project typeassigned by the developer.
  example:
  http://localhost:3000/projects/[projectType]
Returns:
  Array of JSON objects containing projects for the specified projectType.
*/

import collection from '../_data/collection'

export default (req, res) => {
  const {
    query: { projectType }
  } = req
  const getProjects = async (callback) => {
    const result = {}
    result.projects = collection.filter(item => item.projectType === projectType)
    callback(result)
  }

  getProjects(result => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  })
}
