angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/home.html', [
'',
'<h1 class="text-center">Welcome 2 Brunch-Skeleton</h1>',
'<accordion>',
'  <accordion-group heading="Link repository"><a href="https://github.com/vbrajon/brunch-skeleton">vbrajon/brunch-skeleton</a></accordion-group>',
'  <accordion-group heading="Readme.md"><h1 id="brunch-skeleton-build-status-https-travis-ci-org-vbrajon-brunch-skeleton-png-branch-master-https-travis-ci-org-vbrajon-brunch-skeleton-coverage-status-https-coveralls-io-repos-vbrajon-brunch-skeleton-badge-png-https-coveralls-io-r-vbrajon-brunch-skeleton-">Brunch skeleton <a href="https://travis-ci.org/vbrajon/brunch-skeleton"><img src="https://travis-ci.org/vbrajon/brunch-skeleton.png?branch=master" alt="Build Status"></a> <a href="https://coveralls.io/r/vbrajon/brunch-skeleton"><img src="https://coveralls.io/repos/vbrajon/brunch-skeleton/badge.png" alt="Coverage Status"></a></h1>',
'<p>:skull: Minimalistic Skeleton for Brunch including cool stuff</p>',
'<p><img src="https://github.com/vbrajon/brunch-skeleton/raw/master/app/assets/veggie-skeleton.jpg" alt="image" title="Veggie Skeleton"></p>',
'<hr>',
'<h2 id="technologies">Technologies</h2>',
'<h3 id="languages">Languages</h3>',
'<ul>',
'<li><a href="http://coffeescript.org/">Coffeescript</a></li>',
'<li><a href="http://jade-lang.com/">Jade</a></li>',
'<li><a href="http://www.lesscss.org/">Less</a></li>',
'</ul>',
'<h3 id="framework-tools">Framework|Tools</h3>',
'<ul>',
'<li><a href="http://angularjs.org/">AngularJS</a></li>',
'<li><a href="http://angular-ui.github.io/bootstrap/">AngularUI (Bootstrap)</a></li>',
'<li><a href="http://getbootstrap.com/">Bootstrap3</a></li>',
'<li><a href="http://fontawesome.io/">FontAwesome4</a></li>',
'</ul>',
'<h2 id="requirements">Requirements</h2>',
'<ul>',
'<li><a href="http://nodejs.org/">NodeJS</a></li>',
'</ul>',
'<h2 id="installation">Installation</h2>',
'<pre><code>git clone https://github.com/vbrajon/brunch-skeleton.git &amp;&amp; cd brunch-skeleton',
'sudo npm install -g brunch bower',
'npm install',
'npm start',
'</code></pre>',
'  </accordion-group>',
'  <accordion-group heading="Font-awesome"><i class="icon icon-gears"></i></accordion-group>',
'  <accordion-group heading="Angular filter"><span data-ng-bind="\'hey, capitalize me !\'|capitalize"></span></accordion-group>',
'  <accordion-group heading="Fancy Jade stuff" is-open="true"><blockquote>',
'<p>Jade template precompile markdown, coffeescript and include files before being served</p>',
'</blockquote>',
'<p>This look like <code>include ../../README.md</code> or</p>',
'<pre><code>:coffeescript',
'    console.log Object.keys(window)',
'</code></pre><alert><strong>Note:</strong> angular prevent inline script execution, yeah !</alert>',
'  </accordion-group>',
'</accordion>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/404.html', [
'',
'<h1>:( Not Found /!\</h1>',''].join("\n"));
}]);