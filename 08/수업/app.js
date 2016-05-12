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
$('body').fadeOut().delay(1000).fadeIn().delay(1000).html("hi")
$('div').on('click', 'span', function(){

  console.log('span',  event.target)

})
