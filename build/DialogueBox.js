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
        super('./assets/img/dialogue.png', xPos, yPos);
        this.display = false;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 200;
        this.textYPos = yPos + 45;
        this.game = game;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 1200, 200);
            ctx.drawImage(this.img, this.xPosition, this.yPosition);
            this.writeTextToBox(this.currentDialogue);
        }
    }
    writeTextToBox(currentDialogue) {
        this.game.writeTextToCanvas(this.dialogueList[currentDialogue], 26, this.textXPos, this.textYPos, 'center', 'black');
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