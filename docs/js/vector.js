export class Vector {
    get x() { return this._x; }
    set x(value) { this._x = value; }
    get y() { return this._y; }
    set y(value) { this._y = value; }
    constructor(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    add(v) {
        return new Vector(this._x + v._x, this._y + v._y);
    }
    scale(n) {
        return new Vector(this._x * n, this._y * n);
    }
    normalize() {
        let mag = this.magnitude();
        return new Vector(this._x / mag, this._y / mag);
    }
    magnitude() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
    difference(v) {
        return new Vector(this._x - v._x, this._y - v._y);
    }
    angle() {
        return Math.atan2(this._y, this._x) * (180 / Math.PI);
    }
    static getVectorFromAngle(angle) {
        let rad = angle * Math.PI / 180;
        return new Vector(Math.cos(rad), Math.sin(rad));
    }
    getDirectionToObject(target) {
        let diff = target.Position.difference(this);
        return diff.normalize();
    }
    static distance(a, b) {
        const xDiff = a.x - b.x;
        const yDiff = a.y - b.y;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
    static add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y);
    }
    static subtract(a, b) {
        return new Vector(a.x - b.x, a.y - b.y);
    }
}
