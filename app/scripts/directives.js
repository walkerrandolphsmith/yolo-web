'use strict';

define(['angular', 'services', 'classie'], function(angular, services, classie) {

    /* Directives */

    angular.module('YoloApp.directives', ['YoloApp.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }])
        .directive('scroller', ['$window', function($window) {

            var docElem = $window.document.documentElement;

            function getViewportH() {
                var client = docElem['clientHeight'],
                    inner = $window['innerHeight'];

                if( client < inner )
                    return inner;
                else
                    return client;
            }

            function scrollY(){
                return $window.pageYOffset || docElem.scrollTop;
            }

            // http://stackoverflow.com/a/5598797/989439
            function getOffset( el ) {

                var offsetTop = 0, offsetLeft = 0;
                do {
                    if ( !isNaN( el.offsetTop ) ) {
                        offsetTop += el.offsetTop;
                    }
                    if ( !isNaN( el.offsetLeft ) ) {
                        offsetLeft += el.offsetLeft;
                    }
                } while( el = el.offsetParent )
                return {
                    top : offsetTop,
                    left : offsetLeft
                }
            }

            function inViewport( el, h ) {
                var elH = el.offsetHeight;
                var scrolled = scrollY();
                var viewed = scrolled + getViewportH();
                var elTop = getOffset(el).top;
                var elBottom = elTop + elH;
                // if 0, the element is considered in the viewport as soon as it enters.
                // if 1, the element is considered in the viewport only when it's fully inside
                // value in percentage (1 >= h >= 0)
                h = h || 0;

                return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
            }

            function extend( a, b ) {
                for( var key in b ) {
                    if( b.hasOwnProperty( key ) ) {
                        a[key] = b[key];
                    }
                }
                return a;
            }

            function scroller( el, options ) {
                this.el = el;
                this.options = extend( this.defaults, options );
                this._init();
            }

            scroller.prototype = {
                defaults : {
                    viewportFactor : 0.2
                },
                _init : function() {
                    if( Modernizr.touch ) return;
                    this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '.cbp-so-section' ) );
                    this.didScroll = false;

                    var self = this;
                    // the sections already shown...
                    this.sections.forEach( function( el, i ) {
                        if( !inViewport( el ) ) {
                            classie.add( el, 'cbp-so-init' );
                        }
                    } );

                    var scrollHandler = function() {
                            if( !self.didScroll ) {
                                self.didScroll = true;
                                setTimeout( function() { self._scrollPage(); }, 60 );
                            }
                        },
                        resizeHandler = function() {
                            function delayed() {
                                self._scrollPage();
                                self.resizeTimeout = null;
                            }
                            if ( self.resizeTimeout ) {
                                clearTimeout( self.resizeTimeout );
                            }
                            self.resizeTimeout = setTimeout( delayed, 200 );
                        };

                    $window.addEventListener( 'scroll', scrollHandler, false );
                    $window.addEventListener( 'resize', resizeHandler, false );
                },
                _scrollPage : function() {
                    var self = this;

                    this.sections.forEach( function( el, i ) {
                        if( inViewport( el, self.options.viewportFactor ) ) {
                            classie.add( el, 'cbp-so-animate' );
                        }
                        else {
                            // items initially in the viewport will also animate on scroll
                            classie.add( el, 'cbp-so-init' );
                            classie.remove( el, 'cbp-so-animate' );
                        }
                    });
                    this.didScroll = false;
                }
            }

            var linker = function(scope, elm, attrs) {
                new scroller(elm[0]);
            };

            return {
                restrict: 'A',
                link: linker
            }
        }])
        .directive('stickyAside', ['$window', function($window) {

            var stickSidebar = function () {

                var sidebarSelector = $(this);
                var viewportHeight = $(window).height();
                var sidebarHeight = sidebarSelector.outerHeight();
                var contentHeight = $('.snap-content').outerHeight();
                var scroll_top = $(window).scrollTop();
                var breakingPoint = 3.5;

                if ((contentHeight > sidebarHeight) && (viewportHeight > sidebarHeight)) {

                    if (scroll_top <= breakingPoint) {
                        sidebarSelector.css('top', breakingPoint+"em");

                    }else{
                        sidebarSelector.css('top', scroll_top);
                    }

                }
            };

            var linker = function(scope, elm, attrs) {
                $window.addEventListener( 'scroll', $.proxy(stickSidebar, elm[0]), false );
                $window.addEventListener( 'resize', $.proxy(stickSidebar, elm[0]), false );
            };

            return {
                restrict: 'A',
                link: linker
            }
        }]);

});