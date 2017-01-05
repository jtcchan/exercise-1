var demoControls = document.createElement("div");
demoControls.innerHTML = "<div>Demo controls:</div>";
demoControls.className = "demo-controls";
document.body.appendChild(demoControls);

var switchStyle = function(){
  var stylesheet = document.getElementsByTagName("link")[0];
  stylesheet.setAttribute("href", this.dataset.styleSrc);
};

for(var i = 1; i < 4; i++) {
  var toggle = document.createElement("a");
  toggle.className = "toggle";
  toggle.innerHTML = "Switch to layout " + i;
  toggle.dataset.styleSrc = "css/style" + i + ".css";
  toggle.addEventListener("click", switchStyle);
  demoControls.appendChild(toggle);
};