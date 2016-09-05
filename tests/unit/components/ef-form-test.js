import globalLibraries from '../../helpers/sl/synchronous/global-libraries';
import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('ef-form', 'Unit | Component | ef form', {
  unit: true
});

test('Default property values', function(assert) {
  const component = this.subject();

  assert.strictEqual(
    component.get('inline'),
    false,
    '"inline" property is false by default'
  );
});

test('There are no references to Ember.$, $ or jQuery', function(assert) {
  globalLibraries.setupSpies();

  const component = this.subject();

  this.render();

  globalLibraries.triggerEvents(component);

  assert.notOk(
    globalLibraries.called(),
    'Global libraries are not referenced in component'
  );

  globalLibraries.restoreSpies();
});
