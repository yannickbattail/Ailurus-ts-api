"use strict";
/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Ailurus API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const portableFetch = require("portable-fetch");
const BASE_PATH = "https://localhost".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = BASE_PATH, fetch = portableFetch) {
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
    }
}
exports.RequiredError = RequiredError;
/**
 * @export
 * @namespace IDroneDto
 */
var IDroneDto;
(function (IDroneDto) {
    /**
     * @export
     * @enum {string}
     */
    let StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["NUMBER_0"] = 0] = "NUMBER_0";
        StateEnum[StateEnum["NUMBER_1"] = 1] = "NUMBER_1";
    })(StateEnum = IDroneDto.StateEnum || (IDroneDto.StateEnum = {}));
})(IDroneDto = exports.IDroneDto || (exports.IDroneDto = {}));
/**
 * @export
 * @namespace ResourceQuantity
 */
var ResourceQuantity;
(function (ResourceQuantity) {
    /**
     * @export
     * @enum {string}
     */
    let ResourceEnum;
    (function (ResourceEnum) {
        ResourceEnum[ResourceEnum["NUMBER_0"] = 0] = "NUMBER_0";
        ResourceEnum[ResourceEnum["NUMBER_1"] = 1] = "NUMBER_1";
    })(ResourceEnum = ResourceQuantity.ResourceEnum || (ResourceQuantity.ResourceEnum = {}));
})(ResourceQuantity = exports.ResourceQuantity || (exports.ResourceQuantity = {}));
/**
 * AilurusApi - fetch parameter creator
 * @export
 */
exports.AilurusApiFetchParamCreator = function (configuration) {
    return {
        /**
         *
         * @param {Array&lt;GlobalInstruction&gt;} instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instructionsPost(instructions, options = {}) {
            // verify required parameter 'instructions' is not null or undefined
            if (instructions === null || instructions === undefined) {
                throw new RequiredError('instructions', 'Required parameter instructions was null or undefined when calling instructionsPost.');
            }
            const localVarPath = `/instructions`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = ("Array&lt;GlobalInstruction&gt;" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(instructions || {}) : (instructions || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mapGet(options = {}) {
            const localVarPath = `/map`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playerContextGet(options = {}) {
            const localVarPath = `/playerContext`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * AilurusApi - functional programming interface
 * @export
 */
exports.AilurusApiFp = function (configuration) {
    return {
        /**
         *
         * @param {Array&lt;GlobalInstruction&gt;} instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instructionsPost(instructions, options) {
            const localVarFetchArgs = exports.AilurusApiFetchParamCreator(configuration).instructionsPost(instructions, options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mapGet(options) {
            const localVarFetchArgs = exports.AilurusApiFetchParamCreator(configuration).mapGet(options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playerContextGet(options) {
            const localVarFetchArgs = exports.AilurusApiFetchParamCreator(configuration).playerContextGet(options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * AilurusApi - factory interface
 * @export
 */
exports.AilurusApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         *
         * @param {Array&lt;GlobalInstruction&gt;} instructions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instructionsPost(instructions, options) {
            return exports.AilurusApiFp(configuration).instructionsPost(instructions, options)(fetch, basePath);
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mapGet(options) {
            return exports.AilurusApiFp(configuration).mapGet(options)(fetch, basePath);
        },
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playerContextGet(options) {
            return exports.AilurusApiFp(configuration).playerContextGet(options)(fetch, basePath);
        },
    };
};
/**
 * AilurusApi - object-oriented interface
 * @export
 * @class AilurusApi
 * @extends {BaseAPI}
 */
class AilurusApi extends BaseAPI {
    /**
     *
     * @param {} instructions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AilurusApi
     */
    instructionsPost(instructions, options) {
        return exports.AilurusApiFp(this.configuration).instructionsPost(instructions, options)(this.fetch, this.basePath);
    }
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AilurusApi
     */
    mapGet(options) {
        return exports.AilurusApiFp(this.configuration).mapGet(options)(this.fetch, this.basePath);
    }
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AilurusApi
     */
    playerContextGet(options) {
        return exports.AilurusApiFp(this.configuration).playerContextGet(options)(this.fetch, this.basePath);
    }
}
exports.AilurusApi = AilurusApi;
