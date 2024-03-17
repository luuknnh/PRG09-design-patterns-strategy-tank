import { Enemy } from '../enemy.js';
import { Vector } from '../vector.js';
import { Projectile } from './projectile.js';
export class HomingMissile extends Projectile {
    constructor(tank) {
        super("homing-missile", tank);
        this.game = tank.game;
        this.findTarget();
    }
    findTarget() {
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
    update() {
        if (this.target) {
            let direction = this.target.position.difference(this.position).normalize();
            this.position = this.position.add(direction.scale(this.speed));
            this.div.style.transform = `translate(${this.position.x - this.width / 2}px, ${this.position.y - this.height / 2}px) rotate(${this.rotation}deg)`;
        }
    }
}
