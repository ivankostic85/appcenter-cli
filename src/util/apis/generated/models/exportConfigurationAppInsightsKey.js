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

const models = require('./index');

/**
 * Configuration for export to Application Insights resource with customer
 * provided intrumentation key
 *
 * @extends models['ExportConfiguration']
 */
class ExportConfigurationAppInsightsKey extends models['ExportConfiguration'] {
  /**
   * Create a ExportConfigurationAppInsightsKey.
   * @property {string} instrumentationKey Instrumentation key for Application
   * Insights resource
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExportConfigurationAppInsightsKey
   *
   * @returns {object} metadata of ExportConfigurationAppInsightsKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'application_insights_instrumentation_key',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'ExportConfiguration',
        className: 'ExportConfigurationAppInsightsKey',
        modelProperties: {
          exportEntities: {
            required: false,
            serializedName: 'export_entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExportEntityElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'crashes', 'errors', 'attachments' ]
                  }
              }
            }
          },
          resourceName: {
            required: false,
            serializedName: 'resource_name',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resource_group',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          instrumentationKey: {
            required: true,
            serializedName: 'instrumentation_key',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExportConfigurationAppInsightsKey;
