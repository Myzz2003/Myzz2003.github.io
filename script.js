// 此处可以添加任何交互代码或动画效果，例如点击按钮后的行为
document.querySelector(".hire-me-btn").addEventListener("click", function() {
    alert("Thank you for your interest!");
});

// script.js
// 获取所有下拉菜单中的链接
const links = document.querySelectorAll('.dropdown-menu a');

// 为每个链接添加点击事件监听器
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // 阻止默认的链接跳转行为
        event.preventDefault();

        // 获取链接的href属性值
        const contentId = this.getAttribute('href').substring(1);

        // 根据href值显示对应的内容
        loadContent(contentId);
        // getContentBySection(contentId)
    });
});

// 加载和显示内容的函数
async function loadContent(contentId) {
    try {
        // 假设您有一个函数或方法来获取或生成对应ID的内容
        const content = await getContentBySection(contentId);

        // 将内容显示在页面上
        document.getElementById('content').innerHTML = content;
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('main_description').innerHTML = '<p>Error loading the content.</p>';
    }
}

// 示例：根据ID获取内容的函数
async function getContentBySection(sectionId) {
    // 这里应该是获取或生成内容的逻辑
    // 例如，从服务器获取数据或从本地JSON对象中读取
    if (sectionId === 'values') {
        const response = await fetch('my_values.html');
        if (!response.ok) {
            throw new Error('Failed to load my_values.html');
        }
        const html = await response.text();
        return html;
    }
    return `<div><h2>Section Not Found</h2><p>The section you are looking for does not exist.</p></div>`;
}