// script.js
document.getElementById('generateButton').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value) || 0;
    const max = parseInt(document.getElementById('max').value) || 100;
    const excludeInput = document.getElementById('exclude').value;
    const errorElement = document.getElementById('error');
    const randomNumberElement = document.getElementById('randomNumber');
    
    // 重置状态
    errorElement.textContent = '';
    randomNumberElement.classList.remove('bounce', 'shake');
    this.disabled = true;

    // 强制重绘
    void randomNumberElement.offsetWidth;

    // 输入验证
    let isValid = true;
    if (min >= max) {
        showError('最大值必须大于最小值！');
        isValid = false;
    }

    // 解析排除数字
    const exclude = excludeInput.split(/[,\s]+/g)
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num) && num >= min && num <= max);

    // 检查可用数字
    const availableNumbers = max - min + 1 - exclude.length;
    if (availableNumbers <= 0) {
        showError('没有可用的随机数字！');
        isValid = false;
    }

    if (!isValid) return;

    // 生成随机数（带加载效果）
    randomNumberElement.textContent = '?';
    setTimeout(() => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (exclude.includes(randomNumber));

        randomNumberElement.textContent = randomNumber;
        randomNumberElement.classList.add('bounce');
        this.disabled = false;
    }, 600);

    function showError(message) {
        errorElement.textContent = message;
        randomNumberElement.classList.add('shake');
        this.disabled = false;
    }
});
// script.js 添加移动端事件支持
document.addEventListener('DOMContentLoaded', function() {
    // 阻止双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 阻止手势缩放
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
});

// 修改原有生成器代码，添加触摸反馈
document.getElementById('generateButton').addEventListener('touchstart', function() {
    this.classList.add('touch-active');
});
document.getElementById('generateButton').addEventListener('touchend', function() {
    this.classList.remove('touch-active');
});