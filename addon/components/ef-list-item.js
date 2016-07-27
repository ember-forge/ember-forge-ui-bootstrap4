import Component from 'ember-forge-ui/components/ef-list-item';
import Ember from 'ember';

const {
  get
} = Ember;

/**
 * @module
 * @augments ember-forge-ui/components/ef-list-item
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  /**
   * init event hook
   *
   * Apply correct styling to list items
   *
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);

    this.setContextStyles();
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
   * Whether the list items are ordered
   *
   * @type {Boolean}
   */
  ordered: false,

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Manage class names dependent on list type and context of usage
   *
   * Ordered list items do not have any classes applied
   * Unordered lists are considered list groups and items have their own class applied
   * Unordered lists used as navs have their items class applied
   *
   * @private
   * @returns {undefined}
   */
  setContextStyles() {
    let classNames = get(this, 'classNames');

    classNames.removeObject('list-group-item');
    classNames.removeObject('nav-item');

    if (!get(this, 'ordered')) {
      classNames.addObject((get(this, 'usedAs') === 'nav') ? 'nav-item' : 'list-group-item');
    }
  }

});
