import Scene from './Scene.js';
import Player from './Player.js';
import GameOver from './GameOver.js';
import LevelUp from './LevelUp.js';
import House from './House.js';
export default class Level extends Scene {
    player;
    house;
    dialogueBox;
    constructor(game) {
        super(game);
        this.house = new House(this.game.canvas.width, this.game.canvas.height);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 10;
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    update() {
        if (this.player.isCleaning()) {
            this.interact();
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
        this.game.ctx.fillRect(this.game.canvas.width / 2 - 250, (this.game.canvas.height / 5) * 3.5, 500, 200);
        this.player.draw(this.game.ctx);
        this.house.draw(this.game.ctx);
    }
    interact() {
        if (this.player.collidesWith(this.house)) {
            console.log('INTERACTION :)');
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=Level.js.map