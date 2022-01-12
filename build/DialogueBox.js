import GameItem from './GameItem.js';
export default class DialogueBox extends GameItem {
    display;
    currentDialogue;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    dialogueList;
    questList;
    game;
    constructor(game, xPos, yPos) {
        super('', xPos, yPos);
        this.display = false;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 250;
        this.textYPos = yPos + 75;
        this.game = game;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 700, 200);
            ctx.fillRect(this.xPosition, this.yPosition, 700, 200);
            this.writeTextToBox(this.currentDialogue);
        }
    }
    writeTextToBox(currentDialogue) {
        this.game.writeTextToCanvas(this.dialogueList[currentDialogue], 32, this.textXPos, this.textYPos, 'center', 'black');
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
    setDialogueList(list) {
        this.dialogueList = list;
    }
    setQuestList(list) {
        this.questList = list;
    }
}
//# sourceMappingURL=DialogueBox.js.map