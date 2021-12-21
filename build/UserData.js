export default class UserData {
    name;
    score;
    level;
    hp;
    atk;
    def;
    constructor() {
        this.level = 1;
        this.score = 0;
        this.name = 'Player 1';
        this.hp = 10;
        this.atk = 1;
        this.def = 1;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getScore() {
        return this.score;
    }
    addScore(points) {
        this.score += points;
    }
    getLevel() {
        return this.level;
    }
    increaseLevel() {
        this.level += 1;
    }
    getHP() {
        return this.hp;
    }
    setHP(hp) {
        this.hp = hp;
    }
    getATK() {
        return this.atk;
    }
    setATK(atk) {
        this.atk = atk;
    }
    getDEF() {
        return this.def;
    }
    setDEF(def) {
        this.def = def;
    }
}
//# sourceMappingURL=UserData.js.map