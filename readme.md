# Amazon Product Advertising _(Affiliate)_ API v5 for NodeJS
## amazon-pa-api50 _v0.0.2_
This Nodejs package use Amazon's [NodeJS SDK](https://webservices.amazon.com/paapi5/documentation/quick-start/using-sdk.html#nodejs) to make the development simpler, in less time and use the power of NPM.

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
Import the `Config` module and `Api` client.
```
const Api = require('amazon-pa-api50')
const Config = require('amazon-pa-api50/lib/config')
```

**Optional loading of modules**
All of these are optional. Depends on what you want to search or fetch.
```
const resources = require('amazon-pa-api50/lib/options').Resources // Optional for different resources
const condition = require('amazon-pa-api50/lib/options').Condition // for product condition
const country = require('amazon-pa-api50/lib/options').Country // Optional for different country
const searchIndex = require('amazon-pa-api50/lib/options').SearchIndex // for Search Index
```
**Create `Config` instance**
```
// By Default all resources and will connect to United States
let myConfig = new Config();

// if you want other country then united states.
let myConfig = new Config(undefined, country.UnitedKingdom);

// if you want custom resources.
// this custom `resources.Offers` will be set default to all of your search. You can customize the resources in your search specific function also.
let myConfig = new Config(resources.Offers);

// if you want custom resources with different country
let myConfig = new Config(resources.ItemInfo, country.Canada);
```

**Configure the Config class**
```
/**
 * Add your Credentials Here
 */
myConfig.accessKey = '<ACCESS_KEY>'
myConfig.secretKey = '<SECRET_KEY>' 
myConfig.partnerTag = '<PARTNER_TAG>' 
```

After adding the credentials in `myConfig`, Create **`Api`** instance

```
const api = new Api(myConfig)
```
If all of your credentials are valid, you must be able to serach in Amazon now.
###

```
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
```
## Usage

**`api`** have four main functions to fetch data from amazon. Each function has 2 parameters and return `promise`.

- `api.getItemById(['asin1', 'asin2'], {})`
- `api.search('keyword', {})`
- `api.getVariations('asin1', {})`
- `api.getBrowseNodes(['nodeid1', 'nodeid2'], {})`

Inside `then`, block of the promise, `response` object contain `response.data` and `response.response` as full faw response from Amazon.

Sample tutorial for how to use this library is given in `./demo/index.js` file. 

### Get a single or array of Products via ASIN
##### getItemById(['ASIN1', 'ASIN2'], params)
```
let resourceList = parameters.getItemInfo
resourceList = resourceList
  .concat(parameters.getImagesPrimary)

api.getItemById(['B079JD7F7G'], {
  parameters: resourceList,
  condition: condition.Any
}).then((response) => {
  console.log(' ===== find by Item ids =====')
  console.log('data', response.data)
}).catch((error) => {
  console.log('Error: ', error)
})
```


### Search Products
##### search('keyword', params)

```
let resourceList = parameters.getItemInfo
resourceList = resourceList
  .concat(parameters.getImagesPrimary)

api.search("Cowin E8", {
  parameters: resourceList,
  searchIndex: searchIndex.Electronics
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
const resourceList = parameters.getVariationSummary

api.getVariations("B079JD7F7G", {
  parameters: resourceList,
  condition: condition.Any
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
const resourceList = parameters.getBrowserNodes

  api.getBrowseNodes(['284507'], {
    parameters: resourceList
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
