/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'jcblog',
    podModulePrefix: 'jcblog/pods',
    environment: environment,
    firebase: 'https://jcblog.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['segment'] = {
    WRITE_KEY: '97ZiOEUKzUzILtJoZcu0cVjyFVHZpBlp',
    LOG_EVENT_TRACKING: true
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none' 'self'",
    'script-src': "'self' 'unsafe-inline' http://www.google-analytics.com https://cdn.mxpnl.com http://localhost:4200/ember-cli-live-reload.js  http://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js  http://cdn.segment.com", 
    'font-src': "'self' http://fonts.gstatic.com https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://api.segment.io/v1/p *.firebaseio.com   wss://s-dal5-nss-23.firebaseio.com/.ws?v=5&ns=one-am http://api.mixpanel.com", // Allow data (ajax/websocket)
    'img-src': "'self' http://www.google-analytics.com",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://fonts.googleapis.com", // Allow inline styles and loaded CSS
    'media-src': "'self'"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
