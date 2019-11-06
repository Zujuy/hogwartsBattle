const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let interval


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

  }

  function playerAnimation(player) {
    if (frames % 6 === 0) {
      if (player.animate === 5) {
        player.animate = 0
      } else {
        player.animate++
      }
    }
  
  }

  function gameOver() {
    if (player1.hp === 0 ) {
      clearInterval(interval)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText('Game Over', canvas.width / 2 - 30, canvas.height / 2 - 10)
    }
  }

  function update() {
    frames++
    clearCanvas()
    board.draw()
    playerAnimation(player1)
    playerAnimation(player2)
    player1.draw()
    player2.draw()
    player1.x += player1.vx
    player1.y += player1.vy
    player2.x += player2.vx
    player2.y += player2.vy
    // checkColitions()
    // generateIce()
    // drawObstacles()
    gameOver()
  }



   interval = setInterval(update, 1000 / 60)

  //  const sound = new Audio();
  //  const button = document.querySelector('button');
  //  button.addEventListener('click', playSound);
  //  function playSound(){
  //     sound.src = 'audio/harry_music.mp3';
  //     sound.play();
  //  }

