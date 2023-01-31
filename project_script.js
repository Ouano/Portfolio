const Java = document.getElementById("card6");
const Kotlin = document.getElementById("card7")


function JavaProject() {
    var img = document.getElementById("showProject");
    var img2 = document.getElementById("showProject2");
    img.src = "./img/profile.jpg";
    img2.src = "./img/aboutme.jpg";
    document.body.appendChild(img);
    document.body.appendChild(img2);
}

function KotlinProject() {
    var img = document.getElementById("showProject");
    var img2 = document.getElementById("showProject2");
    img.src = "./img/aboutme.jpg";
    img2.src = "./img/profile.jpg";
    document.body.appendChild(img);
    document.body.appendChild(img2);
}

Java.addEventListener("click",JavaProject);
Kotlin.addEventListener("click",KotlinProject);