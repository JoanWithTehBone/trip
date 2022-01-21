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
import Slime from './Slime.js';
import Fatcat from './Fatcat.js';
export default class Level extends Scene {
    player;
    slime;
    fatcat;
    dialogueBox;
    questBox;
    yesorNoQuestPrompt;
    controls;
    baker;
    blacksmith;
    hunter;
    npcs;
    gameitem;
    flyingDragonBaby;
    keyboard;
    keyArray;
    answerArray;
    constructor(game) {
        super(game);
        this.baker = new Baker(game.canvas);
        this.blacksmith = new BlackSmith(game.canvas);
        this.hunter = new Hunter(game.canvas);
        this.flyingDragonBaby = new FlyingDragonBaby(game.canvas);
        this.slime = new Slime();
        this.fatcat = new Fatcat();
        this.dialogueBox = new DialogueBox(this.game, this.game.canvas.width / 2 - 600, (this.game.canvas.height / 5) * 3.7);
        this.questBox = new QuestBox(this.game, this.game.canvas.width / 2 - 500, (this.game.canvas.height / 8) * 0.5);
        this.yesorNoQuestPrompt = new YesorNoQuestPrompt(this.game, this.game.canvas.width / 2 - 300, (this.game.canvas.height / 8) * 3);
        this.npcs = [];
        this.npcs.push(this.baker, this.blacksmith, this.hunter);
        this.player = new Player(game.canvas.width / 2, game.canvas.height / 2, this.dialogueBox, this.questBox, this.yesorNoQuestPrompt);
        this.keyboard = this.player.getKeys();
        this.answerArray = ['A', 'B', 'C', 'D', 'E'];
        this.keyArray = [false, false, false, false, false];
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    update() {
        this.keyboard.onFrameStart();
        this.flyingDragonBaby.move();
        this.flyingDragonBaby.outOfCanvas(this.game.canvas);
        if (this.player.isPressing()) {
            this.player.interactWith(this.npcs);
            this.player.afterQuest(this.npcs, this.game);
        }
        if (this.player.isContinuing()) {
            this.dialogueBox.setDisplay(false);
        }
        if (this.player.isFighting()) {
            return new MonsterFight(this.game, this.player, this.npcs);
        }
        this.player.questWith(this.npcs);
        if (this.questBox.getDisplay()) {
            this.player.questAnswer(this.npcs);
        }
        if (this.player.openControls()) {
            if (this.controls.getDisplay()) {
                this.controls.setDisplay(false);
            }
            else {
                this.controls.setDisplay(true);
            }
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.baker.draw(this.game.ctx);
        this.blacksmith.draw(this.game.ctx);
        this.hunter.draw(this.game.ctx);
        this.fatcat.getSprite().drawSprite(this.game.ctx, this.fatcat);
        this.slime.getSprite().drawSprite(this.game.ctx, this.slime);
        this.player.getSprite().drawSprite(this.game.ctx, this.player);
        this.flyingDragonBaby.draw(this.game.ctx);
        this.questBox.drawBox(this.game.ctx);
        this.dialogueBox.drawBox(this.game.ctx);
        this.yesorNoQuestPrompt.drawBox(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map