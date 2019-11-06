class Board {
    constructor() {
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.img = new Image()
      this.img.src =
        './images/back-pelea-principal.jpeg'
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  } 

  //======PLAYER   1 ===============//
      //FUNCIONAMIENTO DEL PRIMER JUGADOR===============//

  class Player1 {
      constructor(){
          this.width = 100
          this.height =100
          this.y = 350
          this.x = 100
          this.vx = 0
          this.vy = 0
          this.animate = 1
          this.position = 0 
          this.hp = 5
          this.img = new Image()
          this.img.src = './images/harrySprites.png'
          this.img.onload = () => {
              this.draw()
            }

      }


        draw() {
            ctx.drawImage(
                // imagen de fuente
                this.img,
                // posición de x en la imagen (fuente, sx)
                (this.animate * 397) / 6,
                // posición de y en la imagen (fuente, sy)
                (this.position * 390) / 6,
                // ancho desde la posición de x (sw)
                397 / 6,
                // alto desde la posición de y (sw)
                392 / 6,
                // posición de x en canvas (destino, dx)
                this.x,
                // posición de y en canvas (destino, dy)
                this.y,
                // ancho desde la posición de x en canvas (dw)
                this.width,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
      }

      moveRight(){
          this.x -= 10
          this.position = 1
      }
      moveLeft(){
          this.x += 10
          this.position = 3
      }

      moveForward(){
          this.y += 10
          this.position = 2
      } 

      moveBack(){
          this.y -= 10
          this.position = 0

      }
      
        attackDer(){
        this.y -= 0
        this.position = 5

    }

       attackIzq(){
        this.y -= 0
        this.position = 4

    }
      
     }

// ================PLAYER 2================//
// FUNCIONAMIENTO DEL SEGUNDO JUGADOR //

class Player2 {
    constructor(){
        this.width = 100
        this.height =100
        this.y = 350
        this.x = 450
        this.vx = 0
        this.vy = 0
        this.animate = 1
        this.position = 0 
        this.hp = 5
        this.img = new Image()
        this.img.src = './images/malfoySprites.png'
        this.img.onload = () => {
            this.draw()
          }

    }
      draw() {
          ctx.drawImage(
              // imagen de fuente
              this.img,
              // posición de x en la imagen (fuente, sx)
              (this.animate * 397) / 6,
              // posición de y en la imagen (fuente, sy)
              (this.position * 390) / 6,
              // ancho desde la posición de x (sw)
              397 / 6,
              // alto desde la posición de y (sw)
              392 / 6,
              // posición de x en canvas (destino, dx)
              this.x,
              // posición de y en canvas (destino, dy)
              this.y,
              // ancho desde la posición de x en canvas (dw)
              this.width,
              // alto desde la posición de y en canvas (dh)
              this.height
            )
    }

    moveRight(){
        this.x -= 10
        this.position = 1
    }
    moveLeft(){
        this.x += 10
        this.position = 3
    }

    moveForward(){
        this.y += 10
        this.position = 2
    } 

    moveBack(){
        this.y -= 10
        this.position = 0

    }

    attackDer(){
        this.y -= 0
        this.position = 5

    }

    attackIzq(){
        this.y -= 0
        this.position = 4

    }
   }

