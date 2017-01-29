$(document).ready(function(){
    $("#cityModelBtn").click(function(){
      $.get("http://localhost:3000/admin/dataEntry/country/api", function(data, status){
        let str = '';
        for(let i = 0; i < data.length; i++){
          str += "<option data-tokens='"
              + data[i].country_name
              + "' value='"+data[i].country_id
              +"'><b>"+ data[i].country_name
              +"</b></option><br/>";
        }
        $('#selectCountryName').html(str);
      });
    });
});

/*function changeType(val){
  alert('hi');
}
*/
