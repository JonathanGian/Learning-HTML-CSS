const backToTop = this.document.querySelector("#backtopBtn");
const navList = document.querySelector("nav ul")
const mobButton = document.querySelector(".mobile")

function toggleMenu() {
    navList.classList.toggle("responsive")
}
mobButton.addEventListener("click",toggleMenu)

window.addEventListener('scroll', function() {
    const header = document.querySelector("nav");
    
    header.classList.toggle('scrolled', window.scrollY > 50);
    backToTop.classList.toggle("hidden",window.scrollY < 50);
});

backToTop.addEventListener("click",() => {
    document.body.scrollTop= 0;
    document.documentElement.scrollTop = 0;
    
    })


console.log(backToTop)
