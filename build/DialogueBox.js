import Scene from './Scene.js';
export default class DialogueBox extends Scene {
    processInput() {
        throw new Error('Method not implemented.');
    }
    update(elapsed) {
        throw new Error('Method not implemented.');
    }
    render() {
        this.game.ctx.clearRect(this.game.canvas.height, this.game.canvas.width / 2, (this.game.canvas.width / 3) * 2, this.game.canvas.height / 4);
    }
}
//# sourceMappingURL=DialogueBox.js.map