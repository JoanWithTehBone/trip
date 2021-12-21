import NPC from "./NPC.js";

export default class Hunter extends NPC {

    public constructor() {
        super('./assets/img/hunter.jpeg', 1100, 700);
        this.name = 'Hunter';
        this.completed = false;
    }

    public questCompleted(): boolean {
        return false;
    }

    public talkToPlayer(): void { }

    public giveReward(): void { }
}