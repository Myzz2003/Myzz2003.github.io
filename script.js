// 此处可以添加任何交互代码或动画效果，例如点击按钮后的行为
document.querySelector(".hire-me-btn").addEventListener("click", function() {
    alert("Thank you for your interest!");
});

// script.js
// 获取所有下拉菜单中的链接
const links = Array.from(document.querySelectorAll('.nav-links a, .dropdown-menu a'));

// 为每个链接添加点击事件监听器
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // 阻止默认的链接跳转行为
        // event.preventDefault();

        // 获取链接的href属性值
        const contentId = this.getAttribute('href').substring(1);

        // 根据href值显示对应的内容
        loadContent(contentId);
        // getContentBySection(contentId)
    });
});

// 加载和显示内容的函数
function loadContent(contentId) {
    // 假设您有一个函数或方法来获取或生成对应ID的内容
    const content = getContentBySection(contentId);
    const content_title = getContentTitleBySection(contentId);

    // 将内容显示在页面上
    if (content === 'wrong') {
        return;
    }
    else{
        document.getElementById('topic_content').innerHTML = content;
        document.getElementById('topic_title').innerHTML = content_title;
    }
}

// 示例：根据ID获取内容的函数
function getContentBySection(sectionId) {
    // 这里应该是获取或生成内容的逻辑
    // 例如，从服务器获取数据或从本地JSON对象中读取
    if (sectionId === 'values' ||  sectionId == '/index.html#values') {
        return '<div class="topic-content"><br><h4>Hello,</h4><br>I am a Communications Engineering student from Shenzhen, a city renowned for its innovation and technology, reflecting the spirit of our times. My academic journey is not just about acquiring knowledge; it\'s about pushing the boundaries of what\'s possible. I am driven by an intrinsic motivation to excel, a hunger for knowledge, and a boldness to turn imagination into reality.<br><br>Inspired by the likes of Shuji Nakamura, the 2014 Nobel laureate in Physics for his invention of efficient blue light-emitting diodes, I am committed to the fusion of engineering prowess and scientific curiosity. Nakamura\'s work is a testament to how engineering practice can lead to groundbreaking scientific achievements, a philosophy I wholeheartedly embrace.<br>My studies encompass a broad spectrum of emerging technologies, from 5G and beyond communications to machine learning and the Internet of Things. I am particularly interested in how these technologies can be harnessed to create sustainable and energy-efficient solutions, much like the advancements in LED technology that have revolutionized lighting and display technologies.<br>I am not just a student; I am a practitioner, a thinker, and a visionary. I am here to learn, to innovate, and to contribute meaningfully to the field of communications engineering. My goal is to leave a mark, to create something that resonates with the world, just as the blue LEDs have illuminated our lives.<br><br> Welcome to my homepage, where you will find the story of my journey, my contributions, and my aspirations as an engineer and a scientist in the making.<br><br>Best regards,<br><br><h4>Yingzhe Mao</h4></div>';
    }
    else if (sectionId === 'home') {
        return '<div class="topic-content">Still working hard to earn my bachelor\'s degree...</div>';
    }
    else if (sectionId === 'con#email') {
        return '<div class="topic-content">maoyzh7@mail2.sysu.edu.cn<br>myzz2003z@gmail.com</div>'
    }
    else if (sectionId === 'con#wechat') {
        return '<div class="topic-content">Myzz_2003</div>'
    }
    return 'wrong';
}

function getContentTitleBySection(sectionId) {
    if (sectionId === 'values'){
        return 'Personal Values'
    }
    else if (sectionId === 'home'){
        return 'Status';
    }
    else if (sectionId === 'con#email'){
        return 'E-Mail'
    }
    else if (sectionId === 'con#wechat'){
        return 'WeChat'
    }
}