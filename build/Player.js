import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    baker;
    blackSmith;
    hunter;
    dialogueBox;
    keyboard;
    constructor(xPos, yPos, hunter, baker, blacksmith, dialogueBox) {
        super('./assets/img/character_robot_walk0.png', xPos, yPos);
        this.xVel = 3;
        this.yVel = 3;
        this.keyboard = new KeyListener();
        this.baker = baker;
        this.blackSmith = blacksmith;
        this.hunter = hunter;
        this.dialogueBox = dialogueBox;
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
    getKeys() {
        return this.keyboard;
    }
    isPressing() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_SPACE);
    }
    isContinuing() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_C);
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth()
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight()
            && this.yPos + this.img.height > other.getYPos();
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
            this.dialogueBox.setDisplay(true);
            console.log('INTERACTION WITH THE HUNTER:)');
            if (this.hunter.getProgression() + 1 >= this.hunter.getDialogue().length) {
                this.hunter.talkToPlayer(3, this.dialogueBox);
            }
            else if (this.hunter.questCompleted()) {
                this.hunter.talkToPlayer(2, this.dialogueBox);
                this.hunter.setProgression(this.hunter.getProgression() + 1);
            }
            else if (this.hunter.getProgression() < 2) {
                this.hunter.talkToPlayer(this.hunter.getProgression(), this.dialogueBox);
                this.hunter.setProgression(this.hunter.getProgression() + 1);
            }
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