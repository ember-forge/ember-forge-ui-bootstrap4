import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/input/ef-url', 'Integration | Component | form/input/ef url', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.render(hbs`
    {{form/input/ef-url}}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('form-control'),
    'Has class "form-control"'
  );
});

test('error state applies expected class', function(assert) {
  this.set('errorStates', {
    testProperty: false
  });

  this.render(hbs`
    {{form/input/ef-url property="testProperty" errorStates=errorStates}}
  `);

  assert.notOk(
    this.$('>:first-child').hasClass('form-control-danger'),
    'Does not have class "form-control-danger"'
  );

  this.set('errorStates.testProperty', true);

  assert.ok(
    this.$('>:first-child').hasClass('form-control-danger'),
    'Has class "form-control-danger"'
  );
});
