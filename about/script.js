document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.style.transition = 'all 1s ease';
    element.addEventListener('mouseenter', function (e) {
        element.style.height = 'auto';
        element.style.overflow = 'visible';
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        element.style.padding = '10px';
        element.style.borderRadius = '15px';
        element.style.border = '1px solid #1d3f54';
    });
    element.addEventListener('mouseleave', function (e) {
        element.style.height = '50px';
        element.style.overflow = 'hidden';
        element.style.backgroundColor = '#1d3f54';
        element.style.padding = '0';
        element.style.borderRadius = '0';
        element.style.border = 'none';
    });
});

const pageTitle = document.title.toLowerCase();
var captionstr = "My " + pageTitle + ".";
var caption = captionstr.split("");

function typeWriter() {
    if (caption.length > 0) {
        document.getElementById("caption").innerHTML += caption.shift();
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener('load', function () {
    this.document.getElementById("caption").innerHTML = "";
    typeWriter();
});

document.querySelectorAll('.type-writer').forEach(function (element) {
    element.addEventListener('mouseenter', function (e) {
        document.getElementById("caption").innerHTML = "";
        caption = captionstr.split(""); // Reset the caption array
        typeWriter();
    });
});

document.querySelectorAll('.cards-s').forEach(function (element) {
    element.style.transition = 'all 0.7s ease';
    element.addEventListener('mouseenter', function (e) {
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        element.style.padding = '10px';
    });
    element.addEventListener('mouseleave', function (e) {
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        element.style.padding = '0';
    });
});

document.querySelectorAll('.cv_rp_btn').forEach(function (element) {
    element.style.transition = 'all 0.5s ease';
    element.addEventListener('mouseleave', function (e) {
        element.style.backgroundColor = 'white';
        element.style.color = '#1d3f54';
        element.style.borderRadius = '5px';
    });
    element.addEventListener('mouseenter', function (e) {
        element.style.backgroundColor = '#e5c409';
        element.style.color = '#1d3f54';
        element.style.borderRadius = '15px';
    });
});

function downloadCV() {
    alert("No PDF available for download. Please contact me for a copy of my CV.");
}