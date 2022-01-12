import Scene from './Scene.js';
import Player from './Player.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import DialogueBox from './DialogueBox.js';
import Baker from './Baker.js';
import BlackSmith from './BlackSmith.js';
import Hunter from './Hunter.js';
import QuestBox from './QuestBox.js';
export default class Level extends Scene {
    player;
    dialogueBox;
    questBox;
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
        this.dialogueBox = new DialogueBox(this.game, this.game.canvas.width / 2 - 350, (this.game.canvas.height / 5) * 3.5);
        this.questBox = new QuestBox(this.game, this.game.canvas.width / 2 - 350, (this.game.canvas.height / 5) * 3.5);
        this.npcs = [];
        this.npcs.push(this.baker, this.blacksmith, this.hunter);
        this.player = new Player(game.canvas.width / 2, game.canvas.height / 2, this.dialogueBox, this.questBox);
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
            this.player.interactWith(this.npcs);
        }
        if (this.player.isContinuing()) {
            this.dialogueBox.setDisplay(false);
        }
        if (this.player.isQuesting()) {
            this.player.questWith(this.npcs);
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
        this.player.draw(this.game.ctx);
        this.baker.draw(this.game.ctx);
        this.blacksmith.draw(this.game.ctx);
        this.hunter.draw(this.game.ctx);
        this.dialogueBox.drawBox(this.game.ctx);
        this.questBox.drawBox(this.game.ctx);
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