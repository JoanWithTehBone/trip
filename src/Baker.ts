import NPC from './NPC.js';

export default class Baker extends NPC {
  /**
   * Constructor for the baker class
   */
  public constructor() {
    super('./assets/img/baker.jpeg', 100, 100);
    this.progression = 0;
    this.name = 'Baker';
    this.completed = true;
    this.dialogue = [];
    this.dialogueFactory();
  }

  /**
   * Factory for creating the dialogue of the baker
   */
  public dialogueFactory(): void {
    this.dialogue.push('Hello, my name is Baker!', 'Would you like some sweet cakes?', 'I got you some oliebollen.', 'Okay, see you later. Im busy today!');
    console.log(this.dialogue);
  }

  // public giveReward(): void {

  // }
}
