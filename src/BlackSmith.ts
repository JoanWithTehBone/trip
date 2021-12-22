import NPC from './NPC.js';

export default class BlackSmith extends NPC {

    public constructor() {
        super('./assets/img/blacksmith.jpeg', 1100, 100);
        this.name = 'BlackSmith';
        this.completed = false;
    }

    public questCompleted(): boolean {
        return false;
    }

    public talkToPlayer(): void { }

    public giveReward(): void { }
}