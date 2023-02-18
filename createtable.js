// <div></div> in html
const div = document.querySelector("div");
const table = document.createElement('table');
table.border = '1';
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

const tr = document.createElement('tr');
for(let i = 0;i<4;i++){
 const th = document.createElement('th');
 th.appendChild(document.createTextNode("hhh"));
 tr.appendChild(th)
}
tableBody.appendChild(tr);
for (let i = 0; i < 3; i++) {
  const tr = document.createElement('tr');
  tableBody.appendChild(tr);
  for (let j = 0; j < 4; j++) {
    const td = document.createElement('td');
    td.width = '75';
    td.appendChild(document.createTextNode(`cell ${i}-${j}`));
    tr.appendChild(td);
  }
}
div.appendChild(table);
