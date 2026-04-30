(function() {
    const contentList = document.getElementById('content');
    const sidebarNav = document.getElementById('sidebarNav');

    const categories = {
        'Basics': ['sentence-structure', 'essential-verbs', 'questions', 'negation', 'time', 'adverbs'],
        'Nouns & Modification': ['measure-words', 'ordinals', 'demonstratives', 'location-direction', 'adjectives', 'comparatives', 'degree-complement'],
        'Verbs & Aspect': ['tenses', 'modals', 'duration-frequency', 'reduplication', 'ba-structure'],
        'Complex Sentences': ['clauses'],
        'Practice': ['practice']
    };

    const sectionCategory = {};
    for (let [cat, ids] of Object.entries(categories)) {
        ids.forEach(id => sectionCategory[id] = cat);
    }

    sidebarNav.innerHTML = '';
    contentList.innerHTML = '';

    grammarSections.forEach(section => {
        // Create full‑width card
        const card = document.createElement('div');
        card.className = 'section';
        card.id = section.id;
        card.innerHTML = `
            <h2><span class="emoji">${section.emoji}</span> ${section.title}</h2>
            <p class="tagline">${section.tagline}</p>
            ${section.html}
        `;
        contentList.appendChild(card);
    });

    let currentCat = '';
    grammarSections.forEach(section => {
        const cat = sectionCategory[section.id];
        if (!cat) return;

        if (cat !== currentCat) {
            const catTitle = document.createElement('div');
            catTitle.className = 'category-title';
            catTitle.textContent = cat;
            sidebarNav.appendChild(catTitle);
            currentCat = cat;
        }

        const link = document.createElement('a');
        link.href = `#${section.id}`;
        const labels = {
            'sentence-structure': 'Sentence Structure',
            'essential-verbs': '是·有·在',
            'questions': 'Questions',
            'measure-words': 'Measure Words',
            'ordinals': 'Ordinals',
            'demonstratives': 'This/That',
            'location-direction': 'Direction',
            'particles': '的·了',
            'negation': 'Negation',
            'time': 'Time Words',
            'adverbs': 'Adverbs',
            'tenses': 'Tenses & Aspect',
            'modals': 'Modals',
            'adjectives': 'Adjectives',
            'comparatives': 'Comparisons',
            'degree-complement': 'Degree (得)',
            'duration-frequency': 'Duration/Freq.',
            'reduplication': 'Reduplication',
            'ba-structure': '把 Structure',
            'clauses': 'Clauses',
            'practice': 'Practice'
        };
        link.textContent = labels[section.id] || section.title;
        sidebarNav.appendChild(link);
    });

    window.toggleAnswer = function(id) {
        const el = document.getElementById(id);
        if (el) el.classList.toggle('show');
    };

    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    function updateActiveNav() {
        let currentId = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150) currentId = section.id;
        });
        sidebarLinks.forEach(link => {
            link.classList.remove('active-section');
            if (link.getAttribute('href') === '#' + currentId) {
                link.classList.add('active-section');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    console.log('📘 Clean single‑column grammar guide loaded!');
})();