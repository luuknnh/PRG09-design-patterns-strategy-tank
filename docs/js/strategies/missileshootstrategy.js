import { Missile } from '../projectiles/missile.js';
export class MissileShootStategy {
    constructor(tank) {
        this.tank = tank;
        this.game = tank.game;
    }
    shoot() {
        this.game.gameObjects.push(new Missile(this.tank));
    }
}
