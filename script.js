const participants = ['Maggie', 'Jane', 'Yvonne', 'Swee Peng', 'Amy', 'Pei Pei', 'Mei Yi', 'Yi', 'Mei'];
let drawnParticipants = []; // 记录已抽选的人

function nextPage(page) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    
    // 显示当前页面
    if (page === 1) {
        document.getElementById('page2').style.display = 'block';
    } else if (page === 2) {
        document.getElementById('page3').style.display = 'block';
    }
}

function drawCard() {
    const selectedName = document.getElementById('nameSelection').value;
    let availableParticipants = participants.filter(name => !drawnParticipants.includes(name) && name !== selectedName);
    
    if (availableParticipants.length === 0) {
        document.getElementById('drawResult').innerHTML = "所有人都已抽选完毕。";
        return;
    }
    
    // 随机抽选
    const randomIndex = Math.floor(Math.random() * availableParticipants.length);
    const drawnName = availableParticipants[randomIndex];
    
    // 记录抽选情况
    drawnParticipants.push(drawnName);
    document.getElementById('drawResult').innerHTML = `${selectedName} 抽中了 ${drawnName}`;
    document.getElementById('next2').style.display = 'inline-block';

    // 记录抽选时间
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    document.getElementById('time').innerHTML = `抽选时间：${formattedDate}`;

    // 更新总结页
    document.getElementById('summary').innerHTML = `${selectedName} -> ${drawnName} -> ${formattedDate}`;
}

// 页面加载时显示选择名字页面
nextPage(1);
