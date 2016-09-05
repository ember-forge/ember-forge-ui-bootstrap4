import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-fieldset', 'Integration | Component | form/ef fieldset', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.render(hbs`
    {{form/ef-fieldset}}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('form-group'),
    'Has class "form-group"'
  );
});

test('error state applies expected class', function(assert) {
  this.set('errorStates', {
    testProperty: false
  });

  this.render(hbs`
    {{form/ef-fieldset property="testProperty" errorStates=errorStates}}
  `);

  assert.notOk(
    this.$('>:first-child').hasClass('has-danger'),
    'Does not have class "has-danger"'
  );

  this.set('errorStates.testProperty', true);

  assert.ok(
    this.$('>:first-child').hasClass('has-danger'),
    'Has class "has-danger"'
  );
});
