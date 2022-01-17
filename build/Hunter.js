import NPC from './NPC.js';
export default class Hunter extends NPC {
    constructor(canvas) {
        super('', canvas.width / 2.05, canvas.height / 4.5);
        this.progression = 0;
        this.name = 'Hunter';
        this.completed = false;
        this.dialogue = [];
        this.dialogueFactory();
        this.questDialogue = [];
        this.yesOrNoOption = 'Do you want to start the hunter quest? Yes No';
        this.questResponse = ['This answer seems off, try again', 'Yes, I think you are right!'];
        this.rightAnswer = 'D';
    }
    dialogueFactory() {
        this.dialogue.push('Hello there, I am the hunter of this town', 'Do you want to help me solve this problem?', 'Thanks for helping me out, have a nice day!');
        console.log(this.dialogue);
    }
    giveReward() {
        console.log('You did it!');
    }
}
//# sourceMappingURL=Hunter.js.map