window.onload=function(){


  document.getElementById("submit").addEventListener("click", function(){
    document.getElementById('notes').innerHTML += htmlToInsert();
  });

  function htmlToInsert() {
    return html_to_insert = "<p style=color:" + randColor() + ">"+ shortNote() +"</p>";
  }

  function randColor() {
    var colors = ['red', 'blue', 'yellow', 'green' ]
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function shortNote() {
    return document.getElementById("text").value.substring(0,20)
  }
}
