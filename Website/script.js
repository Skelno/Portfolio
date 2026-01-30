// var body = document.getElementById("body");
// var header = document.getElementById("header");
// var welcome_text = document.getElementById("welcome-text");
// var header_texts = document.getElementsByClassName("nav-text");
var projectImages = document.getElementsByClassName("ProjectImage");
// var project_infos = []

document.addEventListener("DOMContentLoaded", () => {
    for (let index = 0; index < projectImages.length; index++) {
        const element = projectImages[index];
        var videoElem = projectImages[index].lastElementChild;
        element.addEventListener("mouseover", (event) => {
            // videoElem.load(); //If video should restart
            videoElem.play(); 
        })
        element.addEventListener("mouseleave", (event) => {
            videoElem.pause();
        })
        
        // project_infos.push(element.parentElement.lastElementChild)
    }
});

// document.addEventListener("scroll", (event) => {
//     let scroll_y = window.scrollY
//     let body_style = window.getComputedStyle(document.body)

//     let bg_color
//     let nav_color
//     if (scroll_y == 0) {
//         bg_color = body_style.getPropertyValue("--background-color")
//         nav_color = body_style.getPropertyValue("--primary-font-color")
//         welcome_text.style.opacity = 1
//     }
//     else {
//         bg_color = body_style.getPropertyValue("--primary-color")
//         nav_color = body_style.getPropertyValue("--secondary-font-color")
//         welcome_text.style.opacity = 0
//     }

//     header.style.backgroundColor = bg_color

//     for (let index = 0; index < header_texts.length; index++) {
//         const element = header_texts[index]
//         element.style.color = nav_color
//     }
// })