import Ember from 'ember';

export default Ember.Route.extend({
  showQuestionForm(){
    this.set('addQuestion', true);
  },
});
