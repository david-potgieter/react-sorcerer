require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function getDefaultSizes() {
    var sizes = {
        mobileSm: 320,
        mobileLg: 414,
        tabletSm: 768,
        tabletLg: 1024,
        desktopXs: 1440,
        desktopSm: 1680,
        desktopMd: 1920,
        desktopLg: 2560,
        desktopXl: 3840
    };

    return sizes;
}

module.exports = getDefaultSizes;

},{}],"react-sorcerer":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultSizes = require('./defaultSizes');

var _defaultSizes2 = _interopRequireDefault(_defaultSizes);

var Sorcerer = (function (_React$Component) {
	_inherits(Sorcerer, _React$Component);

	function Sorcerer(props) {
		_classCallCheck(this, Sorcerer);

		_get(Object.getPrototypeOf(Sorcerer.prototype), 'constructor', this).call(this, props);

		this.addErrorSrc = this.addErrorSrc.bind(this);
	}

	_createClass(Sorcerer, [{
		key: 'addErrorSrc',
		value: function addErrorSrc(e) {
			e.target.src = this.props.errorSrc;
		}
	}, {
		key: 'getSrcSet',
		value: function getSrcSet() {
			var _props = this.props;
			var srcExt = _props.srcExt;
			var srcName = _props.srcName;
			var srcPath = _props.srcPath;
			var optimizedPath = _props.optimizedPath;
			var maxSize = _props.maxSize;
			var minSize = _props.minSize;

			var sizes = this.props.sizes ? this.props.sizes : (0, _defaultSizes2['default'])();
			var min = minSize ? sizes[minSize] : 320;
			var max = maxSize ? sizes[maxSize] : 3840;
			var path = optimizedPath ? optimizedPath : srcPath + '/optimized';
			var srcSetStr = '';

			for (var size in sizes) {
				if (sizes[size] >= min && sizes[size] <= max) {
					if (sizes[size] === max) {
						srcSetStr += path + '/' + srcName + '_' + size + '.' + srcExt + ' ' + sizes[size] + 'w';
					} else {
						srcSetStr += path + '/' + srcName + '_' + size + '.' + srcExt + ' ' + sizes[size] + 'w, ';
					}
				}
			}

			return srcSetStr;
		}
	}, {
		key: 'imageProcessor',
		value: (function (_imageProcessor) {
			function imageProcessor() {
				return _imageProcessor.apply(this, arguments);
			}

			imageProcessor.toString = function () {
				return _imageProcessor.toString();
			};

			return imageProcessor;
		})(function () {
			return imageProcessor;
		})
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('img', {
				alt: this.props.alt,
				className: this.props.className ? this.props.className : '',
				src: this.props.srcPath + '/' + this.props.srcName + '.' + this.props.srcExt,
				srcSet: this.getSrcSet(),
				onError: this.props.errorSrc ? this.addErrorSrc : null
			});
		}
	}]);

	return Sorcerer;
})(_react2['default'].Component);

exports['default'] = Sorcerer;

Sorcerer.propTypes = {
	alt: _react2['default'].PropTypes.string.isRequired,
	className: _react2['default'].PropTypes.string,
	sizes: _react2['default'].PropTypes.object,
	errorSrc: _react2['default'].PropTypes.string,
	maxSize: _react2['default'].PropTypes.string,
	minSize: _react2['default'].PropTypes.string,
	optimizedPath: _react2['default'].PropTypes.string,
	srcExt: _react2['default'].PropTypes.string.isRequired,
	srcName: _react2['default'].PropTypes.string.isRequired,
	srcPath: _react2['default'].PropTypes.string.isRequired
};
module.exports = exports['default'];

},{"./defaultSizes":1,"react":undefined}]},{},[]);