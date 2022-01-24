import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class LevelUp extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_P)) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            this.game.getPlayerStats().increaseLevel();
            return new Level(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    }
}
//# sourceMappingURL=LevelUp.js.map