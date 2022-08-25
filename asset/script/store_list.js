function displaynone(value, imgg){
    var y = document.getElementById(imgg);
    var x = document.getElementById(value);
    console.log(imgg);
    console.log(x.style);
    if (x.style.visibility === "collapse") {
        y.src = "asset/img/arrowu.svg";
        x.style.visibility = "visible";
        x.style.opacity = 1;
        x.style.transition = "visibility 0s linear 0s, opacity 700ms";

    } else {
        y.src = "asset/img/arrowd.svg";
        x.style.visibility = "collapse";
        x.style.opacity = 0;
        x.style.transition = "visibility 0s linear 700ms, opacity 700ms";
    }
  }
