function getDom(id){
  return document.getElementById(id)
}

function remove_tag(target){
  document.getElementById('todoList').removeChild(target.parentNode)
}

var todoStringField = getDom("inputString")
var todoList = getDom("todoList")

todoStringField.addEventListener('keyup', function(event){

  if(event.keyCode==13){
      var newtodo = todoStringField.value

      var li = document.createElement("li")

      li.innerHTML = "\
      <button class=\"delete\" onclick=\"remove_tag(this)\">x</button>\
      <input type=\"checkbox\" class=\"toggle-checked\">\
      <span class=\"text\">"+newtodo+"</span>"

      todoStringField.value = null;

    document.getElementById('todoList').appendChild(li)
  }
});
