import DialogueBox from './DialogueBox.js';
import Game from './Game.js';
import NPC from './NPC.js';
import GameLoop from './GameLoop.js';
import Player from './Player.js';

export default class Hunter extends NPC {
  private dialogue: string[];

  private dialogueBox: DialogueBox;

  private dialogueIndex: number;

  private gameloop: GameLoop;

  private player: Player;

  public constructor(game: Game) {
    super('./assets/img/hunter.jpeg', 1100, 700);
    this.name = 'Hunter';
    this.completed = false;
    this.dialogue = [];
    this.dialogueIndex = 0;
    this.dialogueFactory();
    this.dialogueBox = new DialogueBox(
      game,
      (game.canvas.width / 2 - 250),
      (game.canvas.height / 5) * 3.5,
      this.dialogue,
    );
  }

  /**
   * Checks if the Hunter Quest is completed
   *
   * @returns If quest is completed
   */
  public questCompleted(): boolean {
    return false;
  }

  public dialogueFactory(): void {
    this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
    console.log(this.dialogue);
  }

  public talkToPlayer(): void {
    if (this.dialogueIndex === 0) {
      console.log(this.dialogue[0]);
      this.dialogueIndex += 1;
    } else if (this.dialogueIndex === 1) {
      console.log(this.dialogue[1]);
      this.dialogueIndex += 1;
    } else if (this.dialogueIndex === 2) {
      console.log(this.dialogue[2]);
      this.dialogueIndex += 1;
    } else {
      console.log(this.dialogue[3]);
    }
  }

  public giveReward(): void {

  }
}
