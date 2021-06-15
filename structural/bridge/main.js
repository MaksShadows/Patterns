var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraction class: UI Object:
var UIObject = /** @class */ (function () {
    function UIObject(theme) {
        this.theme = theme;
    }
    return UIObject;
}());
// Theme 1: Light Mode:
var LightMode = /** @class */ (function () {
    function LightMode() {
    }
    LightMode.prototype.background = function () { return "#ffffff"; };
    LightMode.prototype.foreground = function () { return "#aaaaaa"; };
    LightMode.prototype.lineColor = function () { return "#0c60cd"; };
    LightMode.prototype.fontColor = function () { return "#222222"; };
    LightMode.prototype.altFontColor = function () { return "#000000"; };
    return LightMode;
}());
// Theme 2: Dark Mode:
var DarkMode = /** @class */ (function () {
    function DarkMode() {
    }
    DarkMode.prototype.background = function () { return "#111111"; };
    DarkMode.prototype.foreground = function () { return "#2d2d2d"; };
    DarkMode.prototype.lineColor = function () { return "#0c60cd"; };
    DarkMode.prototype.fontColor = function () { return "#dfdfdf"; };
    DarkMode.prototype.altFontColor = function () { return "#efefef"; };
    return DarkMode;
}());
// UI Object 1: a Button:
var UIButton = /** @class */ (function (_super) {
    __extends(UIButton, _super);
    function UIButton(theme) {
        return _super.call(this, theme) || this;
    }
    UIButton.prototype.draw = function () {
        console.log("Drawing a button on the screen.");
        console.log("\tText Color: " + this.theme.fontColor());
        console.log("\tButton Color: " + this.theme.background());
        console.log("\tHighlight Text Color: " + this.theme.altFontColor());
    };
    return UIButton;
}(UIObject));
// UI Object 2: a Graph:
var UIGraph = /** @class */ (function (_super) {
    __extends(UIGraph, _super);
    function UIGraph(theme) {
        return _super.call(this, theme) || this;
    }
    UIGraph.prototype.draw = function () {
        console.log("Drawing a graph on the screen.");
        console.log("\tMain Text Color: " + this.theme.fontColor());
        console.log("\tLine Color: " + this.theme.lineColor());
        console.log("\tAxis Text Color: " + this.theme.altFontColor());
        console.log("\tGraph Background Color: " + this.theme.foreground());
    };
    return UIGraph;
}(UIObject));
// Create the themes:
var light = new LightMode();
var dark = new DarkMode();
// Create the UI Objects:
var button = new UIButton(light);
var graph = new UIGraph(dark);
// Draw the objects:
button.draw();
graph.draw();
