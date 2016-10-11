export default ['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            template: require('./views/home.html'),
            controller: "HomeController",
            controllerAs: "homeCtrl"
        })

}];
