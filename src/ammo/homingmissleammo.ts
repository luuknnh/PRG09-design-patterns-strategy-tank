import { GameObject } from '../gameobject.js';
import { Vector } from '../vector.js';
import { Ammunition } from './ammunition.js';

export class HomingMissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-homing-missile", position)
    }

    public onCollision(target: GameObject): void {
        console.log("hit the homing")
    //   if (target instanceof Tank){
    //     target.changeShootStategy(new BulletShootStategy(target))
    //     console.log("picked up Bulletammo")
    //   }  
    }
}