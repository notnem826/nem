// ============================================================
// script.js – Hoàn chỉnh, fix lỗi, thêm hardstyle, xoay avatar
// ============================================================

// 1. Quotes Database (giữ nguyên 51 câu)
const quoteDatabase = [ /* ... như cũ ... */ ];

// 2. Lang Data (giữ nguyên)
const langData = { /* ... như cũ ... */ };

let currentLang = 'vi';
let currentQuoteIndex = 0;

// ============================================================
// 3. Hàm setLanguage (fix event)
// ============================================================
function setLanguage(lang, btn) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const data = langData[lang];
    renderFloatingName(data.name);
    document.getElementById('bioText').innerHTML = data.bio;
    document.getElementById('viewCountLabel').textContent = data.visitorsText;
    document.getElementById('reviewerName').placeholder = data.reviewerPlaceholder;
    document.getElementById('reviewComment').placeholder = data.commentPlaceholder;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerHTML = data[key];
    });
    displayCurrentQuote();
    loadReviews();
}

function renderFloatingName(nameStr) {
    const container = document.getElementById('usernameContainer');
    if (!container) return;
    container.innerHTML = '';
    nameStr.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'username-letter';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.08}s`;
        container.appendChild(span);
    });
}

// ============================================================
// 4. Badge Typing (giữ nguyên)
// ============================================================
const badgeTitles = ["CAFE PROFILE", "CAT PROFILE", "NEM PROFILE", "N?NE PROFILE"];
let badgeIndex = 0, charIdx = 0, isDeleting = false;
function updateDynamicBadge() {
    const currentTitle = badgeTitles[badgeIndex];
    const badgeEl = document.getElementById('dynamicBadge');
    if (!badgeEl) return;
    if (isDeleting) {
        badgeEl.textContent = currentTitle.substring(0, charIdx - 1);
        charIdx--;
    } else {
        badgeEl.textContent = currentTitle.substring(0, charIdx + 1);
        charIdx++;
    }
    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIdx === currentTitle.length) { speed = 2000; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; badgeIndex = (badgeIndex+1)%badgeTitles.length; speed = 350; }
    setTimeout(updateDynamicBadge, speed);
}

// ============================================================
// 5. Quotes
// ============================================================
function displayCurrentQuote() {
    const quoteEl = document.getElementById('quoteDisplay');
    if (!quoteEl) return;
    const item = quoteDatabase[currentQuoteIndex];
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = item[currentLang] || item.vi;
        quoteEl.style.opacity = 1;
    }, 200);
}
function nextQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quoteDatabase.length);
    displayCurrentQuote();
}

// ============================================================
// 6. Audio & Avatar
// ============================================================
const audio = document.getElementById('bgMusicAudio');
const openingScreen = document.getElementById('openingScreen');
const playIcon = document.getElementById('playIcon');
let isPlaying = false;

// Danh sách GIF avatar (có anime-blob.gif cần căn giữa)
const avatarGifs = [
    "images/CafededauTachyon.gif",
    "images/Cafedudua.gif",
    "images/CafexoadauTachyon.gif",
    "images/TachyonduaCafe.gif",
    "images/anime-blob.gif",
    "images/shikimori.gif"
];

// Danh sách nhạc Chill (tự động chuyển ngẫu nhiên)
const chillTracks = [
    "video/Imposter-Syndrome.mp4",
    "video/Blue.mp3",
    "video/cant go.mp4",
    "video/doodle normal.mp4",
    "video/doodle (Slowed).mp4",
    "video/doodle makeup.mp4",
    "video/I am in love with you.mp4",
    "video/HOSHI.mp4",
    "video/Helltaker - 헬테이커 브금 OST [Mittsies - Vitality].mp4"
];

// Danh sách Hardstyle (không tự động chuyển)
const hardstyleTracks = [
    "video/Cool-for-the-Summer-Hardstyle-Sped-Up.mp4",
    "video/DARK-HORSE-HARDSTYLE-ULTRA-SLOWED.mp4",
    "video/Dark Horse (Hoodtrap Mylancore).mp4",
    "video/HOT-GIRL-BUMMER-X-HARDTEKK-Super-Slowed.mp4",
    "video/MEANT-TO-BE-HARDSTYLE.mp4",
    "video/Misery-Pupsies-Hardstyle.mp4",
    "video/Outside-Hardstyle.mp4",
    "video/PART-OF-ME-HARDSTYLE.mp4",
    "video/Safe-and-Sound-Hardstyle.mp4",
    "video/BEAUTY-AND-THE-BEAT-HARDTEKK-SLOWED.mp4",
    "video/Montagem-Umbrella.mp4"
];

function getRandomAvatarGif() {
    return avatarGifs[Math.floor(Math.random() * avatarGifs.length)];
}

// Mở profile
function openProfile() {
    // Aura flash
    const auraFlash = document.getElementById('auraFlash');
    if (auraFlash) {
        auraFlash.classList.add('active');
        setTimeout(() => auraFlash.classList.remove('active'), 1200);
    }
    document.documentElement.classList.remove('opening-active');
    document.body.classList.remove('opening-active');
    if (openingScreen) {
        openingScreen.classList.add('opened');
        setTimeout(() => openingScreen.style.display = 'none', 850);
    }
    changeRandomAvatar();
    if (audio) {
        audio.volume = 0.5;
        const slider = document.getElementById('volumeSlider');
        const volPercent = document.getElementById('volumePercent');
        if (slider) slider.value = 0.5;
        if (volPercent) volPercent.textContent = "50%";
        audio.play().then(() => {
            isPlaying = true;
            if (playIcon) playIcon.className = 'fas fa-pause';
        }).catch(() => {
            isPlaying = false;
            if (playIcon) playIcon.className = 'fas fa-play';
        });
    }
}

function changeRandomAvatar() {
    const avatarImg = document.getElementById('musicRandomAvatar');
    if (avatarImg) {
        avatarImg.src = getRandomAvatarGif();
    }
}

// Reset xoay về 0deg khi nhấn play
function resetAvatarRotation() {
    const avatarImg = document.getElementById('musicRandomAvatar');
    if (avatarImg) {
        // Tắt animation, force reflow, bật lại
        avatarImg.style.animation = 'none';
        void avatarImg.offsetWidth;
        avatarImg.style.animation = 'spinContinuous 6s linear infinite !important';
    }
}

// ============================================================
// 7. Điều khiển nhạc
// ============================================================
function toggleMusic() {
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        if (playIcon) playIcon.className = 'fas fa-play';
        isPlaying = false;
    } else {
        audio.play().then(() => {
            isPlaying = true;
            if (playIcon) playIcon.className = 'fas fa-pause';
            resetAvatarRotation(); // reset góc về 0 khi play
        }).catch(() => {
            showToast('⚠️ Không thể phát nhạc');
        });
    }
}

function changeVolume(val) {
    if (!audio) return;
    audio.volume = parseFloat(val);
    const volPercent = document.getElementById('volumePercent');
    if (volPercent) volPercent.textContent = `${Math.round(val * 100)}%`;
}

function changeTrack(src) {
    if (!audio) return;
    const currentVol = audio.volume;
    audio.src = src;
    audio.volume = currentVol;
    audio.currentTime = 0;
    const selectEl = document.getElementById('trackSelect');
    const selectedText = selectEl ? selectEl.options[selectEl.selectedIndex].text.replace(/^[🎵🔥]\s*/, '') : 'Bài hát';
    changeRandomAvatar(); // Đổi GIF khi đổi bài
    resetAvatarRotation(); // Reset góc xoay
    audio.play().then(() => {
        isPlaying = true;
        if (playIcon) playIcon.className = 'fas fa-pause';
        showToast("🎵 Đang phát: " + selectedText);
    }).catch(() => {
        showToast('⚠️ Lỗi phát nhạc');
        isPlaying = false;
        if (playIcon) playIcon.className = 'fas fa-play';
    });
}

// Khi bài hát kết thúc: chỉ chuyển ngẫu nhiên nếu là nhạc Chill
if (audio) {
    audio.addEventListener('ended', () => {
        const selectEl = document.getElementById('trackSelect');
        if (!selectEl) return;
        const currentSrc = audio.src;
        // Kiểm tra xem bài hiện tại có trong chillTracks không
        const isChill = chillTracks.some(track => currentSrc.includes(track));
        if (isChill) {
            // Chọn ngẫu nhiên một bài chill khác
            let randomTrack;
            do {
                randomTrack = chillTracks[Math.floor(Math.random() * chillTracks.length)];
            } while (randomTrack === currentSrc && chillTracks.length > 1);
            selectEl.value = randomTrack;
            changeTrack(randomTrack);
        } else {
            // Nếu là Hardstyle thì không tự chuyển, chỉ dừng lại
            // (có thể để nguyên hoặc chuyển sang bài chill đầu tiên)
            // Ở đây ta chuyển về bài chill đầu tiên để không im lặng
            const firstChill = chillTracks[0];
            selectEl.value = firstChill;
            changeTrack(firstChill);
        }
    });
}

// ============================================================
// 8. Drawer toggle
// ============================================================
let isDrawerOpen = false;
function toggleMusicDrawer() {
    const drawer = document.getElementById('musicSlideDrawer');
    const arrow = document.getElementById('drawerArrowIcon');
    isDrawerOpen = !isDrawerOpen;
    if (drawer) drawer.classList.toggle('open', isDrawerOpen);
    if (arrow) arrow.className = isDrawerOpen ? 'fas fa-chevron-right' : 'fas fa-chevron-left';
}

// ============================================================
// 9. Unique Visitor
// ============================================================
function initUniqueVisitorCounter() {
    const visitorKey = 'nem_unique_user_token_v6';
    const countKey = 'nem_unique_visitors_total_v6';
    if (!localStorage.getItem(visitorKey)) {
        localStorage.setItem(visitorKey, 'visitor_' + Date.now());
        let currentTotal = parseInt(localStorage.getItem(countKey) || '148');
        currentTotal++;
        localStorage.setItem(countKey, currentTotal);
    }
    const finalCount = localStorage.getItem(countKey) || '148';
    const viewCountEl = document.getElementById('viewCount');
    if (viewCountEl) viewCountEl.textContent = finalCount;
}

// ============================================================
// 10. QR Modal
// ============================================================
function openQrModal() {
    document.getElementById('qrModalOverlay').classList.add('show');
}
function closeQrModal() {
    document.getElementById('qrModalOverlay').classList.remove('show');
}

// ============================================================
// 11. Copy Contact (có fallback)
// ============================================================
function copyContact(text, type) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`✅ Đã sao chép ${type} (${text})`);
        }).catch(() => fallbackCopy(text, type));
    } else {
        fallbackCopy(text, type);
    }
}
function fallbackCopy(text, type) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        showToast(`✅ Đã sao chép ${type} (${text})`);
    } catch (e) {
        prompt(`⚠️ Copy thủ công:`, text);
    }
    document.body.removeChild(input);
}

// ============================================================
// 12. Review System (có blacklist)
// ============================================================
let currentRating = 5;
let currentTab = '5star';
const toxicBlacklist = ["đĩ","cave","súc sinh","chó đẻ","mẹ mày","cha mày","ông cố nội","bố mày","con cặc","lồn","óc chó","phò","bắc kỳ","nam kỳ","mọi rợ","chết tiệt","đụ","dkm","đm","vcl","nigga","bitch","nigger"];

function setRating(stars) {
    currentRating = stars;
    document.querySelectorAll('#ratingStars i').forEach((star, index) => {
        star.classList.toggle('active', index < stars);
    });
}

function switchReviewTab(tab) {
    currentTab = tab;
    document.getElementById('tab5StarBtn').classList.toggle('active', tab === '5star');
    document.getElementById('tabFeedbackBtn').classList.toggle('active', tab === 'feedback');
    loadReviews();
}

function loadReviews() {
    let stored = JSON.parse(localStorage.getItem('nem_reviews_store_v6') || '[]');
    const listEl = document.getElementById('reviewsList');
    if (!listEl) return;
    listEl.innerHTML = '';
    let filtered = stored.filter(r => currentTab === '5star' ? r.rating === 5 : r.rating < 5);
    if (filtered.length === 0) {
        const emptyMsg = currentTab === '5star' ? langData[currentLang].emptyReview5Star : langData[currentLang].emptyFeedback;
        listEl.innerHTML = `<div class="empty-reviews-text">${emptyMsg}</div>`;
        return;
    }
    if (currentTab === '5star' && filtered.length > 10) filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    filtered.forEach(r => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-item-header"><span>${escapeHtml(r.name)}</span><span>${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span></div>
            <div class="review-item-comment">${escapeHtml(r.comment)}</div>
        `;
        listEl.appendChild(item);
    });
}

