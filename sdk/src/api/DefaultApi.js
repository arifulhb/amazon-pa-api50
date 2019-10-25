/**
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/**
 * ProductAdvertisingAPI
 * https://webservices.amazon.com/paapi5/documentation/index.html
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetBrowseNodesRequest', 'model/GetBrowseNodesResponse', 'model/GetItemsRequest', 'model/GetItemsResponse', 'model/GetVariationsRequest', 'model/GetVariationsResponse', 'model/ProductAdvertisingAPIClientException', 'model/ProductAdvertisingAPIServiceException', 'model/SearchItemsRequest', 'model/SearchItemsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetBrowseNodesRequest'), require('../model/GetBrowseNodesResponse'), require('../model/GetItemsRequest'), require('../model/GetItemsResponse'), require('../model/GetVariationsRequest'), require('../model/GetVariationsResponse'), require('../model/ProductAdvertisingAPIClientException'), require('../model/ProductAdvertisingAPIServiceException'), require('../model/SearchItemsRequest'), require('../model/SearchItemsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProductAdvertisingAPIv1) {
      root.ProductAdvertisingAPIv1 = {};
    }
    root.ProductAdvertisingAPIv1.DefaultApi = factory(root.ProductAdvertisingAPIv1.ApiClient, root.ProductAdvertisingAPIv1.GetBrowseNodesRequest, root.ProductAdvertisingAPIv1.GetBrowseNodesResponse, root.ProductAdvertisingAPIv1.GetItemsRequest, root.ProductAdvertisingAPIv1.GetItemsResponse, root.ProductAdvertisingAPIv1.GetVariationsRequest, root.ProductAdvertisingAPIv1.GetVariationsResponse, root.ProductAdvertisingAPIv1.ProductAdvertisingAPIClientException, root.ProductAdvertisingAPIv1.ProductAdvertisingAPIServiceException, root.ProductAdvertisingAPIv1.SearchItemsRequest, root.ProductAdvertisingAPIv1.SearchItemsResponse);
  }
}(this, function(ApiClient, GetBrowseNodesRequest, GetBrowseNodesResponse, GetItemsRequest, GetItemsResponse, GetVariationsRequest, GetVariationsResponse, ProductAdvertisingAPIClientException, ProductAdvertisingAPIServiceException, SearchItemsRequest, SearchItemsResponse) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBrowseNodes operation.
     * @callback module:api/DefaultApi~getBrowseNodesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBrowseNodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/GetBrowseNodesRequest} getBrowseNodesRequest GetBrowseNodesRequest
     * @param {module:api/DefaultApi~getBrowseNodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBrowseNodesResponse}
     */
    this.getBrowseNodes = function(getBrowseNodesRequest, callback) {
      var postBody = getBrowseNodesRequest;

      // verify the required parameter 'getBrowseNodesRequest' is set
      if (getBrowseNodesRequest === undefined || getBrowseNodesRequest === null) {
        throw new Error("Missing the required parameter 'getBrowseNodesRequest' when calling getBrowseNodes");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetBrowseNodesResponse;

      return this.apiClient.callApi(
        '/paapi5/getbrowsenodes', 'POST', 'GetBrowseNodes',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItems operation.
     * @callback module:api/DefaultApi~getItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/GetItemsRequest} getItemsRequest GetItemsRequest
     * @param {module:api/DefaultApi~getItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetItemsResponse}
     */
    this.getItems = function(getItemsRequest, callback) {
      var postBody = getItemsRequest;

      // verify the required parameter 'getItemsRequest' is set
      if (getItemsRequest === undefined || getItemsRequest === null) {
        throw new Error("Missing the required parameter 'getItemsRequest' when calling getItems");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetItemsResponse;

      return this.apiClient.callApi(
        '/paapi5/getitems', 'POST', 'GetItems',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVariations operation.
     * @callback module:api/DefaultApi~getVariationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetVariationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/GetVariationsRequest} getVariationsRequest GetVariationsRequest
     * @param {module:api/DefaultApi~getVariationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetVariationsResponse}
     */
    this.getVariations = function(getVariationsRequest, callback) {
      var postBody = getVariationsRequest;

      // verify the required parameter 'getVariationsRequest' is set
      if (getVariationsRequest === undefined || getVariationsRequest === null) {
        throw new Error("Missing the required parameter 'getVariationsRequest' when calling getVariations");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetVariationsResponse;

      return this.apiClient.callApi(
        '/paapi5/getvariations', 'POST', 'GetVariations',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchItems operation.
     * @callback module:api/DefaultApi~searchItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/SearchItemsRequest} searchItemsRequest SearchItemsRequest
     * @param {module:api/DefaultApi~searchItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchItemsResponse}
     */
    this.searchItems = function(searchItemsRequest, callback) {
      var postBody = searchItemsRequest;

      // verify the required parameter 'searchItemsRequest' is set
      if (searchItemsRequest === undefined || searchItemsRequest === null) {
        throw new Error("Missing the required parameter 'searchItemsRequest' when calling searchItems");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SearchItemsResponse;

      return this.apiClient.callApi(
        '/paapi5/searchitems', 'POST', 'SearchItems',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
