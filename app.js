// npm --version to get version of current npm
// npm i <packageName> - local dependency to use in particular projecy
// npm install -g <packageName> - global dependency use in any project
// package.json - manifest file (stores info about project/package)
// npm init or npm init y (everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)