import GameItem from './GameItem.js';
export default class DisplayItem extends GameItem {
    display;
    currentDialogue;
    imageSource;
    xPosition;
    yPosition;
    textXPos;
    textYPos;
    game;
    constructor(imageSrc, game, xPosition, yPosition) {
        super(null, null, imageSrc, xPosition, yPosition, null, null);
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
//# sourceMappingURL=DisplayItem.js.map