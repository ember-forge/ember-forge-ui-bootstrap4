import Component from 'ember-forge-ui/components/ef-nav';

/**
 * @module
 * @augments ember-forge-ui/components/ef-nav
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'inline:nav-inline',
    'inverse:bg-inverse'
  ],

  // -------------------------------------------------------------------------
  // Actions

  /**
   * didInsertElement event hook
   *
   * Contextualize the list component
   *
   * @returns {undefined}
   */
  didRender() {
    this._super(...arguments);

    this.setListContext();
  },

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

  /**
   * Set context-specific classes on these rendered components:
   *   - ef-list
   *   - ef-list-item
   *
   * @private
   * @returns {undefined}
   */
  setListContext() {
    this._super(...arguments);

    // ef-list
    this.$('.list-group')
      .removeClass('list-group')
      .addClass('nav');
  }

});
