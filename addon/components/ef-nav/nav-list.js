import Component from 'ember-forge-ui/components/ef-nav/nav-list';
import Ember from 'ember';

const {
  computed
} = Ember;

/**
 * @module
 * @augments ember-forge-ui/components/ef-nav/nav-list
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'pills:nav-pills',
    'stackThePills:nav-stacked'
  ],

  /** @type {String[]} */
  classNames: [
    'nav'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether to display the nav items inline
   *
   * @type {Boolean}
   */
  inline: false,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Apply `.nav-stacked` if inline=false and pills=true
   *
   * @function
   * @returns {Boolean}
   */
  stackThePills: computed(
    'inline',
    'pills',
    function() {
      return !this.get( 'inline' ) && this.get( 'pills' );
    }
  )

});
