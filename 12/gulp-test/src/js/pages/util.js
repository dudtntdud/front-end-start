


(function(app) {

  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
    storage : {
      load: function (callback) {
        console.log('storage.load()');
        //return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
        $.get('http://localhost:3000/todos', function(result){
          callback(result);
        });
      },
      save: function (event, data) {
        console.log('storage.save()');
        //localStorage.setItem(app.storageKey, JSON.stringify(data));
        for(var i = 0; i < data.length ; i++){
        $.post('http://localhost:3000/todos',{title:data[i].title,id:data[i].id}, function(){ console.log("success")})
        }
      }
    }
  };


  app.$wrap.on('addCollection', app.util.storage.save);
  app.$wrap.on('removeCollection', app.util.storage.save);

})(Todo);
