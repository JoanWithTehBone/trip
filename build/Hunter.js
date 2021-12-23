import NPC from './NPC.js';
export default class Hunter extends NPC {
    dialogueIndex;
    gameloop;
    player;
    dialogueBox;
    game;
    constructor(game) {
        super('./assets/img/hunter.jpeg', 1100, 700);
        this.progression = 0;
        this.game = game;
        this.name = 'Hunter';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
    }
    dialogueFactory() {
        this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
        console.log(this.dialogue);
    }
    questCompleted() {
        if (this.progression === 2 && this.completed) {
            return true;
        }
        return false;
    }
    talkToPlayer(dialogueIndex, dialogueBox) {
        if (dialogueIndex === 0) {
            console.log(dialogueBox.getDisplay());
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(0);
            }
        }
        else if (dialogueIndex === 1) {
            console.log(this.dialogue[1]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(1);
            }
        }
        else if (dialogueIndex === 2) {
            console.log(this.dialogue[2]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(2);
            }
        }
        else {
            console.log(this.dialogue[3]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(3);
            }
        }
    }
    giveReward() {
    }
}
//# sourceMappingURL=Hunter.js.map