var table = document.querySelector("table.table");
document.querySelector("button.add-col").onclick = function () {
  let rows = table.tBodies[0].rows;
  let i;
  for (i = 0, l = rows.length - 1; i < l; i++) setCol(rows[i]);
  let btn = document.createElement("button");
  btn.setAttribute("class", "del_col");
  btn.setAttribute("value", rows[0].children.length - 2);
  btn.setAttribute("onclick", "d2(this.value)");
  btn.innerText = "del";
  rows[i].children[rows[i].children.length - 1].insertAdjacentElement(
    "afterend",
    btn
  );
};
document.querySelector("button.add-row").onclick = function () {
  let row = document.createElement("tr");
  let rows = table.tBodies[0].rows;
  let len;
  if (rows.length == 2 && rows[0].children.length == 2) len = 1;
  else len = rows[rows.length - 2].children.length - 1;
  for (let i = 0; i < len; ++i) {
    let tmp = document.createElement("td");
    tmp.innerHTML = "<input>";
    row.appendChild(tmp);
  }
  let btn = document.createElement("button");
  btn.setAttribute("class", "del_row");
  btn.setAttribute("value", rows.length - 1);
  btn.setAttribute("onclick", "d1(this.value)");
  btn.innerText = "del";
  row.appendChild(btn);
  rows[rows.length - 1].insertAdjacentElement("beforebegin", row);
};
function setCol(id) {
  let row = document.createElement("td");
  row.innerHTML = "<input>";
  if (id.children.length > 1) {
    id.children[id.children.length - 1].insertAdjacentElement(
      "beforebegin",
      row
    );
  } else {
    id.children[id.children.length - 1].insertAdjacentElement("afterend", row);
  }
}
function d1(id) {
  let rows = table.tBodies[0].rows;
  for (let i = ++id; i < rows.length - 1; ++i) {
    rows[i].children[rows[i].children.length - 1].setAttribute("value", i - 1);
  }
  rows[id - 1].parentNode.removeChild(rows[id - 1]);
}
function d2(id) {
  let rows = table.tBodies[0].rows;
  let num = rows[rows.length - 1].children.length;
  for (let i = ++id; i < num; ++i) {
    rows[rows.length - 1].children[i].setAttribute("value", i - 1);
  }
  for (let i = 0; i < rows.length; ++i)
    rows[i].children[id - 1].parentNode.removeChild(rows[i].children[id - 1]);
}
