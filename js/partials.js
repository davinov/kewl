angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/home.html', [
'',
'<h1 class="text-center">Kewl brunch skeleton walkthrough</h1>',
'<p class="lead">',
'  Angular apps are client-side apps, often single-page.',
'  They land their code on the client, then load on demand data from the server using AJAX.',
'  Unlike regular web pages (without AJAX) when all the content is generated by the server, when the content changes,',
'  useful indicators provided by the browser are not triggered (loading bar, error messages,...).',
'  Moreover, nothing indicates to the user something is happening, preventing him to diagnose an eventual error.',
'  Angular provides all the tools we need to address this lacks.',
'  Let\'s walk together though this boilerplate code to start an Angular app capable of communicating elegantly with APIs.',
'  ',
'</p>',
'<ol>',
'  <li>',
'    <h2>Starting a new brunch project<small> The beginning of all good story</small></h2><p>To start a client-only app easily, I suggest using tools like <a href="http://brunch.io">Brunch</a>,',
'<a href="http://yeoman.io/">Yeoman</a> or <a href="http://lauterry.github.io/ngTailor/">ngTailor</a>.</p>',
'<p>Let&#39;s use Brunch and generate a project based on the <a href="http://vbrajon.fr">@vbrajon</a>&#39;s',
'<a href="https://github.com/vbrajon/brunch-skeleton">brunch skeleton</a>:</p>',
'<pre><code>brunch new gh:vbrajon/brunch-skeleton kewl-app',
'cd kewl-app',
'brunch watch --server',
'</code></pre><p>And watch your app live on <a href="http://localhost:3333">http://localhost:3333</a> !</p>',
'',
'    <div class="tip"><p>You can publish you client-side app really easily on Github pages by inititing a repo in your <code>public</code> folder,',
'switching to gh-pages branch, commiting all files there and pushing to your repo on Github.',
'See the README file for more info.</p>',
'',
'    </div>',
'  </li>',
'  <li>',
'    <h2>Creating our backend with Express<small> Love at the first sight</small></h2><p>Let&#39;s create some backend for our brand new Angular app.',
'Having a REST API as a backend is a great choice, as it&#39;s allow other developers to create easily new fontends to',
'use the data it exposes (native mobile apps, desktop apps,...) and interacts with others services.',
'The easy syntax of <a href="http://expressjs.com/">Express.js</a> will help us creating one easily.</p>',
'<h4 id="serving-our-front-end-with-express">Serving our front-end with Express</h4>',
'<p>As Brunch&#39;s basic server do, we need to send the user our static files (the Angular frontend).',
'After Express&#39;s install with <code>npm install express --save</code>, we create a new <code>server/api.coffee</code> file containing :</p>',
'<pre><code>express = require &#39;express&#39;',
'path = require &#39;path&#39;',
'',
'# Configuration',
'api = express()',
'api.set &#39;title&#39;, &#39;Kewl&#39;',
'',
'# Frontend static files',
'api.use express.static path.join __dirname, &#39;../public&#39;',
'api.get &#39;/&#39;, (req, res) -&gt;',
'  res.sendfile &#39;index.html&#39;,',
'  root: path.join __dirname, &#39;../_client&#39;',
'',
'# API routes',
'# Will come later!',
'',
'# Functions to start and stop the server',
'api.start = (port = 3333, path, callback) -&gt;',
'  api.listen port, callback',
'  console.log &#39;Server listening at port &#39; + port',
'api.stop = (callback) -&gt;',
'  api.close callback',
'',
'# Starting our server',
'api.start()',
'</code></pre><p>We can than start our server with <code>./node_modules/.bin/coffee server/api.coffee</code>.</p>',
'',
'    <div class="tip"><p>By installing globally CoffeeScript (<code>npm install -g coffeescript</code>), you can use only <code>coffee server/api.coffee</code>.</p>',
'',
'    </div><h4 id="integrating-express-with-brunch">Integrating Express with Brunch</h4>',
'<p>As Brunch provide us an easy development server, we might want to continue using our <code>brunch watch --server</code> to',
'be the only requirement to start the app.',
'In Brunch config file <code>config.coffee</code>:</p>',
'<pre><code>exports.config =',
'  server:',
'    path: &#39;server/server.coffee&#39;',
'</code></pre><p>And in <code>server/server.coffee</code> :</p>',
'<pre><code># Called by brunch --server',
'api = require &#39;./api&#39;',
'module.exports =',
'  startServer: api.start',
'  stopServer: api.stop',
'</code></pre><p>Now, <code>brunch watch --server</code> starts our Express serving our frontend, so the line <code>api.start()</code> is no longer',
'desired in <code>server/api.coffee</code>.</p>',
'',
'  </li>',
'</ol>',''].join("\n"));
}]);