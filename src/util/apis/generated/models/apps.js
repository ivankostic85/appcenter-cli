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
 * Class representing a Apps.
 */
class Apps {
  /**
   * Create a Apps.
   * @property {array} [apps] The list of apps to delete from the distribution
   * group
   */
  constructor() {
  }

  /**
   * Defines the metadata of Apps
   *
   * @returns {object} metadata of Apps
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'apps',
      type: {
        name: 'Composite',
        className: 'Apps',
        modelProperties: {
          apps: {
            required: false,
            serializedName: 'apps',
            constraints: {
              MinItems: 1
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AppsAppsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'AppsAppsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Apps;
