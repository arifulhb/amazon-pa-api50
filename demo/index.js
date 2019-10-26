const Api = require('../src/index')
const Config = require('../lib/config')
const condition = require('../lib/options').Condition
const searchIndex = require('../lib/options').SearchIndex
const resources = require('../lib/options').Resources
const myConfig = new Config()

/**
 * Add your Credentials Here
 */
myConfig.accessKey = '' // accessKey
myConfig.secretKey = '' // secretKey
myConfig.partnerTag = '' // partnerTag

/**
 * Initialize the api client
 */
const api = new Api(myConfig)

/**
 * testGetItemById
 */
const testGetItemById = () => {
  let resourceList = resources.getItemInfo
  resourceList = resourceList
    .concat(resources.getImagesPrimary)

  api.getItemById(['B079JD7F7G'], {
    parameters: resourceList,
    condition: condition.Any
  }).then((response) => {
    console.log(' ===== find by Item ids =====')
    console.log('data', response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
}

/**
 * testGetBrowserNode
 */
const testGetBrowserNode = function () {
  const resourceList = resources.getBrowserNodes

  api.getBrowseNodes(['284507'], {
    parameters: resourceList
  }).then((response) => {
    console.log(' ===== getBrowserNode =====')
    console.log('data', response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
}

/**
 * testGetVariations
 */
const testGetVariations = () => {
  const resourceList = resources.getVariationSummary

  api.getVariations("B079JD7F7G", {
    parameters: resourceList,
    condition: condition.Any
  }).then((response) => {
    console.log(' ===== getVariations =====')
    console.log('data', response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
}
testGetVariations()

/**
 * testSearch
 */
const testSearch = () => {
  let resourceList = resources.getItemInfo
  resourceList = resourceList
    .concat(resources.getImagesPrimary)

  api.search("Cowin E8", {
    parameters: resourceList,
    searchIndex: searchIndex.Electronics
  }).then((response) => {
    console.log(' ===== search result =====')
    console.log('data', response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
}

testSearch()
// testGetItemById()
// testGetBrowserNode()
// testGetVariations()
