// Setup for JQuery JSDOM

let jsdom = require('jsdom-global')();
let jQuery = require("jquery");

global.jQuery = jQuery;
global.$ = jQuery;    

//https://github.com/vuejs/vue-cli/issues/2128
window.Date = Date;