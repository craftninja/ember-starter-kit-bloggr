App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{
  id: '1',
  title: 'Intro to Ember',
  author: { name: 'Emily Platzer' },
  date: new Date('11-24-2014'),
  excerpt: "I'm really excited to get into Ember.",
  body: "Words and words and words and words. Here is the part where I'm coding, and here is the part where I'm figuring stuff out, and here is the part where I'm learning. Words and words and words and words. Here is the part where I'm coding, and here is the part where I'm figuring stuff out, and here is the part where I'm learning. Words and words and words and words. Here is the part where I'm coding, and here is the part where I'm figuring stuff out, and here is the part where I'm learning. Words and words and words and words. Here is the part where I'm coding, and here is the part where I'm figuring stuff out, and here is the part where I'm learning.",
}, {
  id: '2',
  title: 'Ember Continued',
  author: { name: 'Emily Platzer' },
  date: new Date('11-26-2014'),
  excerpt: "Ember is pretty fun!",
  body: "I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!! I am working in Ember and making stuff! Pretty exciting. Check it out!!!",
}];
