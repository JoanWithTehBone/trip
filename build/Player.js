import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    dialogueBox;
    questBox;
    yesornoquestprompt;
    keyboard;
    constructor(xPos, yPos, dialogueBox, questBox, yesornoquestprompt) {
        super('./assets/img/platerspritesheet.png', xPos, yPos);
        this.xVel = 3;
        this.yVel = 3;
        this.keyboard = new KeyListener();
        this.dialogueBox = dialogueBox;
        this.questBox = questBox;
        this.yesornoquestprompt = yesornoquestprompt;
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
        return this.keyboard.isKeyTyped(KeyListener.KEY_Q);
    }
    startQuestYes() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
    }
    refuseQuestNo() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_N);
    }
    answerQuestA() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_A);
    }
    answerQuestB() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_B);
    }
    answerQuestC() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_C);
    }
    isFighting() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_F);
    }
    isResponding() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
    }
    answerQuestD() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_D);
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImageWidth()
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImageHeight()
            && this.yPos + this.img.height > other.getYPos();
    }
    interactWith(npcs) {
        let collides = true;
        npcs.forEach((element) => {
            if (this.collidesWith(element)) {
                this.dialogueBox.setDisplay(true);
                console.log('INTERACTION WITH THE npc:)');
                if (element.questCompleted() && element.getProgression() === 4) {
                    this.dialogueBox.setDisplay(false);
                    this.yesornoquestprompt.setDisplay(true);
                    element.setProgression(element.getProgression() + 1);
                    console.log(element.getProgression());
                }
                else if (element.questCompleted() && element.getProgression() === 3) {
                    element.talkToPlayer(3, this.dialogueBox);
                    element.setProgression(element.getProgression() + 1);
                    console.log(element.getProgression());
                }
                else if (element.questCompleted() && element.getProgression() === 2) {
                    element.talkToPlayer(2, this.dialogueBox);
                    element.setProgression(element.getProgression() + 1);
                    console.log(element.getProgression());
                }
                else if (element.questCompleted() && element.getProgression() === 1) {
                    element.talkToPlayer(1, this.dialogueBox);
                    element.setProgression(element.getProgression() + 1);
                    console.log(element.getProgression());
                }
                else if (element.getProgression() < 1) {
                    element.talkToPlayer(element.getProgression(), this.dialogueBox);
                    element.setProgression(element.getProgression() + 1);
                    console.log(element.getProgression());
                }
                collides = false;
            }
        });
        return collides;
    }
    questWith(npcs) {
        let collides = true;
        if (this.startQuestYes) {
            npcs.forEach((element) => {
                if (this.collidesWith(element)) {
                    this.questBox.setDisplay(true);
                    this.dialogueBox.setDisplay(false);
                    console.log('quest WITH THE npc:)');
                    collides = false;
                }
            });
            return collides;
        }
        return false;
    }
    increaseSpeed(size) {
        this.xVel += size;
        this.yVel += size;
    }
    getDialogueBox() {
        return this.dialogueBox;
    }
}
//# sourceMappingURL=Player.js.map