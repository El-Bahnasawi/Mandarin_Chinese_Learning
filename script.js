// script.js – logic for navigation, flip cards, quiz, favorites, idioms, passages, conversations, user links + keyboard shortcuts
let favorites = JSON.parse(localStorage.getItem('mandarinFavs') || '[]');

function saveFavorites() {
    localStorage.setItem('mandarinFavs', JSON.stringify(favorites));
}

function toggleFavorite(btn, word, pinyin, meaning) {
    const index = favorites.findIndex(f => f.word === word);
    if (index > -1) {
        favorites.splice(index, 1);
        btn.classList.remove('saved');
    } else {
        favorites.push({ word, pinyin, meaning });
        btn.classList.add('saved');
    }
    saveFavorites();
}

// ── Simple link storage per topic ──
function getLinks(topicId) {
    return JSON.parse(localStorage.getItem('links_' + topicId) || '[]');
}
function saveLinks(topicId, linksArr) {
    localStorage.setItem('links_' + topicId, JSON.stringify(linksArr));
}

function buildVocabFlipCards(vocab) {
    let html = '<div class="vocab-grid">';
    vocab.forEach(([cn, py, en]) => {
        const plainWord = cn.replace(/[^\u4e00-\u9fff]/g, '');
        const isFav = favorites.some(f => f.word === plainWord);
        html += `
        <div class="flip-card" tabindex="0" onfocus="this.classList.add('card-focus')" onblur="this.classList.remove('card-focus')">
            <div class="flip-card-inner" onclick="this.closest('.flip-card').classList.toggle('flipped')">
                <div class="flip-card-front">${cn}</div>
                <div class="flip-card-back">
                    <span class="pinyin-cell">${py}</span>
                    <span class="en-cell">${en}</span>
                </div>
            </div>
            <span class="star-fav ${isFav ? 'saved' : ''}" onclick="event.stopPropagation(); toggleFavorite(this, '${plainWord}', '${py}', '${en}')">⭐</span>
        </div>`;
    });
    html += '</div>';
    return html;
}

// ── New render helpers ──
function buildIdioms(idioms) {
    let html = '<div class="idiom-grid">';
    idioms.forEach(([cn, py, literal, actual]) => {
        html += `
        <div class="flip-card idiom-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front idiom-front">
                    <span class="idiom-cn">${cn}</span>
                    <span class="idiom-py">${py}</span>
                </div>
                <div class="flip-card-back">
                    <p class="idiom-literal">${literal}</p>
                    <p class="idiom-actual">→ ${actual}</p>
                </div>
            </div>
        </div>`;
    });
    html += '</div>';
    return html;
}

function buildParagraph(p) {
    return `
    <div class="paragraph-card" onclick="this.classList.toggle('revealed')">
        <div class="paragraph-cn">${p.cn}</div>
        <div class="paragraph-pinyin"><span class="pinyin-hidden">${p.py}</span></div>
        <div class="paragraph-en">${p.en}</div>
        <span class="reveal-hint">👆 tap</span>
    </div>`;
}

function buildConversation(conv) {
    let html = '<div class="chat-bubbles">';
    conv.forEach((line, i) => {
        const side = line.speaker === 'A' ? 'left' : 'right';
        html += `
        <div class="chat-msg ${side}" onclick="this.classList.toggle('revealed')">
            <div class="chat-bubble">
                <span class="chat-cn">${line.cn}</span>
                <div class="chat-pinyin"><span class="pinyin-hidden">${line.py}</span></div>
                <div class="chat-en">${line.en}</div>
            </div>
            <span class="chat-speaker">${line.speaker === 'A' ? '🧑' : '👩'}</span>
        </div>`;
    });
    html += '</div>';
    return html;
}

function buildLinkSection(topicId, existingLinks) {
    const links = (existingLinks && existingLinks.length) ? existingLinks : getLinks(topicId);
    let html = '<div class="links-section"><h4>🔗 My Study Links</h4><div class="link-list">';
    links.forEach((l, i) => {
        const ytId = extractYoutubeID(l.url);
        const preview = ytId
            ? `<iframe class="link-preview-yt" src="https://www.youtube.com/embed/${ytId}" allowfullscreen loading="lazy"></iframe>`
            : `<span class="link-favicon"><img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(l.url)}" alt=""> ${l.title}</span>`;
        html += `
        <div class="link-item">
            <div class="link-info">
                ${preview}
                <a href="${l.url}" target="_blank" rel="noopener">${l.title}</a>
                <button class="link-remove" data-index="${i}">✕</button>
            </div>
        </div>`;
    });
    html += '</div>';
    html += `
    <div class="add-link">
        <input type="text" class="link-title" placeholder="Title">
        <input type="url" class="link-url" placeholder="https://...">
        <button class="link-add-btn">Add</button>
    </div>`;
    html += '</div>';
    // Save initial links to localStorage if not already there
    if (existingLinks && existingLinks.length) {
        saveLinks(topicId, existingLinks);
    }
    return html;
}

