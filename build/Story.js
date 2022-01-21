import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class Story extends Scene {
    keyboard;
    shouldStart;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
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
        this.game.ctx.drawImage(Game.loadNewImage('./assets/img/StoryIntroduction.png'), this.game.canvas.width / 2 - 500, (this.game.canvas.height / 8) * 0.5);
    }
}
//# sourceMappingURL=Story.js.map