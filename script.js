// 1. CÂU NÓI TRUYỀN CẢM HỨNG
const quoteDatabase = [
    { en: "“Don’t count the days, make the days count.” -Muhammad Ali", vi: "“Đừng đếm ngày tháng, hãy để ngày tháng có ý nghĩa.” -Muhammad Ali", ja: "「日数を数えるのではなく、日々を価値あるものにしなさい。」 -Muhammad Ali" },
    { en: "“Persistence can change failure into extraordinary achievement.” -Matt Biondi", vi: "“Sự kiên trì có thể biến thất bại thành thành tựu phi thường.” -Matt Biondi", ja: "「粘り強さは失敗を並外れた成果に変えることができる。」 -Matt Biondi" },
    { en: "“All our dreams can come true if we have the courage to pursue them.” -Walt Disney", vi: "“Mọi ước mơ đều có thể trở thành hiện thực nếu chúng ta có đủ can đảm để theo đuổi chúng.” -Walt Disney", ja: "「すべての夢は叶う。それを追い求める勇気さえあれば。」 -Walt Disney" },
    { en: "“Work hard in silence. Let success be your noise.” -Frank Ocean", vi: "“Hãy làm việc chăm chỉ trong im lặng. Hãy để thành công tạo nên tiếng vang cho bạn.” -Frank Ocean", ja: "「静寂の中で懸命に働け。成功を自らの音にせよ。」 -Frank Ocean" }
];

