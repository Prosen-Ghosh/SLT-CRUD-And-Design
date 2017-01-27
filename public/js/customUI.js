$(document).ready(function(){
   $('.dropdown-toggle').dropdown();
});

// This Function is for Country
$(document).ready(function(){
  $('#countryModelBtn').click(function(){
    $('#myModel').modal('show');
  });
});

// This Function is for City Modal
$(document).ready(function(){
  $('#cityModelBtn').click(function(){
    $('#myModel').modal('show');
  });
});

// Country Table Data Search,And divide
$(document).ready(function(){
  $('#countryTable').dataTable();
});
// City Table Data Search,And divide
$(document).ready(function(){
  $('#cityTable').dataTable();
});

function openDeleteModel(str){
  $('#delete-'+str).modal('show');
}

function openEditModel(str){
  $('#edit-'+str).modal('show');
}
