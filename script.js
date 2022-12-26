var timer;
var ele = document.getElementById("timer");

(function () {
  var sec = 0;
  timer = setInterval(() => {
    ele.innerHTML = "00:00:" + sec;
    sec++;
  }, 1000);
})();

function expandLeft() {
  let Menu = document.getElementById("firstcolumn");
  if (Menu.classList.contains("expand")) {
    Menu.classList.remove("expand");
    Menu.classList.add("reduce");
  } else {
    Menu.classList.remove("reduce");
    Menu.classList.add("expand");
  }
}

function yellowClick() {
  let colorMenu = document.getElementById("Yellow");
  if (colorMenu.classList.contains("active")) {
    colorMenu.classList.remove("active");
  } else {
    colorMenu.classList.add("active");
  }
}
