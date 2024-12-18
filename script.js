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

function button_react(button_name) {
    document.querySelectorAll(button_name).forEach(function (element) {
        element.style.transition = 'all 0.5s ease';
        element.addEventListener('mouseenter', function (e) {
            element.style.backgroundColor = '#1d3f54';
            element.style.color = '#e5c409';
            element.style.borderRadius = '5px';
        });
        element.addEventListener('mouseleave', function (e) {
            element.style.backgroundColor = '#e5c409';
            element.style.color = '#1d3f54';
            element.style.borderRadius = '5px';
        });
    });
}


document.querySelectorAll('.type-writer').forEach(function (element) {
    element.addEventListener('mouseenter', function (e) {
        element.style.animation = 'none'; // Reset the animation
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'typewriter 2s steps(22) 1s 1 normal both, blink .75s step-end infinite';
    });
});

document.querySelectorAll('.cards').forEach(function (element) {
    element.style.transition = 'all 1s ease';
    element.addEventListener('mouseenter', function (e) {
        element.style.backgroundColor = 'rgba(255,255,255,0.8)';
    });
    element.addEventListener('mouseleave', function (e) {
        element.style.backgroundColor = 'rgba(255,255,255,0.4)';
    });
});

// get the absolute size of .content class and log it to the console
var content = document.querySelector('.content');
var content_rect = content.getBoundingClientRect();
console.log(content_rect);


button_react('.cite-btn');
button_react('.read-btn');
dropdown_ctrl('.dropdown-menu');