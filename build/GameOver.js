import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';
export default class GameOver extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            return new Start(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('Game Over', 128, centerX, 250, 'center', 'red');
        this.game.writeTextToCanvas("Type 'c' to continue", 48, centerX, 550, 'center', 'white');
    }
}
//# sourceMappingURL=GameOver.js.map