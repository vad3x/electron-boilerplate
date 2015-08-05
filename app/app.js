'use strict';

var config = require('./app-config');

// Electron modules
var os       = require('os');
var remote   = require('remote');
var shell    = require('shell');

// Browser modules
import { lodash } from 'lodash';
import Startup from './browser/startup';

let options = {
  config,
  remote,
  shell,
  os
};

new Startup(options);
