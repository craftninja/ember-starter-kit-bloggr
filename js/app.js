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
