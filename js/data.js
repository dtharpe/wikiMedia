var commmentData;
var comments = {

        init: function(){
          $.ajax({
            type: 'GET',
            url: '../data/discussion.json',
            dataType: 'json',
            async: true,
            success: function(data){
              commentData = data;
              ui.init(commentData);
            }
          });
        }
  }

$(function(){
  comments.init();
});
