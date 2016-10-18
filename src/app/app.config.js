export default function AppConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            template: require('./views/home.html'),
            controller: "HomeController",
            controllerAs: "homeCtrl"
        })

};

AppConfig.$inject = ['$stateProvider'];
