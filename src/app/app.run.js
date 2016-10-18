export default function AppRun($state, Util) {

    console.log(Util.getText());
    Util.changeText();

    $state.go('home');

};

AppRun.$inject = ['$state', 'Util'];
