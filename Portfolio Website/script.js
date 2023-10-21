const burger = document.querySelector("#burger");
const list = document.querySelector("ul");


function shownav() {
    const burger = document.querySelector("#burger");
    const list = document.querySelector("ul"); // Assuming you have a <ul> element in your HTML

    burger.addEventListener("click", () => {
        list.classList.toggle("burgeractive");

        let burgerchild = burger.firstElementChild;
        if (list.classList.contains("burgeractive")) {
            burgerchild.classList.replace('fa-bars', 'fa-times'); // Corrected class name
        } else {
            burgerchild.classList.replace("fa-times", "fa-bars"); // Corrected class name
        }
    });
}