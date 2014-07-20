require.config({
    paths : {
        'angular' : '_libs/angular/angular',
        angularRoute: '_libs/angular-route/angular-route',
        angularMocks: '_libs/angular-mocks/angular-mocks',
        text: '_libs/requirejs-text/text'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'angular',
    'app',
    'routes'
], function(angular, app, routes) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});