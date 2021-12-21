import NPC from './NPC.js';
export default class Baker extends NPC {
    constructor() {
        super('./assets/img/baker.jpeg', 100, 100);
        this.name = 'Baker';
        this.completed = false;
    }
    questCompleted() {
        return false;
    }
    talkToPlayer() { }
    giveReward() { }
}
//# sourceMappingURL=Baker.js.map