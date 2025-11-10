var bottomText = document.getElementById('textoutput');
bottomText.innerHTML = "Show Results Here";
var js = document.getElementById('entrybutton');
js.addEventListener("click", init);


function init() {
//add your javascrip between these two lines of code
  var text = document.getElementById('entryinput');
  alert('Ariel Tvishor: ' + text.value);
  bottomText.innerHTML = text.value;
}







window.addEventListener('load', init);
