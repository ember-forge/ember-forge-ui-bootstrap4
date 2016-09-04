import Component from 'ember-forge-ui/components/form/input/ef-date';

/**
 * input[type="date"] HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/input/ef-date
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
