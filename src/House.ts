import GameItem from './GameItem.js';

export default class House extends GameItem {
  /**
   * This is Vicks house, enjoy :]
   *
   * @param maxX Maximum x
   * @param maxY Maximum y
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/egg.png', maxX, maxY);
  }
}
