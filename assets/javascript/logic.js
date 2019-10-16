var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Just testing some resizing code for potential future use
// function resize() {
//     let screenSize = screen.width;

//     var buttons = document.querySelectorAll('button');

//     for (let i = 0; i < buttons.length; i++) {
//         let thisButton = buttons[i];
//         console.log(thisButton.textContent.length);
//         if (screen.width < 435 && thisButton.textContent.length > 40) {
//             thisButton.setAttribute("style", "font-size: 10px")
//         }
//     }
// }

// resize(); //make sure the function runs on page load

// window.onresize = resize; //reruns the function anytime the window is resized



