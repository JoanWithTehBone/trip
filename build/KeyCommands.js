import KeyListener from './KeyListener.js';
export default class KeyCommands {
    keyboard;
    constructor() {
        this.keyboard = new KeyListener();
    }
    getKeys() {
        return this.keyboard;
    }
    isPressing() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_SPACE);
    }
    isContinuing() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_Q);
    }
    isIgnoring() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_N);
    }
    answerQuestA() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_A);
    }
    answerQuestB() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_B);
    }
    answerQuestC() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_C);
    }
    answerQuestD() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_D);
    }
    isFighting() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_F);
    }
    isResponding() {
        return this.keyboard.isKeyTyped(KeyListener.KEY_Y);
    }
}
//# sourceMappingURL=KeyCommands.js.map