// 2. ĐA NGÔN NGỮ
const langData = {
    vi: {
        name: "NGUYỄN NEM",
        bio: "Chỉ là một chú mèo 🐾<br>Yêu thích đua ngựa Nhật Bản 🐎<br>Với nhạc hardstyle và Chill cùng vibe âm nhạc 🎧✨",
        visitorsText: "Khách truy cập",
        quoteBoxTitle: "Mỗi ngày nhớ một câu",
        quoteBtn: '<i class="fas fa-rotate" style="margin-right: 4px;"></i> ĐỔI CÂU MỚI',
        donateTitle: "Góc Hảo Tâm & Đầu Tư",
        donateSubtitle: "Mọi sự ủng hộ và đồng hành của bạn đều là nguồn động lực quý báu giúp tôi hoàn thiện bản thân mỗi ngày.",
        bankHolderLbl: "Chủ TK:",
        bankNumLbl: "STK (Click copy):",
        bankNameLbl: "Ngân hàng:",
        qrModalTitle: "Quét Mã QR Ủng Hộ",
        qrZoomHint: "Nhấp để phóng to",
        reviewTitle: "Mong bạn để lại đánh giá",
        reviewSubtitle: "Mỗi 1 bài đánh giá đều giúp tôi tốt lên dù tốt hay xấu",
        reviewSubmitBtn: "GỬI ĐÁNH GIÁ",
        tab5Star: "Đánh giá",
        tabFeedback: "Góp ý",
        emptyReview5Star: "Chưa có đánh giá 5 sao nào.",
        emptyFeedback: "Chưa có góp ý nào từ 1-4 sao.",
        reviewerPlaceholder: "Tên hoặc biệt danh...",
        commentPlaceholder: "Cảm nghĩ / đóng góp ý kiến của bạn...",
        socialHeader: "Kết Nối Mạng Xã Hội",
        skillsHeader: "Kỹ Năng & Hành Trình Nghệ Thuật",
        skillPsTitle: '<i class="fas fa-wand-magic-sparkles" style="color: var(--gold-accent); margin-right:6px;"></i>Photoshop & Illustrator',
        skillPsLvl: "Trình Độ Cao",
        skillPsDesc: "Sử dụng thành thạo và chuyên sâu; tối ưu hóa hình ảnh, thiết kế đồ họa và sáng tạo visual thẩm mỹ.",
        skillAeTitle: '<i class="fas fa-film" style="color: var(--gold-accent); margin-right:6px;"></i>After Effects & Premiere Pro',
        skillAeLvl: "Đang Trau Dồi",
        skillAeDesc: "Đang ở mức trung bình, nỗ lực học hỏi để hoàn thiện kỹ năng dựng video TikTok Edit, VFX và motion graphics.",
        skillArtTitle: '<i class="fas fa-heart" style="color: var(--gold-accent); margin-right:6px;"></i>Hội Hoạ & Thẩm Mỹ Thị Giác',
        skillArtLvl: "Không Ngừng Cố Gắng",
        skillArtDesc: "Cảm quan hội họa & thẩm mỹ thị giác cao, chỉnh sửa ảnh hợp nhãn người xem; tuy chưa vẽ giỏi nhưng luôn học vẽ mỗi ngày như người mới bắt đầu!",
        playlistHeader: "Danh Sách Nhạc Yêu Thích",
        footerText: "© 2025 by Nem. Created with GitHub."
    },
    en: {
        name: "Nem Nguyen",
        bio: "Just A Cat 🐾<br>Love racing Horse in Japan 🐎<br>With hardstyle and chilling vibe music. 🎧✨",
        visitorsText: "Visitors",
        quoteBoxTitle: "Daily Motivation",
        quoteBtn: '<i class="fas fa-rotate" style="margin-right: 4px;"></i> NEXT QUOTE',
        donateTitle: "Sponsorship & Support",
        donateSubtitle: "Any contribution, big or small, is an immense motivation helping me improve every day.",
        bankHolderLbl: "Account Holder:",
        bankNumLbl: "Account No. (Click copy):",
        bankNameLbl: "Bank:",
        qrModalTitle: "Scan QR To Support",
        qrZoomHint: "Click to zoom in",
        reviewTitle: "Leave a Feedback",
        reviewSubtitle: "Every single feedback helps me grow better, whether good or bad.",
        reviewSubmitBtn: "SUBMIT FEEDBACK",
        tab5Star: "Reviews",
        tabFeedback: "Feedback",
        emptyReview5Star: "No 5-star reviews yet.",
        emptyFeedback: "No feedback (1-4 stars) yet.",
        reviewerPlaceholder: "Your name or nickname...",
        commentPlaceholder: "Your thoughts / suggestions...",
        socialHeader: "Social Connections",
        skillsHeader: "Skills & Artistic Journey",
        skillPsTitle: '<i class="fas fa-wand-magic-sparkles" style="color: var(--gold-accent); margin-right:6px;"></i>Photoshop & Illustrator',
        skillPsLvl: "Advanced / Master",
        skillPsDesc: "Highly proficient in photo manipulation, graphic design, and crafting captivating aesthetic visuals.",
        skillAeTitle: '<i class="fas fa-film" style="color: var(--gold-accent); margin-right:6px;"></i>After Effects & Premiere Pro',
        skillAeLvl: "Intermediate",
        skillAeDesc: "Actively mastering video editing, TikTok pacing, motion graphics, and visual effects in AE & Premiere.",
        skillArtTitle: '<i class="fas fa-heart" style="color: var(--gold-accent); margin-right:6px;"></i>Artistic Sense & Drawing Journey',
        skillArtLvl: "Never Stop Learning",
        skillArtDesc: "Strong artistic sense and visual curation. While learning sketching from scratch, constantly pushing limits without giving up!",
        playlistHeader: "Favorite Playlists",
        footerText: "© 2025 by Nem. Created with GitHub."
    },
    ja: {
        name: "ネムチュア",
        bio: "ただの猫です 🐾<br>日本の競馬が大好き 🐎<br>ハードスタイルとChillな音楽のバイブスとともに 🎧✨",
        visitorsText: "訪問者数",
        quoteBoxTitle: "今日の一言",
        quoteBtn: '<i class="fas fa-rotate" style="margin-right: 4px;"></i> 言葉を変える',
        donateTitle: "ご支援・スポンサー",
        donateSubtitle: "皆様からの温かいご支援は、日々成長し続けるための大きな励みとなります。",
        bankHolderLbl: "口座名義:",
        bankNumLbl: "口座番号 (クリックしてコピー):",
        bankNameLbl: "銀行名:",
        qrModalTitle: "応援QRコードをスキャン",
        qrZoomHint: "拡大表示",
        reviewTitle: "フィードバックを残す",
        reviewSubtitle: "良い評価も改善点も、すべての声が私を成長させてくれます。",
        reviewSubmitBtn: "レビューを送信",
        tab5Star: "評価",
        tabFeedback: "ご意見",
        emptyReview5Star: "まだ5つ星評価はありません。",
        emptyFeedback: "まだご意見はありません。",
        reviewerPlaceholder: "お名前またはニックネーム...",
        commentPlaceholder: "ご感想やご提案をお聞かせください...",
        socialHeader: "ソーシャルリンク",
        skillsHeader: "スキル ＆ アートジャーニー",
        skillPsTitle: '<i class="fas fa-wand-magic-sparkles" style="color: var(--gold-accent); margin-right:6px;"></i>Photoshop & Illustrator',
        skillPsLvl: "上級者 / プロ",
        skillPsDesc: "高度な画像編集、グラフィックデザイン、魅力的なビジュアル制作を得意としています。",
        skillAeTitle: '<i class="fas fa-film" style="color: var(--gold-accent); margin-right:6px;"></i>After Effects & Premiere Pro',
        skillAeLvl: "中級 / 学習中",
        skillAeDesc: "After EffectsとPremiere Proで動画編集やエフェクト技術を日々磨いています。",
        skillArtTitle: '<i class="fas fa-heart" style="color: var(--gold-accent); margin-right:6px;"></i>美的センス & アートジャーニー',
        skillArtLvl: "挑戦し続ける心",
        skillArtDesc: "高い美的センスを持ち、見る人に心地よい画像加工が得意。絵の初心者として毎日諦めずに練習を続けています！",
        playlistHeader: "お気に入りのプレイリスト",
        footerText: "© 2025 by Nem. GitHubで作成。"
    }
};

