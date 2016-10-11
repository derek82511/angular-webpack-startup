import moment from 'moment';

export default ['$interval', function($interval) {
    const self = this;

    init();

    function init() {
        self.title = 'Angular Webpack Startup';

        $interval(function() {
            self.timeStamp = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');
        }, 1000);
    }

}];
