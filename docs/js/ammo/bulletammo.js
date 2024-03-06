import { BulletShootStategy } from '../strategies/bulletshootstategy.js';
import { Tank } from '../tank.js';
import { Ammunition } from './ammunition.js';
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.changeShootStategy(new BulletShootStategy(target));
            console.log("picked up Bulletammo");
        }
    }
}
