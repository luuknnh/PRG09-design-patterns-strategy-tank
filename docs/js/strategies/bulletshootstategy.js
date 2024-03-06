import { Bullet } from '../projectiles/bullet.js';
export class BulletShootStategy {
    constructor(tank) {
        this.tank = tank;
        this.game = tank.game;
    }
    shoot() {
        this.game.gameObjects.push(new Bullet(this.tank));
    }
}
