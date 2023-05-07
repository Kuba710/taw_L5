"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(topLeftPoint, topRightPoint, bottomLeftPoint, bottomRightPoint) {
        this.topLeftPoint = topLeftPoint;
        this.topRightPoint = topRightPoint;
        this.bottomLeftPoint = bottomLeftPoint;
        this.bottomRightPoint = bottomRightPoint;
    }
    Rectangle.prototype.move = function (dx, dy) {
        this.topLeftPoint.move(dx, dy);
        this.topRightPoint.move(dx, dy);
        this.bottomLeftPoint.move(dx, dy);
        this.bottomRightPoint.move(dx, dy);
    };
    Rectangle.prototype.getArea = function () {
        var width = this.topRightPoint.x - this.topLeftPoint.x;
        var height = this.topRightPoint.y - this.bottomRightPoint.y;
        return width * height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var point1 = new Point(1, 3);
var point2 = new Point(3, 3);
var point3 = new Point(1, 1);
var point4 = new Point(3, 1);
var myRectangle = new Rectangle(point1, point2, point3, point4);
console.log(myRectangle.getArea());
