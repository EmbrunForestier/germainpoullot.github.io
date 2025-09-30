function ShowHide(k) {
  var x = document.getElementById("Abstract" + k);
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("show_button" + k);
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("hide_button" + k);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function ScrollTo(id){
    const elem = document.getElementById(id);
    window.scrollTo({
        top: elem.offsetTop-95,
        behavior: "smooth"
    });
}