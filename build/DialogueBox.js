import DisplayItem from './DisplayItem.js';
export default class DialogueBox extends DisplayItem {
    dialogueList;
    constructor(game, xPos, yPos) {
        super('', game, xPos, yPos);
        this.xPosition = xPos;
        this.yPosition = yPos;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 1200, 200);
            ctx.drawImage(this.dialogueList[this.currentDialogue], this.xPosition, this.yPosition);
        }
    }
    setCurrentDialogue(currentDialogue) {
        this.currentDialogue = currentDialogue;
    }
    setDialogueList(list) {
        this.dialogueList = list;
    }
}
//# sourceMappingURL=DialogueBox.js.map