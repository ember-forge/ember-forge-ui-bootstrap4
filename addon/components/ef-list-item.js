import Ember from 'ember';
import Component from 'ember-forge-ui/components/ef-list-item';

const computed = Ember.computed;

/**
 * @module
 * @augments ember-forge-ui/components/ef-list-item
 */
export default Component.extend({

  // -------------------------------------------------------------------------
  // Dependencies

  // -------------------------------------------------------------------------
  // Attributes

  /** @type {String[]} */
  classNameBindings: [
    'contextualClasses'
  ],

  // -------------------------------------------------------------------------
  // Actions

  // -------------------------------------------------------------------------
  // Events

  // -------------------------------------------------------------------------
  // Properties

  /** @type {String} */
  contextualClasses: computed('isNav', function() {
    if (!this.get('isNav')) {
      return 'list-group-item';
    }
    return '';
  })

  // -------------------------------------------------------------------------
  // Observers

  // -------------------------------------------------------------------------
  // Methods

});
