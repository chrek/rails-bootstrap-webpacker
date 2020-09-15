# rails-bootstrap-webpacker

Integrating Bootstrap and jQuery with Rails 6 Webpacker
-------------------------------------------------------

## Option 1: Webpacker coexisting with the Asset Pipeline
Webpacker makes it easy to use the JavaScript pre-processor and bundler webpack 4.x.x+ to manage application-like JavaScript in Rails. It coexists with the asset pipeline, as the primary purpose for webpack is app-like JavaScript.
Images, CSS, or even JavaScript Sprinkles continue to live in app/assets).

## Option 2: Webpacker without the use of Asset Pipeline
It is possible to use Webpacker for CSS, images and fonts assets as well, in which case you may not even need the asset pipeline. This is mostly relevant when exclusively using component-based JavaScript frameworks.

## Features
This project uses Option 2 :
- Yarn: package manager that doubles down as project manager. It's a package manager for your code and provides the possibility of code sharing
- Webpacker: packs together and combines all Javascript files into one place
- Javascript folder is no longer available in the ‘Assets’ folder.
- Bootstrap Tooltips: Tooltips rely on the 3rd party library Popper.js for positioning. You must include popper.min.js before bootstrap.js or use bootstrap.bundle.min.js / bootstrap.bundle.js which contains Popper.js in order for tooltips to work!

To test the site locally:

From the root of project run the commands:

1. `bundle install`
2. `bundle exec rails serve`

<hr>

## References
1. [stevepolito.design](https://stevepolito.design/blog/rails-6-bootstrap-4-webpacker-tutorial/)
2. [blog.makersacademy.com](https://blog.makersacademy.com/how-to-install-bootstrap-and-jquery-on-rails-6-da6e810c1b87)
3. [github.com/rails/webpacker](https://github.com/rails/webpacker)
4. [getbootstrap.com](https://getbootstrap.com/docs/4.5/components/tooltips/)