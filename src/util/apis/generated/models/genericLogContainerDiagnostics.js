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
 * Class representing a GenericLogContainerDiagnostics.
 */
class GenericLogContainerDiagnostics {
  /**
   * Create a GenericLogContainerDiagnostics.
   * @property {boolean} [exceededMaxLimit] indicates if the number of
   * available logs are more than the max allowed return limit(100).
   * @property {date} [lastReceivedLogTimestamp] the timestamp of the last log
   * received. This value can be used as the start time parameter in the
   * consecutive API call.
   * @property {array} logs the list of logs
   */
  constructor() {
  }

  /**
   * Defines the metadata of GenericLogContainerDiagnostics
   *
   * @returns {object} metadata of GenericLogContainerDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GenericLogContainer_Diagnostics',
      type: {
        name: 'Composite',
        className: 'GenericLogContainerDiagnostics',
        modelProperties: {
          exceededMaxLimit: {
            required: false,
            serializedName: 'exceeded_max_limit',
            type: {
              name: 'Boolean'
            }
          },
          lastReceivedLogTimestamp: {
            required: false,
            serializedName: 'last_received_log_timestamp',
            type: {
              name: 'DateTime'
            }
          },
          logs: {
            required: true,
            serializedName: 'logs',
            constraints: {
              MinItems: 0
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GenericLogContainerDiagnosticsLogsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GenericLogContainerDiagnosticsLogsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GenericLogContainerDiagnostics;
