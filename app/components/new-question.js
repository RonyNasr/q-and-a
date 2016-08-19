import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
actions: {
  showQuestionForm(){
    console.log("showQuestionForm");
    this.set('addQuestion', true);
  },
  saveQuestion(){
    var params = {
      author: this.get('author'),
      title: this.get('title'),
      content: this.get('content')
    };
  this.set('addQuestion', false);
  this.sendAction('saveQuestion', params);
  }
}
});
