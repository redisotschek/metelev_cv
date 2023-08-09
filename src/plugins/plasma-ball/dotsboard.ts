import { Dot } from './dot'

export class DotsBoard {
  private _dotsCount: number = 0
  private _centralCircleRadius: number = 0
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private raysLength: number = 0
  private hue: number = 0
  private dots: Dot[] = []
  private centerX: number
  private centerY: number
  private mouseX: number = 0
  private mouseY: number = 0
  private mouseEvent: boolean = false
  private filledDots: boolean = false

  constructor(canvas: HTMLCanvasElement, dotsCount: number, centralCircleRadius: number, mouseEvent?: boolean, filledDots?: boolean) {
    this.canvas = <HTMLCanvasElement>canvas

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.ctx = <typeof this.ctx>this.canvas.getContext('2d')
    this.dotsCount = dotsCount
    this.centralCircleRadius = centralCircleRadius
    this.centerX = this.canvas.width / 2
    this.centerY = this.canvas.height / 2
    this.mouseEvent = <typeof this.mouseEvent>mouseEvent
    this.filledDots = <typeof this.filledDots>filledDots

    if (this.mouseEvent) {
      window.addEventListener('mousemove', event => {
        this.mousePosition(event.pageX, event.pageY)
      })

      window.addEventListener('mouseout', event => {
        this.mousePosition(-1000, -1000)
      })
    }

    window.addEventListener('resize', () => {
      this.resizeCanvas()
    })

    this.reRandom()
    this.animate()
  }

  get dotsCount() {
    return this._dotsCount
  }

  get centralCircleRadius() {
    return this._centralCircleRadius
  }

  set dotsCount(dotsCount: number) {
    if (dotsCount > 0 && dotsCount <= 5000) {
      for (let i = 0; i < Math.abs(dotsCount - this.dotsCount); i++) {
        if (this.dotsCount > dotsCount) {
          this.dots.pop()
        } else {
          this.dots.push(new Dot(this.ctx.canvas.width, this.ctx.canvas.height, this.centralCircleRadius))
        }
      }
      this._dotsCount = dotsCount
    }
  }

  set centralCircleRadius(centralCircleRadius: number) {
    if (centralCircleRadius >= 10 && centralCircleRadius <= 150) {
      this._centralCircleRadius = centralCircleRadius
      this.raysLength = centralCircleRadius + 2

      this.reRandom()
    }
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.centerX = this.canvas.width / 2
    this.centerY = this.canvas.height / 2

    this.reRandom()
  }

  private reRandom() {
    this.dots = []

    for (let i = 0; i < this.dotsCount; i++) {
      this.dots.push(new Dot(this.ctx.canvas.width, this.ctx.canvas.height, this.centralCircleRadius))
    }
  }

  dotClose(dot: Dot) {
    if (Math.pow(dot.x - this.centerX, 2) + Math.pow(dot.y - this.centerY, 2) < Math.pow(this.raysLength, 2)) {
      this.ctx.beginPath()
      this.ctx.lineWidth = 3
      this.ctx.strokeStyle = 'rgba(0, 204, 255, .5)'
      this.ctx.moveTo(dot.x, dot.y)

      let delta = (Math.random() - 0.5) * 100
      this.ctx.quadraticCurveTo(delta + (dot.x + this.centerX) / 2, delta + (dot.y + this.centerY) / 2, this.centerX, this.centerY)

      this.ctx.stroke()
      this.hue += 0.005
      
    }
  }

  private animate = () => {
    requestAnimationFrame(this.animate)

    // Center cycle
    this.ctx.fillStyle = 'rgb(1, 1, 1)'
    this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.9)'
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.ctx.beginPath()
    this.ctx.arc(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.centralCircleRadius, 0, Math.PI * 2, true)
    this.ctx.stroke()

    for (let i = 0; i < this.dots.length; i++) {
      this.dotClose(this.dots[i])
      if (this.mouseEvent) {
        this.mouseClose(this.dots[i])
      }

      this.ctx.beginPath()
      this.ctx.arc(this.dots[i].x, this.dots[i].y, this.dots[i].dotRadius, 0, Math.PI * 2, true)
      this.ctx.lineWidth = 1
      if (this.filledDots) {
        this.ctx.fillStyle = 'rgb(200, 200, 200)'
        this.ctx.fill()
      } else {
        this.ctx.strokeStyle = 'rgb(200, 200, 200)'
        this.ctx.stroke()
      }
      this.dots[i].step()
    }

    // Center cycle gradient
    this.ctx.beginPath()
    let gradient = this.ctx.createRadialGradient(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, 0, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.centralCircleRadius / 3)
    gradient.addColorStop(0, 'rgb(59, 130, 246)')
    gradient.addColorStop(1, 'transparent')
    this.ctx.fillStyle = gradient
    this.ctx.arc(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.centralCircleRadius, 0, Math.PI * 2, true)
    this.ctx.fill()
  }

  private mousePosition(Mx: number, My: number) {
    this.mouseX = Mx
    this.mouseY = My
  }

  private mouseClose(dot: Dot) {
    if (Math.pow(dot.x - this.mouseX, 2) + Math.pow(dot.y - this.mouseY, 2) < Math.pow(this.raysLength, 2)) {
      this.ctx.beginPath()
      this.ctx.lineWidth = 0.1
      //   this.ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, 50%, 0.2)'
      this.ctx.strokeStyle = 'rgb(150, 150, 150)'
      this.ctx.moveTo(dot.x, dot.y)
      this.ctx.lineTo(this.mouseX, this.mouseY)
      this.ctx.stroke()
    }
  }
}
