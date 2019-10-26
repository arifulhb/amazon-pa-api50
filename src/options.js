const country = require('./references/country')
const searchIndex = require('./references/searchIndex')
const partnerType = require('./references/partner')
const contition = require('./references/condition')
const resource = require('./references/resources')

module.exports = {
  SearchIndex: searchIndex,
  PartnerType: partnerType,
  Condition: contition,
  Resources: resource,
  Country: country
}
