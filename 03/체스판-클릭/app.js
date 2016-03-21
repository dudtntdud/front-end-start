    var board = document.getElementById("board");

    var black = "<span class=\"black\"></span>"
    var white = "<span class=\"white\"></span>"
    var red = "<span class=\"red\"></span>"

    var color = black;

var beforeTarget = null;
var beforeColor=null;

  board.addEventListener('click', function(target){
    if(beforeTarget != null){
      beforeTarget.setAttribute("class", beforeColor) ;
    }
    beforeTarget = target.srcElement;
    beforeColor = target.srcElement.getAttribute("class")
    target.srcElement.setAttribute("class", "red") ;

    /*


    board.innerHTML = "";

    var x = Math.floor(target.clientX/100)
    var y = Math.floor(target.clientY/100)

    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
          if(color==white){
            if(x==j && y==i){
              board.innerHTML += red;
            }
            else{
              board.innerHTML += white;
            }
            color = black;
          }
          else{
            if(x==j && y==i){
              board.innerHTML += red;
            }
            else{
              board.innerHTML += black;
            }
            color = white;
          }

        }
      if(color==white){
        color = black;
      }
      else{
        color = white;
      }
  }
  */
  });


    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
          if(color==black){
            board.innerHTML += black;
            color = white;
          }
          else{
            board.innerHTML += white;
            color = black;
          }

        }
      if(color==black){
        color = white;
      }
      else{
        color = black;
      }
  }
