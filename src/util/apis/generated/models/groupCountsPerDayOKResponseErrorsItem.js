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
 * Class representing a GroupCountsPerDayOKResponseErrorsItem.
 */
class GroupCountsPerDayOKResponseErrorsItem {
  /**
   * Create a GroupCountsPerDayOKResponseErrorsItem.
   * @property {string} [datetime] the ISO 8601 datetime
   * @property {number} [count] count of the object
   */
  constructor() {
  }

  /**
   * Defines the metadata of GroupCountsPerDayOKResponseErrorsItem
   *
   * @returns {object} metadata of GroupCountsPerDayOKResponseErrorsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GroupCountsPerDayOKResponse_errorsItem',
      type: {
        name: 'Composite',
        className: 'GroupCountsPerDayOKResponseErrorsItem',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GroupCountsPerDayOKResponseErrorsItem;
