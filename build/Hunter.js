import NPC from './NPC.js';
export default class Hunter extends NPC {
    constructor(canvas) {
        super('', canvas.width / 2.05, canvas.height / 4.5);
        this.progression = 0;
        this.name = 'Hunter';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
        this.questDialogue = [];
        this.yesOrNoOption = 'Do you want to start the hunter quest? Yes No';
        this.questResponse = ['Mhhh let me check, I don`t think they did it.', 'Mhhh let me check, Ah you found the thief'];
        this.rightAnswer = 'D';
    }
    dialogueFactory() {
        this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
        console.log(this.dialogue);
    }
    giveReward() {
        console.log('You did it!');
    }
}
//# sourceMappingURL=Hunter.js.map