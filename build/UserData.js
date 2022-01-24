export default class UserData {
    level;
    hp;
    atk;
    def;
    constructor(health, attack, defense) {
        this.level = 1;
        this.hp = health;
        this.atk = attack;
        this.def = defense;
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