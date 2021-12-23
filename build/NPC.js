import GameItem from './GameItem.js';
export default class NPC extends GameItem {
    name;
    completed;
    progression;
    dialogue;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX, maxY);
    }
    getProgression() {
        return this.progression;
    }
    setProgression(input) {
        this.progression = input;
    }
    getDialogue() {
        return this.dialogue;
    }
}
//# sourceMappingURL=NPC.js.map