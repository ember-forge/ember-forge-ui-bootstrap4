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

  /**
   * init event hook
   *
   * Configure the list
   *
   * @function
   * @returns {undefined}
   */
  init() {
    this._super(...arguments);
  },

  /**
   * didInsertElement event hook
   *
   * Apply correct styling to list
   *
   * @returns {undefined}
   */
  didInsertElement() {
    this._super(...arguments);

    this.styleList();
  },

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Apply/remove class names dependent on whether an ordered list
   *
   * @private
   * @override
   * @returns {undefined}
   */
  setListType() {
    this._super(...arguments);

    if(get(this, 'ordered')) {
      get(this, 'classNames').removeObject('list-group');
    } else {
      get(this, 'classNames').addObject('list-group');
    }
  },

  /**
   * Apply/remove class names dependent on whether an ordered list
   *
   * @private
   * @returns {undefined}
   */
  styleList() {
    if(get(this, 'ordered')) {
      this.$('.list-group-item').removeClass('list-group-item');
    }
  }

});
