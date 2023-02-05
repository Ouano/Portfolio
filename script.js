// const toggleButton = document.querySelector("#navButton-toggle");
// const nav = document.querySelector("#navMenu li");

// toggleButton.addEventListener("click", function () {
//     for (let i = 0; i < nav.length; i++) {
//         nav[i].style.display = nav[i].style.display === "block" ? "none" : "block";
//         console.log("hey there");
//     }
// });

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
