const burger = document.querySelector("#burger");
const list = document.querySelector("ul");


function shownav() {
    const burger = document.querySelector("#burger");
    const list = document.querySelector("ul"); 

    burger.addEventListener("click", () => {
        list.classList.toggle("burgeractive");

        let burgerchild = burger.firstElementChild;
        if (list.classList.contains("burgeractive")) {
            burgerchild.classList.replace('fa-bars', 'fa-times');
        } else {
            burgerchild.classList.replace("fa-times", "fa-bars"); 
        }
    });
}

gsap.from("#card",{
    x:0,
    duration:1,
   
    opacity:0,
    });
    gsap.to("#card",{
    x:60,
    duration:2,
    delay:2,
    opacity:1,
    });
    gsap.from(".aboutusdiv",{
        x:-700,
        duration:7,
       
    });
    gsap.to(".aboutusdiv",{
        x:80,
        duration:7,
       
    });
   