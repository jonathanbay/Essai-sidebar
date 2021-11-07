const openMenu = document.querySelector("#btmenu");
const closeMenu = document.querySelector("#btclose");
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector("#container");



openMenu.addEventListener('click', () => {
    console.log("ok");
    openMenu.style.opacity="0";
    sidebar.style.left=("0px");
    container.style.opacity="0.3";
});

closeMenu.addEventListener("click", ()=> {
    console.log("ok");
    sidebar.style.left=("-300px");
    openMenu.style.opacity="1";
    container.style.opacity="1";
})

