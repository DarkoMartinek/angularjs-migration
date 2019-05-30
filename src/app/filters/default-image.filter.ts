import * as angular from 'angular';

angular
    .module('codecraft')
    .filter('defaultImage', () => {
        return (input, param) => {
            if (!param) {
                param = '/img/avatar.png';
            }
            if (!input) {
                return param;
            }
            return input;
        };
    });
