var typed = new Typed(".typing", {
  strings: ["", "Tech-Geek", "Chemical Engineer"],
  typeSpeed: 100,
  BackSpeed: 10,
  loop: true,
});
const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalnav = navlist.length,
  allselect = document.querySelectorAll(".section"),
  totalselect = allselect.length;
for (let i = 0; i < totalnav; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalselect; i++) {
      allselect[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalnav; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        allselect[j].classList.add("back-section");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showsection(this);
  });
}
function showsection(ele) {
  for (let i = 0; i < totalselect; i++) {
    allselect[i].classList.remove("active");
  }
  const target = ele.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
const navbtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navbtn.addEventListener("click", () => {
  asidebtn();
});
function asidebtn() {
  aside.classList.toggle("open");
  navbtn.classList.toggle("open");
  for (let i = 0; i < totalselect; i++) {
    allselect[i].classList.toggle("open");
  }
}
