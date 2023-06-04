//Icon hover NEM JÓ
/*var icons = document.getElementsByClassName('.fa-brands');
for(i = 0; i < icons.length;i++) {
  icons[i].addEventListener('mouseenter', function() {
    console.log(e.target)
    e.target.classList.add('hovered');
  });
};*/



//Tablinks about: with html -onclick + for of ciklus
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab (tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

};

//Tablinks music: with addEventListener - forEach
const tabMusicLinks = document.querySelectorAll(".tab-music-links");
const tabMusicSections = document.querySelectorAll(".tab-music-contents");

const handleButtonClickMusicSections = (e) => {
  const tabMusicTargetSection = e.target.getAttribute("data-section");
  const musicSection = document.querySelector(tabMusicTargetSection);
 
  tabMusicSections.forEach((s) => s.classList.remove("active-tab"));
  tabMusicLinks.forEach((b) => b.classList.remove("active-link"));
  e.target.classList.add("active-link");
  musicSection.classList.add("active-tab");
};

tabMusicLinks.forEach((tab) => {
  tab.addEventListener("click", handleButtonClickMusicSections);
}); 
