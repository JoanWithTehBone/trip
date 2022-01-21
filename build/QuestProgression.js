export default class QuestProgression {
    keyboard;
    player;
    dialogueBox;
    questBox;
    level;
    yesOrNoQuestPrompt;
    constructor(dialogueBox, questBox, yesOrNoQuestPrompt) {
        this.dialogueBox = dialogueBox;
        this.questBox = questBox;
        this.yesOrNoQuestPrompt = yesOrNoQuestPrompt;
        this.player = this.level.getPlayer();
        this.keyboard = this.player.getKeyboard();
    }
    questWithVillager(npcs) {
        let collides = true;
        npcs.forEach((element) => {
            if (this.player.collidesWith(element)) {
                this.questBox.setQuestList(element.getQuestDialogue());
                console.log('quest WITH THE npc:)');
                if (this.keyboard.isResponding() && element.getProgression()
                    === element.getDialogue().length - 1) {
                    this.yesOrNoQuestPrompt.setDisplay(false);
                    this.questBox.setDisplay(true);
                }
                if (this.keyboard.isIgnoring() && element.getProgression()
                    === element.getDialogue().length - 1) {
                    this.yesOrNoQuestPrompt.setDisplay(false);
                    element.setProgression(0);
                }
                collides = false;
            }
            return collides;
        });
        return false;
    }
    questAnswer(npcs) {
        npcs.forEach((npc) => {
            if (this.player.collidesWith(npc)) {
                let rightGuess = false;
                let continueQuest = false;
                if (this.keyboard.answerQuestA()) {
                    console.log('This is skipped');
                    if (this.checkForRightAnswer(npc, 'A') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                else if (this.keyboard.answerQuestB()) {
                    if (this.checkForRightAnswer(npc, 'B') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                else if (this.keyboard.answerQuestC()) {
                    if (this.checkForRightAnswer(npc, 'C') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                else if (this.keyboard.answerQuestD()) {
                    if (this.checkForRightAnswer(npc, 'D') === false) {
                        continueQuest = true;
                    }
                    else {
                        rightGuess = true;
                        continueQuest = true;
                    }
                }
                if (continueQuest) {
                    if (rightGuess) {
                        this.dialogueBox.setDialogueList(npc.getQuestResponseImage());
                        this.dialogueBox.setCurrentDialogue(1);
                        this.dialogueBox.setDisplay(true);
                        console.log('This is fudd');
                        this.questBox.setDisplay(false);
                        npc.setCompletion(true);
                        console.log(npc.questCompleted());
                    }
                    else {
                        this.dialogueBox.setDialogueList(npc.getQuestResponseImage());
                        this.dialogueBox.setCurrentDialogue(0);
                        this.dialogueBox.setDisplay(true);
                        console.log('This is starting');
                    }
                }
            }
        });
    }
    afterQuest(npcs, game) {
        npcs.forEach((npc) => {
            if (this.player.collidesWith(npc)) {
                if (npc.questCompleted()) {
                    if (npc.getProgression() === 6) {
                        npc.talkToPlayer(npc.getDialogue().length - 2, this.dialogueBox);
                    }
                    else if (npc.getProgression() > 6) {
                        npc.talkToPlayer(npc.getDialogue().length - 1, this.dialogueBox);
                    }
                    console.log(npc.getProgression());
                    npc.giveReward(game);
                }
            }
        });
    }
    checkForRightAnswer(npc, input) {
        let rightOrWrong = false;
        if (npc.getRightAnswer() === input) {
            rightOrWrong = true;
        }
        console.log(rightOrWrong);
        return rightOrWrong;
    }
    getYesOrNoQuestPrompt() {
        return this.yesOrNoQuestPrompt;
    }
}
//# sourceMappingURL=QuestProgression.js.map