const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let interval
let lastFireTime = 0;
let fireRate = 5;


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
  
  function drawSpells() {
    spellsRight.forEach((spell,i) => {
      spell.x ++;
      if(spell.x >= canvas.width) return spellsRight.splice(i,1)
      spell.draw()
    });
  }

  function drawSpells1() {
    spellsLeft.forEach((spell1,i) => {
      spell1.x --;
      if(spell1.x >= canvas.width) return spellsLeft.splice(i,1)
      spell1.draw()
    });
  }

  // ====checar coliciones de cada jugador para quitar vidas====///

  function checkColitions() {
    //colitions player1//
    spellsRight.forEach((spell, i) => {
      if (player1.isTouching(spell)) {
        spellsRight.splice(i, 1)
        player1.hp--
      }
    })
    spellsLeft.forEach((spell, i) => {
      if (player1.isTouching(spell)) {
        spellsLeft.splice(i, 1)
        player1.hp--
      }
    })

    //colitions player2//

    spellsRight.forEach((spell, i) => {
      if (player2.isTouching(spell)) {
        spellsRight.splice(i, 1)
        player2.hp--
      }
    })

    spellsLeft.forEach((spell, i) => {
      if (player2.isTouching(spell)) {
        spellsLeft.splice(i, 1)
        player2.hp--
      }
    })
  }

  function gameOver() {
    if (player1.hp === 0 || player2.hp === 0) {
      clearInterval(interval)
      return finish.draw()
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
    drawSpells()
    drawSpells1()
    lifes.draw()
    checkColitions()
    // generateIce()
    
    gameOver()
  }

  interval = setInterval(update, 1000 / 30)


