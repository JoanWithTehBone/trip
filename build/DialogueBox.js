import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class DialogueBox extends GameItem {
    display;
    currentDialogue;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    width;
    height;
    dialogueList;
    keyboard;
    player;
    game;
    npc;
    constructor(game, xPos, yPos, npc) {
        super('', xPos, yPos);
        this.display = false;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.textXPos = xPos + 250;
        this.textYPos = yPos + 75;
        this.width = (game.canvas.width / 5) * 3;
        this.height = (game.canvas.height / 5);
        this.dialogueList = npc.getDialogue();
        console.log(this.dialogueList);
        this.game = game;
        this.keyboard = new KeyListener();
        this.npc = npc;
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
}
//# sourceMappingURL=DialogueBox.js.map