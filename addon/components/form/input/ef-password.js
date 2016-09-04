import Component from 'ember-forge-ui/components/form/input/ef-password';

/**
 * input[type="password"] HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/input/ef-password
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'errorState:form-control-danger'
  ],

  /** @type {String[]} */
  classNames: [
    'form-control'
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
