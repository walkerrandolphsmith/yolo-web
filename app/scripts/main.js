require.config({
    paths : {
        'angular' : 'bower/angular/angular',
        angularRoute: 'bower/angular-route/angular-route',
        angularMocks: 'bower/angular-mocks/angular-mocks',
        text: 'bower/requirejs-text/text',
        ui: 'bower/angular-bootstrap/ui-bootstrap',
        tpls: 'bower/angular-bootstrap/ui-bootstrap-tpls.min',
        jQuery: 'bower/jquery/jquery',
        classie: 'bower/classie/classie',
        snapjs: "bower/snapjs/snap",
        angularSnap: 'bower/angular-snap/angular-snap',
        modernizr: 'bower/modernizr/modernizr',
        parse: 'bower/parse'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        },
        'ui':['angular'],
        'tpls':['angular', 'ui'],
        'angularSnap': ['angular']
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
    //app.config(function($))

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});
