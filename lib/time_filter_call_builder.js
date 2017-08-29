"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var CallBuilder = require("./call_builder").CallBuilder;

var TimeFilterCallBuilder = exports.TimeFilterCallBuilder = (function (_CallBuilder) {
    function TimeFilterCallBuilder(serverUrl) {
        _classCallCheck(this, TimeFilterCallBuilder);

        _get(Object.getPrototypeOf(TimeFilterCallBuilder.prototype), "constructor", this).call(this, serverUrl);
    }

    _inherits(TimeFilterCallBuilder, _CallBuilder);

    _createClass(TimeFilterCallBuilder, {
        after: {

            /**
             * Adds `after` parameter to the current call. Returns the TimeFilterCallBuilder object on which this method has been called.
             * @param {"2006-01-02T15:04:05Z"} after
             */

            value: (function (_after) {
                var _afterWrapper = function after(_x) {
                    return _after.apply(this, arguments);
                };

                _afterWrapper.toString = function () {
                    return _after.toString();
                };

                return _afterWrapper;
            })(function (after) {
                this.url.addQuery("after", after);
                return this;
            })
        },
        before: {

            /**
             * Adds `before` parameter to the current call. Returns the TimeFilterCallBuilder object on which this method has been called.
             * @param {"2006-01-02T15:04:05Z"} before
             */

            value: (function (_before) {
                var _beforeWrapper = function before(_x2) {
                    return _before.apply(this, arguments);
                };

                _beforeWrapper.toString = function () {
                    return _before.toString();
                };

                return _beforeWrapper;
            })(function (before) {
                this.url.addQuery("before", before);
                return this;
            })
        }
    });

    return TimeFilterCallBuilder;
})(CallBuilder);