function extractYoutubeID(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|live\/))([\w-]{11})/);
    return match ? match[1] : null;
}

// ── Main render ──
function renderTopic(t) {
    if (t.special === 'home') {
        return `
        <div class="home-section">
            <h1>🇨🇳 中文学习</h1>
            <p class="home-intro">Welcome to your complete Mandarin guide. Choose a topic, tap cards to flip, add your own links, and explore idioms & conversations.</p>
            <p class="home-intro"><strong>Tones matter!</strong> Practice them with the guide below.</p>
            <div class="tone-guide">
                <span class="tone-chip">1ˢᵗ tone: mā — high & level</span>
                <span class="tone-chip">2ⁿᵈ tone: má — rising ↗</span>
                <span class="tone-chip">3ʳᵈ tone: mǎ — dip ↘↗</span>
                <span class="tone-chip">4ᵗʰ tone: mà — falling ↘</span>
                <span class="tone-chip">Neutral: ma — light</span>
            </div>
        </div>`;
    }

    let html = `<h3>${t.emoji} ${t.cn} <span style="font-weight:400;font-size:0.85rem;color:var(--text-light);">${t.title}</span></h3>`;
    html += `<p class="section-desc">Click cards to flip. ⭐ to save.</p>`;

    if (t.special === 'numbers') {
        html += '<div class="number-grid">';
        const nums = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
        const pys = ['yī','èr','sān','sì','wǔ','liù','qī','bā','jiǔ','shí','shí yī','shí èr'];
        for (let i = 0; i < 12; i++) {
            html += `<div class="number-card"><div class="num-arabic">${i+1}</div><div class="num-cn">${nums[i]}</div><div class="num-py">${pys[i]}</div></div>`;
        }
        html += '</div>';
    } else if (t.special === 'colors') {
        html += '<div class="color-grid">';
        const colors = [
            ['红色','hóng sè','Red','#e53935'],['蓝色','lán sè','Blue','#1e88e5'],['绿色','lǜ sè','Green','#43a047'],
            ['黄色','huáng sè','Yellow','#fdd835'],['白色','bái sè','White','#ffffff'],['黑色','hēi sè','Black','#212121'],
            ['紫色','zǐ sè','Purple','#8e24aa'],['粉色','fěn sè','Pink','#ec407a'],
            ['灰色','huī sè','Grey','#9e9e9e'],['棕色','zōng sè','Brown','#6d4c41']
        ];
        colors.forEach(c => {
            html += `<div class="color-swatch" style="background:${c[3]};">
                <span style="background:rgba(255,255,255,0.85);padding:0.1rem 0.4rem;border-radius:8px;font-size:0.7rem;">${c[0]}<br>${c[1]}<br>${c[2]}</span>
            </div>`;
        });
        html += '</div>';
        if (t.vocab) html += buildVocabFlipCards(t.vocab);
    } else {
        if (t.vocab) html += buildVocabFlipCards(t.vocab);
    }

    if (t.phrases) {
        html += '<p style="font-weight:600; margin-top:1.2rem;">🗣️ Example sentences:</p>';
        t.phrases.forEach(p => {
            html += `<div class="phrase-card" onclick="this.classList.toggle('revealed')">
                <div class="phrase-cn">${p[0]}</div>
                <div class="phrase-pinyin"><span class="pinyin-hidden">${p[1]}</span></div>
                <div class="phrase-en">${p[2]}</div>
                <span class="reveal-hint">👆 tap</span>
            </div>`;
        });
    }

    // Idioms
    if (t.idioms && t.idioms.length) {
        html += '<h4 style="margin-top:1.2rem;">🧧 Idioms (成语)</h4>';
        html += buildIdioms(t.idioms);
    }

    // Paragraph
    if (t.paragraph) {
        html += '<h4 style="margin-top:1.2rem;">📖 Reading Passage</h4>';
        html += buildParagraph(t.paragraph);
    }

    // Conversation
    if (t.conversation && t.conversation.length) {
        html += '<h4 style="margin-top:1.2rem;">💬 Conversation</h4>';
        html += buildConversation(t.conversation);
    }

    // Links (always shown)
    if (t.id !== 'home') {
        html += buildLinkSection(t.id, t.links || null);
    }

    return html;
}

