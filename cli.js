#!/usr/bin/env node

const isGraphql = require("./index.js");

console.log(isGraphql(process.argv[2]));
