(function() {
  const app = document.getElementById('app');

  radicalData.forEach(category => {
    // Create section wrapper
    const section = document.createElement('div');
    section.className = 'category-section';
    section.id = category.id;

    // Category title
    const title = document.createElement('h2');
    title.className = 'category-title';
    title.innerHTML = `${category.emoji} ${category.title}`;
    section.appendChild(title);

    // Card grid
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    section.appendChild(grid);

    // Create each radical card
    category.radicals.forEach(radical => {
      const card = document.createElement('div');
      card.className = 'card';

      // Accent bar
      const accent = document.createElement('div');
      accent.className = 'card-accent';
      accent.style.background = radical.accentColor || '#ccc';
      card.appendChild(accent);

      // Card body
      const body = document.createElement('div');
      body.className = 'card-body';

      // Radical showcase
      const showcase = document.createElement('div');
      showcase.className = 'radical-showcase';
      showcase.innerHTML = `
        <span class="radical-char">${radical.radicalChar}</span>
        <div class="radical-info">
          <span class="radical-name">${radical.radicalNames.join(' / ')}</span>
          <span class="radical-pinyin">${radical.pinyin}</span>
          <span class="radical-meaning">${radical.meaning}</span>
        </div>
        <span class="radical-emoji">${radical.emoji}</span>
      `;
      body.appendChild(showcase);

      // Variant
      if (radical.variant) {
        const variant = document.createElement('span');
        variant.className = 'variant-row';
        variant.textContent = radical.variant;
        body.appendChild(variant);
      }

      // Associated characters
      const assocLabel = document.createElement('p');
      assocLabel.className = 'assoc-label';
      assocLabel.textContent = '📎 Associated Characters:';
      body.appendChild(assocLabel);

      const assocChars = document.createElement('div');
      assocChars.className = 'assoc-chars';
      radical.associated.forEach(char => {
        const chip = document.createElement('span');
        chip.className = 'assoc-chip';
        chip.innerHTML = `${char.char}<span class="py">${char.pinyin} · ${char.meaning}</span>`;
        assocChars.appendChild(chip);
      });
      body.appendChild(assocChars);

      // Example sentences
      radical.examples.forEach(example => {
        const box = document.createElement('div');
        box.className = 'example-box';
        box.innerHTML = `
          <div class="example-hanzi">${example.hanzi}</div>
          <div class="example-pinyin">${example.pinyin}</div>
          <div class="example-trans">${example.trans}</div>
        `;
        body.appendChild(box);
      });

      card.appendChild(body);
      grid.appendChild(card);
    });

    app.appendChild(section);
  });
})();