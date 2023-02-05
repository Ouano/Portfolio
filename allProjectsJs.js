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



  const burgerMenu = document.querySelector("#navButton-toggle");
  const menuContainer = document.querySelector('.menu-container');
  const menuList = document.querySelector('.menu-list');
  const content = document.querySelector(".content");
  
  /* take the width out the width if you want it to have the drop down animation to the right side */
  // let originalTop = content.style.marginTop;
  
  burgerMenu.addEventListener('click', () => {
    if (menuContainer.style.height === '' || menuContainer.style.height === '0px') {
      const height = menuList.scrollHeight + 'px';
      menuContainer.style.height = height;
      menuList.style.transform = 'scaleY(1)';
      // content.style.marginTop = "100px";
    } else {
      menuContainer.style.height = '0';
      menuList.style.transform = 'scaleY(0)';
      // content.style.marginTop = `${menuContainer.offsetHeight}px`;
      // content.style.marginTop = originalTop;
    }
  
  
  });