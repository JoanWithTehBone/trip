import Game from './Game.js';
export default class GameItem {
    img;
    xPos;
    yPos;
    constructor(imageSrc, maxX, maxY) {
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = maxX;
        this.yPos = maxY;
    }
    draw(ctx) {
        ctx.drawImage(this.img, 0, 0, 64, 50, this.xPos, this.yPos, 160, 128);
    }
    getImageHeight() {
        return this.img.height;
    }
    getImageWidth() {
        return this.img.width;
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
}
//# sourceMappingURL=GameItem.js.map