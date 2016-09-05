import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-element-error', 'Integration | Component | form/ef element error', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.render(hbs`
    {{form/ef-element-error}}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('form-control-feedback'),
    'Has class "form-control-feedback"'
  );
});
