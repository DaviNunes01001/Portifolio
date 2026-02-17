const bntntema = document.getElementById("bntema");

bntntema.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    bntntema.src = "assets/svg/modo-escuro(1).png";
  } else {
    bntntema.src = "assets/svg/modo-claro.png";
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");

});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    bntntema.src = "assets/svg/modo-escuro(1).png";
  } else {
    bntntema.src = "assets/svg/modo-claro.png";
  }
});