let currentLang = 'vi';
let currentQuoteIndex = 0;

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const data = langData[lang];
    renderFloatingName(data.name);
    document.getElementById('bioText').innerHTML = data.bio;
    document.getElementById('viewCountLabel').textContent = data.visitorsText;

    document.getElementById('reviewerName').placeholder = data.reviewerPlaceholder;
    document.getElementById('reviewComment').placeholder = data.commentPlaceholder;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerHTML = data[key];
        }
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

// 3. TYPING BADGE
const badgeTitles = ["CAFE PROFILE", "CAT PROFILE", "NEM PROFILE"];
let badgeIndex = 0;
let charIdx = 0;
let isDeleting = false;

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
    if (!isDeleting && charIdx === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        badgeIndex = (badgeIndex + 1) % badgeTitles.length;
        speed = 350;
    }
    setTimeout(updateDynamicBadge, speed);
}

// 4. QUOTES
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

// 5. MỞ PROFILE, HIỆU ỨNG AURA & PHÁT NHẠC
const audio = document.getElementById('bgMusicAudio');
const openingScreen = document.getElementById('openingScreen');
const playIcon = document.getElementById('playIcon');
let isPlaying = false;

const avatarGifs = [
    "images/CafededauTachyon.gif",
    "images/Cafedudua.gif",
    "images/CafexoadauTachyon.gif",
    "images/TachyonduaCafe.gif",
    "images/anime-blob.gif",
    "images/shikimori.gif"
];

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

function getRandomAvatarGif() {
    const randomIdx = Math.floor(Math.random() * avatarGifs.length);
    return avatarGifs[randomIdx];
}

function openProfile() {
    const auraFlash = document.getElementById('auraFlash');
    if (auraFlash) {
        auraFlash.classList.add('active');
        setTimeout(() => {
            auraFlash.classList.remove('active');
        }, 1200);
    }

    document.documentElement.classList.remove('opening-active');
    document.body.classList.remove('opening-active');

    if (openingScreen) {
        openingScreen.classList.add('opened');
        setTimeout(() => {
            openingScreen.style.display = 'none';
        }, 850);
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
        }).catch(e => console.log('Autoplay blocked:', e));
    }
}

function changeRandomAvatar() {
    const avatarImg = document.getElementById('musicRandomAvatar');
    if (avatarImg) {
        avatarImg.src = getRandomAvatarGif();
    }
}

function resetAvatarRotation() {
    const avatarImg = document.getElementById('musicRandomAvatar');
    if (avatarImg) {
        avatarImg.style.animation = 'none';
        void avatarImg.offsetWidth;
        avatarImg.style.animation = 'spinContinuous 6s linear infinite';
    }
}

function toggleMusic() {
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        if (playIcon) playIcon.className = 'fas fa-play';
    } else {
        audio.play();
        if (playIcon) playIcon.className = 'fas fa-pause';
        resetAvatarRotation();
    }
    isPlaying = !isPlaying;
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

    changeRandomAvatar();
    resetAvatarRotation();

    audio.play().then(() => {
        isPlaying = true;
        if (playIcon) playIcon.className = 'fas fa-pause';
        showToast("🎵 Đang phát: " + selectedText);
    }).catch(e => console.log('Lỗi phát:', e));
}

if (audio) {
    audio.addEventListener('ended', () => {
        const randomChillTrack = chillTracks[Math.floor(Math.random() * chillTracks.length)];
        const selectEl = document.getElementById('trackSelect');
        if (selectEl) {
            selectEl.value = randomChillTrack;
        }
        changeTrack(randomChillTrack);
    });
}

