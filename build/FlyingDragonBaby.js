import Game from './Game.js';
import GameItem from './GameItem.js';
export default class FlyingDragonBaby extends GameItem {
    speed;
    imagearray;
    constructor(canvas) {
        const yPosition = Game.randomNumber(0, canvas.height);
        super('./assets/img/flyingbabydragonpurple.png', 0, yPosition);
        this.speed = Game.randomNumber(2, 6);
        this.xPos = -100;
        this.imagearray = ['./assets/img/flyingbabydragonpurple.png', './assets/img/flyingbabydragonred.png', './assets/img/flyingbabydragonyellow.png', './assets/img/flyingbabydragongreen.png', './assets/img/flyingbabydragonblue.png'];
    }
    move() {
        this.setXPos(this.getXPos() + this.speed);
    }
    outOfCanvas(canvas) {
        if (this.getXPos() - 100 >= canvas.width) {
            this.setXPos(-100);
            this.setYPos(Game.randomNumber(0, canvas.height));
            this.speed = Game.randomNumber(3, 6);
            this.setImageRandom(this.imagearray);
        }
    }
    setImageRandom(imagearray) {
        this.img = Game.loadNewImage(imagearray[Game.randomNumber(0, 4)]);
    }
}
//# sourceMappingURL=FlyingDragonBaby.js.map