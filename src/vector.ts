import { GameObject } from './gameobject.js';

export class Vector{
    // Fields
    private _x: number = 0
    private _y: number = 0
    
    // Properties
    public get x(): number      { return this._x    }
    public set x(value: number) { this._x = value   }

    public get y(): number      { return this._y    }
    public set y(value: number) { this._y = value   }

    constructor(x : number, y : number) {
        this._x = x
        this._y = y
    }

    public add(v: Vector): Vector {
        return new Vector(this._x + v._x, this._y + v._y)
    }

    public scale(n: number): Vector {
        return new Vector(this._x * n, this._y * n)
    }

    // x en y devided bij the length (magnitude) gives the normalized vector
    public normalize():Vector {
        let mag = this.magnitude()
        return new Vector(this._x/mag, this._y/mag)
    }

    /**
     * The length of the vector
     */
     public magnitude(): number {
        return Math.sqrt(this._x * this._x + this._y * this._y)
    }
    public difference(v: Vector): Vector {
        return new Vector(this._x - v._x, this._y - v._y)
    }
    
    /**
     * The angle from a vector in degrees
     */
     public angle() : number {
        return Math.atan2(this._y, this._x) * (180 / Math.PI)
    }


    /**
     * @param angle is in degrees
     */
     public static getVectorFromAngle(angle : number) : Vector {
        let rad = angle * Math.PI / 180
        return new Vector(Math.cos(rad), Math.sin(rad))
    }

    /**
     * Calculates and returns the normalized directional vector to a target object
     * @param target target Gameobject
     * @returns the normalized directional vector
     */
    public getDirectionToObject(target : GameObject) : Vector {
        // Calculate new Direction (enemy to player)
        let diff = target.Position.difference(this)
        return diff.normalize()
    }

    /**
     * Calculate the distance between two vectors.
     * @param a - The first vector.
     * @param b - The second vector.
     * @returns The distance between the two vectors.
     */
    public static distance(a: Vector, b: Vector): number {
        const xDiff = a.x - b.x;
        const yDiff = a.y - b.y;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    
    /**
     * Add two vectors together.
     * @param a - The first vector.
     * @param b - The second vector.
     * @returns A new vector that is the result of adding the two input vectors.
     */
    public static add(a: Vector, b: Vector): Vector {
    return new Vector(a.x + b.x, a.y + b.y);
    }

    /**
     * Subtract one vector from another.
     * @param a - The vector to subtract from.
     * @param b - The vector to subtract.
     * @returns A new vector that is the result of subtracting the second vector from the first.
     */
    public static subtract(a: Vector, b: Vector): Vector {
        return new Vector(a.x - b.x, a.y - b.y);
    }

}