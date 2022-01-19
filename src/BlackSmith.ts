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

    this.questDialogue = [];
    this.yesOrNoOption = 'Do you want to start the blacksmith quest? Yes No';
    // TO DO: Change the quest responses to fit their own quest
    this.questResponse = ['Mhhh let me check, I don`t think they did it.', 'Mhhh let me check, Ah you found the thief'];
    this.rightAnswer = 'A';
  }

  /**
   * Factory for creating the dialogue of the blacksmith
   */
  public dialogueFactory(): void {
    this.dialogue.push('Hey there, I am the blacksmith.', 'I fancy making a sword or two', 'Have you ever held one?', 'Hehe, go now. I have work to do.');
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
