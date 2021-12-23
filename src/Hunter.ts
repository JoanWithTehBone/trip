import DialogueBox from './DialogueBox.js';
import Game from './Game.js';
import NPC from './NPC.js';
import GameLoop from './GameLoop.js';
import Player from './Player.js';

export default class Hunter extends NPC {
  private dialogueIndex: number;

  private gameloop: GameLoop;

  private player: Player;

  private dialogueBox: DialogueBox;

  private game: Game;

  public constructor(game: Game) {
    super('./assets/img/hunter.jpeg', 1100, 700);
    // Progression of the dialogue
    this.progression = 0;
    this.game = game;
    this.name = 'Hunter';
    this.completed = true;
    this.dialogue = [];
    this.dialogueFactory();
  }

  public dialogueFactory(): void {
    this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
    console.log(this.dialogue);
  }

  /**
   * Checks if the Hunter Quest is completed
   *
   * @returns If quest is completed
   */
  public questCompleted(): boolean {
    if (this.progression === 2 && this.completed) {
      return true;
    }
    return false;
  }

  public talkToPlayer(dialogueIndex: number, dialogueBox: DialogueBox): void {
    if (dialogueIndex === 0) {
      console.log(dialogueBox.getDisplay());
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(0);
      }
    } else if (dialogueIndex === 1) {
      console.log(this.dialogue[1]);
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(1);
      }
    } else if (dialogueIndex === 2) {
      console.log(this.dialogue[2]);
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(2);
      }
    } else {
      console.log(this.dialogue[3]);
      if (dialogueBox.getDisplay()) {
        dialogueBox.setCurrentDialogue(3);
      }
    }
  }

  public giveReward(): void {

  }
}
