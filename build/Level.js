import Game from './Game.js';
import Scene from './Scene.js';
import Garbage from './Garbage.js';
import Egg from './Egg.js';
import Player from './Player.js';
import PowerUp from './PowerUp.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
export default class Level extends Scene {
    scoringObjects;
    player;
    countUntilNextItem;
    constructor(game) {
        super(game);
        this.scoringObjects = [];
        for (let i = 0; i < Game.randomNumber(3, 10); i++) {
            this.scoringObjects.push(this.createScoringObject());
        }
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.countUntilNextItem = 300;
    }
    createScoringObject() {
        const selector = Game.randomNumber(0, 100);
        if (selector < 10) {
            return new PowerUp(this.game.canvas.width, this.game.canvas.height);
        }
        if (selector < 25) {
            return new Egg(this.game.canvas.width, this.game.canvas.height);
        }
        return new Garbage(this.game.canvas.width, this.game.canvas.height);
    }
    cleanUpScoringObjects() {
        this.scoringObjects = this.scoringObjects.filter((element) => {
            const collides = this.player.collidesWith(element);
            if (collides) {
                this.game.getUser().addScore(element.getScore());
                if (element instanceof PowerUp) {
                    const powerUp = element;
                    powerUp.applyTo(this.player);
                }
            }
            return !collides;
        });
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 10;
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    update(elapsed) {
        if (this.player.isCleaning()) {
            this.cleanUpScoringObjects();
        }
        if (this.countUntilNextItem <= 0) {
            const choice = Game.randomNumber(0, 10);
            if (choice < 5) {
                this.scoringObjects.push(this.createScoringObject());
            }
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
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
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 36, 120, 50);
        this.scoringObjects.forEach((element) => {
            element.draw(this.game.ctx);
        });
        this.player.draw(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map