var styleSwitcher = document.createElement("div");
styleSwitcher.className("style-switcher");
document.body.appendChild(styleSwitcher);

var switchStyle = function(){
  var stylesheet = document.getElementByTagName("link")[0];
  stylesheet.setAttribute("href", this.dataset.styleSrc);
};

for(var i = 1; i < 4; i++) {
  var toggle = document.createElement("a")
  toggle.className("toggle");
  toggle.innerHTML = "Switch to layout " + i;
  toggle.dataset.styleSrc = "style" + i + ".css";
  styleSwitcher.appendChild(toggle);
  document.addEventListner("click", switchStyle);
};