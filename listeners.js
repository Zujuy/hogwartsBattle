document.onkeydown =  e => {
    switch(e.keyCode){

        //player 1 movimientos//
        case 87:
            player1.moveBack()
            return
        case 83:
            player1.moveForward()
            return
        case 65:
            player1.moveRight()
            return
        case 68:
            player1.moveLeft()
            return  
        case 69:
            player1.attackDer()
            spellsRight.push(new Spell(player1.x, player1.y))
            return
        case 81:
            player1.attackIzq()
            spell1.spellLeft()
            return
       


        //player2 movimientos//   
        
        case 38:
            player2.moveBack()
            return
        case 40:
            player2.moveForward()
            return
        case 37:
            player2.moveRight()
            return
        case 39:
            player2.moveLeft()
            return  
        case 77:
            player2.attackDer()
            spellsRight.push(new Spell(player2.x, player2.y))
            return
        case 78:
            player2.attackIzq()
            spell2.spellRight()
            return
    
        
    }
    
}