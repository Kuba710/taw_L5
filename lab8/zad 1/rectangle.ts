class Point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
}

export { Point }

class Rectangle {
    private topLeftPoint: Point;
    private topRightPoint: Point;
    private bottomLeftPoint: Point;
    private bottomRightPoint: Point;

    constructor(topLeftPoint: Point, topRightPoint: Point, bottomLeftPoint: Point, bottomRightPoint: Point) {
        this.topLeftPoint = topLeftPoint;
        this.topRightPoint = topRightPoint;
        this.bottomLeftPoint = bottomLeftPoint;
        this.bottomRightPoint = bottomRightPoint;
    }

    move(dx: number, dy:number): void {
        this.topLeftPoint.move(dx, dy);
        this.topRightPoint.move(dx, dy);
        this.bottomLeftPoint.move(dx, dy);
        this.bottomRightPoint.move(dx, dy);
    }

    getArea(): number {
        const width: number = this.topRightPoint.x - this.topLeftPoint.x;
        const height: number = this.topRightPoint.y - this.bottomRightPoint.y;

        return width * height;
    }
}

export { Rectangle }

const point1: Point = new Point(1, 3);
const point2: Point = new Point(3, 3);
const point3: Point = new Point(1, 1);
const point4: Point = new Point(3, 1);
const myRectangle: Rectangle = new Rectangle(point1,point2,point3,point4);
console.log(myRectangle.getArea())