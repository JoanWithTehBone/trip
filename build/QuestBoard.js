import GameItem from './GameItem.js';
import Game from './Game.js';
export default class QuestBoard extends GameItem {
    constructor(canvas) {
        super('', (canvas.width / 2) * 1.15, (canvas.height / 2) * 0.90);
        this.img.height = 55;
        this.img.width = 80;
        this.yesOrNoOption = Game.loadNewImage('./assets/img/MonsterImages/MonsterYNPrompt.png');
    }
    getYesorNoText() {
        return this.yesOrNoOption;
    }
}
//# sourceMappingURL=QuestBoard.js.map