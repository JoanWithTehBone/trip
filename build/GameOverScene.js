import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';
export default class GameOverScene extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_R)) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            return new Start(this.game);
        }
        return null;
    }
}
//# sourceMappingURL=GameOverScene.js.map