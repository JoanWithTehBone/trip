import NPC from './NPC.js';

export default class Hunter extends NPC {
  /**
   * Constructor for the hunter class
   *
   * @param canvas the game canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    super('', canvas.width / 2.05, canvas.height / 4.5);
    // Progression of the dialogue
    this.progression = 0;
    this.name = 'Hunter';
    this.completed = true;
    this.dialogue = [];
    this.dialogueFactory();
  }

  /**
   * Factory for creating the dialogue of the hunter
   */
  public dialogueFactory(): void {
    this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
    console.log(this.dialogue);
  }

  // public giveReward(): void {

  // }
}