function submitReview(e) {
    e.preventDefault();
    const nameEl = document.getElementById('reviewerName');
    const commentEl = document.getElementById('reviewComment');
    if (!nameEl || !commentEl) return;
    const name = nameEl.value.trim();
    const comment = commentEl.value.trim();
    if (!name || !comment) { showToast('⚠️ Vui lòng điền đầy đủ'); return; }
    const contentCheck = (name + " " + comment).toLowerCase();
    if (toxicBlacklist.some(word => contentCheck.includes(word))) {
        showToast("⚠️ Từ ngữ không phù hợp");
        return;
    }
    let stored = JSON.parse(localStorage.getItem('nem_reviews_store_v6') || '[]');
    stored.push({ name, rating: currentRating, comment });
    localStorage.setItem('nem_reviews_store_v6', JSON.stringify(stored));
    nameEl.value = '';
    commentEl.value = '';
    setRating(5);
    currentTab = currentRating === 5 ? '5star' : 'feedback';
    document.getElementById('tab5StarBtn').classList.toggle('active', currentTab === '5star');
    document.getElementById('tabFeedbackBtn').classList.toggle('active', currentTab === 'feedback');
    loadReviews();
    showToast("✨ Cảm ơn bạn đã đánh giá!");
}

function escapeHtml(text) {
    return text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// ============================================================
// 13. Toast
// ============================================================
function showToast(msg) {
    const toast = document.getElementById('customToast');
    const toastMsg = document.getElementById('toastMsg');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ============================================================
// 14. System Monitor (có kiểm tra memory)
// ============================================================
function initSystemMonitor() {
    const cpuEl = document.getElementById('cpuVal');
    const ramEl = document.getElementById('ramVal');
    if (!cpuEl || !ramEl) return;
    let lastTime = performance.now();
    let frameCount = 0;
    let cpuUsage = 12;
    function measureFrame() {
        const now = performance.now();
        frameCount++;
        if (now >= lastTime + 1000) {
            const fps = Math.round((frameCount * 1000) / (now - lastTime));
            let calculatedCpu = Math.min(99, Math.max(8, Math.round(100 - (fps / 60) * 85 + (Math.random() * 8 - 4))));
            cpuUsage = Math.round(cpuUsage * 0.7 + calculatedCpu * 0.3);
            frameCount = 0;
            lastTime = now;
        }
        requestAnimationFrame(measureFrame);
    }
    requestAnimationFrame(measureFrame);
    setInterval(() => {
        cpuEl.textContent = `${cpuUsage}%`;
        let ramPercent = 38;
        if (performance && performance.memory) {
            const used = performance.memory.usedJSHeapSize;
            const total = performance.memory.jsHeapSizeLimit;
            ramPercent = Math.min(98, Math.max(20, Math.round((used / total) * 100 * 3.5)));
        } else {
            ramPercent = Math.round(35 + Math.sin(Date.now() / 3000) * 10 + Math.random() * 4);
        }
        ramEl.textContent = `${ramPercent}%`;
    }, 1500);
}

// ============================================================
// 15. Footer scroll
// ============================================================
const exclusiveFooter = document.getElementById('exclusiveFooter');
window.addEventListener('scroll', () => {
    if (!exclusiveFooter) return;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    if (scrollY + windowHeight >= bodyHeight - 40) {
        exclusiveFooter.classList.add('show-footer');
    } else {
        exclusiveFooter.classList.remove('show-footer');
    }
}, { passive: true });

// ============================================================
// 16. Khởi tạo
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderFloatingName(langData.vi.name);
    document.getElementById('bioText').innerHTML = langData.vi.bio;
    updateDynamicBadge();
    displayCurrentQuote();
    initUniqueVisitorCounter();
    loadReviews();
    initSystemMonitor();
});
