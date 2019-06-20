'use strict';
let local = require('../local.env.js');
// Production specific configuration
// =================================
module.exports = {
     // Server IP
     ip: process.env.IP ||undefined,
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     // Server port
     port: 8080,
     mongo: {
          uri: local.mongo.uri
     },
     selfURL: 'http://10.0.75.2',
     webApp: {
          url: "http://10.0.75.2:80"
     }
};