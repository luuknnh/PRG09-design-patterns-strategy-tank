import { Rocket } from '../projectiles/rocket.js';
export class RocketShootStategy {
    constructor(tank) {
        this.tank = tank;
        this.game = tank.game;
    }
    shoot() {
        this.game.gameObjects.push(new Rocket(this.tank));
    }
}
