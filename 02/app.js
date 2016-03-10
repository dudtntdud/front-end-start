function PrintOnetoHund(){
  for(var cnt=1; cnt<=100; cnt++){
    console.log(cnt);
  }
}

function PrintOdd(){
  for(var cnt=1; cnt<=100; cnt++){
    if(cnt%2 != 0){
      console.log(cnt);
    }
  }
}

function Gugudan(){
  for(var i=2; i<=9; i++){
    for(var j=1; j<=9; j++){
      console.log(i+"*"+j+"="+i*j);
    }
  }
}

function Exprompt(){

  var total = 0;

  while(1){
    var cnt=0;
    var num=prompt("숫자를 입력해 주세요")
    num=parseInt(num,10);

    if(num){
      total = total+num;
    }
    else if(num==false || cnt>100){
      break;
    }
    cnt++;
  }
  alert(total);
}

Exprompt();
