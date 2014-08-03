require.config({
    paths : {
        'angular' : '_libs/angular/angular',
        angularRoute: '_libs/angular-route/angular-route',
        angularMocks: '_libs/angular-mocks/angular-mocks',
        text: '_libs/requirejs-text/text',
        ui: '_libs/angular-bootstrap/ui-bootstrap',
        tpls: '_libs/angular-bootstrap/ui-bootstrap-tpls.min',
        snapjs: "_libs/snapjs/snap",
        angularSnap: '_libs/angular-snap/angular-snap',
        classie: '_libs/classie/classie',
        ///scroller: '_libs/cbpScroller',
        jQuery: '_libs/jquery/jquery.min',
        sticky: '_libs/stickySidebar',
        modernizr: '_libs/modernizr',
        parse: '_libs/parse'
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
        'angularSnap': ['angular'],
        'sticky': ['jQuery']
        //'scroller': ['classie']
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