import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Hunter from './Hunter.js';
import BlackSmith from './BlackSmith.js';
import Baker from './Baker.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    baker;
    blackSmith;
    hunter;
    keyboard;
    constructor() {
        super('./assets/img/character_robot_walk0.png', 720, 700);
        this.xVel = 3;
        this.yVel = 3;
        this.keyboard = new KeyListener();
        this.baker = new Baker();
        this.blackSmith = new BlackSmith();
        this.hunter = new Hunter();
    }
    move(canvas) {
        const minX = 0;
        const maxX = canvas.width - this.img.width;
        const minY = 0;
        const maxY = canvas.height - this.img.height;
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT) && this.xPos < maxX) {
            this.xPos += this.xVel;
            if (this.xPos > maxX) {
                this.xPos = maxX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT) && this.xPos > minX) {
            this.xPos -= this.xVel;
            if (this.xPos < minX) {
                this.xPos = minX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP) && this.yPos > minY) {
            this.yPos -= this.yVel;
            if (this.yPos < minY) {
                this.yPos = minY;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.yPos < maxY) {
            this.yPos += this.yVel;
            if (this.yPos > maxY) {
                this.yPos = maxY;
            }
        }
    }
    isCleaning() {
        return this.keyboard.isKeyDown(KeyListener.KEY_SPACE);
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth() + 10
            && this.xPos + this.img.width + 10 > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight() + 10
            && this.yPos + this.img.height + 10 > other.getYPos();
    }
    interactWithBaker() {
        if (this.collidesWith(this.baker)) {
            console.log('INTERACTION WITH THE BAKER:)');
            return false;
        }
        return true;
    }
    interactWithBlackSmith() {
        if (this.collidesWith(this.blackSmith)) {
            console.log('INTERACTION WITH THE BLACKSMITH:)');
            return false;
        }
        return true;
    }
    interactWithHunter() {
        if (this.collidesWith(this.hunter)) {
            console.log('INTERACTION WITH THE HUNTER:)');
            return false;
        }
        return true;
    }
    increaseSpeed(size) {
        this.xVel += size;
        this.yVel += size;
    }
}
//# sourceMappingURL=Player.js.map