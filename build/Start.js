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
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas('TRIP', 128, centerX, 250, 'center', 'red');
        this.game.writeTextToCanvas("Type 's' to start", 48, centerX, 550, 'center', 'white');
    }
}
//# sourceMappingURL=Start.js.map