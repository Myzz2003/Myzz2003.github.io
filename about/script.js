function dropdown_animation(element, event) {
    if (event === 'enter') {
        element.style.height = 'auto';
        element.style.overflow = 'visible';
        element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        element.style.padding = '10px';
        element.style.borderRadius = '15px';
        element.style.border = '1px solid #1d3f54';
    }
    else if (event === 'leave') {
        element.style.height = '50px';
        element.style.overflow = 'hidden';
        element.style.backgroundColor = '#1d3f54';
        element.style.padding = '0';
        element.style.borderRadius = '0';
        element.style.border = 'none';
    }
    else {
        console.error('Invalid event');
    }
}

function dropdown_ctrl(dropdown_menu) {
    document.querySelectorAll(dropdown_menu).forEach(function (element) {
        element.style.transition = 'all 1s ease';
        element.addEventListener('mouseenter', function (e) {
            dropdown_animation(element, 'enter');
        });
        element.addEventListener('click', function (e) {
            dropdown_animation(element, 'enter');
        });
        element.addEventListener('mouseleave', function (e) {
            dropdown_animation(element, 'leave');
        });
    });

}

function type_writer(typewriter) {
    const pageTitle = document.title.toLowerCase();
    var captionstr = "My " + pageTitle + ".";
    var caption = captionstr.split("");

    function typeWriter_animation() {
        if (caption.length > 0) {
            document.getElementById("caption").innerHTML += caption.shift();
            setTimeout(typeWriter_animation, 100);
        }
    }

    window.addEventListener('load', function () {
        this.document.getElementById("caption").innerHTML = "";
        typeWriter_animation();
    });

    document.querySelectorAll(typewriter).forEach(function (element) {
        element.addEventListener('mouseenter', function (e) {
            document.getElementById("caption").innerHTML = "";
            caption = captionstr.split(""); // Reset the caption array
            typeWriter_animation();
        });
    });
}

function card_react(cards) {
    document.querySelectorAll(cards).forEach(function (element) {
        element.style.transition = 'all 0.7s ease';
        var is_header = element.querySelector('h2') !== null;
        if (is_header) {
            var headers = element.querySelectorAll('h2');
            headers.forEach(function (header) {
                header.style.transition = 'all 0.7s ease';
            });
        }
        var clicked = false;
        var entered = false;
        element.addEventListener('click', function (e) {
            if (clicked) {
                clicked = false;
                element.style.border = '2px solid white';
            }
            else {
                clicked = true;
                element.style.border = '3px double rgb(227, 69, 26)';
            }
        });
        var react_enter = function (e) {
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            element.style.padding = '10px';
            if (!clicked) {
                element.style.border = '2px solid white';
            }
            if (is_header) {
                headers.forEach(function (header) {
                    header.style.color = 'rgb(227, 69, 26)';
                    header.style.fontWeight = 'bolder';
                });
            }
            entered = true;
        }
        var react_leave = function (e) {
            if (!clicked)  {
                element.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                element.style.padding = '0';
                element.style.border = 'none';
                if (is_header) {
                    headers.forEach(function (header) {
                        header.style.color = '#1d3f54';
                        header.style.fontWeight = 'bold';
                    });
                }
            }
        }
        element.addEventListener('mouseenter', react_enter);
        element.addEventListener('mouseleave', react_leave);
    });
}

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

function downloadRP() {
    alert("No PDF available for download. Please contact me for a copy of my Research Proposal.");
}

dropdown_ctrl('.dropdown-menu');
type_writer('.type-writer');
card_react('.cards');
card_react('.cards-s');