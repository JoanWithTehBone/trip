import Game from './Game.js';
import Sprite from './Sprite.js';
export default class GameItem {
    canvas;
    currentAnimation;
    currentAnimationFrameLimit;
    heightCut;
    img;
    questDialogue;
    sizeSprite;
    sprite;
    widthCut;
    xPos;
    yesOrNoOption;
    yPos;
    constructor(widthCut, heightCut, imageSrc, maxX, maxY, currentAnimationFrameLimit, sizeSprite) {
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = maxX;
        this.yPos = maxY;
        this.widthCut = widthCut;
        this.heightCut = heightCut;
        this.currentAnimationFrameLimit = currentAnimationFrameLimit;
        this.sizeSprite = sizeSprite;
        this.sprite = new Sprite(this);
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
    getImage() {
        return this.img;
    }
    getXPos() {
        return this.xPos;
    }
    setXPos(xPosition) {
        this.xPos = xPosition;
    }
    getYPos() {
        return this.yPos;
    }
    setYPos(yPosition) {
        this.yPos = yPosition;
    }
    getWidthCut() {
        return this.widthCut;
    }
    getHeightCut() {
        return this.heightCut;
    }
    getCurrentAnimationFrameLimit() {
        return this.currentAnimationFrameLimit;
    }
    getSizeSprite() {
        return this.sizeSprite;
    }
    getCurrentAnimation() {
        return this.currentAnimation;
    }
    getSprite() {
        return this.sprite;
    }
    getYesorNoText() {
        return this.yesOrNoOption;
    }
    getQuestDialogue() {
        return this.questDialogue;
    }
}
//# sourceMappingURL=GameItem.js.map