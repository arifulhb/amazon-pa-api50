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
  console.log(' ===== find by Item ids =====')

  let resourceList = resources.getItemInfo
  resourceList = resourceList
    .concat(resources.getImagesPrimary)

  api.getItemById(['B082SW2BDJ'], {
    parameters: resourceList,
    condition: condition.Any
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

/**
 * testGetBrowserNode
 */
const testGetBrowserNode = function () {
  console.log(' ===== search result =====')
  const resourceList = resources.getBrowserNodes

  api.getBrowseNodes(['284507'], {
    parameters: resourceList
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

/**
 * testGetVariations
 */
const testGetVariations = () => {
  console.log(' ===== getVariations =====')
  const resourceList = resources.getVariationSummary

  api.getVariations("B07QXKW89P", {
    parameters: resourceList,
    condition: condition.Any
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

/**
 * testSearch
 */
const testSearch = () => {
  console.log(' ===== search result =====')

  let resourceList = resources.getItemInfo
  resourceList = resourceList
    .concat(resources.getImagesPrimary)

  api.search("Cowin E8", {
    parameters: resourceList,
    searchIndex: searchIndex.Electronics
  }).then((response) => {
    console.log('data', response.data)
  }, (error) => {
    console.log('Error: ', error)
  })
}

// PLEASE UNCOMMENTED THE FUNCTIONS BELLOW TO TEST THE DEMO.
// testSearch()
// testGetItemById()
// testGetBrowserNode()
// testGetVariations()
