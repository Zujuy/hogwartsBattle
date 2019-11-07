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

      isTouching(spell) {
        // algo está tratando de ocupar el mismo espacio en canvas que el personaje1
        return (
          this.x-10 < spell.x + spell.width &&
          this.x-10 + this.width > spell.x &&
          this.y < spell.y + spell.height &&
          this.y + this.height > spell.y
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

    isTouching(spell) {
        // algo está tratando de ocupar el mismo espacio en canvas que el personaje2
        return (
          this.x < spell.x + spell.width &&
          this.x + this.width > spell.x &&
          this.y < spell.y + spell.height &&
          this.y + this.height > spell.y
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


// ====== spells============//

// ======spell derecho======//

  class Spell {
      constructor(x,y) {
          this.x = x+100
          this.y = y+50
          this.height = 20
          this.width = 20 
          this.img = new Image ()          
          this.img.src = './images/spell.png'
      }
      draw(){
          ctx.drawImage(this.img, this.x, this.y, this.height, this.width)
      }
  }

  // ======spell izquierdo======//

  class Spell1 {
    constructor(x,y) {
        this.x = x-50
        this.y = y+30
        this.height = 20
        this.width = 20 
        this.img = new Image ()          
        this.img.src = './images/spell left.png'
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width)
    }
}

// ==== imagen game over ==== //

class Gameover {
    constructor() {
        this.x = 150
        this.y = 100
        this.width = 300
        this.height = 160
        this.img = new Image()
        this.img.src =
          './images/Game_over.png'
        this.img.onload = () => {
          this.draw()
        }
      }
      draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
    } 


    //=======vidas =====//

    // player 1// 

    class LifePotions1 {
        constructor() {
          this.x = 10;
          this.y = 50;
          this.width = 150;
          this.height = 38;
          this.image = new Image();
          this.image.src = "";
        }
        draw() {
          if (player1.hp === 1) {
            this.image.src = "./images/vidas1 p1.png";
          }else if (player1.hp === 2){
            this.image.src = "./images/vidas 2p1.png"; 
          }else if (player1.hp === 3){
            this.image.src = "./images/vidas 3 p1.png";
          }else if (player1.hp === 4){
            this.image.src = "./images/vidas 4 p1.png";
          }else if (player1.hp === 5){
            this.image.src = "./images/vidas 5 p1.png";
          }
             ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
      }

      //  player 2 //


      class LifePotions2 {
        constructor() {
          this.x = 440;
          this.y = 50;
          this.width = 150;
          this.height = 38;
          this.image = new Image();
          this.image.src = "";
        }
        draw() {
          if (player2.hp === 1) {
            this.image.src = "./images/vidas1 p2.png";
          }else if (player2.hp === 2){
            this.image.src = "./images/vidas2 p2.png"; 
          }else if (player2.hp === 3){
            this.image.src = "./images/vidas3 p2.png";
          }else if (player2.hp === 4){
            this.image.src = "./images/vidas 4 p2.png";
          }else if (player2.hp === 5){
            this.image.src = "./images/vidas5 p2.png";
          }
             ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
      }
