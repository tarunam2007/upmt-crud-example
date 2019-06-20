'use strict';
let local = require('../local.env.js');
// Development specific configuration
// ==================================
module.exports = {
     selfURL: 'http://127.0.0.1:8000',
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     port: 8001,
     ip: '0.0.0.0',
     seedDB: true,
     webApp: {
        url: "http://127.0.0.1:80"
     }
};