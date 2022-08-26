function displaynone(value, imgg){
    var y = document.getElementById(imgg);
    var x = document.getElementById(value);
    if (x.style.visibility === "collapse") {
        y.src = "asset/img/arrowu.svg";
        x.style.visibility = "visible";
        x.style.opacity = 1;
        x.style.transition = "visibility 0s linear 0s, opacity 500ms";

    } else {
        y.src = "asset/img/arrowd.svg";
        x.style.visibility = "collapse";
        x.style.opacity = 0;
        x.style.transition = "visibility 0s linear 500ms, opacity 500ms";
    }
  }
