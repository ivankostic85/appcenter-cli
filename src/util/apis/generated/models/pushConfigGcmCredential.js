/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PushConfigGcmCredential class.
 * @constructor
 * @member {string} [googleApiKey]
 * 
 */
function PushConfigGcmCredential() {
}

/**
 * Defines the metadata of PushConfigGcmCredential
 *
 * @returns {object} metadata of PushConfigGcmCredential
 *
 */
PushConfigGcmCredential.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PushConfig_gcmCredential',
    type: {
      name: 'Composite',
      className: 'PushConfigGcmCredential',
      modelProperties: {
        googleApiKey: {
          required: false,
          serializedName: 'googleApiKey',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PushConfigGcmCredential;