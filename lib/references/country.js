/**
 * @link https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
const country = {
  Australia: {
    host: 'webservices.amazon.com.au',
    region: 'us-west-2'
  },
  Brazil: {
    host: 'webservices.amazon.com.br',
    region: 'us-east-1'
  },
  Canada: {
    host: 'webservices.amazon.ca',
    region: 'us-east-1'
  },
  France: {
    host: 'webservices.amazon.fr',
    region: 'eu-west-1'
  },
  Germany: {
    host: 'webservices.amazon.de',
    region: 'eu-west-1'
  },
  India: {
    host: 'webservices.amazon.in',
    region: 'eu-west-1'
  },
  Italy: {
    host: 'webservices.amazon.it',
    region: ''
  },
  Japan: {
    host: 'webservices.amazon.co.jp',
    region: 'us-west-2'
  },
  Mexico: {
    host: 'webservices.amazon.com.mx',
    region: 'us-east-1'
  },
  Spain: {
    host: 'webservices.amazon.es',
    region: 'eu-west-1'
  },
  Turkey: {
    host: 'webservices.amazon.com.tr',
    region: 'eu-west-1'
  },
  UnitedArabEmirates: {
    host: 'webservices.amazon.ae',
    region: 'eu-west-1'
  },
  UnitedKingdom: {
    host: 'webservices.amazon.co.uk',
    region: 'eu-west-1'
  },
  UnitedStates: {
    host: 'webservices.amazon.com',
    region: 'us-east-1'
  }
}

module.exports = country
