document.getElementById('generateButton').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value) || 0;
    const max = parseInt(document.getElementById('max').value) || 100;
    const excludeInput = document.getElementById('exclude').value;
    const errorElement = document.getElementById('error');
    const randomNumberElement = document.getElementById('randomNumber');

    // 清空错误信息和动画
    errorElement.textContent = '';
    randomNumberElement.classList.remove('bounce', 'shake');

    // 输入验证
    if (min >= max) {
        showError('最大值必须大于最小值！');
        return;
    }

    // 解析排除数字
    const exclude = excludeInput.split(/[,\s]+/g)
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num) && num >= min && num <= max);

    // 检查可用数字范围
    const totalNumbers = max - min + 1;
    if (exclude.length >= totalNumbers) {
        showError('没有可用的随机数字！');
        return;
    }

    // 生成随机数
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclude.includes(randomNumber));

    // 执行动画
    randomNumberElement.classList.add('bounce');
    randomNumberElement.textContent = randomNumber;

    function showError(message) {
        errorElement.textContent = message;
        randomNumberElement.classList.add('shake');
    }
});