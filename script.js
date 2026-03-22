// 房间数据
const roomsData = {
    liyuan: {
        title: '遇见荔园公共空间',
        subtitle: '公共空间',
        description: '宽敞舒适的公共空间，融合自然与现代设计。庭院、茶室、休闲区，让您在旅途中找到家的温暖。',
        images: [
            'images/liyuan/liyuan1.jpg',
            'images/liyuan/liyuan2.jpg',
            'images/liyuan/liyuan3.jpg',
            'images/liyuan/liyuan4.jpg',
            'images/liyuan/liyuan5.jpg',
            'images/liyuan/liyuan6.jpg',
            'images/liyuan/liyuan7.jpg',
            'images/liyuan/liyuan8.jpg',
            'images/liyuan/liyuan9.jpg',
            'images/liyuan/liyuan10.jpg'
        ]
    },
    qiwu: {
        title: '两屋一院，其乐融融',
        subtitle: '庭院套房',
        description: '独享私密庭院，两栋独立小屋相连。适合家庭聚会、朋友出游，共享天伦之乐。',
        images: [
            'images/qiwu/qiwu1.jpg',
            'images/qiwu/qiwu2.jpg',
            'images/qiwu/qiwu3.jpg',
            'images/qiwu/qiwu4.jpg',
            'images/qiwu/qiwu5.jpg',
            'images/qiwu/qiwu6.jpg',
            'images/qiwu/qiwu7.jpg',
            'images/qiwu/qiwu8.jpg'
        ]
    },
    tingyuan: {
        title: '两房一厅，庭院套房',
        subtitle: '庭院套房',
        description: '两房一厅格局，带独立庭院。宽敞明亮，设施齐全，是家庭出游的理想选择。',
        images: [
            'images/tingyuan/tingyuan1.jpg',
            'images/tingyuan/tingyuan2.jpg',
            'images/tingyuan/tingyuan3.jpg',
            'images/tingyuan/tingyuan4.jpg',
            'images/tingyuan/tingyuan5.jpg'
        ]
    },
    lixiang: {
        title: '荔香山房',
        subtitle: '特色房型',
        description: '坐落于荔枝林间的特色山房，推窗即是果香，晨起可闻鸟鸣。独特的山地建筑风格，让您体验山林居家的惬意。',
        images: [
            'images/lixiang/lixiang1.jpg',
            'images/lixiang/lixiang2.jpg',
            'images/lixiang/lixiang3.jpg',
            'images/lixiang/lixiang4.jpg',
            'images/lixiang/lixiang5.jpg',
            'images/lixiang/lixiang6.jpg'
        ]
    },
    muwu: {
        title: '双床，池岸木屋',
        subtitle: '双床房',
        description: '临水而建的木屋，双床设计适合好友同行。清晨推窗见水，夜晚听虫鸣入眠，尽享田园诗意。',
        images: [
            'images/muwu/muwu1.jpg',
            'images/muwu/muwu2.jpg',
            'images/muwu/muwu3.jpg',
            'images/muwu/muwu4.jpg',
            'images/muwu/muwu5.jpg',
            'images/muwu/muwu6.jpg'
        ]
    },
    qigneng: {
        title: '一房一厅，晴耕农舍',
        subtitle: '一房一厅',
        description: '传统农舍改造，保留乡村风貌的同时融入现代舒适。厅房分离，空间宽敞，体验田园耕读生活。',
        images: [
            'images/qigneng/qigneng1.jpg',
            'images/qigneng/qigneng2.jpg',
            'images/qigneng/qigneng3.jpg',
            'images/qigneng/qigneng4.jpg',
            'images/qigneng/qigneng5.jpg',
            'images/qigneng/qigneng6.jpg',
            'images/qigneng/qigneng7.jpg',
            'images/qigneng/qigneng8.jpg'
        ]
    },
    xipan: {
        title: '大床房，溪畔小院',
        subtitle: '大床房',
        description: '溪水潺潺，小院幽静。大床房设计适合情侣或夫妻，在溪畔享受二人世界的浪漫时光。',
        images: [
            'images/xipan/xipan1.jpg',
            'images/xipan/xipan2.jpg',
            'images/xipan/xipan3.jpg',
            'images/xipan/xipan4.jpg',
            'images/xipan/xipan5.jpg',
            'images/xipan/xipan6.jpg'
        ]
    }
};

// 当前状态
let currentRoom = null;
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// 显示房间详情
function showRoom(roomId) {
    currentRoom = roomsData[roomId];
    if (!currentRoom) return;
    
    currentIndex = 0;
    
    // 更新标题和信息
    document.getElementById('room-title').textContent = currentRoom.title;
    document.getElementById('room-subtitle').textContent = currentRoom.subtitle;
    document.getElementById('room-description').textContent = currentRoom.description;
    
    // 生成图片
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = currentRoom.images.map((src, index) => 
        `<img src="${src}" alt="${currentRoom.title} - 图片${index + 1}" onclick="openFullscreen('${src}')" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e8f5e9%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 font-family=%22sans-serif%22 font-size=%2216%22 x=%22200%22 y=%22150%22 text-anchor=%22middle%22%3E图片加载中...%3C/text%3E%3C/svg%3E'">`
    ).join('');
    
    // 生成指示点
    const dots = document.getElementById('gallery-dots');
    dots.innerHTML = currentRoom.images.map((_, index) => 
        `<div class="dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></div>`
    ).join('');
    
    // 更新计数
    updateCounter();
    
    // 切换页面
    document.getElementById('home').classList.remove('active');
    document.getElementById('room-detail').classList.add('active');
    
    // 设置滑动监听
    setupSwipe();
}

// 返回首页
function goHome() {
    document.getElementById('room-detail').classList.remove('active');
    document.getElementById('home').classList.add('active');
    currentRoom = null;
}

// 更新计数器
function updateCounter() {
    document.getElementById('photo-count').textContent = `${currentIndex + 1}/${currentRoom.images.length}`;
    
    // 更新指示点
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    // 更新导航按钮状态
    document.querySelector('.nav-btn.prev').disabled = currentIndex === 0;
    document.querySelector('.nav-btn.next').disabled = currentIndex === currentRoom.images.length - 1;
}

// 移动到指定图片
function goToImage(index) {
    if (!currentRoom) return;
    currentIndex = Math.max(0, Math.min(index, currentRoom.images.length - 1));
    
    const gallery = document.getElementById('gallery');
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    updateCounter();
}

// 上一张
function prevImage() {
    if (currentIndex > 0) {
        goToImage(currentIndex - 1);
    }
}

// 下一张
function nextImage() {
    if (currentRoom && currentIndex < currentRoom.images.length - 1) {
        goToImage(currentIndex + 1);
    }
}

// 设置滑动监听
function setupSwipe() {
    const gallery = document.getElementById('gallery');
    
    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    gallery.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    }, { passive: true });
    
    gallery.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        
        if (diff > threshold) {
            nextImage();
        } else if (diff < -threshold) {
            prevImage();
        }
    });
}

// 全屏预览
function openFullscreen(src) {
    const fullscreen = document.getElementById('fullscreen');
    const img = document.getElementById('fullscreen-img');
    img.src = src;
    fullscreen.classList.add('active');
}

function closeFullscreen() {
    document.getElementById('fullscreen').classList.remove('active');
}

// 键盘导航
document.addEventListener('keydown', (e) => {
    if (!currentRoom) return;
    
    if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'Escape') {
        if (document.getElementById('fullscreen').classList.contains('active')) {
            closeFullscreen();
        } else {
            goHome();
        }
    }
});

// 阻止图片默认拖动行为
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
