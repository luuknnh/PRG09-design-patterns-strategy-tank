import { GameObject } from '../gameobject.js';
import { BulletShootStategy } from '../strategies/bulletshootstategy.js';
import { Tank } from '../tank.js';
import { Vector } from '../vector.js';
import { Ammunition } from './ammunition.js';

export class BulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public onCollision(target: GameObject): void {
      if (target instanceof Tank){
        target.changeShootStategy(new BulletShootStategy(target))
        console.log("picked up Bulletammo")
      }  
    }
}