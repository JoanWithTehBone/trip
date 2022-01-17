import NPC from './NPC.js';
export default class Baker extends NPC {
    constructor() {
        super('./assets/img/baker.jpeg', 100, 100);
        this.progression = 0;
        this.name = 'Baker';
        this.completed = true;
        this.dialogue = [];
        this.questDialogue = [];
        this.yesornooptionbaker = 'Do you want to start the baker quest? Yes No';
        this.questResponseBaker = ['Mhhh let me check, I don`t think they did it.', 'Mhhh let me check, Ah you found the thief'];
        this.dialogueFactory();
        this.questFactory();
    }
    dialogueFactory() {
        this.dialogue.push('Baker: Oh, hello there traveller! My name is Francis. I am the baker of this villages and the one with the best carrot cake in the whole kingdom! ', 'You: ... ', 'Baker: Ah, you are here to fight the monster? In that case I definitely have something that will energize you for battle! ', 'Baker: Except I am having some problems with a few customers online, one of them stole my carrot cake recipe! Can you help me? ', 'test');
        console.log(this.dialogue);
    }
    questFactory() {
        this.questDialogue.push('Quest prompt: When I was having a cake tasting party, one of my costumers stole my carrot cake recipe. They all left a comment on my blog post where I asked who did it. Only one of the customers is telling the truth and the others are lying. Can you help me figure out who stole the recipe? These are their comments:', '1', '2', '3');
    }
    getYesorNoTextBaker() {
        return this.yesornooptionbaker;
    }
    getquestResponseTextBaker() {
        return this.questResponseBaker;
    }
    getQuestDialogue() {
        return this.questDialogue;
    }
}
//# sourceMappingURL=Baker.js.map