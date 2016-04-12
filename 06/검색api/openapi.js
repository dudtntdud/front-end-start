function getDom(id){
  return document.getElementById(id)
}

var wrap = getDom("wrap");
var StringField = getDom("inputString");
var template = getDom('ListTemplate').innerHTML;
var button = getDom("button")
var wantsearch = null;
var pagenumber = 1;
var apikey = '2c5481187fc5fd8012a831b26eb89960';

StringField.addEventListener('keyup', function(event){
  if(event.keyCode==13){
    wrap.innerHTML= ''              //신규검색시 모든 리스트 삭제
    pagenumber = 1;                 //신규검색시 페이지넘버 초기화
    wantsearch = StringField.value;

    if(wantsearch != ""){
      addUrlList();
    }
  }
});

function render(wrap, template, data){
  var html = tmpl(template, {list: data});
  wrap.innerHTML += html;
}

function addUrlList(){
  var apiurl = 'https://apis.daum.net/search/web?q='+ wantsearch +'&apikey='+apikey+
   '&output=json'+'&pageno='+ pagenumber;

   button.removeAttribute("style")

   getJSON(apiurl, function(res){
     render( wrap, template, res.channel.item);
   });
}

function buttonclick(){
  pagenumber++;
  addUrlList();
}