// ── Keyboard shortcuts ──
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, select')) return;
        if (e.code === 'Space') {
            e.preventDefault();
            toggleAllFlipCards();
        } else if (e.code === 'KeyF') {
            e.preventDefault();
            handleFocusFavorite();
        }
    });
}

function toggleAllFlipCards() {
    const visibleCards = document.querySelectorAll('.topic-card:not([style*="display: none"]) .flip-card');
    if (visibleCards.length === 0) return;
    let anyNotFlipped = false;
    visibleCards.forEach(card => {
        if (!card.classList.contains('flipped')) anyNotFlipped = true;
    });
    visibleCards.forEach(card => {
        if (anyNotFlipped) card.classList.add('flipped');
        else card.classList.remove('flipped');
    });
}

function handleFocusFavorite() {
    const focusedCard = document.querySelector('.flip-card.card-focus');
    if (focusedCard) {
        const star = focusedCard.querySelector('.star-fav');
        if (star) star.click();
    }
}

// ── UI build (unchanged except minor changes) ──
function buildUI() {
    const topicList = document.getElementById('topicList');
    const container = document.getElementById('topicContainer');

    const homeLi = document.createElement('li');
    homeLi.innerHTML = `<a href="#home" data-topic="home">🏠 Home</a>`;
    topicList.appendChild(homeLi);

    const categories = [...new Set(topics.filter(t => t.id !== 'home').map(t => t.category))];
    categories.forEach(cat => {
        const catLi = document.createElement('li');
        catLi.className = 'nav-category';
        catLi.textContent = cat;
        topicList.appendChild(catLi);

        topics.filter(t => t.id !== 'home' && t.category === cat).forEach(t => {
            const a = document.createElement('a');
            a.href = `#${t.id}`;
            a.dataset.topic = t.id;
            a.innerHTML = `<span class="emoji">${t.emoji}</span>${t.title}`;
            const li = document.createElement('li');
            li.appendChild(a);
            topicList.appendChild(li);
        });
    });

    container.innerHTML = '';
    topics.forEach(t => {
        const section = document.createElement('section');
        section.id = t.id;
        section.className = 'topic-card';
        section.innerHTML = renderTopic(t);
        container.appendChild(section);
    });
}

function setupNavigation() {
    const links = document.querySelectorAll('#topicList a');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const toggle = document.getElementById('sidebarToggle');

    function showTopic(id) {
        document.querySelectorAll('.topic-card').forEach(s => s.style.display = 'none');
        const target = document.getElementById(id);
        if (target) target.style.display = 'block';
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`#topicList a[data-topic="${id}"]`);
        if (active) active.classList.add('active');
    }

    links.forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const id = a.dataset.topic;
            showTopic(id);
            if (window.innerWidth <= 850) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
            document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
        });
    });

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        links.forEach(a => {
            const topicId = a.dataset.topic;
            if (topicId === 'home') { a.parentElement.style.display = ''; return; }
            const topic = topics.find(t => t.id === topicId);
            const match = topic && (topic.title.toLowerCase().includes(term) ||
                                     topic.cn.includes(term) ||
                                     (topic.vocab && topic.vocab.some(v => v[0].includes(term) || v[2].toLowerCase().includes(term))));
            a.parentElement.style.display = match ? '' : 'none';
        });
        document.querySelectorAll('.nav-category').forEach(cat => {
            let next = cat.nextElementSibling;
            let visible = false;
            while (next && next.tagName === 'LI') {
                if (next.style.display !== 'none') visible = true;
                next = next.nextElementSibling;
            }
            cat.style.display = visible ? '' : 'none';
        });
    });

    showTopic('home');
}

