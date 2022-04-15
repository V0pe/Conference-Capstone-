const Menubtn = document.getElementById("menubar");


const style = document.createElement('style');
style.innerHTML = `
header .upper-bar {
    display:none;
}

header {
    display: none;
    top:0;
    left:0;
    width: 100%;
    height:100vh;
    background-color: white;
}

nav {
    top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5vw 12vw;
    gap: 5vh;
    overflow: hidden;
    position: relative;
}

nav .logo-menu {
    display: flex;
    box-shadow: 2px var(--secondary);
    border:2px solid white;
    align-items: center;
}

nav .logo-menu img {
    height: 7vh;
    display: block;
}

nav .logo-menu h3 {
    font-size: 3vw;
}

nav ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
}

nav ul li {
    margin-bottom: 4vw;
}

nav .campaign {
    color:var(--primary);
    border: 5px solid var(--primary);
    padding: 0.5vw 1vw;
    font-size: 3vw;
}

.menu-bar {
    display:block;
    top: -98vh;
    background-image: url(images/cancel.png);
    background-repeat: no-repeat;
    height: 40px;
    position: relative;
    background-position: right;
    cursor:pointer;
}

`

const closebtn = document.querySelector('.menu-bar');

function closeMenu () {
    document.querySelector('header').classList.remove('menu-toggle');
    document.body.style.overflow = 'scroll';
    document.querySelector('.menu-bar').style.display = 'none';
}


function openMenu (){
document.head.appendChild(style);

document.querySelector('header').classList.add('menu-toggle');
document.body.style.overflow = 'hidden';
document.querySelector('.menu-bar').style.display = 'block';

}
Menubtn.addEventListener("click", openMenu);
closebtn.addEventListener("click", closeMenu);

