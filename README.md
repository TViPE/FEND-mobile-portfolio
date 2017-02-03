## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

###Optimize PageSpeed Insights score for part 1:
1. Use gulp.js (gulp-imagemin and gulp-imageresize) to compress and resize images.
2. Minify css stylesheet file by using media attribute for print.
3. Inline css stylesheet in index.html file to reduce the downloading work for the browser.
4. Move the css stylesheet above the js script in order to avoid render blocking.
5. Move all JavaScript to the footer
6. Use async attribute for JavaScript to signal the browser that the scripts does not need to be executed at the exact point where it's referenced. This allows the browser to continue construct the DOM and let the scripts execute when it is ready.
7. Use Web Font Loader to replace the Google font, which avoid loading font from external resrouces.
8. Inline Javascript.


####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

###Optimization FPS for part 2:
1. Replace querySelector with getElementById and querySelectorAll with getElementsByClassName. This replacement help enhancing in the performance.
2. Remove 2 functions: DetermineDx() and SizeSwitcher(size)
3. Rewrite the changePizzaSizes(size):
	* Rewrite switch statement to change the size of the pizza.
	* Declare a new var randomPizza to store document.getElementsByClassName("randomPizzaContainer") to minify bytes.
	* Decare a new var len to store document.getElementsByClassName("randomPizzaContainer").length to minify bytes.
4. Update the updatePositions() function:
	* Move the var items out of the function.
	* Declare a var itemLength = items.length; to minify bytes.
	* Set the phase calculation out of the loop to minimize  repeatative calculation in the loop body.
5. Reduce the number of pizzas from 200 to 28 when DOMContentLoaded. This reduces unncessary extra pizza images when the page is loaded.

