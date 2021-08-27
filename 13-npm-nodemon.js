// npm --version to get version of current npm
// npm i <packageName> - local dependency to use in particular projecy
// npm install -g <packageName> - global dependency use in any project
// package.json - manifest file (stores info about project/package)
// npm init or npm init y (everything default)
// After clone and open as new project we can just npm install to get the dependencies
// nodemon restarts app in package.json

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("Hello World")