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
 * The user's settings
 *
 */
class UserProfileResponseInternalSettings {
  /**
   * Create a UserProfileResponseInternalSettings.
   * @property {string} [marketingOptIn] The marketing opt-in setting
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserProfileResponseInternalSettings
   *
   * @returns {object} metadata of UserProfileResponseInternalSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserProfileResponseInternal_settings',
      type: {
        name: 'Composite',
        className: 'UserProfileResponseInternalSettings',
        modelProperties: {
          marketingOptIn: {
            required: false,
            serializedName: 'marketing_opt_in',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserProfileResponseInternalSettings;
