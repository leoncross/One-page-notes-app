window.onload=function(){


  document.getElementById("submit").addEventListener("click", function(){
    var html_to_insert = "<p style=color:" + randColor() + ">"+ shortNote() +"</p>";
    document.getElementById('notes').innerHTML += html_to_insert;
  });

  function randColor() {
    var colors = ['red', 'blue', 'yellow', 'green' ]
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function shortNote() {
    return document.getElementById("text").value.substring(0,20)
  }
}
