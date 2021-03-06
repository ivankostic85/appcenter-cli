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
 * Class representing a AppName.
 */
class AppName {
  /**
   * Create a AppName.
   * @property {string} name
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppName
   *
   * @returns {object} metadata of AppName
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppName',
      type: {
        name: 'Composite',
        className: 'AppName',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppName;
