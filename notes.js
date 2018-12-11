
function display() {
  document.getElementById("htmlBody").innerHTML = "<h1 id='title'>Notes</h1>" +
  '<textarea id="text" rows="4" cols="50"></textarea><br>' +
  '<input id="submit" type="submit" value="Add note"><br>' +
  '<p id="notes"></p>'
}

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
