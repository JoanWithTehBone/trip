import NPC from './NPC.js';
export default class Baker extends NPC {
    constructor(canvas) {
        super('', (canvas.width / 5) * 3.82, canvas.height / 4);
        this.img.height = 200;
        this.img.width = 230;
        this.progression = 0;
        this.name = 'Baker';
        this.completed = false;
        this.dialogue = [];
        this.questDialogue = [];
        this.yesOrNoOption = 'Do you want to start the baker quest? Yes No';
        this.questResponse = ['Mhhh let me check, I don`t think they did it.', 'Mhhh let me check, Ah you found the thief'];
        this.dialogueFactory();
        this.questFactory();
        this.rightAnswer = 'C';
    }
    dialogueFactory() {
        this.dialogue.push('Baker: Oh, hello there traveller! My name is Francis. I am the baker of this villages and the one with the best carrot cake in the whole kingdom! ', 'You: ... ', 'Baker: Ah, you are here to fight the monster? In that case I definitely have something that will energize you for battle! ', 'Baker: Except I am having some problems with a few customers online, one of them stole my carrot cake recipe! Can you help me?', 'Thank you for helping me out, here have this as a reward!');
        console.log(this.dialogue);
    }
    questFactory() {
        this.questDialogue.push('Quest prompt: When I was having a cake tasting party, one of my costumers stole my carrot cake recipe. They all left a comment on my blog post where I asked who did it. Only one of the customers is telling the truth and the others are lying. Can you help me figure out who stole the recipe? These are their comments:');
    }
    giveReward(game) {
        if (!(this.rewardGiven)) {
            console.log('You did it!');
            const stats = game.getPlayerStats();
            stats.setHP(stats.getHP() + 5);
            this.rewardGiven = true;
        }
    }
}
//# sourceMappingURL=Baker.js.map