import GameItem from './GameItem.js';
import Game from './Game.js';

export default class QuestBoard extends GameItem {
  /**
   * Constructor of the Questboard
   *
   * @param canvas the canvas to be drawn on
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(0, 0, '', (canvas.width / 2) * 1.15, (canvas.height / 2) * 0.80, 0, 1);
    this.img.height = 55;
    this.img.width = 80;

    this.yesOrNoOption = Game.loadNewImage('./assets/img/MonsterImages/MonsterYNPrompt.png');
  }

  /**
   * A getter for the Yes or No question
   *
   * @returns the text of the Question that is in the constructor
   */
  public getYesorNoText(): HTMLImageElement {
    return this.yesOrNoOption;
  }
}
