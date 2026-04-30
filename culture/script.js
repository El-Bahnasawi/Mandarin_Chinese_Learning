document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // ── Build sidebar ──
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-logo"><span class="zhong">中</span>华 · CULTURE</div>
        <nav>
            <ul id="nav-list"></ul>
        </nav>
    `;
    app.appendChild(sidebar);

    // ── Build main content area ──
    const main = document.createElement('main');
    main.className = 'main-content';
    app.appendChild(main);

    const navList = document.getElementById('nav-list');

    // Create sections and nav items from data
    sectionsData.forEach(section => {
        // Add nav link
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${section.id}" class="nav-link" data-section="${section.id}">
            <span class="nav-icon">${section.icon}</span> ${section.title}
        </a>`;
        navList.appendChild(li);

        // Add section in main
        const sec = document.createElement('section');
        sec.id = section.id;
        sec.innerHTML = `<h2>${section.icon} ${section.title}</h2>${section.html}`;
        main.appendChild(sec);
    });

    // ── Active link tracking ──
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '-40px 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // Smooth scroll for nav clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.section;
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});