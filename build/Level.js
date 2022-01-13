import Scene from './Scene.js';
import Player from './Player.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import DialogueBox from './DialogueBox.js';
import Baker from './Baker.js';
import BlackSmith from './BlackSmith.js';
import Hunter from './Hunter.js';
import QuestBox from './QuestBox.js';
import YesorNoQuestPrompt from './YesorNoQuestPrompt.js';
export default class Level extends Scene {
    player;
    dialogueBox;
    questBox;
    yesorNoQuestPrompt;
    baker;
    blacksmith;
    hunter;
    npcs;
    keyboard;
    hunterProgression;
    blacksmithProgression;
    bakerProgression;
    constructor(game) {
        super(game);
        this.baker = new Baker();
        this.blacksmith = new BlackSmith();
        this.hunter = new Hunter();
        this.dialogueBox = new DialogueBox(this.game, this.baker, this.game.canvas.width / 2 - 600, (this.game.canvas.height / 5) * 3.7);
        this.questBox = new QuestBox(this.game, this.baker, this.game.canvas.width / 2 - 500, (this.game.canvas.height / 8) * 0.5);
        this.yesorNoQuestPrompt = new YesorNoQuestPrompt(this.game, this.baker, this.game.canvas.width / 2 - 300, (this.game.canvas.height / 8) * 3);
        this.npcs = [];
        this.npcs.push(this.baker, this.blacksmith, this.hunter);
        this.player = new Player(game.canvas.width / 2, game.canvas.height / 2, this.dialogueBox, this.questBox, this.yesorNoQuestPrompt);
        this.keyboard = this.player.getKeys();
        this.hunterProgression = 0;
        this.blacksmithProgression = 0;
        this.bakerProgression = 0;
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 10;
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    update() {
        this.keyboard.onFrameStart();
        if (this.player.isPressing()) {
            this.questBox.setDisplay(false);
            this.player.interactWith(this.npcs);
        }
        if (this.player.isContinuing()) {
            this.dialogueBox.setDisplay(false);
        }
        if (this.player.startQuestYes() && this.baker.getProgression() === 5
            && this.player.collidesWith(this.baker)) {
            this.yesorNoQuestPrompt.setDisplay(false);
            this.questBox.setDisplay(true);
        }
        if (this.player.refuseQuestNo() && this.player.collidesWith(this.baker)) {
            this.yesorNoQuestPrompt.setDisplay(false);
            this.baker.setProgression(0);
        }
        if (this.questBox.getDisplay() && this.player.answerQuestC()) {
            this.dialogueBox.setDialogueList(this.baker.getquestResponseTextBaker());
            this.dialogueBox.setCurrentDialogue(1);
            this.questBox.setDisplay(false);
            this.dialogueBox.setDisplay(true);
        }
        if (this.questBox.getDisplay() && (this.player.answerQuestA()
            || this.player.answerQuestB() || this.player.answerQuestD())) {
            this.dialogueBox.setDialogueList(this.baker.getquestResponseTextBaker());
            this.dialogueBox.setCurrentDialogue(0);
            this.questBox.setDisplay(false);
            this.dialogueBox.setDisplay(true);
        }
        if (this.hasWon()) {
            return new LevelUp(this.game);
        }
        if (this.game.getUser().getScore() < 0) {
            return new GameOver(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.baker.draw(this.game.ctx);
        this.blacksmith.draw(this.game.ctx);
        this.hunter.draw(this.game.ctx);
        this.player.draw(this.game.ctx);
        this.questBox.drawBox(this.game.ctx);
        this.dialogueBox.drawBox(this.game.ctx);
        this.yesorNoQuestPrompt.drawBox(this.game.ctx);
        this.interact();
    }
    interact() {
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 36, 120, 50);
        const hp = `HP: ${this.game.getUser().getHP()}`;
        this.game.writeTextToCanvas(hp, 36, 120, 100);
    }
}
//# sourceMappingURL=Level.js.map