# See http://brunch.io/#documentation for docs.
exports.config =
  modules:
    definition: false
    wrapper: false
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^vendor/ # symlinks
    stylesheets:
      joinTo:
        'css/app.css': /app\.less$/ # app.less includes other files.
    templates:
      joinTo:
        'js/dontUseMe' : /^app/ # dirty hack for Jade compiling.
  plugins:
    jade:
      pretty: yes
    jade_angular:
      modules_folder: 'partials'
  server:
    path: 'server/server.coffee'
