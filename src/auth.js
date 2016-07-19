const $ = require('jquery');
const onlyAuthVendor = require('only-auth-vendor')

const app = document.getElementById('app')

app.innerHTML = `${$.name}, ${onlyAuthVendor()}`
