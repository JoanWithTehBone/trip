import Game from './Game.js';
import GameLose from './GameLose.js';
import GameWonFight from './GameWonFight.js';
import Monster from './Monster.js';
import Scene from './Scene.js';
export default class MonsterFight extends Scene {
    player;
    keyboard;
    monster;
    user;
    dialogueBox;
    monsterFightArray;
    newXPos;
    newYPos;
    constructor(game, player) {
        super(game);
        this.player = player;
        this.monster = new Monster(game.canvas);
        this.user = game.getPlayerStats();
        this.newXPos = game.canvas.width / 2;
        this.newYPos = game.canvas.height / 2;
        this.dialogueBox = this.player.getDialogueBox();
        console.log(this.newXPos);
        console.log(this.newYPos);
        this.monsterFightArray = [];
        this.monsterFightArray.push(this.monster);
        this.keyboard = this.player.getKeys();
    }
    fightWithMonster() {
        console.log('In Progress');
        if (this.player.collidesWith(this.monster)) {
            this.playerFights();
            this.monsterFights();
            this.changeMonsterPos();
        }
    }
    changeMonsterPos() {
        this.newXPos = Game.randomNumber((1 + this.monster.getImageWidth()), this.game.canvas.width - this.monster.getImageWidth());
        this.newYPos = Game.randomNumber((1 + this.monster.getImageHeight()), this.game.canvas.height - this.monster.getImageHeight());
    }
    playerFights() {
        this.monster.getMonsterStats().setHP(this.monster.getMonsterStats().getHP()
            - ((this.user.getATK() + Game.randomNumber(1, 5)) - this.monster.getMonsterStats().getDEF()));
        console.log(`Monster HP is now ${this.monster.getMonsterStats().getHP()}`);
    }
    monsterFights() {
        if (this.monster.getMonsterStats().getHP() > 0) {
            console.log('Oww, I cast fist!');
            this.user.setHP(this.user.getHP()
                - (this.monster.getMonsterStats().getATK() - this.user.getDEF()));
            console.log(`Player's HP is now ${this.user.getHP()}`);
        }
        else {
            console.log("I'm not the monster here, you are!");
        }
    }
    processInput() {
        this.player.move(this.game.canvas);
        console.log('BATTLE!!!');
    }
    animateMovement(xPos, yPos) {
        this.monster.move(xPos, yPos);
        this.monster.draw(this.game.ctx);
    }
    update() {
        this.keyboard.onFrameStart();
        if (this.player.isPressing()) {
            this.player.interactWith(this.monsterFightArray);
        }
        if (this.player.isContinuing()) {
            this.dialogueBox.setDisplay(false);
        }
        if (this.player.isFighting()) {
            console.log('I fight thee monster!');
            this.fightWithMonster();
        }
        if (this.player.isResponding()) {
            console.log('Ok');
        }
        if (this.hasWon()) {
            return new GameWonFight(this.game);
        }
        if (this.hasLost()) {
            return new GameLose(this.game);
        }
        return null;
    }
    hasWon() {
        return this.monster.getMonsterStats().getHP() <= 0;
    }
    hasLost() {
        return this.user.getHP() <= 0;
    }
    showFightProgress() {
        this.game.ctx.fillStyle = 'white';
        this.game.ctx.fillRect(35, 15, 170, 200);
        this.game.writeTextToCanvas('The Hero', 36, 120, 50, 'center', 'black');
        const playerHp = `HP: ${this.game.getPlayerStats().getHP()}`;
        this.game.writeTextToCanvas(playerHp, 36, 120, 100, 'center', 'black');
        const playerAttack = `ATK: ${this.game.getPlayerStats().getATK()}`;
        this.game.writeTextToCanvas(playerAttack, 36, 120, 150, 'center', 'black');
        const playerDefense = `DEF: ${this.game.getPlayerStats().getDEF()}`;
        this.game.writeTextToCanvas(playerDefense, 36, 120, 200, 'center', 'black');
        this.game.ctx.fillStyle = 'white';
        this.game.ctx.fillRect(this.game.canvas.width - 200, 15, 160, 100);
        this.game.writeTextToCanvas('Monster', 36, this.game.canvas.width - 120, 50, 'center', 'black');
        const monsterHp = `HP: ${this.monster.getMonsterStats().getHP()}`;
        this.game.writeTextToCanvas(monsterHp, 36, this.game.canvas.width - 120, 100, 'center', 'black');
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.animateMovement(this.newXPos, this.newYPos);
        this.player.draw(this.game.ctx);
        this.dialogueBox.drawBox(this.game.ctx);
        this.showFightProgress();
    }
}
//# sourceMappingURL=MonsterFight.js.map