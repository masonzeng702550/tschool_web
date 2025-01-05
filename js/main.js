// 選單控制
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    let isDropdownOpen = false;
    let timeoutId;

    // 點擊選單時切換下拉內容
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        if (isDropdownOpen) {
            dropdown.classList.add('active');
        } else {
            dropdown.classList.remove('active');
        }
    });

    // 滑鼠進入下拉選單時
    dropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        dropdown.classList.add('active');
        isDropdownOpen = true;
    });

    // 滑鼠離開下拉選單時
    dropdown.addEventListener('mouseleave', function() {
        timeoutId = setTimeout(() => {
            if (!dropdownContent.matches(':hover')) {
                dropdown.classList.remove('active');
                isDropdownOpen = false;
            }
        }, 100);
    });

    // 滑鼠進入下拉內容時
    dropdownContent.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
    });

    // 滑鼠離開下拉內容時
    dropdownContent.addEventListener('mouseleave', function() {
        dropdown.classList.remove('active');
        isDropdownOpen = false;
    });

    // 點擊頁面其他地方時關閉下拉選單
    document.addEventListener('click', function() {
        dropdown.classList.remove('active');
        isDropdownOpen = false;
    });
});

// 幻燈片控制
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track || !slides.length || !prevBtn || !nextBtn) return;

    const slideWidth = 840; // 800px slide width + 40px gap
    let position = 0;

    function updateSlidePosition() {
        track.style.transform = `translate(${position}px, -50%)`;
    }

    prevBtn.addEventListener('click', () => {
        position += slideWidth;
        if (position > 0) {
            position = -(slideWidth * (slides.length - 1));
        }
        track.style.transition = 'transform 0.5s ease-in-out';
        updateSlidePosition();
    });

    nextBtn.addEventListener('click', () => {
        position -= slideWidth;
        if (position < -(slideWidth * (slides.length - 1))) {
            position = 0;
        }
        track.style.transition = 'transform 0.5s ease-in-out';
        updateSlidePosition();
    });

    // 暫停/恢復自動播放
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
});

// 滾動效果
document.querySelector('.learn-more-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    const arrow = document.querySelector('.arrow-down');
    
    if (arrow) {
        arrow.classList.add('visible');
        setTimeout(() => {
            arrow.classList.remove('visible');
        }, 2000);
    }
    
    const content = document.querySelector('#content');
    if (content) {
        content.scrollIntoView({ behavior: 'smooth' });
    }
});

// 監聽滾動事件來控制選單的顯示
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
