window.onload=function(){


  var textColours = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'black', 'navy' ]

  document.getElementById("submit").addEventListener("click", function(){
    var textColoursRand = textColours[Math.floor(Math.random() * textColours.length)];
    var noteShort = document.getElementById("text").value.substring(0,20)
    // var noteFull = document.getElementById("text").value
    var html_to_insert = "<p style=color:" + textColoursRand + ">"+ noteShort +"</p>";
    document.getElementById('notes').innerHTML += html_to_insert;
  });
}
