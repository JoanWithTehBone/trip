import Game from './Game.js';
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
        this.questDialogue = Game.loadNewImage('./assets/img/HunterImages/HunterQuest.png');
        this.yesOrNoOption = Game.loadNewImage('./assets/img/HunterImages/HunterYNPrompt.png');
        this.questResponse = [
            Game.loadNewImage('./assets/img/HunterImages/HunterQWrong.png'),
            Game.loadNewImage('./assets/img/HunterImages/HunterQCorrect.png'),
        ];
        this.rightAnswer = 'D';
    }
    dialogueFactory() {
        this.dialogue.push(Game.loadNewImage('./assets/img/HunterImages/HunterD1.png'), Game.loadNewImage('./assets/img/HunterImages/HunterD2.png'), Game.loadNewImage('./assets/img/HunterImages/HunterD3.png'), Game.loadNewImage('./assets/img/HunterImages/HunterD4.png'), Game.loadNewImage('./assets/img/HunterImages/HunterD5.png'), Game.loadNewImage('./assets/img/HunterImages/HunterD6.png'));
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