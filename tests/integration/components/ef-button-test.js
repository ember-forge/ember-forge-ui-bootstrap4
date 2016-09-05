import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ef-button', 'Integration | Component | ef button', {
  integration: true
});

test('Default rendered state', function(assert) {
  this.render(hbs`
    {{ef-button}}
  `);

  assert.ok(
    this.$('>:first-child').hasClass('btn'),
    'Has class "btn"'
  );
});
