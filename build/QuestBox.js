import DisplayItem from './DisplayItem.js';
export default class QuestBox extends DisplayItem {
    questList;
    constructor(game, xPos, yPos) {
        super('./assets/img/questbox.png', game, xPos, yPos);
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 20;
        this.textYPos = yPos + 35;
    }
    drawBox(ctx) {
        if (this.display) {
            ctx.clearRect(this.xPosition, this.yPosition, 1000, 550);
            ctx.drawImage(this.questList, this.xPosition, this.yPosition);
        }
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