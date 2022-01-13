import GameItem from './GameItem.js';
export default class YesorNoQuestPrompt extends GameItem {
    display;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    game;
    baker;
    constructor(game, baker, xPos, yPos) {
        super('./assets/img/yesornobox.png', xPos, yPos);
        this.display = false;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 20;
        this.textYPos = yPos + 35;
        this.game = game;
        this.baker = baker;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 600, 250);
            ctx.drawImage(this.img, this.xPosition, this.yPosition);
            this.writeTextToBox();
        }
    }
    writeTextToBox() {
        this.game.writeTextToCanvas(this.baker.getYesorNoTextBaker(), 26, this.textXPos, this.textYPos, 'center', 'black');
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
//# sourceMappingURL=YesorNoQuestPrompt.js.map