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
        const centerX = this.game.canvas.width / 2;
        const line1 = `Level ${this.game.getPlayerStats().getLevel()} Clear`;
        this.game.writeTextToCanvas(line1, 128, centerX, 250, 'center', 'red');
        this.game.writeTextToCanvas("Type 'p' to proceed to the next level", 48, centerX, 550, 'center', 'white');
    }
}
//# sourceMappingURL=LevelUp.js.map