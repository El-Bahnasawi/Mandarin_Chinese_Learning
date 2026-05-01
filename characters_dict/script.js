// Convert numeric pinyin to accented
function numericToAccented(pinyin) {
  if (!pinyin) return "";
  const toneMap = {
    a: ["ā","á","ǎ","à"],
    e: ["ē","é","ě","è"],
    i: ["ī","í","ǐ","ì"],
    o: ["ō","ó","ǒ","ò"],
    u: ["ū","ú","ǔ","ù"],
    ü: ["ǖ","ǘ","ǚ","ǜ"],
  };
  const tone = parseInt(pinyin.slice(-1));
  if (isNaN(tone) || tone < 1 || tone > 4) return pinyin;
  const base = pinyin.slice(0, -1);
  for (let i = 0; i < base.length; i++) {
    const ch = base[i];
    if (ch in toneMap) {
      return base.slice(0, i) + toneMap[ch][tone-1] + base.slice(i+1);
    }
  }
  return base;
}

// Audio URL (pinyin-based)
function getAudioUrl(char, pinyinNumeric) {
  return `downloaded_clips/${pinyinNumeric}.mp3`;
}

// Build a card – returns a DOM node (or null if fails, but we guard against that)
function createCard(charObj) {
  const { char, pinyin, components, meaning, emoji, gifDuration, sentence } = charObj;

  const card = document.createElement('div');
  card.className = 'card';

  // Emoji
  if (emoji) {
    const emojiSpan = document.createElement('div');
    emojiSpan.className = 'char-emoji';
    emojiSpan.textContent = emoji;
    card.appendChild(emojiSpan);
  }

  // Static character display
  const charDisplay = document.createElement('div');
  charDisplay.className = 'char-display';
  charDisplay.textContent = char;

  // GIF container (hidden)
  const gifContainer = document.createElement('div');
  gifContainer.className = 'gif-container';
  gifContainer.style.display = 'none';
  const gifImg = document.createElement('img');
  gifImg.src = `stroke_gifs/${char}.gif`;
  gifImg.alt = `Stroke order for ${char}`;
  gifImg.onerror = () => { gifContainer.style.display = 'none'; };
  gifContainer.appendChild(gifImg);

  // Play button (▶️)
  const playBtn = document.createElement('button');
  playBtn.innerHTML = '▶️';
  playBtn.title = 'Play stroke animation (8 loops)';
  let gifTimer = null;
  const loopDuration = (gifDuration || 1) * 1000;
  const totalPlayTime = loopDuration * 8;

  function startGif() {
    gifContainer.style.display = 'block';
    charDisplay.style.display = 'none';
    playBtn.disabled = true;
    gifTimer = setTimeout(() => {
      gifContainer.style.display = 'none';
      charDisplay.style.display = 'block';
      playBtn.disabled = false;
    }, totalPlayTime);
  }

  playBtn.addEventListener('click', () => {
    if (gifTimer) clearTimeout(gifTimer);
    startGif();
  });

  // Audio button (🔊)
  const audioBtn = document.createElement('button');
  audioBtn.innerHTML = '🔊';
  audioBtn.title = 'Play pronunciation';
  const audio = new Audio(getAudioUrl(char, pinyin));
  audio.onerror = () => { audioBtn.disabled = true; };
  audioBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  });

  // Buttons row
  const buttonRow = document.createElement('div');
  buttonRow.className = 'button-row';
  buttonRow.appendChild(playBtn);
  buttonRow.appendChild(audioBtn);

  // Pinyin
  const pinyinElem = document.createElement('div');
  pinyinElem.className = 'pinyin';
  pinyinElem.textContent = numericToAccented(pinyin);

  // Component parts with meanings
  let componentsElem = null;
  if (components && components.length > 0) {
    componentsElem = document.createElement('div');
    componentsElem.className = 'components';
    const parts = components.map(comp => {
      const mean = (typeof componentMeanings !== 'undefined' && componentMeanings[comp])
        ? `<sub>${componentMeanings[comp]}</sub>`
        : '';
      return `<span>${comp}${mean}</span>`;
    });
    componentsElem.innerHTML = `🔍 ${char} = ${parts.join(' + ')}`;
  }

  // Meaning
  let meaningElem = null;
  if (meaning) {
    meaningElem = document.createElement('div');
    meaningElem.className = 'meaning';
    meaningElem.textContent = meaning;
  }

  // Example sentence (replaces image placeholder)
  const sentenceBox = document.createElement('div');
  sentenceBox.className = 'sentence-box';
  if (sentence && sentence.trim() !== '') {
    sentenceBox.innerHTML = `📖 <em>${sentence}</em>`;
  } else {
    sentenceBox.textContent = '📝 Example coming soon';
  }

  // Assemble card – order: emoji (already added), charDisplay, gifContainer, buttonRow, pinyin, components, meaning, sentenceBox
  card.appendChild(charDisplay);
  card.appendChild(gifContainer);
  card.appendChild(buttonRow);
  card.appendChild(pinyinElem);
  if (componentsElem) card.appendChild(componentsElem);
  if (meaningElem) card.appendChild(meaningElem);
  card.appendChild(sentenceBox);

  return card;
}

// Render all sections with deduplication
function renderSections() {
  const container = document.getElementById('sections-container');
  container.innerHTML = '';

  // Deduplicate characters (keep first occurrence)
  const seen = new Set();
  const uniqueCharacters = characters.filter(ch => {
    if (seen.has(ch.char)) return false;
    seen.add(ch.char);
    return true;
  });
  if (uniqueCharacters.length < characters.length) {
    console.warn(`Removed ${characters.length - uniqueCharacters.length} duplicate characters.`);
  }

  // Map radical -> characters
  const radicalMap = new Map();
  uniqueCharacters.forEach(ch => {
    const rad = ch.radical;
    if (!radicalMap.has(rad)) radicalMap.set(rad, []);
    radicalMap.get(rad).push(ch);
  });

  // Build sections
  radicalSections.forEach(section => {
    const secTitle = document.createElement('h2');
    secTitle.className = 'section-title';
    secTitle.textContent = `${section.emoji} ${section.title}`;
    container.appendChild(secTitle);

    section.radicals.forEach(rad => {
      const chars = radicalMap.get(rad);
      if (!chars || chars.length === 0) return;

      const radHeader = document.createElement('h3');
      radHeader.className = 'radical-subheading';
      radHeader.textContent = `${rad} radical`;
      container.appendChild(radHeader);

      const grid = document.createElement('div');
      grid.className = 'radical-grid';

      chars.forEach(ch => {
        const card = createCard(ch);
        if (card && card instanceof Node) {
          grid.appendChild(card);
        }
      });

      container.appendChild(grid);
    });
  });
}

window.addEventListener('DOMContentLoaded', renderSections);