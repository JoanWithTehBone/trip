import Game from './Game.js';
import NPC from './NPC.js';

export default class BlackSmith extends NPC {
  /**
   * Constructor for the blacksmith class
   *
   * @param canvas the game canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    super('', canvas.width / 25, (canvas.height / 5) * 3);
    this.img.height = 200;
    this.img.width = 230;
    this.progression = 0;
    this.name = 'BlackSmith';
    this.completed = false;
    this.dialogue = [];
    this.dialogueFactory();
    this.questDialogue = Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithQuest.png');
    this.yesOrNoOption = Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithYNPrompt.png');
    // TO DO: Change the quest responses to fit their own quest
    this.questResponse = [
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithQWrong.png'),
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithQCorrect.png'),
    ];
    this.rightAnswer = 'D';
  }

  /**
   * Factory for creating the dialogue of the blacksmith
   */
  public dialogueFactory(): void {
    this.dialogue.push(
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithD1.png'),
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithD2.png'),
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithD3.png'),
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithD4.png'),
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithD5.png'),
      Game.loadNewImage('./assets/img/BlacksmithImages/BlacksmithD6.png'),
    );
    console.log(this.dialogue);
  }

  /**
   * Method that gives the reward to the player if it wasn't already given.
   *
   * @param game to get when we want to edit stats
   */
  public giveReward(game: Game): void {
    if (!(this.rewardGiven)) {
      console.log('You did it!');
      const stats = game.getPlayerStats();

      stats.setDEF(stats.getDEF() + 1);
      this.rewardGiven = true;
    }
  }
}
