import GameItem from './GameItem.js';
export default class DislplayItem extends GameItem {
    display;
    currentDialogue;
    imageSource;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    game;
    constructor(imageSrc, game, xPosition, yPosition) {
        super(imageSrc, xPosition, yPosition);
        this.display = false;
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