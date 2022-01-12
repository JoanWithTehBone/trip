import GameItem from './GameItem.js';
export default class BakerQuestBox extends GameItem {
    display;
    currentDialogue;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    dialogueList;
    game;
    constructor(game, xPos, yPos) {
        super('', xPos, yPos);
        this.display = true;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 250;
        this.textYPos = yPos + 75;
        console.log(this.dialogueList);
        this.game = game;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.fillRect(this.xPosition, this.yPosition, 1000, 1200);
        }
    }
    setDisplay(active) {
        this.display = active;
    }
}
//# sourceMappingURL=BakerQuestBox.js.map