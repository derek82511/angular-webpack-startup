import moment from 'moment';

var text = Symbol();

class Util {
    constructor() {
        this[text] = 'initial text';
    }

    getDateTime() {
        return moment(new Date()).format('YYYY/MM/DD HH:mm:ss');
    }

    changeText(){
        this[text] = 'changed text';
    }

    getText(){
        return this[text];
    }
}

Util.$inject = [];

export default () => new Util;
