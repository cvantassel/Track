function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js ***!
    \************************************************************************/

  /*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */

  /***/
  function node_modulesNgCircleProgressFesm2015NgCircleProgressJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function () {
      return CircleProgressComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function () {
      return CircleProgressOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function () {
      return NgCircleProgressModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CircleProgressOptions = function CircleProgressOptions() {
      _classCallCheck(this, CircleProgressOptions);

      this.class = '';
      this.backgroundGradient = false;
      this.backgroundColor = 'transparent';
      this.backgroundGradientStopColor = 'transparent';
      this.backgroundOpacity = 1;
      this.backgroundStroke = 'transparent';
      this.backgroundStrokeWidth = 0;
      this.backgroundPadding = 5;
      this.percent = 0;
      this.radius = 90;
      this.space = 4;
      this.toFixed = 0;
      this.maxPercent = 1000;
      this.renderOnClick = true;
      this.units = '%';
      this.unitsFontSize = '10';
      this.unitsFontWeight = 'normal';
      this.unitsColor = '#444444';
      this.outerStrokeGradient = false;
      this.outerStrokeWidth = 8;
      this.outerStrokeColor = '#78C000';
      this.outerStrokeGradientStopColor = 'transparent';
      this.outerStrokeLinecap = 'round';
      this.innerStrokeColor = '#C7E596';
      this.innerStrokeWidth = 4;
      this.titleFormat = undefined;
      this.title = 'auto';
      this.titleColor = '#444444';
      this.titleFontSize = '20';
      this.titleFontWeight = 'normal';
      this.subtitleFormat = undefined;
      this.subtitle = 'progress';
      this.subtitleColor = '#A9A9A9';
      this.subtitleFontSize = '10';
      this.subtitleFontWeight = 'normal';
      this.imageSrc = undefined;
      this.imageHeight = undefined;
      this.imageWidth = undefined;
      this.animation = true;
      this.animateTitle = true;
      this.animateSubtitle = false;
      this.animationDuration = 500;
      this.showTitle = true;
      this.showSubtitle = true;
      this.showUnits = true;
      this.showImage = false;
      this.showBackground = true;
      this.showInnerStroke = true;
      this.clockwise = true;
      this.responsive = false;
      this.startFromZero = true;
      this.showZeroOuterStroke = true;
      this.lazy = false;
    };
    /** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */


    var CircleProgressComponent =
    /*#__PURE__*/
    function () {
      function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;

        _classCallCheck(this, CircleProgressComponent);

        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // <svg> of component

        this.svgElement = null; // whether <svg> is in viewport

        this.isInViewport = false; // event for notifying viewport change caused by scrolling or resizing

        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;

        this.render = function () {
          _this.applyOptions();

          if (_this.options.lazy) {
            // Draw svg if it doesn't exist
            _this.svgElement === null && _this.draw(_this._lastPercent); // Draw it only when it's in the viewport

            if (_this.isInViewport) {
              // Draw it at the latest position when I am in.
              if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate(_this._lastPercent, _this.options.percent);
              } else {
                _this.draw(_this.options.percent);
              }

              _this._lastPercent = _this.options.percent;
            }
          } else {
            if (_this.options.animation && _this.options.animationDuration > 0) {
              _this.animate(_this._lastPercent, _this.options.percent);
            } else {
              _this.draw(_this.options.percent);
            }

            _this._lastPercent = _this.options.percent;
          }
        };

        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
          var angleInRadius = angleInDegrees * Math.PI / 180;
          var x = centerX + Math.sin(angleInRadius) * radius;
          var y = centerY - Math.cos(angleInRadius) * radius;
          return {
            x: x,
            y: y
          };
        };

        this.draw = function (percent) {
          // make percent reasonable
          percent = percent === undefined ? _this.options.percent : Math.abs(percent); // circle percent shouldn't be greater than 100%.

          var circlePercent = percent > 100 ? 100 : percent; // determine box size

          var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;

          if (_this.options.showBackground) {
            boxSize += _this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2);
          } // the centre of the circle


          var centre = {
            x: boxSize / 2,
            y: boxSize / 2
          }; // the start point of the arc

          var startPoint = {
            x: centre.x,
            y: centre.y - _this.options.radius
          }; // get the end point of the arc

          var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ? circlePercent : 100 - circlePercent) / 100); // ####################
          // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.


          if (circlePercent === 100) {
            endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
          } // largeArcFlag and sweepFlag


          var largeArcFlag, sweepFlag;

          if (circlePercent > 50) {
            var _ref = _this.options.clockwise ? [1, 1] : [1, 0];

            var _ref2 = _slicedToArray(_ref, 2);

            largeArcFlag = _ref2[0];
            sweepFlag = _ref2[1];
          } else {
            var _ref3 = _this.options.clockwise ? [0, 1] : [0, 0];

            var _ref4 = _slicedToArray(_ref3, 2);

            largeArcFlag = _ref4[0];
            sweepFlag = _ref4[1];
          } // percent may not equal the actual percent


          var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
          var titleTextPercent = titlePercent > _this.options.maxPercent ? "".concat(_this.options.maxPercent.toFixed(_this.options.toFixed), "+") : titlePercent.toFixed(_this.options.toFixed);
          var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent; // get title object

          var title = {
            x: centre.x,
            y: centre.y,
            textAnchor: 'middle',
            color: _this.options.titleColor,
            fontSize: _this.options.titleFontSize,
            fontWeight: _this.options.titleFontWeight,
            texts: [],
            tspans: []
          }; // from v0.9.9, both title and titleFormat(...) may be an array of string.

          if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
            var formatted = _this.options.titleFormat(titlePercent);

            if (formatted instanceof Array) {
              title.texts = _toConsumableArray(formatted);
            } else {
              title.texts.push(formatted.toString());
            }
          } else {
            if (_this.options.title === 'auto') {
              title.texts.push(titleTextPercent);
            } else {
              if (_this.options.title instanceof Array) {
                title.texts = _toConsumableArray(_this.options.title);
              } else {
                title.texts.push(_this.options.title.toString());
              }
            }
          } // get subtitle object


          var subtitle = {
            x: centre.x,
            y: centre.y,
            textAnchor: 'middle',
            color: _this.options.subtitleColor,
            fontSize: _this.options.subtitleFontSize,
            fontWeight: _this.options.subtitleFontWeight,
            texts: [],
            tspans: []
          }; // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.

          if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
            var _formatted = _this.options.subtitleFormat(subtitlePercent);

            if (_formatted instanceof Array) {
              subtitle.texts = _toConsumableArray(_formatted);
            } else {
              subtitle.texts.push(_formatted.toString());
            }
          } else {
            if (_this.options.subtitle instanceof Array) {
              subtitle.texts = _toConsumableArray(_this.options.subtitle);
            } else {
              subtitle.texts.push(_this.options.subtitle.toString());
            }
          } // get units object


          var units = {
            text: "".concat(_this.options.units),
            fontSize: _this.options.unitsFontSize,
            fontWeight: _this.options.unitsFontWeight,
            color: _this.options.unitsColor
          }; // get total count of text lines to be shown

          var rowCount = 0,
              rowNum = 1;
          _this.options.showTitle && (rowCount += title.texts.length);
          _this.options.showSubtitle && (rowCount += subtitle.texts.length); // calc dy for each tspan for title

          if (_this.options.showTitle) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = title.texts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var span = _step.value;
                title.tspans.push({
                  span: span,
                  dy: _this.getRelativeY(rowNum, rowCount)
                });
                rowNum++;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } // calc dy for each tspan for subtitle


          if (_this.options.showSubtitle) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = subtitle.texts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _span = _step2.value;
                subtitle.tspans.push({
                  span: _span,
                  dy: _this.getRelativeY(rowNum, rowCount)
                });
                rowNum++;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } // create ID for gradient element


          if (null === _this._gradientUUID) {
            _this._gradientUUID = _this.uuid();
          } // Bring it all together


          _this.svg = {
            viewBox: "0 0 ".concat(boxSize, " ").concat(boxSize),
            // Set both width and height to '100%' if it's responsive
            width: _this.options.responsive ? '100%' : boxSize,
            height: _this.options.responsive ? '100%' : boxSize,
            backgroundCircle: {
              cx: centre.x,
              cy: centre.y,
              r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
              fill: _this.options.backgroundColor,
              fillOpacity: _this.options.backgroundOpacity,
              stroke: _this.options.backgroundStroke,
              strokeWidth: _this.options.backgroundStrokeWidth
            },
            path: {
              // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
              d: "M ".concat(startPoint.x, " ").concat(startPoint.y, "\n        A ").concat(_this.options.radius, " ").concat(_this.options.radius, " 0 ").concat(largeArcFlag, " ").concat(sweepFlag, " ").concat(endPoint.x, " ").concat(endPoint.y),
              stroke: _this.options.outerStrokeColor,
              strokeWidth: _this.options.outerStrokeWidth,
              strokeLinecap: _this.options.outerStrokeLinecap,
              fill: 'none'
            },
            circle: {
              cx: centre.x,
              cy: centre.y,
              r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
              fill: 'none',
              stroke: _this.options.innerStrokeColor,
              strokeWidth: _this.options.innerStrokeWidth
            },
            title: title,
            units: units,
            subtitle: subtitle,
            image: {
              x: centre.x - _this.options.imageWidth / 2,
              y: centre.y - _this.options.imageHeight / 2,
              src: _this.options.imageSrc,
              width: _this.options.imageWidth,
              height: _this.options.imageHeight
            },
            outerLinearGradient: {
              id: 'outer-linear-' + _this._gradientUUID,
              colorStop1: _this.options.outerStrokeColor,
              colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor
            },
            radialGradient: {
              id: 'radial-' + _this._gradientUUID,
              colorStop1: _this.options.backgroundColor,
              colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor
            }
          };
        };

        this.getAnimationParameters = function (previousPercent, currentPercent) {
          var MIN_INTERVAL = 10;
          var times, step, interval;
          var fromPercent = _this.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
          var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
          var delta = Math.abs(Math.round(toPercent - fromPercent));

          if (delta >= 100) {
            // we will finish animation in 100 times
            times = 100;

            if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
              step = 1;
            } else {
              // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
              step = Math.round(delta / times);
            }
          } else {
            // we will finish in as many times as the number of percent.
            times = delta;
            step = 1;
          } // Get the interval of timer


          interval = Math.round(_this.options.animationDuration / times); // Readjust all values if the interval of timer is extremely small.

          if (interval < MIN_INTERVAL) {
            interval = MIN_INTERVAL;
            times = _this.options.animationDuration / interval;

            if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
              step = Math.round(100 / times);
            } else {
              step = Math.round(delta / times);
            }
          } // step must be greater than 0.


          if (step < 1) {
            step = 1;
          }

          return {
            times: times,
            step: step,
            interval: interval
          };
        };

        this.animate = function (previousPercent, currentPercent) {
          if (_this._timerSubscription && !_this._timerSubscription.closed) {
            _this._timerSubscription.unsubscribe();
          }

          var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
          var toPercent = currentPercent;

          var _this$getAnimationPar = _this.getAnimationParameters(fromPercent, toPercent),
              step = _this$getAnimationPar.step,
              interval = _this$getAnimationPar.interval;

          var count = fromPercent;

          if (fromPercent < toPercent) {
            _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
              count += step;

              if (count <= toPercent) {
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                } else {
                  _this.draw(count);
                }
              } else {
                _this.draw(toPercent);

                _this._timerSubscription.unsubscribe();
              }
            });
          } else {
            _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(function () {
              count -= step;

              if (count >= toPercent) {
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                  _this.draw(toPercent);

                  _this._timerSubscription.unsubscribe();
                } else {
                  _this.draw(count);
                }
              } else {
                _this.draw(toPercent);

                _this._timerSubscription.unsubscribe();
              }
            });
          }
        };

        this.emitClickEvent = function (event) {
          if (_this.options.renderOnClick) {
            _this.animate(0, _this.options.percent);
          }

          _this.onClick.emit(event);
        };

        this.applyOptions = function () {
          // the options of <circle-progress> may change already
          for (var _i2 = 0, _Object$keys = Object.keys(_this.options); _i2 < _Object$keys.length; _i2++) {
            var name = _Object$keys[_i2];

            if (_this.hasOwnProperty(name) && _this[name] !== undefined) {
              _this.options[name] = _this[name];
            } else if (_this.templateOptions && _this.templateOptions[name] !== undefined) {
              _this.options[name] = _this.templateOptions[name];
            }
          } // make sure key options valid


          _this.options.radius = Math.abs(+_this.options.radius);
          _this.options.space = +_this.options.space;
          _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
          _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
          _this.options.animationDuration = Math.abs(_this.options.animationDuration);
          _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
          _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
          _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };

        this.getRelativeY = function (rowNum, rowCount) {
          // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
          var initialOffset = -0.18,
              offset = 1;
          return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };

        this.min = function (a, b) {
          return a < b ? a : b;
        };

        this.max = function (a, b) {
          return a > b ? a : b;
        };

        this.uuid = function () {
          // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
          var dt = new Date().getTime();
          var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
          });
          return uuid;
        };

        this.findSvgElement = function () {
          if (this.svgElement === null) {
            var tags = this.elRef.nativeElement.getElementsByTagName('svg');

            if (tags.length > 0) {
              this.svgElement = tags[0];
            }
          }
        };

        this.checkViewport = function () {
          _this.findSvgElement();

          var previousValue = _this.isInViewport;
          _this.isInViewport = _this.isElementInViewport(_this.svgElement);

          if (previousValue !== _this.isInViewport) {
            _this.onViewportChanged.emit({
              oldValue: previousValue,
              newValue: _this.isInViewport
            });
          }
        };

        this.onScroll = function (event) {
          _this.checkViewport();
        };

        this.loadEventsForLazyMode = function () {
          if (_this.options.lazy) {
            _this.document.addEventListener('scroll', _this.onScroll, true);

            _this.window.addEventListener('resize', _this.onScroll, true);

            if (_this._viewportChangedSubscriber === null) {
              _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_ref5) {
                var oldValue = _ref5.oldValue,
                    newValue = _ref5.newValue;
                newValue ? _this.render() : null;
              });
            } // svgElement must be created in DOM before being checked.
            // Is there a better way to check the existence of svgElemnt?


            var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 50).subscribe(function () {
              _this.svgElement === null ? _this.checkViewport() : _timer.unsubscribe();
            });
          }
        };

        this.unloadEventsForLazyMode = function () {
          // Remove event listeners
          _this.document.removeEventListener('scroll', _this.onScroll, true);

          _this.window.removeEventListener('resize', _this.onScroll, true); // Unsubscribe onViewportChanged


          if (_this._viewportChangedSubscriber !== null) {
            _this._viewportChangedSubscriber.unsubscribe();

            _this._viewportChangedSubscriber = null;
          }
        };

        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
      }

      _createClass(CircleProgressComponent, [{
        key: "isDrawing",
        value: function isDrawing() {
          return this._timerSubscription && !this._timerSubscription.closed;
        }
      }, {
        key: "isElementInViewport",
        value: function isElementInViewport(el) {
          // Return false if el has not been created in page.
          if (el === null || el === undefined) return false; // Check if the element is out of view due to a container scrolling

          var rect = el.getBoundingClientRect(),
              parent = el.parentNode,
              parentRect;

          do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom) return false;
            if (rect.bottom <= parentRect.top) return false;
            if (rect.left >= parentRect.right) return false;
            if (rect.right <= parentRect.left) return false;
            parent = parent.parentNode;
          } while (parent != this.document.body); // Check its within the document viewport


          if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
          if (rect.bottom <= 0) return false;
          if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
          if (rect.right <= 0) return false;
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEventsForLazyMode();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unloadEventsForLazyMode();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.render();

          if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
          }
        }
      }]);

      return CircleProgressComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CircleProgressComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "class", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "backgroundGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "backgroundColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "backgroundGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "backgroundStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "backgroundPadding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "space", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "percent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "toFixed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "maxPercent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "renderOnClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "units", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "unitsFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "unitsFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "unitsColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "outerStrokeGradient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "outerStrokeGradientStopColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], CircleProgressComponent.prototype, "titleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CircleProgressComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "titleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "titleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "titleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], CircleProgressComponent.prototype, "subtitleFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CircleProgressComponent.prototype, "subtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "subtitleColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "subtitleFontWeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CircleProgressComponent.prototype, "imageSrc", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "imageHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "imageWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "animation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "animateTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "animateSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CircleProgressComponent.prototype, "animationDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showSubtitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showUnits", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showBackground", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showInnerStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "clockwise", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "responsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "startFromZero", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "showZeroOuterStroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CircleProgressComponent.prototype, "lazy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", CircleProgressOptions)], CircleProgressComponent.prototype, "templateOptions", void 0);
    CircleProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'circle-progress',
      template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleProgressOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], CircleProgressComponent);
    var NgCircleProgressModule_1;

    var NgCircleProgressModule = NgCircleProgressModule_1 =
    /*#__PURE__*/
    function () {
      function NgCircleProgressModule() {
        _classCallCheck(this, NgCircleProgressModule);
      }

      _createClass(NgCircleProgressModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: NgCircleProgressModule_1,
            providers: [{
              provide: CircleProgressOptions,
              useValue: options
            }]
          };
        }
      }]);

      return NgCircleProgressModule;
    }();

    NgCircleProgressModule = NgCircleProgressModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [CircleProgressComponent],
      exports: [CircleProgressComponent]
    })], NgCircleProgressModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-circle-progress.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-card-content class=\"homeTitle\">\n      <ion-title class=\"bold twentyPt\">\n        Track\n      </ion-title>\n    </ion-card-content>\n    <ion-card class=\"headerCard\"  #header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-card-header class=\"bold twentyFivePt\">\n                25\n              </ion-card-header>\n              <ion-card-title>\n                Items used in the past week\n              </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <!-- https://bootsoon.github.io/ng-circle-progress/ -->\n              <circle-progress [percent]=\"86\" [radius]=\"60\" [outerStrokeWidth]=\"10\" [outerStrokeColor]=\"'#FF5668'\"\n                [innerStrokeWidth]=\"6\" [innerStrokeColor]=\"'#e7e8ea'\" [space]=\"-7\" [titleFontSize]=\"36\"\n                [unitsFontSize]=\"36\" [showSubtitle]=\"0\" [animation]=\"true\" [animationDuration]=\"300\"></circle-progress>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollEvents=\"true\" appHideHeader [header]=\"header\">\n  <!-- FAB -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"tertiary\" data-desc=\"Project\">\n        <ion-icon name=\"construct\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"tertiary\" data-desc=\"Item\">\n        <ion-icon name=\"pricetag\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label color=\"dark\" class=\"bold fifteenPt\">Projects</ion-label>\n    </ion-list-header>\n    <ion-grid no-padding>\n      <!-- Projects -->\n      <ion-row nowrap class=\"categoryContainer\">\n        <ion-col *ngFor=\"let project of projectsService.projects; let i = index\" no-padding>\n          <ion-card [routerLink]=\"'/project/' + project.id\" class=\"colorCard\" [ngClass]=\"cardColorClasses[i%3]\">\n            <ion-card-header class=\"whiteFont bold fifteenPt\">\n              {{project.title}}\n            </ion-card-header>\n            <ion-card-content>\n\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <!-- Add New -->\n        <!-- <ion-col no-padding>\n          <ion-card>\n            <ion-card-content class=\"iconContainer\">\n              <ion-icon class=\"bold largeIcon\" name=\"add-circle-outline\"></ion-icon>\n\n            </ion-card-content>\n          </ion-card>\n        </ion-col> -->\n      </ion-row>\n      <!-- Popular Items -->\n      <ion-row>\n        <ion-list no-padding>\n          <ion-list-header>\n            <ion-label color=\"dark\" class=\"bold fifteenPt\">Popular Items</ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar-finn.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Finn</h2>\n              <h3>I'm a big deal</h3>\n              <p>Listen, I've had a pretty messed up day...</p>\n            </ion-label>\n          </ion-item>\n\n\n          \n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar-finn.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Finn</h2>\n              <h3>I'm a big deal</h3>\n              <p>Listen, I've had a pretty messed up day...</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar-finn.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Finn</h2>\n              <h3>I'm a big deal</h3>\n              <p>Listen, I've had a pretty messed up day...</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar-finn.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Finn</h2>\n              <h3>I'm a big deal</h3>\n              <p>Listen, I've had a pretty messed up day...</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar-finn.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Finn</h2>\n              <h3>I'm a big deal</h3>\n              <p>Listen, I've had a pretty messed up day...</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"./avatar-finn.png\">\n            </ion-avatar>\n            <ion-label>\n              <h2>Finn</h2>\n              <h3>I'm a big deal</h3>\n              <p>Listen, I've had a pretty messed up day...</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/directives/hide-header.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/hide-header.directive.ts ***!
    \*****************************************************/

  /*! exports provided: HideHeaderDirective */

  /***/
  function srcAppDirectivesHideHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
      return HideHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var HideHeaderDirective =
    /*#__PURE__*/
    function () {
      function HideHeaderDirective(renderer, domCtrl) {
        _classCallCheck(this, HideHeaderDirective);

        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
      }

      _createClass(HideHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.header = this.header.el;
          this.domCtrl.write(function () {
            _this2.renderer.setStyle(_this2.header, 'transition', 'margin-top 700ms');
          });
        }
      }, {
        key: "onContentScroll",
        value: function onContentScroll($event) {
          var _this3 = this;

          if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(function () {
              _this3.renderer.setStyle(_this3.header, 'margin-top', "-".concat(_this3.header.clientHeight + 27, "px"));
            });
          } else {
            this.domCtrl.write(function () {
              _this3.renderer.setStyle(_this3.header, 'margin-top', '0');
            });
          }

          this.lastY = $event.detail.scrollTop;
        }
      }]);

      return HideHeaderDirective;
    }();

    HideHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HideHeaderDirective.prototype, "onContentScroll", null);
    HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHideHeader]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], HideHeaderDirective);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }]), ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({}), _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/projects/projects.service */
    "./src/app/services/projects/projects.service.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      // private projectsArr: object[] = [{title: "Clothes"}, {title: "Board Games"}, {title: "Other"}]
      function HomePage(navCtrl, projectsService) {
        _classCallCheck(this, HomePage);

        this.navCtrl = navCtrl;
        this.projectsService = projectsService;
        this.progress = 0;
        this.cardColorClasses = ["successColor", "tertiaryColor", "secondaryColor"];
      }

      _createClass(HomePage, [{
        key: "goToProject",
        value: function goToProject(projectId) {
          this.navCtrl.navigateForward('/project/' + projectId);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../directives/hide-header.directive */
    "./src/app/directives/hide-header.directive.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_3__["HideHeaderDirective"]],
      exports: [_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_3__["HideHeaderDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map