import GameItem from './GameItem.js';
export default class ScoringObject extends GameItem {
    score;
    constructor(imageSrc, maxX, maxY, score) {
        super(imageSrc, maxX, maxY);
        this.score = score;
    }
    getScore() {
        return this.score;
    }
}
//# sourceMappingURL=ScoringObject.js.map