let isDrawerOpen = false;
function toggleMusicDrawer() {
    const drawer = document.getElementById('musicSlideDrawer');
    const arrow = document.getElementById('drawerArrowIcon');
    isDrawerOpen = !isDrawerOpen;
    if (isDrawerOpen) {
        if (drawer) drawer.classList.add('open');
        if (arrow) arrow.className = 'fas fa-chevron-right';
    } else {
        if (drawer) drawer.classList.remove('open');
        if (arrow) arrow.className = 'fas fa-chevron-left';
    }
}

// 6. ĐẾM LƯỢNG KHÁCH TRUY CẬP
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

// 7. QR MODAL
function openQrModal() {
    const modal = document.getElementById('qrModalOverlay');
    if (modal) modal.classList.add('show');
}
function closeQrModal() {
    const modal = document.getElementById('qrModalOverlay');
    if (modal) modal.classList.remove('show');
}

// 8. ĐÁNH GIÁ
let currentRating = 5;
let currentTab = '5star';

function setRating(stars) {
    currentRating = stars;
    const starIcons = document.querySelectorAll('#ratingStars i');
    starIcons.forEach((star, index) => {
        if (index < stars) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function switchReviewTab(tab) {
    currentTab = tab;
    const btn5 = document.getElementById('tab5StarBtn');
    const btnFb = document.getElementById('tabFeedbackBtn');
    if (btn5) btn5.classList.toggle('active', tab === '5star');
    if (btnFb) btnFb.classList.toggle('active', tab === 'feedback');
    loadReviews();
}

function loadReviews() {
    let stored = JSON.parse(localStorage.getItem('nem_reviews_store_v6')) || [];
    const listEl = document.getElementById('reviewsList');
    if (!listEl) return;
    listEl.innerHTML = '';

    let filtered = stored.filter(r => currentTab === '5star' ? r.rating === 5 : r.rating < 5);

    if (filtered.length === 0) {
        const emptyMsg = currentTab === '5star' ? langData[currentLang].emptyReview5Star : langData[currentLang].emptyFeedback;
        listEl.innerHTML = `<div class="empty-reviews-text">${emptyMsg}</div>`;
        return;
    }

    filtered.forEach(r => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-item-header">
                <span>${escapeHtml(r.name)}</span>
                <span>${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
            </div>
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

    if (!name || !comment) return;

    let stored = JSON.parse(localStorage.getItem('nem_reviews_store_v6')) || [];
    stored.push({ name, rating: currentRating, comment });
    localStorage.setItem('nem_reviews_store_v6', JSON.stringify(stored));

    nameEl.value = '';
    commentEl.value = '';
    setRating(5);
    
    currentTab = currentRating === 5 ? '5star' : 'feedback';
    const btn5 = document.getElementById('tab5StarBtn');
    const btnFb = document.getElementById('tabFeedbackBtn');
    if (btn5) btn5.classList.toggle('active', currentTab === '5star');
    if (btnFb) btnFb.classList.toggle('active', currentTab === 'feedback');
    
    loadReviews();
    showToast("✨ Cảm ơn bạn rất nhiều vì đã để lại đánh giá!");
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// 9. TOAST THÔNG BÁO
function showToast(msg) {
    const toast = document.getElementById('customToast');
    const toastMsg = document.getElementById('toastMsg');
    if (!toast || !toastMsg) return;
    
    toastMsg.textContent = msg;
    toast.classList.add('show');
    
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function copyContact(text, type) {
    navigator.clipboard.writeText(text);
    showToast(`Đã sao chép ${type} (${text})!`);
}

// 10. SYSTEM MONITOR CPU/RAM
function initSystemMonitor() {
    const cpuEl = document.getElementById('cpuVal');
    const ramEl = document.getElementById('ramVal');
    if (!cpuEl || !ramEl) return;

    setInterval(() => {
        let cpu = Math.floor(12 + Math.random() * 15);
        let ram = Math.floor(38 + Math.random() * 8);
        cpuEl.textContent = `${cpu}%`;
        ramEl.textContent = `${ram}%`;
    }, 2000);
}

// 11. FOOTER
const exclusiveFooter = document.getElementById('exclusiveFooter');
window.addEventListener('scroll', () => {
    if (!exclusiveFooter) return;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition + windowHeight >= bodyHeight - 40) {
        exclusiveFooter.classList.add('show-footer');
    } else {
        exclusiveFooter.classList.remove('show-footer');
    }
}, { passive: true });

// 12. KHỞI TẠO
document.addEventListener('DOMContentLoaded', () => {
    renderFloatingName(langData.vi.name);
    const bioText = document.getElementById('bioText');
    if (bioText) bioText.innerHTML = langData.vi.bio;
    
    updateDynamicBadge();
    displayCurrentQuote();
    initUniqueVisitorCounter();
    loadReviews();
    initSystemMonitor();
});
