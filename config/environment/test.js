'use strict';
let local = require('../local.env.js');
// Test specific configuration
// =================================
module.exports = {
     // Server IP
     ip: '0.0.0.0',
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     // Server port
     port: 8080,
     // MongoDB connection options
     mongo: {
         uri: 'mongodb://127.0.0.1:27017/upmt_test'
     },
     selfURL: 'http://127.0.0.1',
     webApp: {
          url: "http://127.0.0.1:80"
     }
};