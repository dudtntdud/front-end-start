var beforeTarget = null;
var score = 0 ;
var newscore = document.getElementById('ScoreTemplate');
var box = document.querySelectorAll('box')

var template = newscore.innerHTML;
var helloHtml = template.replace("{score}",score);
var random;

var AreyouClick=false;
var flag = 0;

document.getElementById('header').innerHTML = helloHtml;

// test 함수 시작

function test(){

  random = Math.floor(Math.random() * 100) + 1;

  var randombox = document.getElementById(random);



  if(beforeTarget != null){
    beforeTarget.setAttribute("class","box") ;
  }

  beforeTarget = randombox;

  randombox.setAttribute("class", "redbox") ;

  helloHtml = template.replace("{score}",score);
  document.getElementById('header').innerHTML = helloHtml;

  if(AreyouClick==false){
    score--;
  }

}

// 끝

var process = setInterval(test,1500)

board.addEventListener('click', function(target){

  AreyouClick = true;


  var click = target.srcElement.getAttribute("id");

  if(random == click){
    score++;

  }
  else{
    score--;
  }

  clearInterval(process)
  test();
  process = setInterval(test,1500)
});
