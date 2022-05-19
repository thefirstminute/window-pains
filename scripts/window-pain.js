// # start button: {{{
function startFunc() {
  document.getElementById("start-menu").classList.toggle("show");
}

// Close the startmenu menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.start-btn')) {
    var sMenu = document.getElementsByClassName("startmenu-content");
    var i;
    for (i = 0; i < sMenu.length; i++) {
      var openstartmenu = sMenu[i];
      if (openstartmenu.classList.contains('show')) {
        openstartmenu.classList.remove('show');
      }
    }
  }
}
// # }}}

var winHeight = 5;

function showToggle(divID) {
  winHeight=winHeight+1;
  document.getElementById(divID).classList.toggle("show");
  document.getElementById(divID).style.zIndex = winHeight;
}
function showDiv(divID) {
  winHeight=winHeight+2;
  document.getElementById(divID).classList.add("show");
  document.getElementById(divID).classList.remove("hide");
  document.getElementById(divID+'-btn').classList.add("show");
  document.getElementById(divID+'-btn').classList.remove("hide");
  document.getElementById(divID).style.zIndex = winHeight;
}
function hideDiv(divID) {
  document.getElementById(divID).classList.add("hide");
  document.getElementById(divID).classList.remove("show");
  document.getElementById(divID+'-btn').classList.add("hide");
  document.getElementById(divID+'-btn').classList.remove("show");
}

function subWindow(divID) {
  winHeight=winHeight+1;
  document.getElementById(divID).classList.toggle("show");
  document.getElementById(divID).style.zIndex = winHeight;
}


// Add all 'window' divs
const windows = Array.from(document.getElementsByClassName("window"));
const win_ids = windows.map(el => {
  moveWindow(document.getElementById(el.id));
});

function moveWindow(div) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  div.querySelector('.title-bar').onmousedown = dragMouseDown;
  div.onmousedown = winClick;

  function winClick() {
    div.style.zIndex = ++winHeight;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    div.style.top = (div.offsetTop - pos2) + "px";
    div.style.left = (div.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

