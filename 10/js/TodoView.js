
(function($, app){


  var $listDom = $('#todoList');
  var todoTemplateHtml = $('#todoTemplate').html();

  app.view ={

    addTodo: function(event){
      var $field = $(event.currentTarget);
      var fieldValue = $field.val();

      if (event.keyCode !== 13 || fieldValue === "") {

        console.log('event stop');
        return false;
      }

      $field.val('');

//extend는 오브젝트를 붙여서확장시키는 역할을함.
// a = {a:1} b= {b:2} 선언하고 $.extend(a,b) 하면 둘이 붙어서 a에 저장
      var todo = $.extend({}, app.model, {
        id: app.util.uniqId(),
        title: fieldValue,
        check: false
      });

      console.log('new​ todo.model:', todo);
      app.collection.add(todo);
    },
    render: function(){
      $listDom.html(tmpl( todoTemplateHtml, {todos: app.collection.toJSON() } ));
    },
  };

  app.$wrap.on('addCollection', app.view.render);
  app.$wrap.on('removeCollection', app.view.render);


})(jQuery, Todo);
