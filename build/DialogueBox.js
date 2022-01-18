import DislplayItem from './DislplayItem.js';
export default class DialogueBox extends DislplayItem {
    dialogueList;
    constructor(game, xPos, yPos) {
        super('./assets/img/dialogue.png', game, xPos, yPos);
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 200;
        this.textYPos = yPos + 45;
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
    setCurrentDialogue(currentDialogue) {
        this.currentDialogue = currentDialogue;
    }
    setDialogueList(list) {
        this.dialogueList = list;
    }
}
//# sourceMappingURL=DialogueBox.js.map