window.onload = function(){

var video = document.getElementById('teaser');
var wrapper = document.getElementById('videoWrapper');
var image = document.getElementById('backgroundImage');

video.addEventListener("ended", function() {
    video.style.display = "none";
    image.style.display = "inline";
    }, false);


}