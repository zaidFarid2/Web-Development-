function dabaya(e) {
  document.getElementById("input").value += e;
}
function doBarDabaya(ab) {
  console.log(ab);
}
function equal() {
  var a = document.getElementById("input");
  a.value = eval(a.value);
}
function clearAll() {
  document.getElementById("input").value = "";
}
