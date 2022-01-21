import GameItem from './GameItem.js';
export default class Controls extends GameItem {
    display;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    game;
    constructor(game, xPos, yPos) {
        super(null, null, './assets/img/controls.jpg', xPos, yPos, null, null);
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
            ctx.drawImage(this.img, this.xPosition, this.yPosition);
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