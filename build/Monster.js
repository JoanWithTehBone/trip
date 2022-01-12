import NPC from './NPC.js';
import UserData from './UserData.js';
export default class Monster extends NPC {
    monsterStats;
    constructor(canvas) {
        super('./assets/img/character_robot_walk0.png', canvas.width / 2, canvas.height / 2);
        this.progression = 0;
        this.name = 'Monster';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
        this.monsterStats = new UserData(20, 5, 3);
    }
    dialogueFactory() {
        this.dialogue.push('Press F to fight the monster', 'Press T to talk with the monster', 'Raargh!', 'Oh hey, you seem like a nice guy! Wanna be friends? :)');
        console.log(this.dialogue);
    }
    move(charXpos, charYPos) {
        const dx = charXpos - this.xPos;
        const dy = charYPos - this.yPos;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const directionX = dx / distance;
        const directionY = dy / distance;
        if ((this.xPos === charXpos && this.yPos === charYPos)) {
            this.xPos -= directionX;
            this.yPos -= directionY;
        }
    }
    getMonsterStats() {
        return this.monsterStats;
    }
}
//# sourceMappingURL=Monster.js.map