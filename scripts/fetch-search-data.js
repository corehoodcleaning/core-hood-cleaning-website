const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/callback'
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

async function fetchSearchData() {
  const searchconsole = google.searchconsole({ version: 'v1', auth: oauth2Client })
  
  try {
    const response = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:corehoodcleaning.com',
      requestBody: {
        startDate: '2026-01-01',
        endDate: '2026-03-10',
        dimensions: ['query', 'page'],
        rowLimit: 25
      }
    })

    console.log('\n✅ TOP SEARCH QUERIES:\n')
    response.data.rows?.forEach(row => {
      console.log(`Keyword: ${row.keys[0]}`)
      console.log(`Page: ${row.keys[1]}`)
      console.log(`Clicks: ${row.clicks} | Impressions: ${row.impressions} | Position: ${Math.round(row.position)}`)
      console.log('---')
    })

  } catch (err) {
    console.error('Error:', err.message)
  }
}

fetchSearchData()
