# Linebacker

Drop in a script tag into your page to draw baselines on your page. Great for checking your vertical rhythm.

```html
<script src="http://linebacker.herokuapp.com/rule" type="text/javascript" charset="utf-8"></script>
```

Activate with `linebacker.rule()`:

```html
<button onclick="linebacker.rule()">Draw them lines</button>
```

Linebacker will pick out the line height of your page and draw ruled notepaper lines to show you where your baselines should be.

Built for Chrome, so your mileage may vary.

**Important note:** Every font has a different baseline, which isn't easy to detect in JavaScript. You may want to add an offset, like so:

```html
http://linebacker.herokuapp.com/rule?offset=4
```

All available options:

* `offset` -- a one-off offset to apply to the ruled lines, default is 0
* `behind` -- whether to draw the lines behind or in front of the page, default is true
* `thickness` -- the thickness of the lines, default is 1
* `opacity` -- the opacity of the lines, default is 0.1

Chain options like so:

```html
http://linebacker.herokuapp.com/rule?offset=4&behind=false&thickness=1
```

## Developing

Install dependencies:

    $ npm install -d

Start the server:

    $ node app.js

Open http://localhost:3000/

## Deploying on Heroku

    $ heroku create -s cedar
    $ heroku config:add NODE_ENV=production
    $ heroku create -s cedar