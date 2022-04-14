let panel1 = document.getElementById("panel-1");
let panel2 = document.getElementById("panel-2");
let panel3 = document.getElementById("panel-3");
let panel4 = document.getElementById("panel-4");
let panel5 = document.getElementById("panel-5");

function removeClassList() {
  panel1.classList.remove("selected");
  panel2.classList.remove("selected");
  panel3.classList.remove("selected");
  panel4.classList.remove("selected");
  panel5.classList.remove("selected");
}

function selectedPanel(panelId) {
  removeClassList();
  document.getElementById(panelId).classList.add("selected");
}
