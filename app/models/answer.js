import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  answer: DS.attr(),
  date: DS.attr()
});
