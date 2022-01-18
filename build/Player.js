import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    dialogueBox;
    questBox;
    yesOrNoQuestPrompt;
    keyboard;
    constructor(xPos, yPos, dialogueBox, questBox, yesOrNoQuestPrompt) {
        super('./assets/img/testplayer.png', xPos, yPos);
        this.xVel = 2;
        this.yVel = 2;
        this.currentAnimation = 'idle-down';
        this.keyboard = new KeyListener();
        this.dialogueBox = dialogueBox;
        this.questBox = questBox;
        this.yesOrNoQuestPrompt = yesOrNoQuestPrompt;
    }
    move(canvas) {
        const minX = 0;
        const maxX = canvas.width - this.img.width;
        const minY = 0;
        const maxY = canvas.height - this.img.height;
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT) && this.xPos < maxX) {
            this.xPos += this.xVel;
            this.getSprite().setAnimation('walk-right');
            if (this.xPos > maxX) {
                this.xPos = maxX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT) && this.xPos > minX) {
            this.xPos -= this.xVel;
            this.getSprite().setAnimation('walk-left');
            if (this.xPos < minX) {
                this.xPos = minX;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP) && this.yPos > minY) {
            this.yPos -= this.yVel;
            this.getSprite().setAnimation('walk-up');
            if (this.yPos < minY) {
                this.yPos = minY;
            }
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.yPos < maxY) {
            this.yPos += this.yVel;
            this.getSprite().setAnimation('walk-down');
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
    isIgnoring() {
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
    answerQuestD() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_D);
    }
    isFighting() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_F);
    }
    isResponding() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
    }
    collidesWith(other) {
        return this.xPos < other.getXPos() + other.getImage().width
            && this.xPos + this.img.width > other.getXPos()
            && this.yPos < other.getYPos() + other.getImage().height
            && this.yPos + this.img.height > other.getYPos();
    }
    interactWith(npcs) {
        let collides = true;
        npcs.forEach((element) => {
            if (this.collidesWith(element)) {
                this.dialogueBox.setDisplay(true);
                console.log('INTERACTION WITH THE npc:)');
                if (element.getProgression() === (element.getDialogue().length - 1)) {
                    this.dialogueBox.setDisplay(false);
                    this.yesOrNoQuestPrompt.setCurrentPrompt(element.getYesorNoText());
                    this.yesOrNoQuestPrompt.setDisplay(true);
                    element.progressFurther();
                }
                else {
                    for (let i = 0; i < element.getDialogue().length; i += 1) {
                        if (i === element.getProgression()) {
                            element.talkToPlayer(i, this.dialogueBox);
                        }
                    }
                    element.progressFurther();
                }
                collides = false;
            }
        });
        return collides;
    }
    questWith(npcs) {
        let collides = true;
        npcs.forEach((element) => {
            if (this.collidesWith(element)) {
                this.questBox.setQuestList(element.getQuestDialogue());
                console.log('quest WITH THE npc:)');
                if (this.isResponding() && element.getProgression() === element.getDialogue().length) {
                    this.yesOrNoQuestPrompt.setDisplay(false);
                    this.questBox.setDisplay(true);
                }
                if (this.isIgnoring() && element.getProgression() === element.getDialogue().length) {
                    this.yesOrNoQuestPrompt.setDisplay(false);
                    element.setProgression(0);
                }
                collides = false;
            }
            return collides;
        });
        return false;
    }
    questAnswer(npcs) {
        npcs.forEach((npc) => {
            if (this.collidesWith(npc)) {
                let rightGuess = false;
                let continueQuest = false;
                if (this.answerQuestA()) {
                    console.log('This is skipped');
                    if (this.checkForRightAnswer(npc, 'A') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                else if (this.answerQuestB()) {
                    if (this.checkForRightAnswer(npc, 'B') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                else if (this.answerQuestC()) {
                    if (this.checkForRightAnswer(npc, 'C') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                else if (this.answerQuestD()) {
                    if (this.checkForRightAnswer(npc, 'D') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                if (continueQuest) {
                    if (rightGuess) {
                        this.dialogueBox.setDialogueList(npc.getQuestResponseText());
                        this.dialogueBox.setCurrentDialogue(1);
                        this.dialogueBox.setDisplay(true);
                        console.log('This is fudd');
                        this.questBox.setDisplay(false);
                        npc.setCompletion(true);
                        console.log(npc.questCompleted());
                    }
                    else {
                        this.dialogueBox.setDialogueList(npc.getQuestResponseText());
                        this.dialogueBox.setCurrentDialogue(0);
                        this.dialogueBox.setDisplay(true);
                        console.log('This is starting');
                    }
                }
            }
        });
    }
    afterQuest(npcs, game) {
        npcs.forEach((npc) => {
            if (this.collidesWith(npc)) {
                if (npc.questCompleted()) {
                    npc.talkToPlayer(npc.getDialogue().length - 1, this.dialogueBox);
                    console.log(npc.getProgression());
                    npc.giveReward(game);
                }
            }
        });
    }
    checkForRightAnswer(npc, input) {
        let rightOrWrong = false;
        if (npc.getRightAnswer() === input) {
            rightOrWrong = true;
        }
        console.log(rightOrWrong);
        return rightOrWrong;
    }
    monsterConversation(monster, talk) {
        if (this.collidesWith(monster)) {
            console.log('TOuching the monster');
            this.dialogueBox.setDisplay(true);
            if (talk) {
                for (let i = 0; i < monster.getDialogue().length; i += 1) {
                    if (i === monster.getProgression()) {
                        monster.talkToPlayer(i, this.dialogueBox);
                    }
                }
                monster.progressFurther();
            }
            else {
                monster.talkToPlayer(0, this.dialogueBox);
            }
        }
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