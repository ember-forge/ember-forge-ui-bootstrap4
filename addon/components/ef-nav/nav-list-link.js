import Component from 'ember-forge-ui/components/ef-nav/nav-list-link';

/**
 * @module
 * @augments ember-forge-ui/components/ef-nav/nav-list-link
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'active',
    'disabled'
  ],

  /** @type {String[]} */
  classNames: [
    'nav-link'
  ]

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
