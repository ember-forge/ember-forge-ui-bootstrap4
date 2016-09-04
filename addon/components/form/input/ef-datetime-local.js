import Component from 'ember-forge-ui/components/form/input/ef-datetime-local';

/**
 * input[type="datetime-local"] HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/input/ef-datetime-local
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
