import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class Start extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        game.reset();
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_S)) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            return new Level(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/startscreen1.png'), 0, 0, this.game.canvas.width, this.game.canvas.height);
    }
}
//# sourceMappingURL=Start.js.map