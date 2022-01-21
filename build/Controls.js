import DisplayItem from './DisplayItem.js';
import Game from './Game.js';
export default class Controls extends DisplayItem {
    constructor(game, xPos, yPos) {
        super('', game, xPos, yPos);
        this.display = false;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 20;
        this.textYPos = yPos + 35;
        this.game = game;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 1000, 600);
            const controlImage = Game.loadNewImage('./assets/img/controls.jpg');
            ctx.drawImage(controlImage, this.xPosition, this.yPosition);
        }
    }
    setDisplay(active) {
        this.display = active;
    }
    getDisplay() {
        return this.display;
    }
    getTextXPos() {
        return this.textXPos;
    }
    getTextYPos() {
        return this.textYPos;
    }
}
//# sourceMappingURL=Controls.js.map