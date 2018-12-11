window.onload=function(){

  display()

  document.getElementById("submit").addEventListener("click", function(){
    document.getElementById('notes').innerHTML += htmlToInsert();
  });
}
