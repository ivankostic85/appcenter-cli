/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CrashDetailsModel.
 */
class CrashDetailsModel {
  /**
   * Create a CrashDetailsModel.
   * @property {string} [carrierCountry] Carrier country code (for mobile
   * devices).
   * @property {string} [carrierName] Carrier name (for mobile devices).
   * @property {string} locale Language code (example: en_US).
   * @property {string} [osBuild] OS build code (example: LMY47X).
   * @property {boolean} rooted Whether the device where the crash occurred is
   * rooted or jailbroken
   * @property {string} screenSize Screen size of the device in pixels
   * (example: 640x480).
   * @property {date} [appStartTimestamp] Application launch timestamp
   * (example: 1985-04-12T23:20:50.52Z).
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashDetailsModel
   *
   * @returns {object} metadata of CrashDetailsModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashDetails',
      type: {
        name: 'Composite',
        className: 'CrashDetailsModel',
        modelProperties: {
          carrierCountry: {
            required: false,
            serializedName: 'carrier_country',
            type: {
              name: 'String'
            }
          },
          carrierName: {
            required: false,
            serializedName: 'carrier_name',
            type: {
              name: 'String'
            }
          },
          locale: {
            required: true,
            serializedName: 'locale',
            type: {
              name: 'String'
            }
          },
          osBuild: {
            required: false,
            serializedName: 'os_build',
            type: {
              name: 'String'
            }
          },
          rooted: {
            required: true,
            serializedName: 'rooted',
            type: {
              name: 'Boolean'
            }
          },
          screenSize: {
            required: true,
            serializedName: 'screen_size',
            type: {
              name: 'String'
            }
          },
          appStartTimestamp: {
            required: false,
            serializedName: 'app_start_timestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashDetailsModel;