import { HomingMissileStrategy } from '../strategies/homingmissilestrategy.js';
import { Tank } from '../tank.js';
import { Ammunition } from './ammunition.js';
export class HomingMissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-homing-missile", position);
    }
    onCollision(target) {
        console.log("hit the homing");
        if (target instanceof Tank) {
            target.changeShootStategy(new HomingMissileStrategy(target));
        }
    }
}
