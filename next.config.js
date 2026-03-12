/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/hood-cleaning-san-diego',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-service',
        destination: '/services/hood-cleaning/',
        permanent: true,
      },
      {
        source: '/filter-exchange-program',
        destination: '/services/filter-exchange/',
        permanent: true,
      },
      {
        source: '/nfpa-96-inspection',
        destination: '/services/nfpa-inspection/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-chula-vista',
        destination: '/locations/chula-vista/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-oceanside',
        destination: '/locations/oceanside/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-escondido',
        destination: '/locations/escondido/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-carlsbad',
        destination: '/locations/carlsbad/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-el-cajon',
        destination: '/locations/el-cajon/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-vista',
        destination: '/locations/vista/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-san-marcos',
        destination: '/locations/san-marcos/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-national-city',
        destination: '/locations/national-city/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-la-mesa',
        destination: '/locations/la-mesa/',
        permanent: true,
      },
      {
        source: '/hood-cleaning-coronado',
        destination: '/locations/coronado/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
