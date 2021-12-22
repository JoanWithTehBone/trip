import DialogueBox from './DialogueBox.js';
import NPC from './NPC.js';
export default class Hunter extends NPC {
    dialogue;
    dialogueBox;
    dialogueIndex;
    gameloop;
    player;
    constructor(game) {
        super('./assets/img/hunter.jpeg', 1100, 700);
        this.name = 'Hunter';
        this.completed = false;
        this.dialogue = [];
        this.dialogueIndex = 0;
        this.dialogueFactory();
        this.dialogueBox = new DialogueBox(game, (game.canvas.width / 2 - 250), (game.canvas.height / 5) * 3.5, this.dialogue);
    }
    questCompleted() {
        return false;
    }
    dialogueFactory() {
        this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
        console.log(this.dialogue);
    }
    talkToPlayer() {
        if (this.dialogueIndex === 0) {
            console.log(this.dialogue[0]);
            this.dialogueIndex += 1;
        }
        else if (this.dialogueIndex === 1) {
            console.log(this.dialogue[1]);
            this.dialogueIndex += 1;
        }
        else if (this.dialogueIndex === 2) {
            console.log(this.dialogue[2]);
            this.dialogueIndex += 1;
        }
        else {
            console.log(this.dialogue[3]);
        }
    }
    giveReward() {
    }
}
//# sourceMappingURL=Hunter.js.map