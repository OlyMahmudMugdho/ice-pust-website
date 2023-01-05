let links = document.querySelectorAll(".u > .links");
let icon = document.getElementsByClassName("fa")[0].classList;
let is_hidden = true;

const toggle = () => {
    if (is_hidden == true) {
        icon.remove("fa-bars");
        icon.add("fa-minus");
        for (let index = 0; index < links.length; index++) {
            links[index].style.display = "initial";
        }
        is_hidden = false;
        return is_hidden;
    }
    else {
        icon.remove("fa-minus");
        icon.add("fa-bars");
        for (let index = 0; index < links.length; index++) {
            links[index].style.display = "none";
        }
        is_hidden = true;
        return is_hidden;
    }
}
