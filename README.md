starter-kit
===========

What I did:

1. Download starter kit zip file
1. Unzip
1. Cd into starter kit directory
1. Open js libs and check it out a bit
1. Look at app.js (where "all our javascript will go")
1. Look at index.html (where "all our handlebars will go")
1. Remove lines 3-11 from app.js
1. Remove body lines above list of scripts at the bottom from index.html
1. Add bootstrap, showdown and moment to index.html
  * Get bootstrap from http://www.bootstrapcdn.com/
    * Use legacy 2.3.2 no icons to match vid
  * Get showdown and moment from https://cdnjs.com/
1. Add following to body above scripts on index.html

    <script type="text/x-handlebars">
      <div class="navbar">
        <div class="navbar-inner">
          <a class="brand" href="#">Bloggr</a>
          <ul class="nav">
            <li><a href="#">Posts</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
    </script>

1. Open index.html in the browser.


What was already in the README
==============================

A starter kit for Ember

Your Ember.js project is almost ready! Here's how to get started:

- Start writing your app in `js/app.js`.

- Describe your application HTML in `index.html`.

- During development, you can link to `js/libs/ember-*.js` to get the
  unminified version of Ember.js.

- Add CSS to `css/style.css`.

- Open `index.html` in your browser.

Tests
=====

This starter kit comes with an integration test sample, written for QUnit runner.

You can run the tests by opening the `index.html?test` page in your browser.

The test is located in the `tests/tests.js` file. You can see how such an
integration test should be written, using QUnit assertions and ember-testing helpers.

For more information about ember-testing package see [ember-testing](http://emberjs.com/guides/testing/integration/).

For more information about the QUnit testing framework, see [QUnit](http://qunitjs.com/).

Contact
====

[www.emberjs.com](http://www.emberjs.com)
