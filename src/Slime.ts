import GameItem from './GameItem.js';

export default class Slime extends GameItem {
  /**
   * Constructor for the Slime class
   */
  public constructor() {
    super(32, 32, './assets/img/slimeee.png', 100, 100, 16, 32);
    this.getSprite().setAnimation('walk-down');
  }
}
