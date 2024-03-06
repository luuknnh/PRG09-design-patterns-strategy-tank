import { HomingMissile } from '../projectiles/homingmissile.js';
export class HomingMissileStrategy {
    constructor(tank) {
        this.tank = tank;
        this.game = tank.game;
    }
    shoot() {
        this.game.gameObjects.push(new HomingMissile(this.tank));
    }
}
