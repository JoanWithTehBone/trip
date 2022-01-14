import NPC from './NPC.js';
import UserData from './UserData.js';
export default class Monster extends NPC {
    monsterStats;
    baseXPos;
    baseYPos;
    constructor(canvas) {
        super('./assets/img/golem.png', canvas.width / 2, canvas.height / 2);
        this.progression = 0;
        this.name = 'Monster';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
        this.baseXPos = canvas.width / 2;
        this.baseYPos = canvas.height / 2;
        this.monsterStats = new UserData(20, 5, 3);
    }
    dialogueFactory() {
        this.dialogue.push('Press F to fight the monster', 'Press T to talk with the monster', 'Raargh!', 'Oh hey, you seem like a nice guy! Wanna be friends? :)');
        console.log(this.dialogue);
    }
    move(charXPos, charYPos) {
        let dx = charXPos - this.xPos;
        let dy = charYPos - this.yPos;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const directionX = dx / distance;
        const directionY = dy / distance;
        if (!(this.baseXPos === this.xPos && this.baseYPos === this.yPos)) {
            this.xPos -= directionX;
            this.yPos -= directionY;
            if (this.xPos !== charXPos) {
                dx = this.xPos - charXPos;
                this.xPos -= dx / 10;
            }
            if (this.yPos !== charYPos) {
                dy = this.yPos - charYPos;
                this.yPos -= dy / 10;
            }
        }
        else {
            this.baseXPos = charXPos;
            this.baseYPos = charYPos;
        }
    }
    getMonsterStats() {
        return this.monsterStats;
    }
    setBaseXPos(xPosition) {
        this.baseXPos = xPosition;
    }
    setBaseYPos(yPosition) {
        this.baseYPos = yPosition;
    }
    giveReward() {
        console.log('You did it!');
    }
}
//# sourceMappingURL=Monster.js.map