import Scene from './Scene.js';
import Player from './Player.js';
import DialogueBox from './DialogueBox.js';
import Baker from './Baker.js';
import BlackSmith from './BlackSmith.js';
import Hunter from './Hunter.js';
import MonsterFight from './MonsterFight.js';
import QuestBox from './QuestBox.js';
import YesorNoQuestPrompt from './YesorNoQuestPrompt.js';
import FlyingDragonBaby from './FlyingDragonBaby.js';
import QuestBoard from './QuestBoard.js';
export default class Level extends Scene {
    player;
    dialogueBox;
    questBox;
    yesOrNoQuestPrompt;
    baker;
    blacksmith;
    hunter;
    npcs;
    flyingDragonBaby;
    keyCommands;
    questBoard;
    constructor(game) {
        super(game);
        this.baker = new Baker(game.canvas);
        this.blacksmith = new BlackSmith(game.canvas);
        this.hunter = new Hunter(game.canvas);
        this.flyingDragonBaby = new FlyingDragonBaby(game.canvas);
        this.questBoard = new QuestBoard(game.canvas);
        this.dialogueBox = new DialogueBox(this.game, this.game.canvas.width / 2 - 600, (this.game.canvas.height / 5) * 3.7);
        this.questBox = new QuestBox(this.game, this.game.canvas.width / 2 - 500, (this.game.canvas.height / 8) * 0.5);
        this.yesOrNoQuestPrompt = new YesorNoQuestPrompt(this.game, this.game.canvas.width / 2 - 300, (this.game.canvas.height / 8) * 3);
        this.npcs = [];
        this.npcs.push(this.baker, this.blacksmith, this.hunter);
        this.player = new Player(game.canvas.width / 2, game.canvas.height / 2, this.dialogueBox, this.questBox, this.yesOrNoQuestPrompt);
        this.keyCommands = this.player.getKeyboard();
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    update() {
        this.keyCommands.getKeys().onFrameStart();
        this.flyingDragonBaby.move();
        this.flyingDragonBaby.outOfCanvas(this.game.canvas);
        if (this.keyCommands.isPressing()) {
            this.player.interactWithVillager(this.npcs);
            this.player.afterQuest(this.npcs, this.game);
            this.player.interactWithObject(this.questBoard);
        }
        if (this.keyCommands.isContinuing()) {
            this.dialogueBox.setDisplay(false);
        }
        if (this.keyCommands.isResponding()) {
            if (this.player.collidesWith(this.questBoard)) {
                return new MonsterFight(this.game, this.player, this.npcs);
            }
            this.player.questWithVillager(this.npcs);
        }
        if (this.keyCommands.isIgnoring()) {
            this.player.resetQuest(this.npcs);
            this.yesOrNoQuestPrompt.setDisplay(false);
        }
        if (this.questBox.getDisplay()) {
            this.player.questAnswer(this.npcs);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.baker.draw(this.game.ctx);
        this.blacksmith.draw(this.game.ctx);
        this.hunter.draw(this.game.ctx);
        this.player.getSprite().drawSprite(this.game.ctx, this.player);
        this.flyingDragonBaby.draw(this.game.ctx);
        this.questBoard.draw(this.game.ctx);
        this.questBox.drawBox(this.game.ctx);
        this.dialogueBox.drawBox(this.game.ctx);
        this.yesOrNoQuestPrompt.drawBox(this.game.ctx);
    }
    getPlayer() {
        return this.player;
    }
}
//# sourceMappingURL=Level.js.map