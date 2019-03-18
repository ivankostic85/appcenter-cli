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
 * @summary Test Series
  *
 * Summary of a single test series
 *
 */
class TestSeries {
  /**
   * Create a TestSeries.
   * @property {string} slug Unique, human-readable identifier of the test
   * series
   * @property {string} name Name of the test series
   * @property {string} [mostRecentActivity] Date of the latest test run that
   * used this test series
   * @property {array} [testRuns] Most recent test runs
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestSeries
   *
   * @returns {object} metadata of TestSeries
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestSeries',
      type: {
        name: 'Composite',
        className: 'TestSeries',
        modelProperties: {
          slug: {
            required: true,
            serializedName: 'slug',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          mostRecentActivity: {
            required: false,
            serializedName: 'mostRecentActivity',
            type: {
              name: 'String'
            }
          },
          testRuns: {
            required: false,
            serializedName: 'testRuns',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TestRunSummaryElementType',
                  type: {
                    name: 'Composite',
                    className: 'TestRunSummary'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TestSeries;
