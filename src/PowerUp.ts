import Player from './Player.js';
import ScoringObject from './ScoringObject.js';

export default class PowerUp extends ScoringObject {
  private speed: number;

  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/titled_yellow_power_icon.png', maxX - 53, maxY - 64, 0);
    this.speed = 3;
  }

  /**
   * Apply this power up to the specified player
   *
   * @param player The player to add the power up
   */
  public applyTo(player: Player): void {
    player.increaseSpeed(this.speed);
  }
}
