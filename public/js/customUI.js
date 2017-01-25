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

$(document).ready(function(){
  $('#countryTable').dataTable();
});
