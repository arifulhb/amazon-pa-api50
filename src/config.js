const defaultCountry = require('./country')
const ResourceParametersConfig = require('./resourcesParameters')
const resourceList = new ResourceParametersConfig()

class Config {
  constructor (parameters = resourceList.getAll(), country = defaultCountry.UnitedStates) {
    this._accessKey = null
    this._secretKey = null
    this._partnerTag = null
    this._type = 'Associates'
    this._host = country.host
    this._region = country.region
    this._country = country
    this._resource_parameters = parameters
  }

  get resourceParameters () {
    return this._resource_parameters
  }

  set resourceParameters (value) {
    this._resource_parameters = value
  }

  get accessKey () {
    return this._accessKey
  }

  set accessKey (value) {
    this._accessKey = value
  }

  get secretKey () {
    return this._secretKey
  }

  set secretKey (value) {
    this._secretKey = value
  }

  get partnerTag () {
    return this._partnerTag
  }

  set partnerTag (value) {
    this._partnerTag = value
  }

  get partnerType () {
    return this._type
  }

  get host () {
    return this._host
  }

  set host (value) {
    this._host = value
  }

  get region () {
    return this._region
  }

  set region (value) {
    this._region = value
  }

  get country () {
    return this._country
  }

  set country (value) {
    this._country = value
    this._host = value.host
    this._region = value.region
  }
}

module.exports = Config
