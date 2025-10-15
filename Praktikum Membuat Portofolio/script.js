function showMessage() {
    alert("Hello, welcome to my profile! Scroll down if you wanna know more about me.");
}

var i = 0;
var txt = 'Heyyo! This is Maggie, Mag to the Gie';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
};
