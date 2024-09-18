// 初始化画布和音频
const canvas = document.getElementById('dynamicCanvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('ambientAudio');

// 根据情绪更改画面和音频
function setEmotion(emotion) {
    if (emotion === 'calm') {
        drawCalmScene();
        audio.src = 'calm-sound.mp3';
    } else if (emotion === 'anxious') {
        drawAnxiousScene();
        audio.src = 'anxious-sound.mp3';
    } else if (emotion === 'happy') {
        drawHappyScene();
        audio.src = 'happy-sound.mp3';
    } else if (emotion === 'sad') {
        drawSadScene();
        audio.src = 'sad-sound.mp3';
    }
    audio.play();
}

// 绘制平静场景
function drawCalmScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 蓝色天空
}

// 焦虑场景
function drawAnxiousScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FF4500';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 橙红色背景
}

// 开心场景
function drawHappyScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 金黄色背景
}

// 难过场景
function drawSadScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#4682B4';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 深蓝色背景
}

// 控制音频播放/暂停
function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
