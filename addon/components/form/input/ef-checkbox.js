import Component from 'ember-forge-ui/components/form/input/ef-checkbox';

/**
 * input[type="checkbox"] HTML element
 *
 * @module
 * @augments ember-forge-ui/components/form/input/ef-checkbox
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'inline:checkbox-inline:checkbox'
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
//  inline: false

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
