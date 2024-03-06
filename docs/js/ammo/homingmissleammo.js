import { Ammunition } from './ammunition.js';
export class HomingMissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-homing-missile", position);
    }
    onCollision(target) {
        console.log("hit the homing");
    }
}
