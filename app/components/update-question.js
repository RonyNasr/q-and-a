import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    showUpdateForm(){
      this.set('updateQuestion', true);
    },
    update(question) {
       var params = {
       title: this.get('title'),
       author: this.get('author'),
       content: this.get('content')
     };
     this.set('updateQuestion', false);
     this.sendAction('update', question, params);
   }
  }
});
