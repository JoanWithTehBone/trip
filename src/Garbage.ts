import ScoringObject from './ScoringObject.js';

export default class Garbage extends ScoringObject {
  /**
   * Creates a new instance of this class
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/icecream.png', maxX - 32, maxY - 32, 1);
  }
}
