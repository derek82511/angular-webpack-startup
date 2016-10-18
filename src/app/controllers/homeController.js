export default class HomeController {
    constructor($interval, Util) {
        this.title = 'Angular Webpack Startup';

        $interval(() => {
            this.timeStamp = Util.getDateTime();
        }, 1000);

        console.log(Util.getText());
    }
}

HomeController.$inject = ['$interval', 'Util'];
