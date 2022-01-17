import GameItem from './GameItem.js';
export default class DislplayItem extends GameItem {
    display;
    imageSource;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    game;
    currentDialogue;
    constructor(imageSrc, game, xPosition, yPosition) {
        super(imageSrc, xPosition, yPosition);
        this.display = false;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.game = game;
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
}
//# sourceMappingURL=DislplayItem.js.map