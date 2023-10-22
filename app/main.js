import p5 from 'p5'
import './style.css'

const rectSize = 30
const canvasSize = 500
let color = 0
let maxSpeed = canvasSize
let posX = 0
let posY = 0
let speedX = 2.5
let speedY = 3.2
let acc = 1.03

const sketch = (p) => {
  p.setup = () => {

    p.background('white')
    p.createCanvas(canvasSize, canvasSize).position(p.windowWidth / 2 - canvasSize / 2, p.windowHeight / 2 - canvasSize / 2)
    p.rect(0, 0, canvasSize, canvasSize)
    p.colorMode(p.HSB)
  }
  p.draw = () => {
    p.fill(color, 100, 100)
    p.rect(posX, posY, rectSize, rectSize)

    color += 1
    color %= 360

    posX += speedX
    posY += speedY

    if (posX >= canvasSize - rectSize || posX <= 0) {
      speedX *= -1
      IncreaseSpeed()
    }
    if (posY >= canvasSize - rectSize || posY <= 0) {
      speedY *= -1
      IncreaseSpeed()
    }

    if (speedX > maxSpeed) {
      stop()
    }

    function IncreaseSpeed() {
      speedX *= acc
      speedY *= acc
    }

    function stop() {
      speedX = 0
      speedY = 0
    }
  }
}
new p5(sketch)