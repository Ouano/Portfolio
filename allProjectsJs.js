var images = [
    "./img/aboutme.jpg",
    "./img/profile.jpg",
    "./img/java.png"
];

var currentImage = 0;
var i = 0;


document.getElementById("card-1").addEventListener("click", function() {
    var target = document.getElementById("secContainer").offsetTop;
    var target2 = document.getElementById("secContainer");
    var image = document.getElementById("image");
    target2.style.visibility = "visible";
    document.body.style.overflow = "auto";
    var start = window.pageYOffset;
    var distance = target - start;
    var duration = 1000;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var ease =  easeInOut(timeElapsed, start, distance, duration);
        window.scroll(0, ease);
        while(i <= images.length) {
            image.src = images[currentImage];
            currentImage = (currentImage +1) % images.length;
            i++;
        }
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOut(a,b,c,d) {
        a /= d/2;
        if (a < 1) return c/2*a*a + b;
        a--;
        return -c/2 * (a*(a-2)-1) + b;
    };

    requestAnimationFrame(animation);
  });