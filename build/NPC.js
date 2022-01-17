import GameItem from './GameItem.js';
export default class NPC extends GameItem {
    name;
    completed;
    progression;
    dialogue;
    questDialogue;
    quest;
    yesOrNoOption;
    questResponse;
    rightAnswer;
    constructor(imageSrc, maxX, maxY) {
        super(imageSrc, maxX, maxY);
    }
    talkToPlayer(dialogueIndex, dialogueBox) {
        dialogueBox.setDialogueList(this.dialogue);
        for (let i = 0; i < this.dialogue.length; i += 1) {
            if (dialogueIndex === i) {
                if (dialogueBox.getDisplay()) {
                    dialogueBox.setCurrentDialogue(i);
                }
            }
        }
    }
    questingToPlayer(questIndex, questBox) {
        questBox.setQuestList(this.questDialogue);
        for (let i = 0; i < this.questDialogue.length; i += 0) {
            if (questIndex === i) {
                if (questBox.getDisplay()) {
                    questBox.setCurrentDialogue(i);
                }
            }
        }
    }
    questCompleted() {
        if (this.completed) {
            this.giveReward();
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
    progressFurther() {
        this.progression += 1;
    }
    getYesorNoText() {
        return this.yesOrNoOption;
    }
    getQuestResponseText() {
        return this.questResponse;
    }
    getDialogue() {
        return this.dialogue;
    }
    getQuestDialogue() {
        return this.questDialogue;
    }
    getRightAnswer() {
        return this.rightAnswer;
    }
}
//# sourceMappingURL=NPC.js.map