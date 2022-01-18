import NPC from './NPC.js';
export default class BlackSmith extends NPC {
    constructor(canvas) {
        super('', canvas.width / 11, canvas.height - 260);
        this.progression = 0;
        this.name = 'BlackSmith';
        this.completed = false;
        this.dialogue = [];
        this.dialogueFactory();
        this.questDialogue = [];
        this.yesOrNoOption = 'Do you want to start the blacksmith quest? Yes No';
        this.questResponse = ['Mhhh let me check, I don`t think they did it.', 'Mhhh let me check, Ah you found the thief'];
        this.rightAnswer = 'A';
    }
    dialogueFactory() {
        this.dialogue.push('Hey there, I am the blacksmith.', 'I fancy making a sword or two', 'Have you ever held one?', 'Hehe, go now. I have work to do.');
        console.log(this.dialogue);
    }
    giveReward(game) {
        if (!(this.rewardGiven)) {
            console.log('You did it!');
            const stats = game.getPlayerStats();
            stats.setDEF(stats.getDEF() + 1);
            this.rewardGiven = true;
        }
    }
}
//# sourceMappingURL=BlackSmith.js.map