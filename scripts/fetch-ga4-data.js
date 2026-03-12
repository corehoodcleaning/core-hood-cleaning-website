const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/callback'
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

async function fetchGA4Data() {
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth: oauth2Client })

  try {
    const response = await analyticsdata.properties.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [
          { name: 'sessions' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' }
        ],
        limit: 25
      }
    })

    console.log('\n✅ TOP PAGES (last 30 days):\n')
    response.data.rows?.forEach(row => {
      console.log(`Page: ${row.dimensionValues[0].value}`)
      console.log(`Sessions: ${row.metricValues[0].value}`)
      console.log(`Bounce Rate: ${parseFloat(row.metricValues[1].value).toFixed(2)}%`)
      console.log(`Avg Time: ${Math.round(row.metricValues[2].value)}s`)
      console.log('---')
    })

  } catch (err) {
    console.error('Error:', err.message)
  }
}

fetchGA4Data()
