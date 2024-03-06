import { Game } from '../game';
import { Missile } from '../projectiles/missile.js';
import { Tank } from '../tank';
import { IShootStrategy } from './IShootStrategy';

export class MissileShootStategy implements IShootStrategy {
    private tank : Tank
    private game : Game


    constructor(tank : Tank) {
        this.tank = tank
        this.game = tank.game
    }

    public shoot(): void {
        this.game.gameObjects.push(new Missile(this.tank))
    }

}