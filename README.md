# Front End Slicing Starter (LESS or SASS)

This is a super easy to use LESS or SASS starter to get you editing LESS or SASS code in seconds.

Includes out-of-the-box:

* Automatically compile `LESS` or `SASS`
* Vendor prefix your CSS for maximum browser support
* Auto-minify that CSS
* Auto-minify JavaScript
* Build a local **webserver** with **live-reload** to test on in seconds
* Bootstrap 3 Ready


This project was built for [Scotch School](https://school.scotch.io).


## What requirements do I need?

### Step 1: Node.JS (easy install)
Install Node.js [Node.js](https://nodejs.org/en/) is installed (use installer). Skip this is you already have Node on your computer.


### Step 2: Install gulp

Just open the terminal and run:

```
npm install gulp-cli -g
npm install gulp -D
```

### Step 3: Install Browser Sync

```
npm install -g browser-sync
```


**That's it!** Hopefully you already had some of these installed. It shouldn't hurt to re-run any of these if you already installed them.


## How do I install it?

### Clone the Repo

```
git clone git@github.com:scotch-io/less-or-sass-starter.git my-project
cd my-project
```

Note: If you are unsure how to use `git`, just skip this and download it manually. Same thing.


### How do I turn it on?

You'll need to do this on your first run. This just brings in all the stuff the gulpfile will do for you automatically.

```
npm install
```

After that, just activate it with:

```
gulp
```

A web server will pop-up. Now, everything inside of the LESS and SASS folders will be automatically compiled to your css files!




## How-To Summarized

```
git clone git@github.com:scotch-io/less-or-sass-starter.git my-project
cd my-project
npm install
gulp
```



## Debugging

Make sure you have everything installed. If it's still not working, run:

```
sudo npm cache clean
npm install --save-dev
npm update --save-dev
gulp
```


## Quick Tips

When `gulp` is running:

* Any changes to `scss/` will be compiled to `CSS/`
* Any changes to `less/` will be compiled to `CSS/` you
    - Note: **You must pick one** or the other. They are both provided out-of-the-box.
* Any changes or new files added to `js/plugins` will be compiled to `js/plugins.js` and `js/plugins.min.js`
* Any changes or new files added to `js/scripts` will be compiled to `js/scripts.min.js` and `js/scripts.js`



## License

Copyright 2017-2020 Scotch.io, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
