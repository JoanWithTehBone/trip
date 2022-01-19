import NPC from './NPC.js';
export default class Hunter extends NPC {
    constructor(canvas) {
        super('', canvas.width / 2.4, canvas.height / 8);
        this.img.height = 200;
        this.img.width = 230;
        this.progression = 0;
        this.name = 'Hunter';
        this.completed = false;
        this.dialogue = [];
        this.dialogueFactory();
        this.questDialogue = [];
        this.yesOrNoOption = 'Do you want to start the hunter quest? Yes No';
        this.questResponse = ['These tracks seem normal to me.', 'Yes, these are definetly fake!'];
        this.rightAnswer = 'D';
    }
    dialogueFactory() {
        this.dialogue.push('Hello, I am the town hunter', 'I was sent some strange looking animal tracks.', 'The nearby town says that they could belong to a monster.', 'Do you want to help me solve this problem?', 'Thanks for helping me out, take this sword as a reward and have a nice day!');
        console.log(this.dialogue);
    }
    giveReward(game) {
        if (!(this.rewardGiven)) {
            console.log('You did it!');
            const stats = game.getPlayerStats();
            stats.setATK(stats.getATK() + 2);
            this.rewardGiven = true;
        }
    }
}
//# sourceMappingURL=Hunter.js.map