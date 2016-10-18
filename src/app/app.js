import 'bootstrap/dist/css/bootstrap.min.css'

import './css/style.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'

import angular from 'angular';
import angularUiRouter from 'angular-ui-router'

import AppConfig from './app.config';
import AppRun from './app.run';

import Util from './services/util';

import HomeController from './controllers/homeController';

angular.module('app', [angularUiRouter])
    .config(AppConfig)
    .run(AppRun)
    .factory('Util', Util)
    .controller('HomeController', HomeController)

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
