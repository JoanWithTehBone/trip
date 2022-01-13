import NPC from './NPC.js';
export default class Baker extends NPC {
    constructor(canvas) {
        super('', (canvas.width / 5) * 4.05, canvas.height / 2.5);
        this.progression = 0;
        this.name = 'Baker';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
    }
    dialogueFactory() {
        this.dialogue.push('Hello, my name is Baker!', 'Would you like some sweet cakes?', 'I got you some oliebollen.', 'Okay, see you later. Im busy today!');
        console.log(this.dialogue);
    }
}
//# sourceMappingURL=Baker.js.map