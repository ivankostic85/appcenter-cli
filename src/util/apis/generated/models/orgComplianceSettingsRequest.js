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
 * org settings Request
 *
 */
class OrgComplianceSettingsRequest {
  /**
   * Create a OrgComplianceSettingsRequest.
   * @property {string} certificateConnectionId certificate connection id to
   * wrap and resign the app after wrapping
   */
  constructor() {
  }

  /**
   * Defines the metadata of OrgComplianceSettingsRequest
   *
   * @returns {object} metadata of OrgComplianceSettingsRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrgComplianceSettingsRequest',
      type: {
        name: 'Composite',
        className: 'OrgComplianceSettingsRequest',
        modelProperties: {
          certificateConnectionId: {
            required: true,
            serializedName: 'certificate_connection_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OrgComplianceSettingsRequest;
