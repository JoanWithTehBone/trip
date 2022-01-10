import NPC from './NPC.js';

export default class BlackSmith extends NPC {
  /**
   * Constructor for the blacksmith class
   */
  public constructor() {
    super('./assets/img/blacksmith.jpeg', 1100, 100);
    this.progression = 0;
    this.name = 'BlackSmith';
    this.completed = true;
    this.dialogue = [];
    this.dialogueFactory();
  }

  /**
   * Factory for creating the dialogue of the blacksmith
   */
  public dialogueFactory(): void {
    this.dialogue.push('Hey there, I am the blacksmith.', 'I fancy making a sword or two', 'Have you ever held one?', 'Hehe, go now. I have work to do.');
    console.log(this.dialogue);
  }

  // public giveReward(): void {

  // }
}
