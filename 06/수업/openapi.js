console.log('openapi');

var apikey = 'ef67edaa0999d417ebaca37a33fbc648';
//https://apis.daum.net/search/vclip?q=%EC%A0%9C%EC%A3%BC%EB%8C%80&apikey=ef67edaa0999d417ebaca37a33fbc648&output=json&callback=test
//보통 jsonp는 뒤에 콜백을 붙이면 됨!!!!

var apiurl = 'https://apis.daum.net/search/vclip?q=' + q + '&apikey=' + apikey +'output=json&callback=test'
