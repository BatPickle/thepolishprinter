const box1Btn = document.getElementById("box1");
const box2Btn = document.getElementById("box2");
const box3Btn = document.getElementById("box3");

box1Btn.addEventListener("click", function(){
    window.location.href = "upcoming/upcoming.html";
});

box2Btn.addEventListener("click", function(){
    window.location.href = "gallery/gallery.html";
});

box3Btn.addEventListener("click", function(){
    window.location.href = "about/about.html";
});