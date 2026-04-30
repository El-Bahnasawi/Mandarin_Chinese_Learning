const sectionsData = [
    {
        id: "overview",
        title: "Overview",
        icon: "📖",
        html: `
            <p>Chinese culture is one of the world&#39;s oldest continuous cultures, with over <strong>5,000 years</strong> of recorded history. It profoundly shapes East Asia and the globe through philosophy, language, cuisine, art, and customs. The term <em>Zhōnghuá wénhuà</em> (中华文化) encompasses the heritage of all 56 recognized ethnic groups.</p>
            <p>For learners, culture gives context to idioms (成语 chéngyǔ), social roles, and values like <em>miànzi</em> (面子, "face"), <em>guānxi</em> (关系, relationships), and <em>xiào</em> (孝, filial piety).</p>
            <div class="grid-2">
                <div class="card"><h4>🌏 Geographic Reach</h4><p>Mainly in China, but also thriving in Taiwan, Hong Kong, Macau, Singapore, and overseas Chinese communities worldwide.</p></div>
                <div class="card"><h4>📜 Cultural Continuity</h4><p>Chinese writing evolved continuously from oracle bones (c. 1200 BCE) to today’s characters, preserving a living link to antiquity.</p></div>
            </div>
        `
    },
    {
        id: "language",
        title: "Language & Writing",
        icon: "🈶",
        html: `
            <p>Chinese characters (汉字 Hànzì) are logograms, each representing a morpheme. The writing system unites speakers of different dialects. Standard Mandarin uses simplified characters (Mainland) while traditional characters are used in Taiwan, Hong Kong, and Macau.</p>
            <h3>Key Facts</h3>
            <ul>
                <li><strong>Over 50,000 characters</strong> exist, but ~3,000 cover daily use.</li>
                <li><strong>Radicals (部首)</strong>: 214 Kangxi radicals classify characters.</li>
                <li><strong>Pinyin (拼音)</strong>: Romanization system adopted in 1958.</li>
                <li><strong>Stroke order</strong> rules ensure aesthetic and consistent writing.</li>
            </ul>
            <p>Modern input methods include Pinyin typing, handwriting recognition, and voice. Calligraphy (书法) elevates writing to a fine art.</p>
        `
    },
    {
        id: "kinship",
        title: "Kinship Terms (亲属称谓)",
        icon: "👪",
        html: `
            <p>The Chinese family system is famously precise. Terms differ for paternal and maternal relatives, and for elder/younger siblings. This reflects the importance of hierarchy and filial piety.</p>
            <div class="grid-2">
                <div class="card"><h4>🧓 Paternal Side</h4><p>Grandparents: 爷爷 (yéye, dad's dad), 奶奶 (nǎinai, dad's mom). Uncles: 伯伯 (bóbo, elder), 叔叔 (shūshu, younger). Aunts: 姑姑 (gūgu).</p></div>
                <div class="card"><h4>👵 Maternal Side</h4><p>Grandparents: 外公 (wàigōng), 外婆 (wàipó). Uncles: 舅舅 (jiùjiu). Aunts: 姨妈 (yímā, elder), 阿姨 (āyí, younger).</p></div>
            </div>
            <p>Even cousins are labeled (堂哥, 表哥, etc.) based on paternal/maternal and age. Learning these terms helps you address people correctly and understand family dynamics in conversation.</p>
        `
    },
    {
        id: "chengyu",
        title: "Chengyu & Proverbs (成语·谚语)",
        icon: "💬",
        html: `
            <p><strong>Chengyu</strong> (成语) are four‑character idioms, often derived from classical stories. They pack deep meaning into a few words and are used daily.</p>
            <div class="grid-2">
                <div class="card"><h4>🐍 画蛇添足 (huà shé tiān zú)</h4><p>"Draw a snake and add feet" → Do unnecessary things that ruin the effect.</p></div>
                <div class="card"><h4>🐮 对牛弹琴 (duì niú tán qín)</h4><p>"Play the lute to a cow" → Speak to the wrong audience.</p></div>
                <div class="card"><h4>🐲 守株待兔 (shǒu zhū dài tù)</h4><p>"Guard a tree stump waiting for rabbits" → Wait for luck without effort.</p></div>
                <div class="card"><h4>🌿 指鹿为马 (zhǐ lù wéi mǎ)</h4><p>"Call a deer a horse" → Deliberately misrepresent the truth.</p></div>
            </div>
            <p><strong>Sayings (谚语 yànyǔ)</strong> are longer, folk wisdom: “读万卷书，行万里路” (Read ten thousand books, travel ten thousand miles).</p>
        `
    },
    {
        id: "symbolism",
        title: "Numbers, Colors & Symbolism",
        icon: "🔢",
        html: `
            <div class="grid-3">
                <div class="card"><h4>🔴 Red (红)</h4><p>Auspicious, joy, weddings, New Year. Avoid in funerals.</p></div>
                <div class="card"><h4>🟡 Yellow (黄)</h4><p>Imperial, sacred, earth element. Also can mean “erotic”.</p></div>
                <div class="card"><h4>⚪ White (白)</h4><p>Mourning, funerals, purity. Not for celebrations.</p></div>
                <div class="card"><h4>8️⃣ Eight (八 bā)</h4><p>Sounds like 发 (fā, "prosper"). Extremely lucky.</p></div>
                <div class="card"><h4>4️⃣ Four (四 sì)</h4><p>Sounds like 死 (sǐ, "death"). Strongly avoided.</p></div>
                <div class="card"><h4>9️⃣ Nine (九 jiǔ)</h4><p>Sounds like 久 (jiǔ, "long-lasting"), implies eternity.</p></div>
            </div>
            <p>Gifts should avoid sets of four, clocks (送钟 = 送终 "funeral"), and sharp objects. Understanding this symbolism is vital for social interactions.</p>
        `
    },
    {
        id: "history",
        title: "History Timeline",
        icon: "🏛",
        html: `
            <div class="timeline">
                <div class="timeline-item"><span class="year">c. 2070–1600 BCE</span> — <strong>Xia Dynasty</strong>：Legendary first dynasty.</div>
                <div class="timeline-item"><span class="year">c. 1600–1046 BCE</span> — <strong>Shang Dynasty</strong>：Oracle bones, bronze.</div>
                <div class="timeline-item"><span class="year">1046–256 BCE</span> — <strong>Zhou Dynasty</strong>：Confucius, Laozi, Hundred Schools.</div>
                <div class="timeline-item"><span class="year">221–206 BCE</span> — <strong>Qin Dynasty</strong>：Unification, standard script.</div>
                <div class="timeline-item"><span class="year">206 BCE–220 CE</span> — <strong>Han Dynasty</strong>：Silk Road, paper.</div>
                <div class="timeline-item"><span class="year">618–907 CE</span> — <strong>Tang Dynasty</strong>：Golden age of poetry.</div>
                <div class="timeline-item"><span class="year">960–1279</span> — <strong>Song Dynasty</strong>：Gunpowder, compass.</div>
                <div class="timeline-item"><span class="year">1271–1368</span> — <strong>Yuan Dynasty</strong>：Mongol rule, drama.</div>
                <div class="timeline-item"><span class="year">1368–1644</span> — <strong>Ming Dynasty</strong>：Forbidden City, blue porcelain.</div>
                <div class="timeline-item"><span class="year">1644–1912</span> — <strong>Qing Dynasty</strong>：Manchu rule, last dynasty.</div>
                <div class="timeline-item"><span class="year">1949–present</span> — <strong>Modern China</strong>：PRC founded, rapid development.</div>
            </div>
        `
    },
    {
        id: "dialects",
        title: "Dialects & Sinitic Languages",
        icon: "🗣",
        html: `
            <p>What we call “Chinese” is a family of languages (Sinitic branch). <strong>Mandarin (Pǔtōnghuà)</strong> is the official standard, but major groups are mutually unintelligible. Knowing them enriches learning.</p>
            <h3>Major Groups</h3>
            <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
                    <thead><tr style="background:var(--red); color:#fff;"><th>Group</th><th>Chinese</th><th>Speakers</th><th>Regions</th><th>Note</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Mandarin</strong></td><td>官话/普通话</td><td>~920M</td><td>North, SW, Taiwan, SG</td><td>4 tones, standard</td></tr>
                        <tr><td><strong>Cantonese (Yue)</strong></td><td>粤语</td><td>~85M</td><td>Guangdong, HK, Macau</td><td>6–9 tones, -p/-t/-k finals</td></tr>
                        <tr><td><strong>Wu</strong></td><td>吴语</td><td>~80M</td><td>Shanghai, Zhejiang</td><td>Complex tone sandhi</td></tr>
                        <tr><td><strong>Min</strong></td><td>闽语</td><td>~75M</td><td>Fujian, Taiwan</td><td>Hokkien, Teochew</td></tr>
                        <tr><td><strong>Hakka</strong></td><td>客家话</td><td>~48M</td><td>Scattered south</td><td>Preserves Middle Chinese</td></tr>
                        <tr><td><strong>Xiang</strong></td><td>湘语</td><td>~38M</td><td>Hunan</td><td>5–6 tones</td></tr>
                        <tr><td><strong>Gan</strong></td><td>赣语</td><td>~22M</td><td>Jiangxi</td><td>Shares Hakka traits</td></tr>
                        <tr><td><strong>Pinghua</strong></td><td>平话</td><td>~7M</td><td>Guangxi</td><td>Sometimes grouped with Yue</td></tr>
                        <tr><td><strong>Jin</strong></td><td>晋语</td><td>~63M</td><td>Shanxi</td><td>Often separate from Mandarin</td></tr>
                    </tbody>
                </table>
            </div>
            <p>Dialect knowledge helps with classical poetry (Cantonese preserves rhymes) and understanding regional identity.</p>
        `
    },
    {
        id: "philosophy",
        title: "Philosophy & Religion",
        icon: "☯",
        html: `
            <p>The <strong>Three Teachings</strong> (三教 Sān Jiào) intertwine:</p>
            <div class="grid-3">
                <div class="card"><h4>🧘 Confucianism (儒教)</h4><p>Kǒngzǐ (551–479 BCE). Moral perfection, filial piety, ritual. <em>Analects</em>.</p></div>
                <div class="card"><h4>🌿 Daoism (道教)</h4><p>Lǎozǐ, <em>Dao De Jing</em>. Wu wei (effortless action), yin-yang, natural simplicity.</p></div>
                <div class="card"><h4>🪷 Buddhism (佛教)</h4><p>Imported 1st c. CE. Chan (Zen) flourished. Guanyin (compassion).</p></div>
            </div>
            <p>Folk religion, ancestor veneration, and Feng Shui remain integral to daily life.</p>
        `
    },
    {
        id: "legalism",
        title: "Other Schools: Legalism & Mohism",
        icon: "📜",
        html: `
            <div class="grid-2">
                <div class="card"><h4>⚖️ Legalism (法家 Fǎjiā)</h4><p>Advocated strict laws, rewards, and punishments to maintain order. Key thinker: <strong>Han Feizi</strong> (韩非子). Influenced the Qin unification. Contrasted with Confucian morality, focusing on institutional control.</p></div>
                <div class="card"><h4>❤️ Mohism (墨家 Mòjiā)</h4><p>Founded by <strong>Mozi</strong> (墨子). Promoted universal love (兼爱), meritocracy, and opposition to wasteful rituals. Had a strong logical tradition and pacifist stance.</p></div>
            </div>
            <p>These schools shaped early Chinese statecraft and ethics, offering alternatives to Confucianism.</p>
        `
    },
    {
        id: "folk",
        title: "Folk Beliefs & Mythology",
        icon: "🐉",
        html: `
            <p>Chinese mythology is vast. Key figures:</p>
            <ul>
                <li><strong>Dragon (龙 lóng)</strong>: Benevolent, rain-bringer, imperial symbol.</li>
                <li><strong>Phoenix (凤凰 fènghuáng)</strong>: Virtue and grace, often paired with dragon.</li>
                <li><strong>Nian (年兽)</strong>: Monster scared away by red and firecrackers (origin of Spring Festival).</li>
                <li><strong>Chang’e (嫦娥)</strong>: Moon goddess, celebrated at Mid-Autumn.</li>
                <li><strong>Jade Emperor (玉皇)</strong>: Supreme deity in Taoist folk heaven.</li>
                <li><strong>Kitchen God (灶神)</strong>: Watches households, reports to heaven before New Year.</li>
            </ul>
            <p>Many legends explain festivals and natural phenomena, deeply embedded in language and idioms.</p>
        `
    },
    {
        id: "legends",
        title: "Classic Legends & Stories",
        icon: "📖",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🐄 Cowherd & Weaver Girl (牛郎织女)</h4><p>Lovers separated by the Milky Way, allowed to meet only on the 7th day of the 7th lunar month (Qixi, Chinese Valentine’s).</p></div>
                <div class="card"><h4>🐍 The White Snake (白蛇传)</h4><p>A snake spirit transforms to marry a human. A tragic romance full of magic and loyalty, set in Hangzhou.</p></div>
                <div class="card"><h4>👩‍🎤 Mulan (花木兰)</h4><p>A young woman disguises as a man to take her father’s place in the army. Icon of filial piety and bravery.</p></div>
                <div class="card"><h4>🧘 The Eight Immortals (八仙)</h4><p>Daoist figures who achieved immortality, each with a special power. They cross the sea on a quest, symbolizing triumph over obstacles.</p></div>
            </div>
        `
    },
    {
        id: "folkdeities",
        title: "Folk Deities & Local Gods",
        icon: "🙏",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🏙 City God (城隍 Chénghuáng)</h4><p>Guardian of a city, responsible for protecting the people and judging the dead. Each city has its own.</p></div>
                <div class="card"><h4>🌍 Earth God (土地公 Tǔdìgōng)</h4><p>A local deity looking after a small area. Often depicted as a kindly old man. Worshipped for prosperity.</p></div>
                <div class="card"><h4>🌊 Mazu (妈祖)</h4><p>Sea goddess, patron of fishermen and travelers. Widely revered in coastal China and Taiwan. Temples dot the coastline.</p></div>
                <div class="card"><h4>⚔ Guan Yu (关羽)</h4><p>Historical general deified as god of war, loyalty, and righteousness. Statues often found in businesses and police stations.</p></div>
            </div>
        `
    },
    {
        id: "zodiac",
        title: "Chinese Zodiac (生肖 Shēngxiào)",
        icon: "🐀",
        html: `
            <p>The 12‑year cycle assigns an animal to each year based on the lunar calendar. Your birth year determines your animal sign, which influences personality and fortune.</p>
            <p><strong>Order:</strong> Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.</p>
            <p>Each animal has traits (e.g., Dragon = confident, Rabbit = gentle) and compatible/incompatible signs. The zodiac is deeply embedded in horoscopes, matchmaking, and even planning events.</p>
        `
    },
    {
        id: "arts",
        title: "Traditional Arts",
        icon: "🎨",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🖌 Calligraphy</h4><p>Brush and ink art. Five styles: seal, clerical, regular, running, cursive. Four Treasures: brush, ink stick, stone, paper.</p></div>
                <div class="card"><h4>⛰ Ink Painting</h4><p>Landscapes capturing spirit (神). Famous: Gu Kaizhi, Fan Kuan.</p></div>
                <div class="card"><h4>🎭 Beijing Opera</h4><p>Singing, acting, acrobatics. Face painting (脸谱) – red = loyalty, white = treachery.</p></div>
                <div class="card"><h4>🏺 Porcelain</h4><p>Blue-and-white (青花瓷) from Jingdezhen. Global icon.</p></div>
                <div class="card"><h4>🧵 Silk & Embroidery</h4><p>Silk Road origin. Suzhou, Hunan, Sichuan styles.</p></div>
                <div class="card"><h4>🎵 Music</h4><p>Gǔqín, pípá, èrhú, dízi. Pentatonic scale.</p></div>
            </div>
        `
    },
    {
        id: "operas",
        title: "Other Traditional Operas",
        icon: "🎭",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🎐 Kunqu (昆曲)</h4><p>One of the oldest opera forms, elegant and refined. UNESCO Intangible Heritage. Famous work: <em>The Peony Pavilion</em>.</p></div>
                <div class="card"><h4>🌸 Yueju (越剧)</h4><p>Popular in Zhejiang/Shanghai, soft and lyrical. Often portrays romantic stories. Second most popular after Beijing Opera.</p></div>
                <div class="card"><h4>🎭 Sichuan Opera (川剧)</h4><p>Known for <strong>face‑changing</strong> (变脸), rapid mask swaps. Combines singing, acting, acrobatics.</p></div>
            </div>
        `
    },
    {
        id: "wuxia",
        title: "Wuxia (武侠) - Martial Chivalry",
        icon: "⚔️",
        html: `
            <p><strong>Wuxia</strong> (martial heroes) is a genre of fiction about wandering swordsmen in ancient China, emphasizing honor, loyalty, and martial arts. Jin Yong (金庸) is the most celebrated author.</p>
            <div class="grid-2">
                <div class="card"><h4>📚 Condor Trilogy</h4><p><em>Legend of the Condor Heroes</em> set the standard. Characters like Guo Jing and Huang Rong are cultural icons.</p></div>
                <div class="card"><h4>🎬 Film & TV</h4><p>Wuxia films like <em>Crouching Tiger, Hidden Dragon</em> brought the genre to global audiences. Countless TV adaptations.</p></div>
            </div>
            <p>Wuxia vocabulary (江湖 jiānghú, "the martial world") appears in everyday slang.</p>
        `
    },
    {
        id: "clothing",
        title: "Traditional Clothing",
        icon: "👘",
        html: `
            <p>Han Chinese clothing (汉服 Hànfú) features cross-collars, wide sleeves, and sashes. Revived among youth today.</p>
            <div class="grid-2">
                <div class="card"><h4>👗 Qipao (旗袍)</h4><p>Form-fitting dress from 1920s Shanghai, influenced by Manchu robes. Symbol of elegance.</p></div>
                <div class="card"><h4>👘 Hanfu (汉服)</h4><p>Historical attire of Han Chinese, various dynastic styles. Often worn for ceremonies and festivals.</p></div>
                <div class="card"><h4>🧣 Tang suit (唐装)</h4><p>Jacket with mandarin collar, popularized as formal wear for men.</p></div>
                <div class="card"><h4>🎎 Ethnic Minorities</h4><p>Each group (Miao, Tibetan, Uyghur, etc.) has distinct, colorful costumes reflecting heritage.</p></div>
            </div>
        `
    },
    {
        id: "gardens",
        title: "Classical Gardens",
        icon: "🏡",
        html: `
            <p>Chinese gardens aim to recreate nature in miniature, reflecting Daoist and Buddhist ideals. <strong>Suzhou gardens</strong> (苏州园林) are UNESCO listed.</p>
            <ul>
                <li><strong>Elements:</strong> water, rocks, plants, pavilions, winding paths.</li>
                <li><strong>Borrowed scenery</strong> (借景): framing outside views.</li>
                <li><strong>Symbolism:</strong> pines for longevity, bamboo for integrity, lotus for purity.</li>
            </ul>
            <p>Gardens like the Humble Administrator’s Garden are living poems of landscape art.</p>
        `
    },
    {
        id: "crafts",
        title: "Traditional Crafts",
        icon: "🧶",
        html: `
            <div class="grid-2">
                <div class="card"><h4>✂ Paper‑cutting (剪纸)</h4><p>Intricate red paper designs for windows during festivals. Regional styles vary widely.</p></div>
                <div class="card"><h4>🪢 Chinese Knotting (中国结)</h4><p>Decorative knots symbolizing good luck, often hung in homes and cars.</p></div>
                <div class="card"><h4>🏺 Cloisonné (景泰蓝)</h4><p>Enamel‑filled metalwork, perfected during Ming. Vibrant colors, used for vases and jewelry.</p></div>
                <div class="card"><h4>🧵 Embroidery (刺绣)</h4><p>Suzhou, Hunan, Sichuan, and Guangdong styles. Silk thread on fabric, depicting flowers, birds, and scenery.</p></div>
            </div>
        `
    },
    {
        id: "cuisine",
        title: "Cuisine & Dining",
        icon: "🥢",
        html: `
            <p><em>民以食为天</em> — "People take food as heaven." The <strong>Eight Great Cuisines</strong>:</p>
            <div class="grid-2">
                <div class="card"><h4>🌶 Sichuan</h4><p>Málà (numbing-spicy). Mapo tofu.</p></div>
                <div class="card"><h4>🦞 Cantonese</h4><p>Dim sum, fresh seafood.</p></div>
                <div class="card"><h4>🍲 Jiangsu</h4><p>Elegant, braised. Lion’s head meatballs.</p></div>
                <div class="card"><h4>🍜 Shandong</h4><p>Salty, crispy, soups.</p></div>
                <div class="card"><h4>🥘 Zhejiang</h4><p>Mellow, Dongpo pork.</p></div>
                <div class="card"><h4>🍗 Fujian</h4><p>Umami, Buddha Jumps Over the Wall.</p></div>
                <div class="card"><h4>🌿 Hunan</h4><p>Hot, sour, smoked.</p></div>
                <div class="card"><h4>🧆 Anhui</h4><p>Wild herbs, stews.</p></div>
            </div>
            <p><strong>Etiquette:</strong> Don't stick chopsticks upright in rice. Sharing dishes is normal. <em>Gānbēi</em> (干杯) means bottoms up.</p>
        `
    },
    {
        id: "streetfood",
        title: "Street Food & Snack Culture",
        icon: "🍢",
        html: `
            <p>Night markets and street stalls are the heart of casual dining. Every region has its specialties.</p>
            <div class="grid-2">
                <div class="card"><h4>🧈 Stinky Tofu (臭豆腐)</h4><p>Fermented tofu, deep‑fried, served with spicy sauce. Smell is pungent, taste is addictive.</p></div>
                <div class="card"><h4>🥟 Jianbing (煎饼)</h4><p>Savory crepe with egg, crispy cracker, hoisin sauce. A breakfast staple.</p></div>
                <div class="card"><h4>🥢 Lamb Skewers (羊肉串)</h4><p>Xinjiang‑style grilled meat, cumin and chili. Smoky, aromatic.</p></div>
                <div class="card"><h4>🥠 Tanghulu (冰糖葫芦)</h4><p>Candied hawthorn on a stick. Sweet and sour winter treat.</p></div>
            </div>
        `
    },
    {
        id: "banquet",
        title: "Banquet Culture & Seating",
        icon: "🍽",
        html: `
            <p>Formal meals follow strict hierarchy. At a round table:</p>
            <ul>
                <li><strong>Seat of Honor:</strong> Facing the door or east. Usually for the host or most respected guest.</li>
                <li><strong>Second seat</strong> to the right of the honor seat, then left, and so on.</li>
                <li><strong>Toasting:</strong> The host toasts first, and you should return the toast later. Eyes meet, never drink before the host.</li>
                <li><strong>Serving:</strong> Eldest or most honored are served first. Refusing a dish politely is done by leaving it on the plate.</li>
            </ul>
            <p>Understanding these rules is essential for business dinners and family gatherings.</p>
        `
    },
    {
        id: "breakfasts",
        title: "Regional Breakfasts",
        icon: "🥟",
        html: `
            <p>Breakfast culture varies dramatically by region:</p>
            <div class="grid-2">
                <div class="card"><h4>🥣 Congee (粥)</h4><p>Rice porridge with side dishes (pickles, salted duck egg, youtiao). A gentle start.</p></div>
                <div class="card"><h4>🥖 Youtiao (油条)</h4><p>Deep‑fried dough stick, often dipped in soy milk or congee.</p></div>
                <div class="card"><h4>🍜 Hot Dry Noodles (热干面)</h4><p>Wuhan specialty, sesame paste, scallions. Quick, hearty.</p></div>
                <div class="card"><h4>🥟 Soup Dumplings (小笼包)</h4><p>Shanghai classic, delicate dough with hot broth inside.</p></div>
            </div>
        `
    },
    {
        id: "festivals",
        title: "Festivals",
        icon: "🎊",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🧧 Spring Festival</h4><p>Lunar New Year, red envelopes, fireworks, family reunions. 15 days.</p></div>
                <div class="card"><h4>🏮 Mid-Autumn</h4><p>Mooncakes, moon gazing, Chang'e legend.</p></div>
                <div class="card"><h4>🐉 Dragon Boat</h4><p>Zòngzi, dragon boat races, commemorates poet Qu Yuan.</p></div>
                <div class="card"><h4>👻 Qingming</h4><p>Tomb sweeping, ancestor offerings, spring outings.</p></div>
            </div>
        `
    },
    {
        id: "customs",
        title: "Social Customs",
        icon: "💮",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🤝 Face (面子)</h4><p>Reputation, dignity. Avoid public embarrassment; give compliments.</p></div>
                <div class="card"><h4>🎁 Gifts</h4><p>Refuse a few times before accepting. Avoid clocks, umbrellas (breakup symbol).</p></div>
                <div class="card"><h4>🏠 Home visits</h4><p>Bring fruit or tea. Remove shoes or wear slippers. Accept tea with both hands.</p></div>
                <div class="card"><h4>💬 Communication</h4><p>Indirectness preferred; “maybe” often means no. Harmony over confrontation.</p></div>
            </div>
        `
    },
    {
        id: "weddings",
        title: "Wedding Traditions",
        icon: "💒",
        html: `
            <p>Chinese weddings blend ancient rites and modern flair. Key elements:</p>
            <ul>
                <li><strong>Betrothal gifts (聘礼)</strong>: groom’s family offers gifts (cash, jewelry, food) to the bride's family.</li>
                <li><strong>Tea ceremony (敬茶)</strong>: the couple serves tea to elders, who give red packets in return. A gesture of gratitude.</li>
                <li><strong>Red everywhere:</strong> dresses, decorations, double happiness symbol (囍). White is avoided.</li>
                <li><strong>Door games (闹洞房)</strong>: playful challenges set by bridesmaids to test the groom.</li>
            </ul>
            <p>Modern weddings often combine a Western‑style white gown ceremony with a Chinese banquet.</p>
        `
    },
    {
        id: "funerals",
        title: "Funeral & Mourning Customs",
        icon: "🕯",
        html: `
            <p>Death is a time of strict ritual to ensure the spirit’s peaceful transition. White is the color of mourning.</p>
            <ul>
                <li><strong>White mourning clothes:</strong> sackcloth and white headbands.</li>
                <li><strong>Joss paper (冥币)</strong>: paper money and paper replicas of items burned for the deceased to use in the afterlife.</li>
                <li><strong>Avoiding red:</strong> no red clothes or decorations during mourning.</li>
                <li><strong>Funeral rites:</strong> chanting, bowing, and a procession. The word “death” is often avoided with euphemisms like 去世 (qùshì).</li>
            </ul>
        `
    },
    {
        id: "names",
        title: "Chinese Names (姓名 Xìngmíng)",
        icon: "👤",
        html: `
            <p>A Chinese name is usually composed of a one‑character surname (姓), followed by a one‑ or two‑character given name (名). The surname comes first.</p>
            <p><strong>Common surnames:</strong> 王 (Wáng), 李 (Lǐ), 张 (Zhāng), 刘 (Liú), 陈 (Chén).</p>
            <p>Given names often carry poetic or aspirational meanings. In some families, a <strong>generation name</strong> (辈分) shares a character among siblings or cousins. Learners should address people with surname + title (e.g., 王老师, Teacher Wang).</p>
        `
    },
    {
        id: "business",
        title: "Business Etiquette (商务礼仪)",
        icon: "💼",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🃏 Business Cards</h4><p>Present and receive with both hands. Study the card, don’t stuff it in your pocket. Have a Chinese‑language side.</p></div>
                <div class="card"><h4>🍻 Banquets</h4><p>Seating hierarchy, mutual toasting, and never discussing business too early. Building <strong>guānxi</strong> (关系) is crucial before deals.</p></div>
                <div class="card"><h4>🤝 Hierarchy</h4><p>Seniority matters. Greet the oldest or most senior person first. Decisions may take time due to consensus.</p></div>
            </div>
        `
    },
    {
        id: "games",
        title: "Games & Pastimes",
        icon: "🎲",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🀄 Mahjong (麻将 Májiàng)</h4><p>Tile‑based game for four players, mixing skill and luck. Essential social activity.</p></div>
                <div class="card"><h4>⚫ Weiqi (围棋)</h4><p>Known as Go. Strategic board game with black/white stones. Associated with intellect.</p></div>
                <div class="card"><h4>♟ Xiangqi (象棋)</h4><p>Chinese chess, highly popular. Reflects military tactics.</p></div>
                <div class="card"><h4>🪶 Shuttlecock (踢毽子)</h4><p>Kicking weighted shuttlecock. Played for fitness and fun in parks.</p></div>
            </div>
        `
    },
    {
        id: "solarterms",
        title: "24 Solar Terms (二十四节气)",
        icon: "🌾",
        html: `
            <p>An ancient agricultural calendar dividing the year into 24 segments based on the sun’s position. Still used to guide farming, health, and festivals.</p>
            <p>Key terms: Lìchūn (立春, Start of Spring), Xiǎomǎn (小满, Grain Buds), Qiūfēn (秋分, Autumn Equinox), Dōngzhì (冬至, Winter Solstice, family gathering).</p>
            <p>Each term comes with customs (e.g., eating dumplings on Winter Solstice) and proverbs.</p>
        `
    },
    {
        id: "architecture",
        title: "Architecture",
        icon: "🏯",
        html: `
            <div class="grid-2">
                <div class="card"><h4>🏛 Siheyuan</h4><p>Courtyard house with buildings on four sides, Beijing style.</p></div>
                <div class="card"><h4>⛩ Dougong</h4><p>Interlocking wooden brackets – earthquake-resistant, no nails.</p></div>
                <div class="card"><h4>🏯 Forbidden City</h4><p>Imperial palace (1406–1420), largest wooden complex.</p></div>
                <div class="card"><h4>🛕 Pagodas</h4><p>Multi-tiered towers, originally for relics.</p></div>
            </div>
        `
    },
    {
        id: "literature",
        title: "Literature",
        icon: "📚",
        html: `
            <h3>Four Great Classical Novels</h3>
            <div class="grid-2">
                <div class="card"><h4>🐒 Journey to the West</h4><p>Monkey King, pilgrimage.</p></div>
                <div class="card"><h4>⚔ Three Kingdoms</h4><p>Epic historical warfare.</p></div>
                <div class="card"><h4>💧 Water Margin</h4><p>108 outlaws.</p></div>
                <div class="card"><h4>🏮 Dream of Red Chamber</h4><p>Family saga, psychological depth.</p></div>
            </div>
            <h3>Tang Poetry Giants</h3>
            <p><strong>Li Bai</strong> (romantic), <strong>Du Fu</strong> (realist), <strong>Wang Wei</strong> (Buddhist nature).</p>
        `
    },
    {
        id: "poetry",
        title: "Classical Poetry Forms",
        icon: "📝",
        html: `
            <p>Chinese poetry has strict tonal patterns and rhyme. Main forms:</p>
            <ul>
                <li><strong>Shi (诗)</strong>: Regular five‑ or seven‑character lines, Tang dynasty peak.</li>
                <li><strong>Ci (词)</strong>: Lyric poetry set to existing tunes, flexible line lengths. Song dynasty.</li>
                <li><strong>Qu (曲)</strong>: A freer form popular in Yuan drama, closer to vernacular speech.</li>
            </ul>
            <p>Poetry is often quoted in daily conversation, showing education and wit.</p>
        `
    },
    {
        id: "exams",
        title: "Imperial Examination (科举)",
        icon: "📜",
        html: `
            <p>For over 1,300 years, the <strong>Keju</strong> system selected officials based on merit, not birth. Candidates studied Confucian classics for years.</p>
            <p>It created a scholar‑official class and profoundly influenced education values. Phrases like “秀才 (xiùcai)” and “状元 (zhuàngyuan)” persist as titles for top scorers in modern exams.</p>
        `
    },
    {
        id: "tea",
        title: "Tea Culture",
        icon: "🍵",
        html: `
            <p>Six categories: Green (龙井), Black (red tea), Oolong (铁观音), White (银针), Yellow, Pu-erh.</p>
            <p>Gongfu tea ceremony uses small pots, multiple infusions. Tea symbolizes respect and hospitality.</p>
        `
    },
    {
        id: "martial",
        title: "Martial Arts",
        icon: "🥋",
        html: `
            <div class="grid-2">
                <div class="card"><h4>☯ Tai Chi</h4><p>Slow, meditative movements, health-focused.</p></div>
                <div class="card"><h4>🐉 Shaolin Kung Fu</h4><p>Chan Buddhism + combat. Animal forms.</p></div>
                <div class="card"><h4>🦅 Wing Chun</h4><p>Centerline theory, rapid strikes. Bruce Lee’s root.</p></div>
                <div class="card"><h4>🐞 Wudang</h4><p>Daoist internal arts, qigong.</p></div>
            </div>
        `
    },
    {
        id: "medicine",
        title: "Traditional Medicine",
        icon: "🌿",
        html: `
            <p>TCM (中医) uses Qi, yin-yang balance. Modalities: acupuncture, herbal formulas, cupping, moxibustion. Food as medicine: ginger (heating), pear (cooling).</p>
        `
    },
    {
        id: "science",
        title: "Science & Inventions",
        icon: "🔭",
        html: `
            <p>The <strong>Four Great Inventions</strong>: papermaking, printing (woodblock), gunpowder, compass. Additional contributions: seismograph (Zhang Heng), decimal system, negative numbers, cast iron, and advanced astronomy. The Silk Road transmitted knowledge westward.</p>
        `
    },
    {
        id: "modern",
        title: "Modern Culture",
        icon: "📱",
        html: `
            <p>Contemporary China blends tradition with rapid modernization. <strong>C-pop</strong> (Mandopop, Cantopop), <strong>cinema</strong> (Zhang Yimou, Wong Kar-wai), and <strong>internet slang</strong> (e.g., 666 “awesome”, 吃瓜 “gossip”) are vibrant cultural exports. The rise of <strong>social media</strong> (WeChat, Douyin/TikTok) has created new forms of expression while still referencing ancient roots.</p>
        `
    },
    {
        id: "ethnic",
        title: "Ethnic Minorities",
        icon: "👥",
        html: `
            <p>Beyond the Han majority, 55 official minority groups enrich Chinese culture. Notable examples: <strong>Tibetans</strong> (Buddhism, high-altitude dances), <strong>Uyghurs</strong> (Xinjiang, muqam music), <strong>Mongols</strong> (Naadam festival, throat singing), <strong>Miao</strong> (intricate silver jewelry, embroidery), <strong>Dai</strong> (Water-Splashing Festival). Each has its own language, clothing, and customs.</p>
        `
    },
    {
        id: "overseas",
        title: "Overseas Chinese Culture",
        icon: "🌍",
        html: `
            <p>Large Chinese communities thrive globally, especially in Southeast Asia, North America, and Europe. They preserve traditional dialects, food, and festivals, often blending with local customs:</p>
            <div class="grid-2">
                <div class="card"><h4>🏮 Chinatowns</h4><p>Cultural hubs with temples, shops, and Lunar New Year parades. Early immigrants mostly spoke Cantonese or Hokkien.</p></div>
                <div class="card"><h4>🍲 Peranakan (Straits Chinese)</h4><p>Fusion culture in Malaysia & Singapore, blending Chinese heritage with Malay influences. Unique cuisine and dress.</p></div>
                <div class="card"><h4>🥡 Adapted Cuisine</h4><p>Dishes like General Tso’s chicken, chop suey, and fortune cookies are American inventions, showing how culture evolves.</p></div>
                <div class="card"><h4>📚 Language Shift</h4><p>While Mandarin is growing globally, older diaspora still speak Taishanese, Hokkien, or Cantonese at home.</p></div>
            </div>
        `
    }
];