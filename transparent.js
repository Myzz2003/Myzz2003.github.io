function makeTransparent(imageSrc) {
    // 创建一个新的图像对象
    const img = new Image();
    img.onload = function() {
      // 创建canvas元素
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // 设置canvas大小与图片大小一致
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 将图片绘制到canvas上
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      // 获取图片的像素数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // 遍历每个像素，将白色背景转换为透明
      for (let i = 0; i < data.length; i += 4) {
        // 检查是否为白色背景（这里假设白色为RGB(255,255,255)）
        if (data[i] >= 235 && data[i + 1] >= 235 && data[i + 2] >= 235) {
          // 将白色设置为完全透明
          data[i + 3] = 0; // alpha通道设置为0
        }
      }
      
      // 将修改后的像素数据放回canvas
      ctx.putImageData(imageData, 0, 0);
      
      // 将canvas转换为新的图片URL
      const transparentImgURL = canvas.toDataURL('image/png');
      
      // 将新的图片URL用于HTML元素，例如img标签
      document.getElementById('outputImage').src = transparentImgURL;
    };
    img.src = imageSrc; // 设置图片源
  }
  
// 使用函数
document.addEventListener('DOMContentLoaded', function() {
makeTransparent('../个人照.jpg');
});