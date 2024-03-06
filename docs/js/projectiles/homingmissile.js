import { Projectile } from './projectile.js';
export class HomingMissile extends Projectile {
    constructor(tank) {
        super("homing-missile", tank);
        this.game = tank.game;
    }
}
