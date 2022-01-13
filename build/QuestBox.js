import GameItem from './GameItem.js';
export default class DialogueBox extends GameItem {
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
        super('./assets/img/questbox.png', xPos, yPos);
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
            ctx.clearRect(this.xPosition, this.yPosition, 1000, 550);
            ctx.drawImage(this.img, this.xPosition, this.yPosition);
            this.writeTextToBox();
        }
    }
    writeTextToBox() {
        this.game.writeTextToCanvas(this.baker.getQuestDialogue()[0], 26, this.textXPos, this.textYPos, 'center', 'black');
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
//# sourceMappingURL=QuestBox.js.map