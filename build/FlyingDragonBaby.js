import Game from './Game.js';
import GameItem from './GameItem.js';
export default class FlyingDragonBaby extends GameItem {
    speed;
    constructor(canvas) {
        const yPosition = Game.randomNumber(0, canvas.height);
        super('./assets/img/flyingbabydragon.png', 0, yPosition);
        this.speed = Game.randomNumber(2, 6);
        this.xPos = -100;
    }
    move() {
        this.setXPos(this.getXPos() + this.speed);
    }
    outOfCanvas(canvas) {
        if (this.getXPos() - 100 >= canvas.width) {
            this.setXPos(-100);
            this.setYPos(Game.randomNumber(0, canvas.height));
            this.speed = Game.randomNumber(2, 8);
        }
    }
}
//# sourceMappingURL=FlyingDragonBaby.js.map