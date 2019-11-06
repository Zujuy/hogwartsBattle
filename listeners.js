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
            return
        case 81:
            player1.attackIzq()
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
            return
        case 78:
            player2.attackIzq()
            return
    
        
    }
    
}