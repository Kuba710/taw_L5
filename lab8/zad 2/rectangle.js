"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(topLeftPoint, topRightPoint, bottomLeftPoint, bottomRightPoint) {
        this.topLeftPoint = topLeftPoint;
        this.topRightPoint = topRightPoint;
        this.bottomLeftPoint = bottomLeftPoint;
        this.bottomRightPoint = bottomRightPoint;
    }
    move(dx, dy) {
        this.topLeftPoint.move(dx, dy);
        this.topRightPoint.move(dx, dy);
        this.bottomLeftPoint.move(dx, dy);
        this.bottomRightPoint.move(dx, dy);
    }
    getArea() {
        const width = this.topRightPoint.x - this.topLeftPoint.x;
        const height = this.topRightPoint.y - this.bottomRightPoint.y;
        return width * height;
    }
}
exports.Rectangle = Rectangle;
const point1 = new Point(1, 3);
const point2 = new Point(3, 3);
const point3 = new Point(1, 1);
const point4 = new Point(3, 1);
const myRectangle = new Rectangle(point1, point2, point3, point4);
console.log(myRectangle.getArea());
