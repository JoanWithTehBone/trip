import NPC from './NPC.js';
export default class Hunter extends NPC {
    constructor(canvas) {
        super('', canvas.width / 2.05, canvas.height / 4.5);
        this.progression = 0;
        this.name = 'Hunter';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
    }
    dialogueFactory() {
        this.dialogue.push('Hey there, I am mister hunter.', 'Do you know that hunters hunt?', 'I bet you didnt.', 'A hunter must hunt, now go.');
        console.log(this.dialogue);
    }
}
//# sourceMappingURL=Hunter.js.map