import Component from 'ember-forge-ui/components/ef-form';

/**
 * form HTML element
 *
 * @module
 * @augments ember-forge-ui/components/ef-form
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'inline:form-inline'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Display a series of labels, form controls, and buttons on a single horizontal row.
   *
   * @see {@link http://v4-alpha.getbootstrap.com/components/forms/#inline-forms}
   * @type {Boolean}
   */
  inline: false

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
