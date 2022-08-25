function displaynone(value, imgg){
    var y = document.getElementById(imgg);
    var x = document.getElementById(value);
    console.log(imgg);
    console.log(x.style);
    if (x.style.visibility === "collapse") {
        y.src = "arrowu.svg";
        x.style.visibility = "visible";

    } else {
        y.src = "arrowd.svg";
      x.style.visibility = "collapse";
    }
  }
