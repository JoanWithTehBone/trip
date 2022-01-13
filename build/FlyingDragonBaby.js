import Game from './Game.js';
import GameItem from './GameItem.js';
export default class FlyingDragonBaby extends GameItem {
    speed;
    constructor(canvas) {
        const yPosition = Game.randomNumber(0, canvas.height);
        super('./assets/img/egg.png', 0, yPosition);
        this.speed = Game.randomNumber(2, 8);
        this.xPos = 0 - this.img.width;
    }
    move() {
        this.setXPos(this.getXPos() + this.speed);
    }
}
//# sourceMappingURL=FlyingDragonBaby.js.map