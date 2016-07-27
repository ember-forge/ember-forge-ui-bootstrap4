import Component from 'ember-forge-ui/components/ef-list';
import Ember from 'ember';

const {
  get
} = Ember;

/**
 * @module
 * @augments ember-forge-ui/components/ef-list
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
   * Ordered lists do not have any classes applied
   * Unordered lists are considered list groups and have their own class applied
   * Unordered lists used as navs have their own class applied
   *
   * @private
   * @override
   * @returns {undefined}
   */
  setListType() {
    this._super(...arguments);

    let classNames = get(this, 'classNames');

    classNames.removeObject('list-group');
    classNames.removeObject('nav');
    classNames.addObject((get(this, 'usedAs') === 'nav') ? 'nav' : 'list-group');
  }

});
