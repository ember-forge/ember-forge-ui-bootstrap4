import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('form/ef-form-text', 'Integration | Component | form/ef form text', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.render(hbs`
    {{form/ef-form-text}}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('form-text'),
    'Has class "form-text"'
  );
});
