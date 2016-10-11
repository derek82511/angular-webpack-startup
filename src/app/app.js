import 'bootstrap/dist/css/bootstrap.min.css'

import './css/style.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'

import angular from 'angular';
import angularUiRouter from 'angular-ui-router'

import appConfig from './app.config';
import appRun from './app.run';

import homeController from './controllers/homeController';

angular.module('app', [angularUiRouter])
    .config(appConfig)
    .run(appRun)
    .controller('HomeController', homeController)

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
