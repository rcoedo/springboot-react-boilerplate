var global = this;

var window = {
    __SSR__: true
};

var process = {};
var console = {};

console.debug = print;
console.warn = print;
console.error = print;
console.log = print;