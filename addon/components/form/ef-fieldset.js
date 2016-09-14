import Component from 'ember-forge-ui/components/form/ef-fieldset';

/**
 * fieldset HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/ef-fieldset
 */
export default Component.extend(ErrorState, {

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'errorState:has-danger'
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
