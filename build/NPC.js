import GameItem from './GameItem.js';
export default class NPC extends GameItem {
    name;
    completed;
    progression;
    dialogue;
    questDialogue;
    quest;
    yesornooptionbaker;
    questResponseBaker;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX, maxY);
    }
    talkToPlayer(dialogueIndex, dialogueBox) {
        dialogueBox.setDialogueList(this.dialogue);
        if (dialogueIndex === 0) {
            console.log(this.dialogue[0]);
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
        else if (dialogueIndex === 3) {
            console.log(this.dialogue[3]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(3);
            }
        }
        else if (dialogueIndex === 4) {
            console.log(this.dialogue[4]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(4);
            }
        }
        else if (dialogueIndex === 5) {
            console.log(this.dialogue[5]);
            if (dialogueBox.getDisplay()) {
                dialogueBox.setCurrentDialogue(5);
            }
        }
    }
    questingToPlayer(questIndex, questBox) {
        questBox.setQuestList(this.questDialogue);
        if (questIndex === 0) {
            console.log(questBox.getDisplay());
            if (questBox.getDisplay()) {
                questBox.setCurrentDialogue(0);
            }
        }
        else if (questIndex === 1) {
            console.log(this.questDialogue[1]);
            if (questBox.getDisplay()) {
                questBox.setCurrentDialogue(1);
            }
        }
        else if (questIndex === 2) {
            console.log(this.questDialogue[2]);
            if (questBox.getDisplay()) {
                questBox.setCurrentDialogue(2);
            }
        }
        else {
            console.log(this.questDialogue[3]);
            if (questBox.getDisplay()) {
                questBox.setCurrentDialogue(3);
            }
        }
    }
    questCompleted() {
        if (this.completed) {
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
    getQuest() {
        return this.questDialogue;
    }
}
//# sourceMappingURL=NPC.js.map