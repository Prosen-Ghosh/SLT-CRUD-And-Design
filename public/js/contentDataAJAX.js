function changeType(val){

  var url = "";
  var wordFlag = false;
  var imageFlag = false;
  var paragraphFlag = false;

  if(val.value.toString() === 'Word'){
    url = "http://localhost:3000/admin/dataEntry/word/api";
    wordFlag = true;
  }
  else if(val.value.toString() === 'Image'){
    url = 'http://localhost:3000/admin/dataEntry/image/api';
    imageFlag = true;
  }
  else if(val.value.toString() === 'Paragraph'){
    url = 'http://localhost:3000/admin/dataEntry/paragraph/api';
    paragraphFlag = true;
  }
  else return;
  $.get(url, function(data, status){
    var str = '';
    for(let i = 0; i < data.length; i++){
      if(wordFlag){
        str += "<option data-tokens='"
            + data[i].word
            + "' value='"+data[i].word_id
            +"'><b>"+ data[i].word
            +"</b></option><br/>";
      }
      else if(imageFlag){
        str += "<option data-tokens='"
            + data[i].image_name
            + "' value='"+data[i].image_id
            +"'><b>"+ data[i].image_name
            +"</b></option><br/>";
      }
      else if(paragraphFlag){
        str += "<option data-tokens='"
            + data[i].paragraph_title
            + "' value='"+data[i].paragraph_id
            +"'><b>"+ data[i].paragraph_title
            +"</b></option><br/>";
      }
    }
    $('.content_id').html(str);
  });
}

/* Function For Get Speech Database Data And show in Speech Question <Select> tag*/

$(document).ready(function(){
  $('.speechQuestionId').click(function(){
    var url = "http://localhost:3000/admin/dataEntry/speech/apiForSpechQuestion";
    $.get(url, function(data, status){
      var str = '';
      for(let i = 0; i < data.length; i++){
        str += "<option data-tokens='"
            + data[i].speech_id
            + "' value='"+data[i].speech_id
            +"'>"+ "Speech ID: "
            + data[i].speech_id
            + ";  Speech Type: " + data[i].speech_type
            if(data[i].speech_type == 'Word')str += ";  Word Name: " + data[i].word
            else if(data[i].speech_type == 'Image')str += ";  Image Name: " + data[i].image_name
            else if(data[i].speech_type == 'Paragraph')str += ";  Image Title: " + data[i].paragraph_title
            +"</option><br/>";
      }
      $('.contentOptions').html(str);
    });
  });
});
