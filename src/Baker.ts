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
    this.dialogueFactory();
    this.questFactory();
  }

  /**
   * Factory for creating the dialogue of the baker
   */
  public dialogueFactory(): void {
    this.dialogue.push('Baker: Oh, hello there traveller! My name is Francis. I am the baker of this villages and the one with the best carrot cake in the whole kingdom! ', 'You: ... ', 'Baker: Ah, you are here to fight the monster? In that case I definitely have something that will energize you for battle! ', 'Baker: Except I am having some problems with a few customers online, one of them stole my carrot cake recipe! Can you help me? ', '');
    console.log(this.dialogue);
  }

  // public giveReward(): void {

  // }

  public questFactory(): void {
    this.questDialogue.push('Quest prompt: When I was having a cake tasting party, one of my costumers stole my carrot cake recipe. They all left a comment on my blog post where I asked who did it. Only one of the customers is telling the truth and the others are lying. Can you help me figure out who stole the recipe? These are their comments: ', 'qqq', 'qqq', 'qqq');
  }
}
