function setClock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = addZero(m);
  s = addZero(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(setClock, 1000);
}

function addZero(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function loadr() {
  setClock();
}
