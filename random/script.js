document.getElementById('generateButton').addEventListener('click', function() {
    const randomNumberElement = document.getElementById('randomNumber');
    
    // 清除之前的动画类
    randomNumberElement.classList.remove('bounce');
    
    // 触发重绘
    void randomNumberElement.offsetWidth;
    
    // 生成随机数
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // 添加动画类
    randomNumberElement.classList.add('bounce');
    
    // 更新显示的随机数
    randomNumberElement.textContent = randomNumber;
});
/* 针对不支持backdrop-filter的浏览器 */
@supports not (backdrop-filter: blur(12px)) {
    .glass-container {
        background: rgba(255, 255, 255, 0.9);
    }
    .random-number {
        background: rgba(255, 255, 255, 0.7);
    }
}