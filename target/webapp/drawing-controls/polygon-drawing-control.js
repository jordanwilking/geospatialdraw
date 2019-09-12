"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var modifiable_drawing_control_1 = require("./modifiable-drawing-control");
/**
 * Drawing Control for drawing a polygon
 */
var PolygonDrawingControl = /** @class */ (function (_super) {
    __extends(PolygonDrawingControl, _super);
    function PolygonDrawingControl(context, receiver) {
        return _super.call(this, context, receiver) || this;
    }
    PolygonDrawingControl.prototype.getShape = function () {
        return 'Polygon';
    };
    PolygonDrawingControl.prototype.getGeoType = function () {
        return 'Polygon';
    };
    return PolygonDrawingControl;
}(modifiable_drawing_control_1.default));
exports.default = PolygonDrawingControl;
//# sourceMappingURL=polygon-drawing-control.js.map