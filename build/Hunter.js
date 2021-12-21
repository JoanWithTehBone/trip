import NPC from "./NPC.js";
export default class Hunter extends NPC {
    constructor() {
        super('./assets/img/hunter.jpeg', 1100, 700);
        this.name = 'Hunter';
        this.completed = false;
    }
    questCompleted() {
        return false;
    }
    talkToPlayer() { }
    giveReward() { }
}
//# sourceMappingURL=Hunter.js.map