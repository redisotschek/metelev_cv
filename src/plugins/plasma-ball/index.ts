import { DotsBoard } from './dotsboard'

export class PlasmaBall{
  _dotsCount: number = 0;
  set dotsCount(value: number) {
    this._dotsCount = value;
    this.dotsboard.dotsCount = value;
  }
  get dotsCount(): number {
    return this._dotsCount;
  }
  _centralCircleRadius: number = 0;
  set centralCircleRadius(value: number) {
    this._centralCircleRadius = value;
    this.dotsboard.centralCircleRadius = value;
  }
  get centralCircleRadius(): number {
    return this._centralCircleRadius;
  }
  dotsboard: DotsBoard;
  constructor(dotsCount: number = 10, centralCircleRadius: number = 150) {
    const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
    this.dotsboard = new DotsBoard(canvas, dotsCount, centralCircleRadius, true, true);
    this.dotsCount = dotsCount;
    this.centralCircleRadius = centralCircleRadius;
  }

  changeDotsCount(dotsCount: number) {
    this.dotsCount = dotsCount;
  }

  changeCentralCircleRadius(centralCircleRadius: number) {
    this.centralCircleRadius = centralCircleRadius;
  }
}