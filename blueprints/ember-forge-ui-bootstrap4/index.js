module.exports = {

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-forge/ember-forge-ui', target: 'form-components'}
      ]
    });
  }
};
