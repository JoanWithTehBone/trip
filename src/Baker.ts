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
    this.questDialogue = [];
    this.yesornooptionbaker = 'Do you want to start the baker quest? Yes No';
    this.questFailTextBaker = 'Mhhh let me check, I don`t think they did it.';
    this.completedTextBaker = 'Mhhh let me check, Ah you found the thief';
    this.dialogueFactory();
    this.questFactory();
  }

  /**
   * Factory for creating the dialogue of the baker
   */
  public dialogueFactory(): void {
    this.dialogue.push('Baker: Oh, hello there traveller! My name is Francis. I am the baker of this villages and the one with the best carrot cake in the whole kingdom! ', 'You: ... ', 'Baker: Ah, you are here to fight the monster? In that case I definitely have something that will energize you for battle! ', 'Baker: Except I am having some problems with a few customers online, one of them stole my carrot cake recipe! Can you help me? ', 'test');
    console.log(this.dialogue);
  }

  // public giveReward(): void {
  // }

  /**
   *
   */
  public questFactory(): void {
    this.questDialogue.push('Quest prompt: When I was having a cake tasting party, one of my costumers stole my carrot cake recipe. They all left a comment on my blog post where I asked who did it. Only one of the customers is telling the truth and the others are lying. Can you help me figure out who stole the recipe? These are their comments:', '1', '2', '3');
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getYesorNoTextBaker() : string {
    return this.yesornooptionbaker;
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getquestFailTextBaker() : string {
    return this.questFailTextBaker;
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getCompletedTextBaker() : string {
    return this.completedTextBaker;
  }
}
