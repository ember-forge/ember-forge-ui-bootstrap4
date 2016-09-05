import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ef-form', 'Integration | Component | ef form', {
  integration: true
});

test('inline form', function(assert) {
  this.set('inline', false);

  this.render(hbs`
    {{ef-form inline=inline}}
  `);

  assert.notOk(
    this.$('>:first-child').hasClass('form-inline'),
    'Does not have class when not inline'
  );

  this.set('inline', true);

  assert.ok(
    this.$('>:first-child').hasClass('form-inline'),
    'Has class when inline'
  );
});
