import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    resetAnswer(){
      this.set('username','');
      this.set('answer','');
    },
    saveAnswer(){
      var params = {
        username: this.get('username'),
        answer: this.get('answer'),
        question: this.get('question'),
        date: new Date(),
      };
      this.sendAction('saveAnswer', params);
      //resetAnswer();
    },


  }
});
