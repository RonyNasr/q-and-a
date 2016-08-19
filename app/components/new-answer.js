import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    saveAnswer(){
      var params = {
        username: this.get('username'),
        answer: this.get('answer'),
        question: this.get('question'),
        date: new Date(),
      };
      this.sendAction('saveAnswer', params);
      this.set('username','');
      this.set('answer','');
    }
  }
});
