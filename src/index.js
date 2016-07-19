const $ = require('jquery');
const onlyIndexVendor = require('only-index-vendor')

const app = document.getElementById('app')

app.innerHTML = `${$.name}, ${onlyIndexVendor()}`
