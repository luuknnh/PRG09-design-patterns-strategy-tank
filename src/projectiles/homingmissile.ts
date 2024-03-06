import { Enemy } from '../enemy.js';
import { Game } from '../game.js';
import { Tank } from '../tank.js';
import { Projectile } from './projectile.js';

export class HomingMissile extends Projectile {
    private target : Enemy
    private game: Game


    constructor(tank : Tank) {
        super("homing-missile", tank)
        this.game = tank.game
        
    }

    // private findTarget() : void {
    //     let closestTank = null;
    //     let closestDistance = Infinity

    //     this.game.gameObjects.forEach((gameObject) => {
    //         if (gameObject instanceof Enemy){
    //             let distance = Vector.distance(this.position, gameObject.position)
    //             if (distance < closestDistance){
    //                 closestDistance = distance
    //                 closestTank = gameObject
    //             }
    //         }

    //     })
    //         this.target = closestTank

    // }

    // public update() {
    //     if (this.target){
    //         let direction
    //     }
    // }


}