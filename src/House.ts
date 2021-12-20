import GameItem from './GameItem.js';

export default class House extends GameItem {

    public constructor(maxX: number, maxY: number) {
        super('./assets/img/egg.png', maxX, maxY);
    }
}