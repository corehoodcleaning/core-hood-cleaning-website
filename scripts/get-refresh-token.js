const { google } = require('googleapis')
const http = require('http')
const url = require('url')
const { exec } = require('child_process')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/callback'
)

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: [
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/analytics.readonly'
  ],
  prompt: 'consent'
})

const server = http.createServer(async (req, res) => {
  const code = url.parse(req.url, true).query.code
  if (!code) return
  res.end('Auth complete! Check your terminal.')
  server.close()
  const { tokens } = await oauth2Client.getToken(code)
  console.log('\n🎉 YOUR REFRESH TOKEN:\n')
  console.log(tokens.refresh_token)
  console.log('\nCopy this and save it in your Notes!\n')
  process.exit(0)
})

server.listen(3000, () => {
  console.log('Opening browser...')
  exec(`open "${authUrl}"`)
})
