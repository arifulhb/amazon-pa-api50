const Config = require('../src/config')
const Api = require('../src/index')
const ResourcesParameters = require('../src/resourcesParameters')
const conditionParameters = require('../src/conditionParameter')
const search = require('../src/search')
const parameters = new ResourcesParameters()
const sendDefaultParams = parameters.getItemInfo()
const myConfig = new Config(sendDefaultParams)

/**
 * Add your Credentials Here
 */
myConfig.accessKey = '' // accessKey
myConfig.secretKey = '' // secretKey
myConfig.partnerTag = '' // partnerTag

const api = new Api(myConfig)

/**
 * testGetItemById
 */
const testGetItemById = () => {
  let sendParams = parameters.getItemInfo()
  sendParams = sendParams
    .concat(parameters.getImagesPrimary())

  api.getItemById(['B079JD7F7G'], {
    parameters: sendParams,
    condition: conditionParameters.Any
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
  const sendParams = parameters.getBrowserNodes()

  api.getBrowseNodes(['284507'], {
    parameters: sendParams
  }
  ).then((response) => {
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
  const sendParams = parameters.getVariationSummary()

  api.getVariations("B079JD7F7G", {
    parameters: sendParams,
    condition: conditionParameters.Any
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
  let sendParams = parameters.getItemInfo()
  sendParams = sendParams
    .concat(parameters.getImagesPrimary())

  api.search("Cowin E8", {
    parameters: sendParams,
    searchIndex: search.Index.Electronics
  }).then((response) => {
    console.log(' ===== search result =====')
    console.log('data', response.data)
  }).catch((error) => {
    console.log('Error: ', error)
  })
}

// testSearch()
// testGetItemById()
// testGetBrowserNode()
testGetVariations()
