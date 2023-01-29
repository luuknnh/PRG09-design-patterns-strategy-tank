import { GameObject } from "../gameobject.js";
export class Ammunition extends GameObject {
    constructor(type, position) {
        super(type);
        this.position = position;
    }
}
