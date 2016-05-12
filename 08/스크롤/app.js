// $('#box').append('<div>난 div 요소</div>');
// $('#box').html( $('#box').html() + '<div>난 div 요소</div>');

// $('#box').hide();
// $('#box').show();

// $('div span').click(function(){
//
//   console.log('div')
//
// })
//
// $('body').fadeOut().delay(1000).fadeIn().delay(1000).html("hi")
// $('div').on('click', 'span', function(){
//
//   console.log('span',  event.target)
//
// })
$('#upImg').click(function(event){
    $(document.body).animate({scrollTop:0},1000)
});

$(window).scroll(function(event){
        //window 랑 document.body 는 같은데 animate는 window는 안먹음. 주의
          if($(document.body).scrollTop()<=50){
            // $('#upImg').css("display","none")
            $('#upImg').fadeOut();
          }

          else{
            // $('#upImg').css("display","inline")
            $('#upImg').fadeIn();
          }
});
