import Component from 'ember-forge-ui/components/form/ef-fieldset';
import ErrorState from 'ember-forge-ui/mixins/form/error-state';

/**
 * fieldset HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/ef-fieldset
 * @augments ember-forge-ui/mixins/form/error-state
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
