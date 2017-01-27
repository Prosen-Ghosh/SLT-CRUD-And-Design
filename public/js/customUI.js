$(document).ready(function(){
   $('.dropdown-toggle').dropdown();
});

// This Function is for Country
$(document).ready(function(){
  $('#countryModelBtn').click(function(){
    $('#myModel').modal('show');
  });
});

// This Function is for City
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

function openEditModel(str){
  $('#editcountry-'+str).modal('show');
}

function openDeleteModel(str){
  $('#deletecountry-'+str).modal('show');
}

function openEditModel(str){
  $('#editcity-'+str).modal('show');
}

function openDeleteModel(str){
  $('#deletecity-'+str).modal('show');
}
