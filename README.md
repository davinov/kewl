# Kewl brunch skeleton
:heart: Result of the infinite love of AngularJS and APIs

----------------

## Technologies

### Languages
- [Coffeescript](http://coffeescript.org/)
- [Jade](http://jade-lang.com/)
- [Less](http://www.lesscss.org/)

### Framework|Tools
- [AngularJS](http://angularjs.org/)
- [AngularUI (Bootstrap)](http://angular-ui.github.io/bootstrap/)
- [Bootstrap3](http://getbootstrap.com/)
- [FontAwesome4](http://fontawesome.io/)

## Requirements

- [NodeJS](http://nodejs.org/)

## Installation

    brunch new gh:davinov/kewl

## Development server

`npm start` or `bunch watch --server`

## Build for production

    brunch build --production

## Deploy on GitHub Pages

Client-side only
- Init a git repository in public folder

        cd public
        git init
        git branch -m master gh-pages
        git remote add origin [github repository address]

- Build changes if necessary
- Commit your changes in public/ folder and upload them

        git add .
        git commit
        git push

This last procedure is automated in `publidh-on-github.sh`.

## Thanks

Based on @vbrajon's [brunch skeleton](https://github.com/vbrajon/brunch-skeleton)
