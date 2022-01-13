import NPC from './NPC.js';
export default class BlackSmith extends NPC {
    constructor(canvas) {
        super('', canvas.width / 11, canvas.height - 260);
        this.progression = 0;
        this.name = 'BlackSmith';
        this.completed = true;
        this.dialogue = [];
        this.dialogueFactory();
    }
    dialogueFactory() {
        this.dialogue.push('Hey there, I am the blacksmith.', 'I fancy making a sword or two', 'Have you ever held one?', 'Hehe, go now. I have work to do.');
        console.log(this.dialogue);
    }
}
//# sourceMappingURL=BlackSmith.js.map