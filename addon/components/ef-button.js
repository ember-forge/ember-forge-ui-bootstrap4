import Component from 'ember-forge-ui/components/ef-button';
import Ember from 'ember';

const {
  get
} = Ember;

/**
 * Theme values
 *
 * @memberof module:addon/components/ef-button
 * @enum {String}
 * @property {String} DANGER 'danger'
 * @property {String} INFO 'info'
 * @property {String} LINK 'link'
 * @property {String} PRIMARY 'primary'
 * @property {String} SECONDARY 'secondary'
 * @property {String} SUCCESS 'success'
 * @property {String} WARNING 'warning'
 */
export const Theme = Object.freeze({
  DANGER: 'danger',
  INFO: 'info',
  LINK: 'link',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning'
});

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
   * @type {?Theme}
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
      const theme = this.get( 'theme' );

      return `btn-${theme}`;
    })
});
