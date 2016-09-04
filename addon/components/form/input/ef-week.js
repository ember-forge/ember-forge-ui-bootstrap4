import Component from 'ember-forge-ui/components/form/input/ef-week';

/**
 * input[type="week"] HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/input/ef-week
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
