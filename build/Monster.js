import Game from './Game.js';
import NPC from './NPC.js';
import UserData from './UserData.js';
export default class Monster extends NPC {
    monsterStats;
    baseXPos;
    baseYPos;
    constructor(canvas) {
        super('./assets/img/MonsterImages/golem.png', canvas.width / 2, canvas.height / 2);
        this.progression = 0;
        this.name = 'Monster';
        this.completed = false;
        this.dialogue = [];
        this.dialogueFactory();
        this.baseXPos = canvas.width / 2;
        this.baseYPos = canvas.height / 2;
        this.monsterStats = new UserData(20, 4, 3);
    }
    dialogueFactory() {
        this.dialogue.push('Raargh!', 'Prepare to die villain!', 'Raargh!', 'Oh wait, you are not a villain?', 'You have helped the people?', 'Sounds like I got the wrong person then, sorry friend!');
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
        const randomStatIncrease = Game.randomNumber(1, 3);
        if (randomStatIncrease === 1) {
            this.monsterStats.setHP(this.monsterStats.getHP() + 5);
        }
        else if (randomStatIncrease === 2) {
            this.monsterStats.setATK(this.monsterStats.getATK() + 1);
        }
        else {
            this.monsterStats.setDEF(this.monsterStats.getDEF() + 1);
        }
    }
}
//# sourceMappingURL=Monster.js.map