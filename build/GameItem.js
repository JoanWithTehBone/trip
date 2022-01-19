import Game from './Game.js';
import Sprite from './Sprite.js';
export default class GameItem {
    img;
    xPos;
    yPos;
    sprite;
    canvas;
    currentAnimation;
    constructor(imageSrc, maxX, maxY) {
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = maxX;
        this.yPos = maxY;
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
    getCurrentAnimation() {
        return this.currentAnimation;
    }
    getSprite() {
        return this.sprite;
    }
}
//# sourceMappingURL=GameItem.js.map