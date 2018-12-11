window.onload=function(){

  document.getElementById("submit").addEventListener("click", function(){
      var note = document.getElementById("text").value
      var html_to_insert = "<p>"+ note +"</p>";
      document.getElementById('notes').innerHTML += html_to_insert;
  });
}
