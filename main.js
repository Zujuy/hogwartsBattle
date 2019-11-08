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
      spell.x += 15;
      if(spell.x >= canvas.width) return spellsRight.splice(i,1)
      spell.draw()
      audio1.play()
    });
  }

  function drawSpells1() {
    spellsLeft.forEach((spell1,i) => {
      spell1.x -=15;
      if(spell1.x >= canvas.width) return spellsLeft.splice(i,1)
      spell1.draw()
      audio1.play()
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
      let restartButton = document.querySelector('#restartButton')
      restartButton.style.display = 'inline'
      audio.pause()
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
    lifes1.draw()
    checkColitions()
    // generateIce()
    
    gameOver()
  }



  //pantala inicio//

  function inicio() {
    document.querySelector('#initScreen').style.display = 'block'    
    document.querySelector('#instrScreen').style.display = 'none'
    }


    // re-start button// 

    document.getElementById("restartButton").onclick = function(){
      location.reload()
    }

  interval = setInterval(update, 1000 / 30)

  inicio()

  document.querySelector('#begin').onclick = () => {
    document.querySelector('#initScreen').style.display = 'none'    
    document.querySelector('#instrScreen').style.display = 'block'
    document.querySelector('canvas').style.display = 'none'
  }

  document.querySelector('#start').onclick = () => {
    document.querySelector('#instrucciones').style.display = 'none'
    document.querySelector('#start').style.display = 'none'
    document.querySelector('canvas').style.display = 'inline'
    audio.play()
  }