var ui = {

  init: function(data){

    var topics = [],
    response,
    output;

    topics = data.topics;

    for(var i=0; i<topics.length; i++){
      output += '<div class="title"><p>' + topics[i].topictitle + '</p></div>';

      if(topics[i].responses.length  > 1){

          for(var j=0; j<topics[i].responses.length; j++){

            var id = topics[i].responses[j].id,
            parentid = topics[i].responses[j].parentid;

            if(parentid == 0){
                output += '<div class="response">';
                output += '<div class="response_head">';
                output += '<p class="author">' + topics[i].responses[j].author + '</p>';
                output += '<p class="age">' + covertAgefromInt(topics[i].responses[j].age) + '</p>';
                output += '</div>';
                output += '<div class="response_text">';
                output += '<p>' + topics[i].responses[j].posttext + '</p>';
                output += '</div>';
                output += '</div>';
            }else{
              getOTherComm(i, j, id);
            }

          }
      }
      else{
        output += '<div class="response">';
        output += '<div class="response_head">';
        output += '<p class="author">' + topics[i].responses[0].author + '</p>';
        output += '<p class="age">' + covertAgefromInt(topics[0].responses.age) + '</p>';
        output += '</div>';
        output += '<div class="response_text">';
        output += '<p>' + topics[i].responses[0].posttext + '</p>';
        output += '</div>';
        output += '</div>';
      }

    }

    $('.container').append(output);
    }
 };


var covertAgefromInt = function(int){
  var newAge = int;
  // var newAge = new Date();
  // var newAge = newAge.getTime();
  return newAge;
};

var getOTherComm = function(i, j, id){
  console.log(i, j, id);

  var topics = commentData.topics,
  commAuthor = topics[i].responses[j].author,
  commAge = topics[i].responses[j].age,
  commText = topics[i].responses[j].posttext,
  parentID = topics[i].responses[j].parentid,
  output = '';

  if(parentID == id){
    output += '<div class="response">';
    output += '<div class="response_head">';
    output += '<p class="author">' + commAuthor + '</p>';
    output += '<p class="age">' + covertAgefromInt(commAge) + '</p>';
    output += '</div>';
    output += '<div class="response_text">';
    output += '<p>' + commText + '</p>';
    output += '</div>';
    output += '</div>';
  }


  return output;
}