// ── Link adding handler ──
function setupLinkManagement() {
    document.addEventListener('click', function(e) {
        // Add button
        if (e.target.classList.contains('link-add-btn')) {
            const section = e.target.closest('.links-section');
            const topicId = section.closest('.topic-card').id;
            const titleInput = section.querySelector('.link-title');
            const urlInput = section.querySelector('.link-url');
            const title = titleInput.value.trim();
            const url = urlInput.value.trim();
            if (!title || !url) return;
            const linksArr = getLinks(topicId);
            linksArr.push({ title, url });
            saveLinks(topicId, linksArr);
            // Refresh the topic display
            const topic = topics.find(t => t.id === topicId);
            const container = section.closest('.topic-card');
            container.innerHTML = renderTopic(topic);
            // Re-attach event delegation
            setupLinkManagement();
        }
        // Remove button
        if (e.target.classList.contains('link-remove')) {
            const index = e.target.dataset.index;
            const section = e.target.closest('.links-section');
            const topicId = section.closest('.topic-card').id;
            const linksArr = getLinks(topicId);
            linksArr.splice(index, 1);
            saveLinks(topicId, linksArr);
            const topic = topics.find(t => t.id === topicId);
            const container = section.closest('.topic-card');
            container.innerHTML = renderTopic(topic);
            setupLinkManagement();
        }
    });
}

// ── Quiz & Favorites (unchanged) ──
function setupQuiz() {
    const modal = document.getElementById('quizModal');
    const display = document.getElementById('quizDisplay');
    const optionsDiv = document.getElementById('quizOptions');
    const scoreSpan = document.getElementById('quizScore');
    let score = 0;

    function generateQuestion() {
        const allWords = [];
        topics.forEach(t => {
            if (t.vocab) t.vocab.forEach(v => allWords.push({ cn: v[0], py: v[1], en: v[2] }));
            if (t.phrases) t.phrases.forEach(p => allWords.push({ cn: p[0], py: p[1], en: p[2] }));
        });
        if (allWords.length === 0) return;
        const correct = allWords[Math.floor(Math.random() * allWords.length)];
        const distractors = [];
        while (distractors.length < 3) {
            const d = allWords[Math.floor(Math.random() * allWords.length)];
            if (d.en !== correct.en && !distractors.find(x => x.en === d.en)) distractors.push(d);
        }
        const allOptions = [correct, ...distractors].sort(() => Math.random() - 0.5);
        display.innerHTML = `<span style="font-family:var(--font-cn);font-size:2rem;">${correct.cn}</span><br><span style="color:#8b6914;">${correct.py}</span>`;
        optionsDiv.innerHTML = '';
        allOptions.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'quiz-option';
            btn.textContent = opt.en;
            btn.addEventListener('click', () => {
                if (opt.en === correct.en) {
                    btn.classList.add('correct');
                    score++;
                } else {
                    btn.classList.add('wrong');
                    optionsDiv.querySelectorAll('.quiz-option').forEach(b => {
                        if (b.textContent === correct.en) b.classList.add('correct');
                    });
                }
                scoreSpan.textContent = score;
                setTimeout(() => generateQuestion(), 1000);
            });
            optionsDiv.appendChild(btn);
        });
    }

    document.getElementById('startQuizBtn').addEventListener('click', () => {
        modal.classList.add('active');
        score = 0;
        scoreSpan.textContent = '0';
        generateQuestion();
    });
    document.getElementById('closeQuiz').addEventListener('click', () => modal.classList.remove('active'));
}

function setupFavorites() {
    const modal = document.getElementById('favoritesModal');
    const list = document.getElementById('favoritesList');
    document.getElementById('showFavoritesBtn').addEventListener('click', () => {
        list.innerHTML = '';
        if (favorites.length === 0) {
            list.innerHTML = '<p>No favorites yet. Star some words!</p>';
        } else {
            favorites.forEach(f => {
                const div = document.createElement('div');
                div.className = 'phrase-card';
                div.innerHTML = `<span class="cn-char">${f.word}</span> — <span class="pinyin-cell">${f.pinyin}</span><br><span class="en-cell">${f.meaning}</span>`;
                div.addEventListener('click', () => {
                    const index = favorites.findIndex(fav => fav.word === f.word);
                    if (index > -1) {
                        favorites.splice(index, 1);
                        saveFavorites();
                        setupFavorites();
                        document.getElementById('showFavoritesBtn').click();
                    }
                });
                list.appendChild(div);
            });
        }
        modal.classList.add('active');
    });
    document.getElementById('closeFavorites').addEventListener('click', () => modal.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', () => {
    buildUI();
    setupNavigation();
    setupQuiz();
    setupFavorites();
    setupKeyboardShortcuts();
    setupLinkManagement(); // handles dynamic add/remove
});