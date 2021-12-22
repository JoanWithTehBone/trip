import NPC from './NPC.js';

export default class Baker extends NPC {

    public constructor() {
        super('./assets/img/baker.jpeg', 100, 100);
        this.name = 'Baker';
        this.completed = false;
    }

    public questCompleted(): boolean {
        return false;
    }

    public talkToPlayer(): void { }

    public giveReward(): void { }
}