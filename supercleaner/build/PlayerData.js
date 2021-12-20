export default class UserData {
    name;
    score;
    level;
    constructor() {
        this.level = 0;
        this.score = 0;
        this.name = UserData.generateName(3);
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
    static generateName(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random()
                * charactersLength));
        }
        return result;
    }
}
//# sourceMappingURL=PlayerData.js.map