import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class DialogueBox extends Scene {
    display;
    xPosition;
    yPosition;
    width;
    height;
    dialogueList;
    keyboard;
    constructor(game, xPos, yPos, dialogue) {
        super(game);
        this.display = false;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.width = (this.game.canvas.width / 5) * 3;
        this.height = (this.game.canvas.height / 5);
        this.dialogueList = dialogue;
        this.keyboard = new KeyListener();
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
            console.log('Moving on');
        }
    }
    update(elapsed) {
        throw new Error('Method not implemented.');
    }
    render() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=DialogueBox.js.map