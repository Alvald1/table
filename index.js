
var table = document.querySelector('table.table');
document.querySelector('button.add-col').onclick = function() {
  var rows = table.tBodies[0].rows;
  for (var i = 0, l = rows.length-1; i < l; i++) {
      let row=document.createElement("td");
    this.insertAdjacentElement("beforebegin", row);
    newCell.className = 'new';
    (function(c) {
      setTimeout(function() {
        c.classList.remove('new')
      }, 500);
    })(newCell);
  }
}