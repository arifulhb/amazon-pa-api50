# Amazon Product Advertising _(Affiliate)_ API v5 for NodeJS
## amazon-pa-api50 _v0.0.1_
This Nodejs package use Amazon's [NodeJS Sdk](https://webservices.amazon.com/paapi5/documentation/quick-start/using-sdk.html#nodejs) to make the development more simplier, in less time and use the power of NPM.

Learn more about [Product Advertising API v5](https://webservices.amazon.com/paapi5/documentation/).

## Installation
### Github
```
git clone git@github.com:arifulhb/amazon-pa-api50.git
```
### NPM
```
npm install amazon-pa-api50 --save
```

### Connect with Amazon Product Affiliate API.
Import the `Config` modulel.
```
const Config = require('amazon-pa-api50/config')
const Api = require('amazon-pa-api50')

const parameters = new ResourcesParameters()
const sendDefaultParams = parameters.getItemInfo()
const myConfig = new Config(sendDefaultParams)

```
After preparing the configuration,
```
/**
 * Add your Credentials Here
 */
myConfig.accessKey = '<ACCESS_KEY>'
myConfig.secretKey = '<SECRET_KEY>' 
myConfig.partnerTag = '<PARTNERTAG>' 
```

After adding the credentials,

```
const api = new Api(myConfig)

```
If all of your credentials are valid, you must be able to serach in Amazon now.
###

```
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
```
## Usage
Sample tutorial for how to use this library is given in `./demo/index.js` file. 

### Get a single or array of Products via ASIN
##### getItemById(['ASIN1', 'ASIN2'], params)
```
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
```
Inside `then`, `response` object contain `response.data` and `response.response` as full faw response from Amazon.

### Search Products
##### search('keyword', params)

```
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
```
Inside `then`, `response` object contain `response.data` and `response.response` as full faw response from Amazon.

### Get Product Variations
##### getVariations('asin1', params)
```
const sendParams = parameters.getVariationSummary()
const conditionParameters = require('amazon-pa-api50/conditionParameter')

api.getVariations("B079JD7F7G", {
  parameters: sendParams,
  condition: conditionParameters.Any
}).then((response) => {
  console.log(' ===== getVariations =====')
  console.log('data', response.data)
}).catch((error) => {
  console.log('Error: ', error)
})
```

### Get Browser Node
##### getBrowseNodes(['asin1'], params)
```
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
```
# Contributing
We'd love to have your helping hand on **amazon-pa-api50**! We are preparing the contributing guideline and todo list. Meanwhile, please install, test and use this to find bugs or any creative ideas.

# License
**amazon-pa-api50** is an open source library [licensed as MIT](./licence.md).
