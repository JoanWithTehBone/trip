import GameItem from './GameItem.js';
export default class YesorNoQuestPrompt extends GameItem {
    display;
    currentDialogue;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    questList;
    game;
    baker;
    constructor(game, baker, xPos, yPos) {
        super('', xPos, yPos);
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
            ctx.fillRect(this.xPosition, this.yPosition, 600, 250);
            this.writeTextToBox();
        }
    }
    writeTextToBox() {
        this.game.writeTextToCanvas(this.baker.getYesorNoText(), 26, this.textXPos, this.textYPos, 'center', 'black');
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
    setCurrentDialogue(currentDialogue) {
        this.currentDialogue = currentDialogue;
    }
    setQuestList(list) {
        this.questList = list;
    }
}
//# sourceMappingURL=YesorNoQuestPrompt.js.map