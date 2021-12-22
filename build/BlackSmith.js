import NPC from './NPC.js';
export default class BlackSmith extends NPC {
    constructor() {
        super('./assets/img/blacksmith.jpeg', 1100, 100);
        this.name = 'BlackSmith';
        this.completed = false;
    }
    questCompleted() {
        return false;
    }
    talkToPlayer() { }
    giveReward() { }
}
//# sourceMappingURL=BlackSmith.js.map