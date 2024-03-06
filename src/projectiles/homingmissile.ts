import { Enemy } from '../enemy.js';
import { Game } from '../game.js';
import { Tank } from '../tank.js';
import { Vector } from '../vector.js';
import { Projectile } from './projectile.js';

export class HomingMissile extends Projectile {
    private target : Enemy
    private game: Game


    constructor(tank : Tank) {
        super("homing-missile", tank)
        this.game = tank.game
        this.findTarget()
    }

    /**
 * Searches for and sets the nearest enemy target as the current target for the Homing Missile.
 * Iterates through all game objects in the game, checks if they are of type Enemy, and calculates the distance to each.
 * The nearest enemy object is set as the target.
 */
    private findTarget() : void {
        let closestEnemy = null;
        let closestDistance = Infinity;

        this.game.gameObjects.forEach((gameObject) => {
            if (gameObject instanceof Enemy) {
                let distance = Vector.distance(this.position, gameObject.position);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestEnemy = gameObject;
                }
            }
        });

        this.target = closestEnemy;
    }

    /**
 * Updates the position and orientation of the Homing Missile based on its current target.
 * If there is a target, it calculates the direction towards that target, adjusts the missile's position based on its speed,
 * an
public update(): void {

    if (this.target) {
        let direction = this.target.position.difference(this.position).normalize(); 
        this.position = this.position.add(direction.scale(this.speed));
        this.div.style.transform = `translate(${this.position.x - this.width/2}px, ${this.position.y - this.height/2}px) rotate(${this.rotation}deg)`;
    }
}


}