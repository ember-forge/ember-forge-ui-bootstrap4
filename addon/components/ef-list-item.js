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

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Manage class names dependent on list type and context of usage
   *
   * Ordered list items do not have any classes applied
   * Unordered lists are considered list groups and items have their own class applied
   * Unordered lists used as navs have their item's class applied
   *
   * @private
   * @override
   * @returns {undefined}
   */
  setContextStyles() {
    this._super(...arguments);

    let classNames = get(this, 'classNames');

    if (!get(this, 'ordered')) {
      classNames.addObject((get(this, 'usedAs') === 'nav') ? 'nav-item' : 'list-group-item');
    }
  }

});
