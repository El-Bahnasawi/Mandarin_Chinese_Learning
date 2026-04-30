const grammarSections = [
  // ────────── BASICS ──────────
  {
    id: 'sentence-structure',
    emoji: '🏗️',
    title: 'Basic Sentence Structure (SVO)',
    tagline: 'Chinese word order is Subject–Verb–Object — same as English. No conjugation!',
    html: `
      <p>The core pattern is <strong>Subject + Verb + Object</strong>. Verbs never change form, so you don't need to worry about tenses through the verb itself.</p>
      <div class="example-box">
        <span class="badge">SVO</span>
        <div class="cn">我 爱 你。</div>
        <div class="pinyin">Wǒ ài nǐ.</div>
        <div class="en">I love you.</div>
      </div>
      <div class="example-box">
        <span class="badge">SVO</span>
        <div class="cn">他 吃 苹果。</div>
        <div class="pinyin">Tā chī píngguǒ.</div>
        <div class="en">He eats an apple.</div>
      </div>
      <h3 style="margin-top:24px;">Topic-Comment (The "As for…" Pattern)</h3>
      <p>Chinese often starts with the <strong>topic</strong> (what you're talking about), followed by a comment.</p>
      <div class="example-box">
        <span class="badge">Topic-Comment</span>
        <div class="cn">中国菜，我 很 喜欢。</div>
        <div class="pinyin">Zhōngguó cài, wǒ hěn xǐhuān.</div>
        <div class="en">Chinese food — I really like it.</div>
      </div>
    `
  },
  {
    id: 'essential-verbs',
    emoji: '🔤',
    title: 'Essential Verbs: 是, 有, 在',
    tagline: 'Three tiny words that carry "to be", "to have" and "to be at".',
    html: `
      <div class="grid-2">
        <div style="border-left:4px solid var(--accent); padding-left:16px;">
          <h3 style="color:var(--accent);">是 (shì) – to be</h3>
          <p>Links two nouns (identity).</p>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn">我 <span class="hl">是</span> 学生。</div>
            <div class="pinyin">Wǒ <span class="hl">shì</span> xuésheng.</div>
            <div class="en">I am a student.</div>
          </div>
        </div>
        <div style="border-left:4px solid #c49a2c; padding-left:16px;">
          <h3 style="color:#b8860b;">有 (yǒu) – to have</h3>
          <p>Possession or existence.</p>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn">我 <span class="hl-gold">有</span> 一个 哥哥。</div>
            <div class="pinyin">Wǒ <span class="hl-gold">yǒu</span> yī gè gēge.</div>
            <div class="en">I have an older brother.</div>
          </div>
        </div>
      </div>
      <div style="border-left:4px solid #6b8e5a; padding-left:16px; margin-top:18px;">
        <h3 style="color:#4a6741;">在 (zài) – to be at / in</h3>
        <p>Location.</p>
        <div class="example-box" style="margin:10px 0;">
          <div class="cn">他 <span class="hl-green">在</span> 家。</div>
          <div class="pinyin">Tā <span class="hl-green">zài</span> jiā.</div>
          <div class="en">He is at home.</div>
        </div>
      </div>
      <div class="tip">
        <span class="tip-icon">💡</span>
        <span><strong>是 is NOT used with adjectives.</strong> Don't say "我是高". Instead use "我 很 高" (I am tall). We'll cover adjectives later.</span>
      </div>
    `
  },
  {
    id: 'questions',
    emoji: '❓',
    title: 'Asking Questions',
    tagline: 'No complicated word order changes — just add a particle or use a question word in place.',
    html: `
      <h3>① 吗 (ma) – Yes/No questions</h3>
      <div class="example-box">
        <div class="cn">你 好 → 你 好 <span class="hl">吗</span>？</div>
        <div class="pinyin">Nǐ hǎo → Nǐ hǎo <span class="hl">ma</span>?</div>
        <div class="en">Hello → How are you?</div>
      </div>
      <h3>② 呢 (ne) – "What about…?"</h3>
      <div class="example-box">
        <div class="cn">我 很好，你 <span class="hl">呢</span>？</div>
        <div class="pinyin">Wǒ hěn hǎo, nǐ <span class="hl">ne</span>?</div>
        <div class="en">I'm good. And you?</div>
      </div>
      <h3>③ 吧 (ba) – Suggestions</h3>
      <div class="example-box">
        <div class="cn">我们 走 <span class="hl">吧</span>。</div>
        <div class="pinyin">Wǒmen zǒu <span class="hl">ba</span>.</div>
        <div class="en">Let's go.</div>
      </div>
      <h3>④ Question Words</h3>
      <table class="mini-table">
        <thead><tr><th>Word</th><th>Pinyin</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td>什么</td><td>shénme</td><td>What</td></tr>
          <tr><td>谁</td><td>shéi / shuí</td><td>Who</td></tr>
          <tr><td>哪里 / 哪儿</td><td>nǎlǐ / nǎr</td><td>Where</td></tr>
          <tr><td>什么时候</td><td>shénme shíhou</td><td>When</td></tr>
          <tr><td>为什么</td><td>wèishénme</td><td>Why</td></tr>
          <tr><td>怎么</td><td>zěnme</td><td>How</td></tr>
          <tr><td>几 / 多少</td><td>jǐ / duōshao</td><td>How many / much</td></tr>
        </tbody>
      </table>
      <div class="tip"><span class="tip-icon">🧠</span><span>Place the question word exactly where the answer goes: <em>你 是 <span class="hl">谁</span>？</em> (You are who?)</span></div>
    `
  },
  {
    id: 'negation',
    emoji: '🚫',
    title: 'Negation: 不 (bù) vs 没 (méi)',
    tagline: 'Two different "no" words — choose based on time and meaning.',
    html: `
      <div class="grid-2">
        <div style="border:2px solid #e8d5b0; border-radius:12px; padding:20px;">
          <h3 style="color:var(--accent);">不 (bù)</h3>
          <p><strong>Present & Future</strong><br>Habits, adjectives, future actions.</p>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn">我 <span class="hl">不</span> 喝 咖啡。</div>
            <div class="pinyin">Wǒ <span class="hl">bù</span> hē kāfēi.</div>
            <div class="en">I don't drink coffee.</div>
          </div>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn">他 <span class="hl">不</span> 忙。</div>
            <div class="pinyin">Tā <span class="hl">bù</span> máng.</div>
            <div class="en">He is not busy.</div>
          </div>
        </div>
        <div style="border:2px solid #e8d5b0; border-radius:12px; padding:20px;">
          <h3 style="color:#b8860b;">没 (méi)</h3>
          <p><strong>Past actions / 有</strong><br>Negates completed actions and 有.</p>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn">我 <span class="hl-gold">没</span> 去。</div>
            <div class="pinyin">Wǒ <span class="hl-gold">méi</span> qù.</div>
            <div class="en">I didn't go.</div>
          </div>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn">我 <span class="hl-gold">没</span> 有 车。</div>
            <div class="pinyin">Wǒ <span class="hl-gold">méi</span> yǒu chē.</div>
            <div class="en">I don't have a car.</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'time',
    emoji: '⏰',
    title: 'Time Words & Word Order',
    tagline: 'Time expressions usually come before the verb — at the start or right after the subject.',
    html: `
      <p><strong>Pattern:</strong> Subject + <span class="hl-gold">Time</span> + Verb (+ Object)</p>
      <div class="example-box">
        <div class="cn">我 <span class="hl-gold">明天</span> 去 上海。</div>
        <div class="pinyin">Wǒ <span class="hl-gold">míngtiān</span> qù Shànghǎi.</div>
        <div class="en">I'm going to Shanghai tomorrow.</div>
      </div>
      <div class="example-box">
        <div class="cn"><span class="hl-gold">昨天</span> 他 没 来。</div>
        <div class="pinyin"><span class="hl-gold">Zuótiān</span> tā méi lái.</div>
        <div class="en">Yesterday he didn't come.</div>
      </div>
      <p style="margin-top:12px;"><strong>Common time words:</strong> 今天 (jīntiān - today), 明天 (míngtiān - tomorrow), 昨天 (zuótiān - yesterday), 现在 (xiànzài - now), 每天 (měitiān - every day)</p>
    `
  },
  {
    id: 'adverbs',
    emoji: '🔹',
    title: 'Common Adverbs: 也, 都, 只, 还',
    tagline: 'Four tiny adverbs you’ll use every day — "also", "all", "only", "still".',
    html: `
      <table class="mini-table">
        <thead><tr><th>Adverb</th><th>Pinyin</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><strong>也</strong></td><td>yě</td><td>also / too</td></tr>
          <tr><td><strong>都</strong></td><td>dōu</td><td>all / both</td></tr>
          <tr><td><strong>只</strong></td><td>zhǐ</td><td>only</td></tr>
          <tr><td><strong>还</strong></td><td>hái</td><td>still / in addition</td></tr>
        </tbody>
      </table>
      <div class="example-box">
        <div class="cn">我 <span class="hl">也</span> 去。</div>
        <div class="pinyin">Wǒ <span class="hl">yě</span> qù.</div>
        <div class="en">I am also going.</div>
      </div>
      <div class="example-box">
        <div class="cn">他们 <span class="hl">都</span> 是 学生。</div>
        <div class="pinyin">Tāmen <span class="hl">dōu</span> shì xuésheng.</div>
        <div class="en">They are all students.</div>
      </div>
      <div class="example-box">
        <div class="cn">我 <span class="hl">只</span> 有 一个 哥哥。</div>
        <div class="pinyin">Wǒ <span class="hl">zhǐ</span> yǒu yī gè gēge.</div>
        <div class="en">I only have one older brother.</div>
      </div>
      <div class="example-box">
        <div class="cn">我 <span class="hl">还</span> 想 吃。</div>
        <div class="pinyin">Wǒ <span class="hl">hái</span> xiǎng chī.</div>
        <div class="en">I still want to eat / I want to eat more.</div>
      </div>
      <div class="tip"><span class="tip-icon">📌</span><span>Place these adverbs <strong>before the verb</strong> (or before 是/有). 也 and 都 come before 不/没: <em>我 也 不 知道</em> (I also don't know).</span></div>
    `
  },

  // ────────── NOUNS & MODIFICATION ──────────
  {
    id: 'measure-words',
    emoji: '📏',
    title: 'Measure Words (量词 liàngcí)',
    tagline: "You can't say \"a book\" — you say \"one [measure word] book\".",
    html: `
      <p><strong>Pattern:</strong> Number + <span class="hl-gold">Measure Word</span> + Noun</p>
      <table class="mini-table">
        <thead><tr><th>MW</th><th>Used for</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><strong>个 (gè)</strong></td><td>General / people</td><td>一<span class="hl">个</span>人 — one person</td></tr>
          <tr><td><strong>本 (běn)</strong></td><td>Books</td><td>一<span class="hl">本</span>书 — one book</td></tr>
          <tr><td><strong>杯 (bēi)</strong></td><td>Cups / drinks</td><td>一<span class="hl">杯</span>茶 — a cup of tea</td></tr>
          <tr><td><strong>张 (zhāng)</strong></td><td>Flat objects</td><td>一<span class="hl">张</span>纸 — a sheet of paper</td></tr>
          <tr><td><strong>只 (zhī)</strong></td><td>Animals, one of a pair</td><td>一<span class="hl">只</span>猫 — a cat</td></tr>
          <tr><td><strong>条 (tiáo)</strong></td><td>Long, flexible</td><td>一<span class="hl">条</span>鱼 — a fish</td></tr>
          <tr><td><strong>辆 (liàng)</strong></td><td>Vehicles</td><td>一<span class="hl">辆</span>车 — a car</td></tr>
        </tbody>
      </table>
      <div class="tip"><span class="tip-icon">👍</span><span>When unsure, use <span class="hl">个 (gè)</span> — the universal fallback.</span></div>
    `
  },
  {
    id: 'ordinals',
    emoji: '🔢',
    title: 'Ordinal Numbers (1st, 2nd, 3rd…)',
    tagline: 'Just put 第 (dì) before the number — it’s that easy.',
    html: `
      <p><strong>Pattern:</strong> <span class="hl">第</span> (dì) + Number + Measure Word + Noun</p>
      <table class="mini-table">
        <thead><tr><th>Ordinal</th><th>Chinese</th><th>Pinyin</th></tr></thead>
        <tbody>
          <tr><td>1st</td><td>第一</td><td>dì yī</td></tr>
          <tr><td>2nd</td><td>第二</td><td>dì èr</td></tr>
          <tr><td>3rd</td><td>第三</td><td>dì sān</td></tr>
          <tr><td>4th</td><td>第四</td><td>dì sì</td></tr>
          <tr><td>5th</td><td>第五</td><td>dì wǔ</td></tr>
        </tbody>
      </table>
      <div class="example-box">
        <div class="cn">我 是 <span class="hl">第</span> 一 个。</div>
        <div class="pinyin">Wǒ shì <span class="hl">dì</span> yī gè.</div>
        <div class="en">I am the first one.</div>
      </div>
      <div class="example-box">
        <div class="cn">这 是 他 <span class="hl">第</span> 三 次 来 中国。</div>
        <div class="pinyin">Zhè shì tā <span class="hl">dì</span> sān cì lái Zhōngguó.</div>
        <div class="en">This is his third time coming to China.</div>
      </div>
      <div class="tip"><span class="tip-icon">📌</span><span>Sometimes the measure word is dropped with certain nouns: <strong>第一课</strong> (dì yī kè) = lesson one, <strong>第二天</strong> = the next day.</span></div>
    `
  },
  {
    id: 'demonstratives',
    emoji: '👉',
    title: 'This, That, Here, There',
    tagline: 'Point at things with 这 (this) and 那 (that), always with a measure word.',
    html: `
      <div class="grid-2">
        <div>
          <h3 style="color:var(--accent);">这 (zhè) – this</h3>
          <p><strong>这 + Measure Word + Noun</strong></p>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn"><span class="hl">这</span> 个 人</div>
            <div class="pinyin"><span class="hl">zhè</span> ge rén</div>
            <div class="en">this person</div>
          </div>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn"><span class="hl">这</span> 本 书</div>
            <div class="pinyin"><span class="hl">zhè</span> běn shū</div>
            <div class="en">this book</div>
          </div>
        </div>
        <div>
          <h3 style="color:#b8860b;">那 (nà) – that</h3>
          <p><strong>那 + Measure Word + Noun</strong></p>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn"><span class="hl-gold">那</span> 个 苹果</div>
            <div class="pinyin"><span class="hl-gold">nà</span> ge píngguǒ</div>
            <div class="en">that apple</div>
          </div>
          <div class="example-box" style="margin:10px 0;">
            <div class="cn"><span class="hl-gold">那</span> 杯 茶</div>
            <div class="pinyin"><span class="hl-gold">nà</span> bēi chá</div>
            <div class="en">that cup of tea</div>
          </div>
        </div>
      </div>
      <h3 style="margin-top:20px;">Here / There</h3>
      <table class="mini-table">
        <tr><td><strong>这里 / 这儿</strong></td><td>zhèlǐ / zhèr</td><td>here</td></tr>
        <tr><td><strong>那里 / 那儿</strong></td><td>nàlǐ / nàr</td><td>there</td></tr>
      </table>
      <div class="example-box">
        <div class="cn">我 在 <span class="hl">这里</span>。</div>
        <div class="pinyin">Wǒ zài <span class="hl">zhèlǐ</span>.</div>
        <div class="en">I am here.</div>
      </div>
      <div class="tip"><span class="tip-icon">✋</span><span>When saying "this one" or "that one" without a noun, just use <strong>这个 (zhège)</strong> or <strong>那个 (nàge)</strong>.</span></div>
    `
  },
  {
    id: 'location-direction',
    emoji: '🧭',
    title: 'Location & Direction: 来, 去, 从…到…',
    tagline: 'How to say "go to", "come to", and "from...to..."',
    html: `
      <h3>去 (qù) – go to</h3>
      <div class="example-box">
        <div class="cn">我 <span class="hl">去</span> 学校。</div>
        <div class="pinyin">Wǒ <span class="hl">qù</span> xuéxiào.</div>
        <div class="en">I go to school.</div>
      </div>
      <h3>来 (lái) – come to</h3>
      <div class="example-box">
        <div class="cn">他 <span class="hl">来</span> 中国 了。</div>
        <div class="pinyin">Tā <span class="hl">lái</span> Zhōngguó le.</div>
        <div class="en">He came to China.</div>
      </div>
      <h3>从…到… (cóng…dào…) – from…to…</h3>
      <div class="example-box">
        <div class="cn"><span class="hl">从</span> 家 <span class="hl">到</span> 学校 很 远。</div>
        <div class="pinyin"><span class="hl">Cóng</span> jiā <span class="hl">dào</span> xuéxiào hěn yuǎn.</div>
        <div class="en">From home to school is very far.</div>
      </div>
      <div class="tip"><span class="tip-icon">🚶</span><span>Use 去 for movement away from the speaker, 来 for movement towards the speaker. Combine with places to give direction.</span></div>
    `
  },
  {
    id: 'adjectives',
    emoji: '🌈',
    title: 'Adjectives – No "to be" Needed',
    tagline: "Adjectives behave like verbs — you don't use 是. Use 很 (hěn) to link them naturally.",
    html: `
      <div class="example-box">
        <div class="cn">她 <span class="hl">很</span> 漂亮。</div>
        <div class="pinyin">Tā <span class="hl">hěn</span> piàoliang.</div>
        <div class="en">She is beautiful. (lit. "She very beautiful")</div>
      </div>
      <div class="example-box">
        <div class="cn">这个 苹果 <span class="hl">很</span> 大。</div>
        <div class="pinyin">Zhège píngguǒ <span class="hl">hěn</span> dà.</div>
        <div class="en">This apple is big.</div>
      </div>
      <div class="tip">
        <span class="tip-icon">⚠️</span>
        <span><strong>Never say "她是漂亮".</strong> Always insert <span class="hl">很</span> (even if you don't mean "very") — it makes the sentence sound complete.</span>
      </div>
      <h3 style="margin-top:20px;">Plurals: 们 (men)</h3>
      <p>Add <span class="hl">们</span> to pronouns or people nouns (never objects).</p>
      <table class="mini-table">
        <tr><td>我 (wǒ) — I</td><td>→ 我们 (wǒmen) — We</td></tr>
        <tr><td>你 (nǐ) — You</td><td>→ 你们 (nǐmen) — You (plural)</td></tr>
        <tr><td>他/她 (tā)</td><td>→ 他们/她们 (tāmen) — They</td></tr>
        <tr><td>朋友 (péngyou)</td><td>→ 朋友们 (péngyoumen) — Friends</td></tr>
      </table>
    `
  },
  {
    id: 'comparatives',
    emoji: '⚖️',
    title: 'Comparisons: A 比 B + Adj.',
    tagline: 'Learn how to compare people and things — taller, better, more beautiful.',
    html: `
      <h3>Basic Comparison: A <span class="hl">比</span> B + Adjective</h3>
      <p>“A is more Adj than B”. No need to change the adjective!</p>
      <div class="example-box">
        <div class="cn">我 <span class="hl">比</span> 他 高。</div>
        <div class="pinyin">Wǒ <span class="hl">bǐ</span> tā gāo.</div>
        <div class="en">I am taller than him.</div>
      </div>
      <div class="example-box">
        <div class="cn">这个 <span class="hl">比</span> 那个 好。</div>
        <div class="pinyin">Zhège <span class="hl">bǐ</span> nàge hǎo.</div>
        <div class="en">This is better than that.</div>
      </div>

      <h3>Negative Comparison: A <span class="hl">没有</span> B + Adj</h3>
      <p>“A is not as Adj as B”. Uses 没有 (don't have).</p>
      <div class="example-box">
        <div class="cn">我 <span class="hl">没有</span> 他 高。</div>
        <div class="pinyin">Wǒ <span class="hl">méiyǒu</span> tā gāo.</div>
        <div class="en">I am not as tall as him.</div>
      </div>

      <h3>Equality: A <span class="hl-gold">跟</span> B <span class="hl-gold">一样</span> + Adj</h3>
      <p>“A is as Adj as B”.</p>
      <div class="example-box">
        <div class="cn">我 <span class="hl-gold">跟</span> 他 <span class="hl-gold">一样</span> 高。</div>
        <div class="pinyin">Wǒ <span class="hl-gold">gēn</span> tā <span class="hl-gold">yīyàng</span> gāo.</div>
        <div class="en">I am as tall as him.</div>
      </div>

      <h3>Superlative: <span class="hl-blue">最</span> (zuì) – the most</h3>
      <p>Simply place 最 before the adjective.</p>
      <div class="example-box">
        <div class="cn">他 <span class="hl-blue">最</span> 高。</div>
        <div class="pinyin">Tā <span class="hl-blue">zuì</span> gāo.</div>
        <div class="en">He is the tallest.</div>
      </div>
      <div class="example-box">
        <div class="cn">这个 <span class="hl-blue">最</span> 好吃。</div>
        <div class="pinyin">Zhège <span class="hl-blue">zuì</span> hǎochī.</div>
        <div class="en">This is the most delicious.</div>
      </div>

      <h3>“Even more”: <span class="hl-green">更</span> (gèng)</h3>
      <p>Use 更 to say “even more …” or “-er”.</p>
      <div class="example-box">
        <div class="cn">那个 <span class="hl-green">更</span> 贵。</div>
        <div class="pinyin">Nàge <span class="hl-green">gèng</span> guì.</div>
        <div class="en">That one is even more expensive.</div>
      </div>
      <div class="tip"><span class="tip-icon">🧠</span><span>With 比, you cannot add 很 before the adjective. Don't say “我 比 他 很 高” — just say “我 比 他 高”.</span></div>
    `
  },
  {
    id: 'degree-complement',
    emoji: '📏',
    title: 'Degree Complement: 得 (de)',
    tagline: 'Describe how an action is done: "He runs very fast."',
    html: `
      <p><strong>Pattern:</strong> Verb + <span class="hl">得</span> + Adjective</p>
      <div class="example-box">
        <div class="cn">他 跑 <span class="hl">得</span> 很 快。</div>
        <div class="pinyin">Tā pǎo <span class="hl">de</span> hěn kuài.</div>
        <div class="en">He runs very fast.</div>
      </div>
      <div class="example-box">
        <div class="cn">我 说 <span class="hl">得</span> 不 好。</div>
        <div class="pinyin">Wǒ shuō <span class="hl">de</span> bù hǎo.</div>
        <div class="en">I don't speak well.</div>
      </div>
      <div class="tip"><span class="tip-icon">💡</span><span>The negative form is Verb + 得 + 不 + Adjective: <em>他 起 得 不 早</em> (He doesn't get up early). Not to be confused with 的 (possession).</span></div>
    `
  },

  // ────────── VERBS & ASPECT ──────────
  {
    id: 'tenses',
    emoji: '⏳',
    title: 'Tenses & Aspect',
    tagline: 'Chinese does not conjugate verbs — instead, use time words, particles, and aspect markers.',
    html: `
      <h3>Past (completed) — 了 (le) / 过 (guo)</h3>
      <div class="example-box">
        <div class="cn">我 吃 <span class="hl">了</span> 饭。</div>
        <div class="pinyin">Wǒ chī <span class="hl">le</span> fàn.</div>
        <div class="en">I ate (a meal).</div>
      </div>
      <div class="example-box">
        <div class="cn">我 去 <span class="hl">过</span> 中国。</div>
        <div class="pinyin">Wǒ qù <span class="hl">guo</span> Zhōngguó.</div>
        <div class="en">I have been to China (experience).</div>
      </div>
      <h3>Present / Habitual — 每天 (měitiān) etc.</h3>
      <div class="example-box">
        <div class="cn">我 <span class="hl-gold">每天</span> 喝 茶。</div>
        <div class="pinyin">Wǒ <span class="hl-gold">měitiān</span> hē chá.</div>
        <div class="en">I drink tea every day.</div>
      </div>
      <h3>Future — 会 (huì) / 要 (yào) / 将 (jiāng)</h3>
      <div class="example-box">
        <div class="cn">我 <span class="hl-blue">会</span> 去 机场。</div>
        <div class="pinyin">Wǒ <span class="hl-blue">huì</span> qù jīchǎng.</div>
        <div class="en">I will go to the airport.</div>
      </div>
      <div class="example-box">
        <div class="cn">我 <span class="hl-blue">要</span> 去 中国。</div>
        <div class="pinyin">Wǒ <span class="hl-blue">yào</span> qù Zhōngguó.</div>
        <div class="en">I am going to China (plan/intention).</div>
      </div>
      <h3>Progressive — 在 (zài) / 正在 (zhèngzài) / 着 (zhe)</h3>
      <div class="example-box">
        <div class="cn">我 <span class="hl-green">在</span> 吃饭。</div>
        <div class="pinyin">Wǒ <span class="hl-green">zài</span> chīfàn.</div>
        <div class="en">I am eating (right now).</div>
      </div>
      <div class="tip"><span class="tip-icon">📌</span><span>Notice that the main verb stays the same. The time information is carried by separate words.</span></div>
    `
  },
  {
    id: 'modals',
    emoji: '🧰',
    title: 'Modals: Should, Could, Can, Must',
    tagline: 'Express possibility, obligation, and ability with these important helper verbs.',
    html: `
      <table class="mini-table">
        <thead><tr><th>Modal</th><th>Pinyin</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><strong>可以</strong></td><td>kěyǐ</td><td>can / may (permission, possibility)</td></tr>
          <tr><td><strong>会</strong></td><td>huì</td><td>can (learned skill) / will</td></tr>
          <tr><td><strong>能</strong></td><td>néng</td><td>can / be able to (physical ability, possibility)</td></tr>
          <tr><td><strong>应该</strong></td><td>yīnggāi</td><td>should / ought to</td></tr>
          <tr><td><strong>要</strong></td><td>yào</td><td>want / need / going to</td></tr>
          <tr><td><strong>必须</strong></td><td>bìxū</td><td>must / have to</td></tr>
        </tbody>
      </table>
      <div class="example-box">
        <div class="cn">你 <span class="hl">可以</span> 坐 这里。</div>
        <div class="pinyin">Nǐ <span class="hl">kěyǐ</span> zuò zhèlǐ.</div>
        <div class="en">You can sit here.</div>
      </div>
      <div class="example-box">
        <div class="cn">我 <span class="hl">应该</span> 多 练习。</div>
        <div class="pinyin">Wǒ <span class="hl">yīnggāi</span> duō liànxí.</div>
        <div class="en">I should practice more.</div>
      </div>
      <div class="tip"><span class="tip-icon">❗</span><span><strong>不要 (búyào)</strong> is the negative command: "Don't!" — e.g., 不要走 (Don't go).</span></div>
    `
  },
  {
    id: 'duration-frequency',
    emoji: '🔄',
    title: 'Duration & Frequency',
    tagline: 'Say how long you do something and how many times.',
    html: `
      <h3>Duration: Verb + (了) + Duration</h3>
      <div class="example-box">
        <div class="cn">我 学 <span class="hl">了</span> 两 个 小时。</div>
        <div class="pinyin">Wǒ xué <span class="hl">le</span> liǎng gè xiǎoshí.</div>
        <div class="en">I studied for two hours.</div>
      </div>
      <h3>Frequency: Verb + Number + 次/遍</h3>
      <p>次 (cì) = times; 遍 (biàn) = complete action from start to finish.</p>
      <div class="example-box">
        <div class="cn">我 去 <span class="hl">过</span> 三 <span class="hl">次</span>。</div>
        <div class="pinyin">Wǒ qù <span class="hl">guo</span> sān <span class="hl">cì</span>.</div>
        <div class="en">I’ve been three times.</div>
      </div>
      <div class="example-box">
        <div class="cn">请 再 说 一 <span class="hl">遍</span>。</div>
        <div class="pinyin">Qǐng zài shuō yī <span class="hl">biàn</span>.</div>
        <div class="en">Please say it again (once more, from the beginning).</div>
      </div>
      <div class="tip"><span class="tip-icon">⏱️</span><span>Duration words are placed after the verb. If there is an object, you can repeat the verb: <em>我 学 中文 学 了 两 年</em> (I’ve studied Chinese for two years).</span></div>
    `
  },
  {
    id: 'reduplication',
    emoji: '🔄',
    title: 'Reduplication (Softening)',
    tagline: 'Repeat a verb or adjective to make it casual, gentle, or descriptive.',
    html: `
      <h3>Verb Reduplication – "a little bit"</h3>
      <p>Repeating a verb makes the action sound informal or brief.</p>
      <div class="example-box">
        <div class="cn">看 → 看<span class="hl">看</span></div>
        <div class="pinyin">kàn → kàn<span class="hl">kan</span></div>
        <div class="en">to look → have a look</div>
      </div>
      <div class="example-box">
        <div class="cn">休息 → 休息<span class="hl">休息</span></div>
        <div class="pinyin">xiūxi → xiūxi<span class="hl">xiūxi</span></div>
        <div class="en">rest → rest a bit</div>
      </div>

      <h3>Adjective Reduplication – vivid description</h3>
      <p>Reduplicating adjectives adds a lively, descriptive tone.</p>
      <div class="example-box">
        <div class="cn">高兴 → 高高<span class="hl">兴兴</span></div>
        <div class="pinyin">gāoxìng → gāogāo<span class="hl">xìngxìng</span></div>
        <div class="en">happy → happy-happy (content and cheerful)</div>
      </div>
      <div class="example-box">
        <div class="cn">红 → 红<span class="hl">红</span>的</div>
        <div class="pinyin">hóng → hóng<span class="hl">hóng</span> de</div>
        <div class="en">red → reddish</div>
      </div>
      <div class="tip"><span class="tip-icon">🗣️</span><span>Verb reduplication is very common in spoken Chinese to soften requests: <em>你 看看 这个</em> (Take a look at this). Adjective reduplication often uses the pattern AABB for two-syllable adjectives.</span></div>
    `
  },
  {
    id: 'ba-structure',
    emoji: '🫴',
    title: 'The 把 (bǎ) Structure',
    tagline: 'Emphasize what happens to an object — "I put the book on the table."',
    html: `
      <p><strong>Pattern:</strong> Subject + <span class="hl">把</span> + Object + Verb + Complement</p>
      <p>把 moves the object before the verb and highlights the result or disposal of the object.</p>
      <div class="example-box">
        <div class="cn">我 <span class="hl">把</span> 书 放 在 桌子 上。</div>
        <div class="pinyin">Wǒ <span class="hl">bǎ</span> shū fàng zài zhuōzi shàng.</div>
        <div class="en">I put the book on the table.</div>
      </div>
      <div class="example-box">
        <div class="cn">请 <span class="hl">把</span> 门 打开。</div>
        <div class="pinyin">Qǐng <span class="hl">bǎ</span> mén dǎkāi.</div>
        <div class="en">Please open the door. (lit. "take the door and open it")</div>
      </div>
      <div class="tip"><span class="tip-icon">📌</span><span>Use 把 when you want to emphasize the result of an action on a specific object. Not all sentences need it, but it's extremely common.</span></div>
    `
  },

  // ────────── COMPLEX SENTENCES ──────────
  {
    id: 'clauses',
    emoji: '🔗',
    title: 'Clauses: When, Before, After, Because, If…',
    tagline: 'Connect two thoughts with these essential subordinating conjunctions.',
    html: `
      <p>Chinese puts the time/condition clause <strong>before</strong> the main clause, using connectors like:</p>
      <table class="mini-table">
        <thead><tr><th>Connector</th><th>Pinyin</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><strong>…的时候</strong></td><td>...de shíhou</td><td>when (at the time that...)</td></tr>
          <tr><td><strong>以前 / 之前</strong></td><td>yǐqián / zhīqián</td><td>before</td></tr>
          <tr><td><strong>以后 / 之后</strong></td><td>yǐhòu / zhīhòu</td><td>after</td></tr>
          <tr><td><strong>因为… 所以…</strong></td><td>yīnwèi... suǒyǐ...</td><td>because... therefore...</td></tr>
          <tr><td><strong>如果… 就…</strong></td><td>rúguǒ... jiù...</td><td>if... then...</td></tr>
          <tr><td><strong>虽然… 但是…</strong></td><td>suīrán... dànshì...</td><td>although... but...</td></tr>
        </tbody>
      </table>
      <div class="example-box">
        <span class="badge">when</span>
        <div class="cn">我 吃饭 <span class="hl">的时候</span>，不 说话。</div>
        <div class="pinyin">Wǒ chīfàn <span class="hl">de shíhou</span>, bù shuōhuà.</div>
        <div class="en">When I eat, I don't talk.</div>
      </div>
      <div class="example-box">
        <span class="badge">before</span>
        <div class="cn"><span class="hl">吃饭 以前</span>，请 洗手。</div>
        <div class="pinyin"><span class="hl">Chīfàn yǐqián</span>, qǐng xǐshǒu.</div>
        <div class="en">Before eating, please wash your hands.</div>
      </div>
      <div class="example-box">
        <span class="badge">after</span>
        <div class="cn">下课 <span class="hl">以后</span>，我 回 家。</div>
        <div class="pinyin">Xiàkè <span class="hl">yǐhòu</span>, wǒ huí jiā.</div>
        <div class="en">After class, I go home.</div>
      </div>
      <div class="example-box">
        <span class="badge">because</span>
        <div class="cn"><span class="hl">因为</span> 下雨，<span class="hl">所以</span> 我 没 去。</div>
        <div class="pinyin"><span class="hl">Yīnwèi</span> xiàyǔ, <span class="hl">suǒyǐ</span> wǒ méi qù.</div>
        <div class="en">Because it rained, I didn't go.</div>
      </div>
      <div class="example-box">
        <span class="badge">if</span>
        <div class="cn"><span class="hl">如果</span> 你 有 时间，<span class="hl">就</span> 来 吧。</div>
        <div class="pinyin"><span class="hl">Rúguǒ</span> nǐ yǒu shíjiān, <span class="hl">jiù</span> lái ba.</div>
        <div class="en">If you have time, then come.</div>
      </div>
      <div class="example-box">
        <span class="badge">although</span>
        <div class="cn"><span class="hl">虽然</span> 很 累，<span class="hl">但是</span> 很 开心。</div>
        <div class="pinyin"><span class="hl">Suīrán</span> hěn lèi, <span class="hl">dànshì</span> hěn kāixīn.</div>
        <div class="en">Although (I'm) tired, (I'm) very happy.</div>
      </div>
      <div class="tip"><span class="tip-icon">📖</span><span>The clause with the connector often comes first, and the second half can have <strong>就 (jiù)</strong> or <strong>才 (cái)</strong> for emphasis.</span></div>
    `
  },

  // ────────── PRACTICE ──────────
  {
    id: 'practice',
    emoji: '✏️',
    title: 'Practice Corner',
    tagline: 'Test what you\'ve learned. Click to reveal answers.',
    html: `
      <div class="practice-box" id="practice1">
        <h4>Translate: "I don't have a cat."</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans1')">Reveal Answer</button>
        <div class="hidden-answer" id="ans1">
          <div class="big-cn">我 没有 猫。</div>
          <div class="pinyin">Wǒ méi yǒu māo.</div>
          <em>(Use 没 to negate 有 — "don't have")</em>
        </div>
      </div>
      <div class="practice-box" id="practice2">
        <h4>Translate: "She is very happy today."</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans2')">Reveal Answer</button>
        <div class="hidden-answer" id="ans2">
          <div class="big-cn">她 今天 很 开心。</div>
          <div class="pinyin">Tā jīntiān hěn kāixīn.</div>
          <em>(Time before the adjective; 很 as a linker)</em>
        </div>
      </div>
      <div class="practice-box" id="practice3">
        <h4>Choose the correct measure word: 一 ___ 书 (one book)</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans3')">Reveal Answer</button>
        <div class="hidden-answer" id="ans3">
          <div class="big-cn">一 <span style="color:var(--accent);">本</span> 书</div>
          <div class="pinyin">Yī běn shū</div>
          <em>(本 is the measure word for books)</em>
        </div>
      </div>
      <div class="practice-box" id="practice4">
        <h4>Turn this into a question: 他是老师。(He is a teacher.)</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans4')">Reveal Answer</button>
        <div class="hidden-answer" id="ans4">
          <div class="big-cn">他 是 老师 <span class="hl">吗</span>？</div>
          <div class="pinyin">Tā shì lǎoshī <span class="hl">ma</span>?</div>
          <em>(Add 吗 at the end — no word order change)</em>
        </div>
      </div>
      <div class="practice-box" id="practice5">
        <h4>Say: "If it rains tomorrow, I won't go."</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans5')">Reveal Answer</button>
        <div class="hidden-answer" id="ans5">
          <div class="big-cn"><span class="hl">如果</span> 明天下雨，我 <span class="hl">就</span> 不 去。</div>
          <div class="pinyin">Rúguǒ míngtiān xiàyǔ, wǒ jiù bù qù.</div>
          <em>(如果... 就... structure)</em>
        </div>
      </div>
      <div class="practice-box" id="practice6">
        <h4>Say: "She is taller than me."</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans6')">Reveal Answer</button>
        <div class="hidden-answer" id="ans6">
          <div class="big-cn">她 <span class="hl">比</span> 我 高。</div>
          <div class="pinyin">Tā <span class="hl">bǐ</span> wǒ gāo.</div>
          <em>(A 比 B + adjective)</em>
        </div>
      </div>
      <div class="practice-box" id="practice7">
        <h4>How do you say "I studied for two hours"?</h4>
        <button class="btn-reveal" onclick="toggleAnswer('ans7')">Reveal Answer</button>
        <div class="hidden-answer" id="ans7">
          <div class="big-cn">我 学 了 两 个 小时。</div>
          <div class="pinyin">Wǒ xué le liǎng gè xiǎoshí.</div>
          <em>(Verb + 了 + duration)</em>
        </div>
      </div>
    `
  }
];