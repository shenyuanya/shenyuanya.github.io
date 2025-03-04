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