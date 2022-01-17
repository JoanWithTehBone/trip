import DislplayItem from './DislplayItem.js';
export default class YesorNoQuestPrompt extends DislplayItem {
    currentPrompt;
    constructor(game, xPos, yPos) {
        super('./assets/img/yesornobox.png', game, xPos, yPos);
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 20;
        this.textYPos = yPos + 35;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 600, 250);
            ctx.drawImage(this.img, this.xPosition, this.yPosition);
            this.writeTextToBox();
        }
    }
    writeTextToBox() {
        this.game.writeTextToCanvas(this.currentPrompt, 26, this.textXPos, this.textYPos, 'center', 'black');
    }
    setCurrentPrompt(currentPrompt) {
        this.currentPrompt = currentPrompt;
    }
}
//# sourceMappingURL=YesorNoQuestPrompt.js.map