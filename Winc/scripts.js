function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
  }