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
 * Class representing a BranchStatusCollectionItemValueBranchCommit.
 */
class BranchStatusCollectionItemValueBranchCommit {
  /**
   * Create a BranchStatusCollectionItemValueBranchCommit.
   * @property {string} [sha] The commit SHA
   * @property {string} [url] The URL to the commit
   */
  constructor() {
  }

  /**
   * Defines the metadata of BranchStatusCollectionItemValueBranchCommit
   *
   * @returns {object} metadata of BranchStatusCollectionItemValueBranchCommit
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchStatusCollectionItemValue_branch_commit',
      type: {
        name: 'Composite',
        className: 'BranchStatusCollectionItemValueBranchCommit',
        modelProperties: {
          sha: {
            required: false,
            serializedName: 'sha',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BranchStatusCollectionItemValueBranchCommit;