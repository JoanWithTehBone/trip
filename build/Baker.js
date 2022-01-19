import Game from './Game.js';
import NPC from './NPC.js';
export default class Baker extends NPC {
    constructor(canvas) {
        super('', (canvas.width / 5) * 3.82, canvas.height / 4);
        this.img.height = 200;
        this.img.width = 230;
        this.progression = 0;
        this.name = 'Baker';
        this.completed = false;
        this.dialogue = [];
        this.dialogueFactory();
        this.questDialogue = Game.loadNewImage('./assets/img/BakerImages/BakerQuest.png');
        this.yesOrNoOption = Game.loadNewImage('./assets/img/BakerImages/BakerYNPrompt.png');
        this.questResponse = [
            Game.loadNewImage('./assets/img/BakerImages/BakerQWrong.png'),
            Game.loadNewImage('./assets/img/BakerImages/BakerQCorrect.png'),
        ];
        this.rightAnswer = 'C';
    }
    dialogueFactory() {
        this.dialogue.push(Game.loadNewImage('./assets/img/BakerImages/BakerD1.png'), Game.loadNewImage('./assets/img/BakerImages/BakerD2.png'), Game.loadNewImage('./assets/img/BakerImages/BakerD3.png'), Game.loadNewImage('./assets/img/BakerImages/BakerD4.png'), Game.loadNewImage('./assets/img/BakerImages/BakerD5.png'), Game.loadNewImage('./assets/img/BakerImages/BakerD6.png'));
        console.log(this.dialogue);
    }
    giveReward(game) {
        if (!(this.rewardGiven)) {
            console.log('You did it!');
            const stats = game.getPlayerStats();
            stats.setHP(stats.getHP() + 5);
            this.rewardGiven = true;
        }
    }
}
//# sourceMappingURL=Baker.js.map