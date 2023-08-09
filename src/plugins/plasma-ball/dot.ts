export class Dot {
  public dotRadius: number = 1
  private speed: number = 1
  public x: number
  public y: number
  private boardWidth: number
  private boardHeight: number
  private centralCircleRadius: number
  private centerX: number
  private centerY: number
  private movingAngle: number

  constructor(boardWidth: number, boardHeight: number, centralCircleRadius: number, x?: number, y?: number) {
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.centralCircleRadius = centralCircleRadius
    this.centerX = this.boardWidth / 2
    this.centerY = this.boardHeight / 2

    this.x = x || Math.random() * (this.boardWidth - this.dotRadius * 2) + this.dotRadius
    this.y = y || Math.random() * (this.boardHeight - this.dotRadius * 2) + this.dotRadius

    this.movingAngle = Math.random() * 360

    this.random()
  }

  private random() {
    while (Math.pow(this.centerX - this.x, 2) + Math.pow(this.centerY - this.y, 2) < Math.pow(this.centralCircleRadius, 2)) {
      this.x = Math.random() * (this.boardWidth - this.dotRadius * 2) + this.dotRadius
      this.y = Math.random() * (this.boardHeight - this.dotRadius * 2) + this.dotRadius
    }
  }

  private checkCollapse() {
    if (this.x + this.dotRadius > this.boardWidth || this.x - this.dotRadius < 0) {
      this.movingAngle = (-this.movingAngle + 540) % 360
    } else if (this.y + this.dotRadius > this.boardHeight || this.y - this.dotRadius < 0) {
      this.movingAngle = (-this.movingAngle + 360) % 360
    }

    if (this.centralCircleRadius) {
      if (Math.pow(this.centerX - this.x, 2) + Math.pow(this.centerY - this.y, 2) < Math.pow(this.centralCircleRadius, 2)) {
        let angleToCircle = (Math.atan2(this.y - this.centerY, this.x - this.centerX) / Math.PI) * 180 + 180

        this.movingAngle = (this.movingAngle + 180 + (angleToCircle - this.movingAngle) * 2) % 360
      }
    }
  }

  public step() {
    this.checkCollapse()

    this.x += this.speed * Math.cos((this.movingAngle * Math.PI) / 180)
    this.y += this.speed * Math.sin((this.movingAngle * Math.PI) / 180)
  }
}
