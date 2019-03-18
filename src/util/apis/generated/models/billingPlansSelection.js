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
 * Selection of a billing plan for one or more services
 *
 */
class BillingPlansSelection {
  /**
   * Create a BillingPlansSelection.
   * @property {object} [buildService]
   * @property {number} [buildService.count] Number of instances of the billing
   * plan.
   * @property {object} [buildService.plan]
   * @property {string} [buildService.plan.id] The Billing Plan ID
   * @property {string} [buildService.plan.version] Version of the Billing Plan
   * schema
   * @property {number} [buildService.plan.price] Price of the Billing Plan
   * @property {string} [buildService.plan.paymentSource] Service that receives
   * payments for this billing plan. Possible values include: 'None',
   * 'AppCenter', 'GitHub', 'Xtc'
   * @property {string} [buildService.plan.service] Name of the service that
   * the plan applies to. Possible values include: 'Build', 'Test'
   * @property {object} [buildService.plan.limits]
   * @property {object} [buildService.plan.attributes]
   * @property {string} [buildService.plan.parentId]
   * @property {object} [testService]
   * @property {number} [testService.count] Number of instances of the billing
   * plan.
   * @property {object} [testService.plan]
   * @property {string} [testService.plan.id] The Billing Plan ID
   * @property {string} [testService.plan.version] Version of the Billing Plan
   * schema
   * @property {number} [testService.plan.price] Price of the Billing Plan
   * @property {string} [testService.plan.paymentSource] Service that receives
   * payments for this billing plan. Possible values include: 'None',
   * 'AppCenter', 'GitHub', 'Xtc'
   * @property {string} [testService.plan.service] Name of the service that the
   * plan applies to. Possible values include: 'Build', 'Test'
   * @property {object} [testService.plan.limits]
   * @property {object} [testService.plan.attributes]
   * @property {string} [testService.plan.parentId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingPlansSelection
   *
   * @returns {object} metadata of BillingPlansSelection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingPlansSelection',
      type: {
        name: 'Composite',
        className: 'BillingPlansSelection',
        modelProperties: {
          buildService: {
            required: false,
            serializedName: 'buildService',
            type: {
              name: 'Composite',
              className: 'BillingPlanSelection'
            }
          },
          testService: {
            required: false,
            serializedName: 'testService',
            type: {
              name: 'Composite',
              className: 'BillingPlanSelection'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingPlansSelection;
