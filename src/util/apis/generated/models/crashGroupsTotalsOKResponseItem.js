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
 * Class representing a CrashGroupsTotalsOKResponseItem.
 */
class CrashGroupsTotalsOKResponseItem {
  /**
   * Create a CrashGroupsTotalsOKResponseItem.
   * @property {string} [crashGroupId]
   * @property {string} [appVersion]
   * @property {object} [overall]
   * @property {number} [overall.crashCount]
   * @property {number} [overall.deviceCount]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroupsTotalsOKResponseItem
   *
   * @returns {object} metadata of CrashGroupsTotalsOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashGroupsTotalsOKResponseItem',
      type: {
        name: 'Composite',
        className: 'CrashGroupsTotalsOKResponseItem',
        modelProperties: {
          crashGroupId: {
            required: false,
            serializedName: 'crash_group_id',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: false,
            serializedName: 'app_version',
            type: {
              name: 'String'
            }
          },
          overall: {
            required: false,
            serializedName: 'overall',
            type: {
              name: 'Composite',
              className: 'CrashGroupsTotalsOKResponseItemOverall'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroupsTotalsOKResponseItem;
