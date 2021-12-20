export default class GameLoop {
    static STATE_IDLE = 0;
    static STATE_STARTING = 1;
    static STATE_RUNNING = 2;
    static STATE_STOPPING = 3;
    static NORMAL_MODE = 0;
    static PLAY_CATCH_UP = 1;
    mode;
    state;
    currentScene;
    previousElapsed;
    gameStart;
    frameEnd;
    gameTime;
    frameCount;
    sceneStart;
    sceneTime;
    sceneFrameCount;
    fps;
    load;
    constructor(mode = GameLoop.NORMAL_MODE) {
        this.state = GameLoop.STATE_IDLE;
        this.mode = mode;
    }
    start(scene) {
        if (this.state === GameLoop.STATE_IDLE) {
            this.state = GameLoop.STATE_STARTING;
            this.gameStart = performance.now();
            this.frameEnd = this.gameStart;
            this.previousElapsed = this.gameStart;
            this.gameTime = 0;
            this.frameCount = 0;
            this.setNextScene(scene);
            requestAnimationFrame(this.step);
        }
    }
    stop() {
        this.state = GameLoop.STATE_STOPPING;
    }
    isInState(state) {
        return this.state === state;
    }
    setNextScene(next) {
        if (next === null) {
            throw new Error('`null` as a scene is not allowed');
        }
        this.currentScene = next;
        this.sceneStart = performance.now();
        this.sceneTime = 0;
        this.sceneFrameCount = 0;
    }
    step = (timestamp) => {
        if (this.isInState(GameLoop.STATE_STARTING)) {
            this.state = GameLoop.STATE_RUNNING;
        }
        this.currentScene.processInput();
        let nextScene = null;
        if (this.mode === GameLoop.PLAY_CATCH_UP) {
            const step = 1;
            while (this.previousElapsed < timestamp && !nextScene) {
                nextScene = this.currentScene.update(step);
                this.previousElapsed += step;
            }
        }
        else {
            const elapsed = timestamp - this.previousElapsed;
            nextScene = this.currentScene.update(elapsed);
            this.previousElapsed = timestamp;
        }
        if (nextScene) {
            this.setNextScene(nextScene);
        }
        else {
            this.currentScene.render();
        }
        if (!this.isInState(GameLoop.STATE_STOPPING)) {
            requestAnimationFrame(this.step);
        }
        else {
            this.state = GameLoop.STATE_IDLE;
        }
        const now = performance.now();
        const stepTime = timestamp - now;
        const frameTime = now - this.frameEnd;
        this.fps = Math.round(1000 / frameTime);
        this.load = stepTime / frameTime;
        this.frameEnd = now;
        this.gameTime = now - this.gameStart;
        this.sceneTime = now - this.sceneStart;
        this.frameCount += 1;
        this.sceneFrameCount += 1;
    };
}
//# sourceMappingURL=GameLoop.js.map