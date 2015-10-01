'use strict';

var apk = require('./../styles/assets/yolo.apk');
var playButton = require('./../styles/assets/google-play-button/google-play-store.png');
var iphone = require('./../styles/assets/devices/iphone.png');
var macbook = require('./../styles/assets/devices/macbook.png');
var ipad = require('./../styles/assets/devices/tablet.png');


import React from 'react';
import './App.less';

export default React.createClass({
	mixins: [],
	componentDidMount: componentDidMount,
	getInitialState: function(){
		return {
			apk: apk,
			playButton: playButton,
			iphone: iphone,
			macbook: macbook,
			ipad: ipad
		}
	},
	render: function () {

		return (<div className="container">
			<div className="hero">
			    <h1><abbr title="You Only Live Once">Yolo</abbr></h1>
			</div>

			<div className="container headers">
			    <div className="col-lg-4">
							<i className="fa fa-car"></i>
			        <h1><span className="strike"><span>Text</span></span> & Drive</h1>
			        <p>Texting and driving is the leading cause in teen death as of 2010.</p>
			    </div>

			    <div className="col-lg-4">
							<i className="fa fa-bell"></i>
			        <h1>Alert</h1>
			        <p>Become aware of when your children are in a moving vehicle.</p>
			    </div>

			    <div className="col-lg-4">
							<i className="fa fa-lock"></i>
			        <h1>Lock & Save</h1>
			        <p>Remotely lock childs device with a one time passcode.</p>
			    </div>
			</div>

			<div className="container center">
			    <div>
			        <div className="button-wrapper">
			            <a href={this.state.apk} className="a-btn">
			                <span className="a-btn-slide-text">$0</span>
			                <img src={this.state.playButton} alt="Google Play Store" />
			                <span className="a-btn-text"><small>Limited Time</small>&beta; test</span>
			                <span className="a-btn-icon-right"><span></span></span>
			            </a>
			        </div>
			    </div>
			</div>

			<div className="container">
			    <div id="cbp-so-scroller" className="cbp-so-scroller" scroller>


			        <section className="cbp-so-section cbp-so-init cbp-so-animate">
			            <article className="cbp-so-side cbp-so-side-left">
			                <h2>Monitor Remotely</h2>
			                <p>Knowing your child is safe is at your fingertips.</p>
			            </article>
			            <figure className="devices cbp-so-side cbp-so-side-right">
			                <img src={this.state.macbook} className="macbook" alt="labtop" />
			                <img src={this.state.ipad} className="ipad" alt="tablet" />
			                <img src={this.state.iphone} className="iphone" alt="phone" />

			            </figure>
			        </section>

			        <section className="cbp-so-section cbp-so-init cbp-so-animate">
			            <article className="cbp-so-side cbp-so-side-left">
			                <h2>Stay Notified</h2>
			                <p>Know how you want, when you want.</p>
			            </article>
			            <figure id="cbp-so-slide-notify" className="cbp-so-side cbp-so-side-right" >
			                <svg version="1.1" x="0px" y="0px" width="500px" height="500px" viewBox="15 0 100 100">
			                     <g transform="translate(50,0)">
			                      <path className="path-one" d="M64 0c35.347 0 64 28.654 64 64 0 35.347-28.653 64-64 64-35.346 0-64-28.653-64-64 0-35.346 28.654-64 64-64z" fill="#EBEEEE"/>
			                      <path d="M64 22c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5 0-2.761-2.238-5-5-5zm0 8c-1.657 0-3-1.343-3-3 0-1.656 1.343-3 3-3s3 1.344 3 3c0 1.657-1.343 3-3 3z" fill="#D2B040"/>
			                      <path d="M64 90c2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5z" fill="#E2AD00"/><path d="M90.935 77.214l-1.973-23.714c0-13.531-11.176-24.5-24.962-24.5s-24.962 10.969-24.962 24.5l-1.972 23.714c-4.041.886-7.066 4.48-7.066 8.786 0 4.971 1.029 9 6 9h56c4.971 0 6-4.029 6-9 0-4.306-3.025-7.9-7.065-8.786z" fill="#EFC84A"/>
			                      <path d="M68.578 97c.269-.613.422-1.288.422-2h-10c0 .712.154 1.387.422 2h9.156z" fill="#C19400"/><path d="M90.935 77.214l-1.973-23.714c0-13.531-11.176-24.5-24.962-24.5-.844 0-1.678.042-2.5.123 12.612 1.23 22.462 11.674 22.462 24.377l1.973 23.714c4.04.886 7.065 4.48 7.065 8.786 0 4.971-1.029 9-6 9h5c4.971 0 6-4.029 6-9 0-4.306-3.025-7.9-7.065-8.786z" fill="#DDB844"/>
			                      <polygon fill="#DDB844" points="37.083,77 90.917,77 90.584,73 37.416,73"/>
			                      <polygon fill="#CCAA3D" points="85.917,77 90.917,77 90.718,74.601 90.584,73 85.584,73"/>
			                    </g>
			                    <g transform="scale(.25,.25) translate(-150,0)">
			                        <path d="M221.866,114h181.828c20.409,0,35.74,17.263,35.74,37.672v98.954  c0,20.409-15.331,39.374-35.74,39.374h-31.26v50.922c0,6.803-2.592,9.079-6.719,3.672L323.941,290H221.866  c-20.409,0-38.432-18.965-38.432-39.374v-98.954C183.435,131.263,201.457,114,221.866,114z" className="path-two" />
			                        <path d="M183.435,172v78.626c0,20.409,18.022,39.374,38.432,39.374h102.074l41.775,54.594  c4.127,5.407,6.719,3.131,6.719-3.672V290h31.26c5.709,0,11.125-2.232,15.967-4.613L307.16,172H183.435z" className="path-three" />
			                        <path d="M291.623,165H109.795c-20.408,0-37.36,16.926-37.36,37.335v98.954  c0,20.41,16.952,37.711,37.36,37.711h29.64v52.585c0,6.803,3.402,8.248,7.53,2.841L189.55,339h102.073  c20.41,0,36.811-17.301,36.811-37.711v-98.954C328.435,181.926,312.033,165,291.623,165z" className="path-four" />
			                        <path d="M127.435,213c47,0,95.9,0,143.522,0c0.758,0,1.478,0,1.478,0c3,0,3-9,0-9c-48,0-94.451,0-142.071,0  c-0.757,0-2.929,0-2.929,0C121.435,204,121.435,213,127.435,213z" className="path-five" />
			                        <path d="M272.435,244c-48,0-94.451,0-142.071,0c-0.757,0-2.929,0-2.929,0c-6,0-6,10,0,10  c47,0,95.9,0,143.522,0c0.758,0,1.478,0,1.478,0C275.435,254,275.435,244,272.435,244z" className="path-five" />
			                        <path d="M272.435,290c-48,0-94.451,0-142.071,0c-0.757,0-2.929,0-2.929,0c-6,0-6,10,0,10  c47,0,95.9,0,143.522,0c0.758,0,1.478,0,1.478,0C275.435,300,275.435,290,272.435,290z" className="path-five" />
			                        <path d="M72.435,202.335v98.954c0,20.41,16.952,37.711,37.36,37.711h29.64v52.585  c0,6.803,3.402,8.248,7.53,2.841L189.55,339h92.28L107.425,164.668C88.044,165.88,72.435,182.675,72.435,202.335z" className="path-six"/>
			                    </g>
			                    <g>
			                        <path className="path-one" d="M64 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64z" fill="#EFC84A"/>
			                        <path d="M25 46.999h78c1.656 0 3 1.344 3 3v43c0 1.657-1.344 3-3 3h-78c-1.656 0-3-1.343-3-3v-43c0-1.656 1.344-3 3-3z" fill="#DF5A48"/>
			                        <path d="M22.643 94.854c.548.699 1.4 1.146 2.357 1.146h78c.963 0 1.82-.455 2.369-1.16.016.018-41.385-22.84-41.385-22.84s-41.289 22.869-41.341 22.854zm81.864-47.451l.005-.007-.075-.042-.035-.021c-2.309-1.325-40.402-23.333-40.402-23.333s-40.452 23.391-40.505 23.376l.009.013c-.345.21-.648.488-.906.814.053-.014 41.386 23.797 41.386 23.797s41.438-23.81 41.422-23.791c-.252-.324-.556-.596-.899-.806z" fill="#BD3E25"/>
			                        <path d="M29 33h70v18.158c.052.019-34.521 18.8-35.021 18.842.021.5-34.979-19.423-34.979-19.368v-17.632z" fill="#E4E7E8"/>
			                        <path d="M60 39h-25v4h25v-4zm-25 7v4h55v-4h-55z" fill="#ADB2B3"/>
			                    </g>
			                </svg>
			            </figure>
			        </section>


			        <section className="cbp-so-section cbp-so-init cbp-so-animate">
			            <article className="cbp-so-side cbp-so-side-right">
			                <h2>Facts</h2>
			                <p>Stop the texts stop the wrecks.</p>
			            </article>
			            <figure id="car" className="cbp-so-side cbp-so-side-left">
			                <ol id="facts">
			                    <li>
			                        <p>5 seconds is the average time a text distracts a drivers eyes off the road.</p>
			                    </li>
			                    <li>
			                        <p>Phone distractions increase the chance of wrecking 3 times.</p>
			                    </li>
			                    <li>
			                        <p><strong>11%</strong> of fatal crashes involving drivers under 20 were reported as distracted.</p>
			                    </li>
			                </ol>



			            </figure>
			        </section>


			    </div>
			</div>
		</div>);
	}
});

function componentDidMount() {

	new scroller(React.findDOMNode(this));
}


function getViewportH() {
	var docElem = window.document.documentElement;
	var client = docElem['clientHeight'],
		 inner = window['innerHeight'];

	if( client < inner )
		 return inner;
	else
		 return client;
}

function scrollY(){
	var docElem = window.document.documentElement;
	return window.pageYOffset || docElem.scrollTop;
}

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
			 this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '.cbp-so-section' ) );
			 this.didScroll = false;

			 var self = this;
			 this.sections.forEach( function( el, i ) {
					 if( !inViewport( el ) ) {
							 el.classList.add('cbp-so-init');
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

			 window.addEventListener( 'scroll', scrollHandler, false );
			 window.addEventListener( 'resize', resizeHandler, false );
	 },
	 _scrollPage : function() {
			 var self = this;

			 this.sections.forEach( function( el, i ) {
					 if( inViewport( el, self.options.viewportFactor ) ) {
						 	el.classList.add('cbp-so-animate');
					 }
					 else {
							 el.classList.add('cbp-so-init');
							 el.classList.remove('cbp-so-animate');
					 }
			 });
			 this.didScroll = false;
	 }
}
