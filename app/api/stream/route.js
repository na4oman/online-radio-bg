// app/api/stream.js
const http = require('http')

export async function GET(req, res) {
  res.writeHead(200, {
    'Content-Type': 'audio/mpeg', // Set the appropriate content type for your audio format
  })

  // Example: Stream audio from an HTTP URL
  const audioUrl = 'https://whsh4u-panel.com/proxy/yfryujzw?mp=/stream' // Replace with the actual HTTP URL of the audio file

  const audioRequest = http.get(audioUrl, audioResponse => {
    audioResponse.pipe(res) // Pipe the audio response stream to the response stream

    audioResponse.on('error', err => {
      console.error('Error while retrieving audio:', err)
      res.statusCode = 500
      res.end()
    })
  })

  audioRequest.on('error', err => {
    console.error('Error while making audio request:', err)
    res.statusCode = 500
    res.end()
  })

  // return new Response('Hello Stream')
}

// export default async function handler(req, res) {
//   res.send('hello from server')
// }
