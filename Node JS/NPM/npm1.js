const pack = require('lodash')
let items = [1,[2,[3,[4,5]]]];
items = pack.flattenDeep(items);
console.log(items)