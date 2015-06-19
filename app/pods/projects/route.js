import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
        Ember.$(document).attr('title', 'Projects');
      },
  }
});
