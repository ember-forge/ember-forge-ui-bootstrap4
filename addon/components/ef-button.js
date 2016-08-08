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

  /**
   * Replace the default modifier classes with the `.btn-outline-*` ones to remove
   * all background images and colors on any button.
   *
   * @see {@link http://v4-alpha.getbootstrap.com/components/buttons/#outline-buttons}
   * @type {Boolean}
   */
  outline: false,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Converted theme string to Bootstrap button class.  Accounts for `.btn-outline-*` modifiers.
   *
   * @function
   * @returns {String}
   */
  themeClass: Ember.computed(
    'outline',
    'theme',
    function() {
      let theme = get(this, 'theme').toLowerCase();

      if(get(this, 'outline')) {
        theme = 'outline-' + theme;
      }

      return `btn-${theme}`;
    }
  )
});
