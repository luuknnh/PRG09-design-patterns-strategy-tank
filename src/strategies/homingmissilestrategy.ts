import { Game } from '../game.js';
import { HomingMissile } from '../projectiles/homingmissile.js';
import { Tank } from '../tank.js';
import { IShootStrategy } from './IShootStrategy.js';

export class HomingMissileStrategy implements IShootStrategy {
    private tank : Tank
    private game : Game


    constructor(tank : Tank) {
        this.tank = tank
        this.game = tank.game
    }

    public shoot(): void {
        this.game.gameObjects.push(new HomingMissile(this.tank))
    }

}