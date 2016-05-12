var clickFlag = 0;
var beforetarget;
var stopFlag = 0;

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.close', function(event){
    if(stopFlag === 0){
      var $target = $(event.currentTarget);
      var num = $target.attr('num');
      console.log('click card!', num);
      /*  여기서부터   */
      if (clickFlag === 0){
          beforetarget = $target;
          $target.attr('class','card open');
          clickFlag = 1;
      }

      else {
          $target.attr('class','card open');

          stopFlag = 1;
          setTimeout(function(){
            if(beforetarget.attr('num') != $target.attr('num')){
              beforetarget.fadeOut(0).attr('class','card close').fadeIn(500);
              $target.fadeOut(0).attr('class','card close').fadeIn(500);
            }
            stopFlag = 0;
          },500);          //다를경우 카드 뒤집는 과정.

          clickFlag = 0;
      }
    }
      /*  여기까지   */
});
}

var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');

//init
shuffle(cards);
console.log(cards);
printCards();
addEvent();
