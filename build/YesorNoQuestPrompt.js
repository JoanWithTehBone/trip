import DisplayItem from './DisplayItem.js';
export default class YesorNoQuestPrompt extends DisplayItem {
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
            ctx.drawImage(this.currentPrompt, this.xPosition, this.yPosition);
        }
    }
    setCurrentPrompt(currentPrompt) {
        this.currentPrompt = currentPrompt;
    }
}
//# sourceMappingURL=YesorNoQuestPrompt.js.map