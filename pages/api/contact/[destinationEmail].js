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

export default (req, res) => {
  const result = {}
  const {
    query: { destinationEmail }
  } = req

  
  const sendMail = async (callback) => {
    
    result = error ?
    { error: true, message: 'We’re sorry, your message failed to send. Please try back later.'} :
    { error: false, message: 'Thanks for contacting us. Someone will get back to you within 24 hours.'}

    callback(result)
  }

  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
  
  sendMail(result => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result))
  })
}
