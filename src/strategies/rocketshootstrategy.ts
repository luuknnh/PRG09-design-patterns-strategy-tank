import { Game } from '../game';
import { Rocket } from '../projectiles/rocket.js';
import { Tank } from '../tank';
import { IShootStrategy } from './IShootStrategy';

export class RocketShootStategy implements IShootStrategy {
    private tank : Tank
    private game : Game


    constructor(tank : Tank) {
        this.tank = tank
        this.game = tank.game
    }

    public shoot(): void {
        this.game.gameObjects.push(new Rocket(this.tank))
    }

}