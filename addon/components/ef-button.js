import Component from 'ember-forge-ui/components/ef-button';
import Ember from 'ember';

const {
  get
} = Ember;

/**
 * @module
 * @augments ember-forge-ui/components/ef-button
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNames: [
    'btn'
  ],

  /** @type {String[]} */
  classNameBindings: [
    'themeClass'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Bootstrap "theme" name
   *
   * @type {?String}
   */
  theme: null,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Converted theme string to Bootstrap button class
   *
   * @function
   * @returns {String}
   */
  themeClass: Ember.computed(
    'theme',
    function() {
      const theme = get(this, 'theme').toLowerCase();

      return `btn-${theme}`;
    })
});
