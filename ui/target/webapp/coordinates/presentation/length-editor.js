"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Units = __importStar(require("geospatialdraw/bin/geometry/units"));
var styled_components_1 = __importDefault(require("styled-components"));
var number_input_1 = __importDefault(require("./number-input"));
var Common = __importStar(require("./common-styles"));
var LENGTH_PRECISION = 3;
var Root = Common.Row;
var LengthValue = styled_components_1.default(number_input_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: ", ";\n  width: 8rem;\n"], ["\n  margin-right: ", ";\n  width: 8rem;\n"])), function (props) { return props.theme.minimumSpacing; });
var UnitContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  font-size: ", ";\n"], ["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  font-size: ", ";\n"])), function (props) { return props.theme.minimumFontSize; });
var renderLengthUnitOption = function (unit) { return (React.createElement("option", { value: unit, key: unit }, unit)); };
var LengthEditor = function (_a) {
    var length = _a.length, unit = _a.unit, setLength = _a.setLength, setUnit = _a.setUnit;
    return (React.createElement(Root, null,
        React.createElement(LengthValue, { type: "text", value: length, decimalPlaces: LENGTH_PRECISION, onChange: function (value) { return setLength(value); } }),
        React.createElement(UnitContainer, null,
            React.createElement("select", { onChange: function (_a) {
                    var value = _a.currentTarget.value;
                    return setUnit(value);
                }, value: unit },
                renderLengthUnitOption(Units.METERS),
                renderLengthUnitOption(Units.KILOMETERS),
                renderLengthUnitOption(Units.MILES),
                renderLengthUnitOption(Units.NAUTICAL_MILES),
                renderLengthUnitOption(Units.YARDS),
                renderLengthUnitOption(Units.FEET)))));
};
exports.default = LengthEditor;
var templateObject_1, templateObject_2;
//# sourceMappingURL=length-editor.js.map