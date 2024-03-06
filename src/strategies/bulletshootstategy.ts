import { Game } from '../game';
import { Bullet } from '../projectiles/bullet.js';
import { Tank } from '../tank';
import { IShootStrategy } from './IShootStrategy';

export class BulletShootStategy implements IShootStrategy {
    private tank : Tank
    private game : Game


    constructor(tank : Tank) {
        this.tank = tank
        this.game = tank.game
    }

    public shoot(): void {
        this.game.gameObjects.push(new Bullet(this.tank))
    }

}