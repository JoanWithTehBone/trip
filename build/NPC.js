import GameItem from './GameItem.js';
export default class NPC extends GameItem {
    name;
    completed;
    progression;
    dialogue;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX, maxY);
    }
    talkToPlayer(dialogueIndex, dialogueBox) {
        dialogueBox.setDialogueList(this.dialogue);
        if (dialogueIndex === 0) {
            console.log(dialogueBox.getDisplay());
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(0);
            }
        }
        else if (dialogueIndex === 1) {
            console.log(this.dialogue[1]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(1);
            }
        }
        else if (dialogueIndex === 2) {
            console.log(this.dialogue[2]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(2);
            }
        }
        else {
            console.log(this.dialogue[3]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(3);
            }
        }
    }
    questCompleted() {
        if (this.progression === 2 && this.completed) {
            return true;
        }
        return false;
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