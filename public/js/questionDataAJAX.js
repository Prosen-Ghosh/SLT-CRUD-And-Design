function getQuestions(val){
  console.info(val.value);
  var writtenFlag = false;
  var interactiveTaskFlag = false;
  var yesNoFlag = false;
  if(val.value.toString() === 'Written'){
    url = "http://localhost:3000/admin/makeQuestion/written/api";
    writtenFlag = true;
  }
  else if(val.value.toString() === 'Interactive_Task'){
    url = "http://localhost:3000/admin/dataEntry/interactive_task/api";
    interactiveTaskFlag = true;
  }
  else if(val.value.toString() === 'Yes_No'){
    url = "http://localhost:3000/admin/makeQuestion/yes_no/api";
    yesNoFlag = true;
  }
  else return;
  $.get(url, function(data, status){

      var str = '';
      for(let i = 0; i < data.length; i++){
        console.info('In');
        if(writtenFlag){
          str += "<option data-tokens='"
              + data[i].question_title
              + "' value='"+data[i].written_question_id
              +"'><b>"+ data[i].question_title
              +"</b></option><br/>";
        }
        else if(interactiveTaskFlag){
          str += "<option data-tokens='"
              + data[i].interactive_task_title
              + "' value='"+data[i].interactive_task_id
              +"'><b>"+ data[i].interactive_task_title
              +"</b></option><br/>";
        }
        else if(yesNoFlag){
          str += "<option data-tokens='"
              + data[i].question
              + "' value='"+data[i].question_id
              +"'><b>"+ data[i].question
              +"</b></option><br/>";
        }
      }
      $('.question_id').html(str);
  });
}
