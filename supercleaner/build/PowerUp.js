import ScoringObject from './ScoringObject.js';
export default class PowerUp extends ScoringObject {
    speed;
    constructor(maxX, maxY) {
        super('./assets/img/titled_yellow_power_icon.png', maxX - 53, maxY - 64, 0);
        this.speed = 3;
    }
    applyTo(player) {
        player.increaseSpeed(this.speed);
    }
}
//# sourceMappingURL=PowerUp.js.map