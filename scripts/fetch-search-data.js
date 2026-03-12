const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/callback'
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

async function fetchSearchConsoleData() {
  const searchconsole = google.searchconsole({ version: 'v1', auth: oauth2Client })

  try {
    const today = new Date()
    const endDate = today.toISOString().split('T')[0]
    const startDate = new Date(today.setDate(today.getDate() - 90)).toISOString().split('T')[0]

    const response = await searchconsole.searchanalytics.query({
      siteUrl: 'sc-domain:corehoodcleaning.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query', 'page'],
        rowLimit: 50
      }
    })

    const rows = response.data.rows || []

    console.log('\n✅ TOP SEARCH QUERIES:\n')
    rows.forEach(row => {
      console.log('Keyword: ' + row.keys[0])
      console.log('Page: ' + row.keys[1])
      console.log('Clicks: ' + row.clicks + ' | Impressions: ' + row.impressions + ' | Position: ' + Math.round(row.position))
      console.log('---')
    })

    return rows.map(row => ({
      keyword: row.keys[0],
      page: row.keys[1],
      clicks: row.clicks,
      impressions: row.impressions,
      position: Math.round(row.position)
    }))

  } catch (err) {
    console.error('Search Console fetch error:', err.message)
    return []
  }
}

if (require.main === module) {
  fetchSearchConsoleData()
}

module.exports = { fetchSearchConsoleData }
