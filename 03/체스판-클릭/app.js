    var board = document.getElementById("board");

    var black = "<span class=\"black\"></span>"
    var white = "<span class=\"white\"></span>"
    var red = "<span class=\"red\"></span>"

    var color = black;

    var beforeTarget = null;
    var beforeColor=null;

    var boardsize = 4;

  board.addEventListener('click', function(target){
    if(beforeTarget != null){
      beforeTarget.setAttribute("class", beforeColor) ;
    }
    beforeTarget = target.srcElement;
    beforeColor = target.srcElement.getAttribute("class")
    target.srcElement.setAttribute("class", "red") ;
  });


    for(var i=0; i<boardsize; i++){
        for(var j=0; j<boardsize; j++){
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
