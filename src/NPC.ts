import GameItem from './GameItem.js';

export default abstract class NPC extends GameItem {
  protected name: string;

  protected completed: boolean;

  public constructor(imageSrc: string, maxX: number, maxY: number) {
    super(imageSrc, maxX, maxY);
  }

  public abstract questCompleted(): boolean;

  public abstract talkToPlayer(): void;

  public abstract giveReward(): void;
}
