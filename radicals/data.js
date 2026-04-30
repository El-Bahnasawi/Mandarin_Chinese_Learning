const radicalData = [
  // ── 👤 People & Social (unchanged) ─────────────────
  {
    id: "people",
    emoji: "👤",
    title: "People & Social",
    radicals: [
      {
        radicalChar: "人",
        radicalNames: ["人", "亻"],
        pinyin: "rén",
        meaning: "Person 👤",
        emoji: "👤",
        variant: "Side: 亻",
        accentColor: "#5b7fa5",
        associated: [
          { char: "你", pinyin: "nǐ", meaning: "you 👤" },
          { char: "他", pinyin: "tā", meaning: "he 👨" },
          { char: "们", pinyin: "men", meaning: "plural 👥" },
          { char: "休", pinyin: "xiū", meaning: "rest 🛌" },
          { char: "伴", pinyin: "bàn", meaning: "companion 👫" }
        ],
        examples: [
          { hanzi: "你好！我是学生。", pinyin: "Nǐ hǎo! Wǒ shì xuéshēng.", trans: "💬 Hello! I am a student." },
          { hanzi: "他们都在家。", pinyin: "Tāmen dōu zài jiā.", trans: "💬 They are all at home." }
        ]
      },
      {
        radicalChar: "女",
        radicalNames: ["女"],
        pinyin: "nǚ",
        meaning: "Woman 👩",
        emoji: "👩",
        variant: "Woman pictogram",
        accentColor: "#d4789b",
        associated: [
          { char: "妈", pinyin: "mā", meaning: "mom 👩" },
          { char: "姐", pinyin: "jiě", meaning: "sister 👧" },
          { char: "妹", pinyin: "mèi", meaning: "sister 👧" },
          { char: "好", pinyin: "hǎo", meaning: "good 👍" },
          { char: "姓", pinyin: "xìng", meaning: "surname 📛" }
        ],
        examples: [
          { hanzi: "她是我妈妈。", pinyin: "Tā shì wǒ māma.", trans: "💬 She is my mother." },
          { hanzi: "我姐姐很漂亮。", pinyin: "Wǒ jiějie hěn piàoliang.", trans: "💬 My sister is beautiful." }
        ]
      },
      {
        radicalChar: "子",
        radicalNames: ["子"],
        pinyin: "zǐ",
        meaning: "Child 👶",
        emoji: "👶",
        variant: "Child, seed",
        accentColor: "#f0a830",
        associated: [
          { char: "孩", pinyin: "hái", meaning: "child 👶" },
          { char: "孙", pinyin: "sūn", meaning: "grandchild 👴" },
          { char: "学", pinyin: "xué", meaning: "study 📚" },
          { char: "字", pinyin: "zì", meaning: "character 🔤" }
        ],
        examples: [
          { hanzi: "孩子们在学校。", pinyin: "Háizimen zài xuéxiào.", trans: "💬 Children are at school." },
          { hanzi: "这个字很难写。", pinyin: "Zhège zì hěn nán xiě.", trans: "💬 This character is hard to write." }
        ]
      },
      {
        radicalChar: "大",
        radicalNames: ["大"],
        pinyin: "dà",
        meaning: "Big 🦵",
        emoji: "🦵",
        variant: "Person with arms out",
        accentColor: "#5b7fa5",
        associated: [
          { char: "太", pinyin: "tài", meaning: "too 👑" },
          { char: "天", pinyin: "tiān", meaning: "sky ☁️" },
          { char: "夫", pinyin: "fū", meaning: "husband 🤵" },
          { char: "失", pinyin: "shī", meaning: "lose 😞" }
        ],
        examples: [
          { hanzi: "今天天气很好。", pinyin: "Jīntiān tiānqì hěn hǎo.", trans: "💬 The weather is nice today." },
          { hanzi: "他太大了，坐不下。", pinyin: "Tā tài dà le, zuò bú xià.", trans: "💬 He is too big to sit." }
        ]
      },
      {
        radicalChar: "小",
        radicalNames: ["小"],
        pinyin: "xiǎo",
        meaning: "Small 🐭",
        emoji: "🐭",
        variant: "Small / little",
        accentColor: "#6baa6b",
        associated: [
          { char: "少", pinyin: "shǎo", meaning: "few 👌" },
          { char: "尖", pinyin: "jiān", meaning: "sharp ✨" },
          { char: "尘", pinyin: "chén", meaning: "dust 🌫️" },
          { char: "雀", pinyin: "què", meaning: "sparrow 🐦" }
        ],
        examples: [
          { hanzi: "我有一只小猫。", pinyin: "Wǒ yǒu yì zhī xiǎo māo.", trans: "💬 I have a small cat." },
          { hanzi: "这里人很少。", pinyin: "Zhèlǐ rén hěn shǎo.", trans: "💬 There are few people here." }
        ]
      },
      {
        radicalChar: "立",
        radicalNames: ["立"],
        pinyin: "lì",
        meaning: "Stand 🧍",
        emoji: "🧍",
        variant: "Person standing",
        accentColor: "#b8956a",
        associated: [
          { char: "站", pinyin: "zhàn", meaning: "stand 🚉" },
          { char: "童", pinyin: "tóng", meaning: "child 👦" },
          { char: "章", pinyin: "zhāng", meaning: "chapter 📖" },
          { char: "竞", pinyin: "jìng", meaning: "compete 🏁" }
        ],
        examples: [
          { hanzi: "请站起来。", pinyin: "Qǐng zhàn qǐlái.", trans: "💬 Please stand up." },
          { hanzi: "第三章很有趣。", pinyin: "Dì sān zhāng hěn yǒuqù.", trans: "💬 Chapter three is interesting." }
        ]
      },
      {
        radicalChar: "又",
        radicalNames: ["又"],
        pinyin: "yòu",
        meaning: "Again / hand ✋",
        emoji: "✋",
        variant: "Right hand, again",
        accentColor: "#e8983e",
        associated: [
          { char: "友", pinyin: "yǒu", meaning: "friend 👫" },
          { char: "双", pinyin: "shuāng", meaning: "double 👯" },
          { char: "发", pinyin: "fā", meaning: "send 📤" },
          { char: "取", pinyin: "qǔ", meaning: "take 🖐️" }
        ],
        examples: [
          { hanzi: "我们是好朋友。", pinyin: "Wǒmen shì hǎo péngyou.", trans: "💬 We are good friends." },
          { hanzi: "他发了一封邮件。", pinyin: "Tā fā le yì fēng yóujiàn.", trans: "💬 He sent an email." }
        ]
      }
    ]
  },

  // ── 👄 Body & Health (unchanged) ─────────────────
  {
    id: "body",
    emoji: "👄",
    title: "Body & Health",
    radicals: [
      {
        radicalChar: "口",
        radicalNames: ["口"],
        pinyin: "kǒu",
        meaning: "Mouth 👄",
        emoji: "👄",
        variant: "Open mouth",
        accentColor: "#c75b7a",
        associated: [
          { char: "吃", pinyin: "chī", meaning: "eat 🍴" },
          { char: "喝", pinyin: "hē", meaning: "drink 🥤" },
          { char: "唱", pinyin: "chàng", meaning: "sing 🎤" },
          { char: "叫", pinyin: "jiào", meaning: "call 📣" }
        ],
        examples: [
          { hanzi: "我喜欢吃苹果。", pinyin: "Wǒ xǐhuān chī píngguǒ.", trans: "💬 I like eating apples." },
          { hanzi: "他唱歌很好听。", pinyin: "Tā chànggē hěn hǎotīng.", trans: "💬 He sings very well." }
        ]
      },
      {
        radicalChar: "目",
        radicalNames: ["目"],
        pinyin: "mù",
        meaning: "Eye 👁️",
        emoji: "👁️",
        variant: "Eye shape",
        accentColor: "#4a6b8a",
        associated: [
          { char: "看", pinyin: "kàn", meaning: "look 👀" },
          { char: "眼", pinyin: "yǎn", meaning: "eye 👁️" },
          { char: "睛", pinyin: "jīng", meaning: "eyeball 👁️" },
          { char: "睡", pinyin: "shuì", meaning: "sleep 😴" }
        ],
        examples: [
          { hanzi: "我用眼睛看书。", pinyin: "Wǒ yòng yǎnjīng kàn shū.", trans: "💬 I read with my eyes." },
          { hanzi: "他睡得很香。", pinyin: "Tā shuì de hěn xiāng.", trans: "💬 He sleeps very soundly." }
        ]
      },
      {
        radicalChar: "足",
        radicalNames: ["足", "⻊"],
        pinyin: "zú",
        meaning: "Foot 🦶",
        emoji: "🦶",
        variant: "Side: ⻊",
        accentColor: "#b87c4b",
        associated: [
          { char: "跑", pinyin: "pǎo", meaning: "run 🏃" },
          { char: "跳", pinyin: "tiào", meaning: "jump 🦘" },
          { char: "路", pinyin: "lù", meaning: "road 🛣️" },
          { char: "踢", pinyin: "tī", meaning: "kick ⚽" }
        ],
        examples: [
          { hanzi: "我喜欢跑步。", pinyin: "Wǒ xǐhuān pǎobù.", trans: "💬 I like running." },
          { hanzi: "这条路很长。", pinyin: "Zhè tiáo lù hěn cháng.", trans: "💬 This road is very long." }
        ]
      },
      {
        radicalChar: "手",
        radicalNames: ["手", "扌"],
        pinyin: "shǒu",
        meaning: "Hand ✋",
        emoji: "✋",
        variant: "Side: 扌",
        accentColor: "#b8956a",
        associated: [
          { char: "打", pinyin: "dǎ", meaning: "hit/play 🏀" },
          { char: "拍", pinyin: "pāi", meaning: "pat 🤚" },
          { char: "拉", pinyin: "lā", meaning: "pull 🤝" },
          { char: "抱", pinyin: "bào", meaning: "hug 🤗" }
        ],
        examples: [
          { hanzi: "我打篮球。", pinyin: "Wǒ dǎ lánqiú.", trans: "💬 I play basketball." },
          { hanzi: "请拉我的手。", pinyin: "Qǐng lā wǒ de shǒu.", trans: "💬 Please pull my hand." }
        ]
      },
      {
        radicalChar: "心",
        radicalNames: ["心", "忄"],
        pinyin: "xīn",
        meaning: "Heart ❤️",
        emoji: "❤️",
        variant: "Side: 忄",
        accentColor: "#e05555",
        associated: [
          { char: "想", pinyin: "xiǎng", meaning: "think 💭" },
          { char: "思", pinyin: "sī", meaning: "think 🤔" },
          { char: "爱", pinyin: "ài", meaning: "love ❤️" },
          { char: "情", pinyin: "qíng", meaning: "feeling 💕" }
        ],
        examples: [
          { hanzi: "我想你。", pinyin: "Wǒ xiǎng nǐ.", trans: "💬 I miss you." },
          { hanzi: "我爱你。", pinyin: "Wǒ ài nǐ.", trans: "💬 I love you." }
        ]
      },
      {
        radicalChar: "月",
        radicalNames: ["月 (flesh)"],
        pinyin: "ròu",
        meaning: "Flesh 🍖",
        emoji: "🍖",
        variant: "Flesh meaning (same shape as moon)",
        accentColor: "#7b7fc0",
        associated: [
          { char: "脸", pinyin: "liǎn", meaning: "face 🧑" },
          { char: "脑", pinyin: "nǎo", meaning: "brain 🧠" },
          { char: "腿", pinyin: "tuǐ", meaning: "leg 🦵" },
          { char: "胖", pinyin: "pàng", meaning: "fat ⚖️" }
        ],
        examples: [
          { hanzi: "我的腿有点疼。", pinyin: "Wǒ de tuǐ yǒudiǎn téng.", trans: "💬 My leg hurts a bit." },
          { hanzi: "他最近胖了。", pinyin: "Tā zuìjìn pàng le.", trans: "💬 He has gained weight recently." }
        ]
      },
      {
        radicalChar: "页",
        radicalNames: ["页"],
        pinyin: "yè",
        meaning: "Head / page 👤",
        emoji: "👤",
        variant: "Head, often right side",
        accentColor: "#9b7b5b",
        associated: [
          { char: "顶", pinyin: "dǐng", meaning: "top 🔝" },
          { char: "领", pinyin: "lǐng", meaning: "collar 👔" },
          { char: "颜", pinyin: "yán", meaning: "color 🎨" },
          { char: "题", pinyin: "tí", meaning: "topic 📝" }
        ],
        examples: [
          { hanzi: "我喜欢红色和蓝色。", pinyin: "Wǒ xǐhuān hóngsè hé lán sè.", trans: "💬 I like red and blue." },
          { hanzi: "这个问题很难。", pinyin: "Zhège wèntí hěn nán.", trans: "💬 This question is difficult." }
        ]
      },
      {
        radicalChar: "疒",
        radicalNames: ["疒"],
        pinyin: "nè",
        meaning: "Sickness 🤒",
        emoji: "🤒",
        variant: "Illness radical",
        accentColor: "#d4789b",
        associated: [
          { char: "病", pinyin: "bìng", meaning: "illness 🤒" },
          { char: "疼", pinyin: "téng", meaning: "pain 😣" },
          { char: "痛", pinyin: "tòng", meaning: "ache 😖" },
          { char: "瘦", pinyin: "shòu", meaning: "thin 🦴" }
        ],
        examples: [
          { hanzi: "我生病了。", pinyin: "Wǒ shēngbìng le.", trans: "💬 I am sick." },
          { hanzi: "我头疼。", pinyin: "Wǒ tóuténg.", trans: "💬 I have a headache." }
        ]
      },
      {
        radicalChar: "首",
        radicalNames: ["首"],
        pinyin: "shǒu",
        meaning: "Head 🤯",
        emoji: "🤯",
        variant: "Head, chief",
        accentColor: "#b89b5b",
        associated: [
          { char: "道", pinyin: "dào", meaning: "way 🛤️" },
          { char: "馗", pinyin: "kuí", meaning: "crossroad 🚦" }
        ],
        examples: [
          { hanzi: "我知道这条路。", pinyin: "Wǒ zhīdào zhè tiáo lù.", trans: "💬 I know this road." },
          { hanzi: "首都北京很大。", pinyin: "Shǒudū Běijīng hěn dà.", trans: "💬 The capital Beijing is big." }
        ]
      },
      {
        radicalChar: "皮",
        radicalNames: ["皮"],
        pinyin: "pí",
        meaning: "Skin 🧤",
        emoji: "🧤",
        variant: "Skin, hide",
        accentColor: "#c9a04b",
        associated: [
          { char: "皱", pinyin: "zhòu", meaning: "wrinkle 🧓" },
          { char: "坡", pinyin: "pō", meaning: "slope ⛰️" },
          { char: "被", pinyin: "bèi", meaning: "blanket 🛌" },
          { char: "披", pinyin: "pī", meaning: "drape 🧣" }
        ],
        examples: [
          { hanzi: "老人脸上有很多皱纹。", pinyin: "Lǎorén liǎn shàng yǒu hěnduō zhòuwén.", trans: "💬 The old man has many wrinkles." },
          { hanzi: "山坡上有很多花。", pinyin: "Shānpō shàng yǒu hěnduō huā.", trans: "💬 There are many flowers on the hillside." }
        ]
      }
    ]
  },

  // ── 👁️ More Body & Senses (NEW) ────────────────
  {
    id: "more-body",
    emoji: "👁️",
    title: "More Body & Senses",
    radicals: [
      {
        radicalChar: "见",
        radicalNames: ["见"],
        pinyin: "jiàn",
        meaning: "See 👁️",
        emoji: "👁️",
        variant: "Vision radical",
        accentColor: "#5c7a9a",
        associated: [
          { char: "视", pinyin: "shì", meaning: "vision 👓" },
          { char: "觉", pinyin: "jué", meaning: "feel 😌" },
          { char: "览", pinyin: "lǎn", meaning: "view 🖼️" },
          { char: "观", pinyin: "guān", meaning: "observe 🔭" }
        ],
        examples: [
          { hanzi: "我觉得很好。", pinyin: "Wǒ juéde hěn hǎo.", trans: "💬 I feel good." },
          { hanzi: "电视很有趣。", pinyin: "Diànshì hěn yǒuqù.", trans: "💬 TV is interesting." }
        ]
      },
      {
        radicalChar: "骨",
        radicalNames: ["骨"],
        pinyin: "gǔ",
        meaning: "Bone 🦴",
        emoji: "🦴",
        variant: "Skeleton radical",
        accentColor: "#d4c4a8",
        associated: [
          { char: "骼", pinyin: "gé", meaning: "skeleton 🦴" },
          { char: "髋", pinyin: "kuān", meaning: "hip 🦵" }
        ],
        examples: [
          { hanzi: "骨骼很重要。", pinyin: "Gǔgé hěn zhòngyào.", trans: "💬 Bones are important." }
        ]
      },
      {
        radicalChar: "而",
        radicalNames: ["而"],
        pinyin: "ér",
        meaning: "And / beard 🧔",
        emoji: "🧔",
        variant: "Connector radical",
        accentColor: "#8b6b4a",
        associated: [
          { char: "耐", pinyin: "nài", meaning: "endure 💪" },
          { char: "耍", pinyin: "shuǎ", meaning: "play 🃏" },
          { char: "需", pinyin: "xū", meaning: "need 💧" }
        ],
        examples: [
          { hanzi: "我需要帮助。", pinyin: "Wǒ xūyào bāngzhù.", trans: "💬 I need help." },
          { hanzi: "他很有耐心。", pinyin: "Tā hěn yǒu nàixīn.", trans: "💬 He is patient." }
        ]
      }
    ]
  },

  // ── 🌿 Nature & Animals (unchanged) ────────────
  {
    id: "nature",
    emoji: "🌿",
    title: "Nature & Animals",
    radicals: [
      {
        radicalChar: "水",
        radicalNames: ["水", "氵"],
        pinyin: "shuǐ",
        meaning: "Water 💧",
        emoji: "💧",
        variant: "Side: 氵",
        accentColor: "#4a90d9",
        associated: [
          { char: "河", pinyin: "hé", meaning: "river 🌊" },
          { char: "海", pinyin: "hǎi", meaning: "sea 🌊" },
          { char: "洗", pinyin: "xǐ", meaning: "wash 🧼" },
          { char: "泳", pinyin: "yǒng", meaning: "swim 🏊" }
        ],
        examples: [
          { hanzi: "河里有很多鱼。", pinyin: "Hé lǐ yǒu hěnduō yú.", trans: "💬 There are many fish in the river." },
          { hanzi: "我去海边游泳。", pinyin: "Wǒ qù hǎibiān yóuyǒng.", trans: "💬 I go to the beach to swim." }
        ]
      },
      {
        radicalChar: "火",
        radicalNames: ["火", "灬"],
        pinyin: "huǒ",
        meaning: "Fire 🔥",
        emoji: "🔥",
        variant: "Bottom: 灬",
        accentColor: "#e85d3a",
        associated: [
          { char: "烧", pinyin: "shāo", meaning: "burn 🔥" },
          { char: "烤", pinyin: "kǎo", meaning: "roast 🍖" },
          { char: "热", pinyin: "rè", meaning: "hot 🥵" },
          { char: "灯", pinyin: "dēng", meaning: "light 💡" }
        ],
        examples: [
          { hanzi: "今天很热。", pinyin: "Jīntiān hěn rè.", trans: "💬 Today is very hot." },
          { hanzi: "我喜欢烤鸭。", pinyin: "Wǒ xǐhuān kǎoyā.", trans: "💬 I like roast duck." }
        ]
      },
      {
        radicalChar: "木",
        radicalNames: ["木"],
        pinyin: "mù",
        meaning: "Tree 🌳",
        emoji: "🌳",
        variant: "Tree shape",
        accentColor: "#5d9b5c",
        associated: [
          { char: "林", pinyin: "lín", meaning: "forest 🌳" },
          { char: "森", pinyin: "sēn", meaning: "woods 🌲" },
          { char: "桌", pinyin: "zhuō", meaning: "table 🪑" },
          { char: "树", pinyin: "shù", meaning: "tree 🌳" }
        ],
        examples: [
          { hanzi: "公园里有很多树。", pinyin: "Gōngyuán lǐ yǒu hěnduō shù.", trans: "💬 There are many trees in the park." },
          { hanzi: "这张桌子是木头的。", pinyin: "Zhè zhāng zhuōzi shì mùtou de.", trans: "💬 This table is made of wood." }
        ]
      },
      {
        radicalChar: "艹",
        radicalNames: ["艹"],
        pinyin: "cǎo",
        meaning: "Grass 🌿",
        emoji: "🌿",
        variant: "Grass crown",
        accentColor: "#6baa6b",
        associated: [
          { char: "花", pinyin: "huā", meaning: "flower 🌸" },
          { char: "草", pinyin: "cǎo", meaning: "grass 🌿" },
          { char: "茶", pinyin: "chá", meaning: "tea 🍵" },
          { char: "菜", pinyin: "cài", meaning: "vegetable 🥬" }
        ],
        examples: [
          { hanzi: "这朵花很美。", pinyin: "Zhè duǒ huā hěn měi.", trans: "💬 This flower is beautiful." },
          { hanzi: "我喜欢喝绿茶。", pinyin: "Wǒ xǐhuān hē lǜchá.", trans: "💬 I like to drink green tea." }
        ]
      },
      {
        radicalChar: "土",
        radicalNames: ["土"],
        pinyin: "tǔ",
        meaning: "Earth ⛰️",
        emoji: "⛰️",
        variant: "Ground, soil",
        accentColor: "#a0785a",
        associated: [
          { char: "地", pinyin: "dì", meaning: "ground 🌍" },
          { char: "坐", pinyin: "zuò", meaning: "sit 🪑" },
          { char: "城", pinyin: "chéng", meaning: "city 🏙️" },
          { char: "块", pinyin: "kuài", meaning: "piece 🧱" }
        ],
        examples: [
          { hanzi: "我喜欢坐在草地上。", pinyin: "Wǒ xǐhuān zuò zài cǎo dì shàng.", trans: "💬 I like sitting on the grass." },
          { hanzi: "这座城市很大。", pinyin: "Zhè zuò chéngshì hěn dà.", trans: "💬 This city is very big." }
        ]
      },
      {
        radicalChar: "石",
        radicalNames: ["石"],
        pinyin: "shí",
        meaning: "Stone 🪨",
        emoji: "🪨",
        variant: "Rock",
        accentColor: "#7e8a8b",
        associated: [
          { char: "码", pinyin: "mǎ", meaning: "number 🔢" },
          { char: "矿", pinyin: "kuàng", meaning: "mine ⛏️" },
          { char: "破", pinyin: "pò", meaning: "break 💥" },
          { char: "硬", pinyin: "yìng", meaning: "hard 🪨" }
        ],
        examples: [
          { hanzi: "地上有一块石头。", pinyin: "Dì shàng yǒu yí kuài shítou.", trans: "💬 There is a stone on the ground." },
          { hanzi: "这个石头很硬。", pinyin: "Zhège shítou hěn yìng.", trans: "💬 This stone is very hard." }
        ]
      },
      {
        radicalChar: "山",
        radicalNames: ["山"],
        pinyin: "shān",
        meaning: "Mountain ⛰️",
        emoji: "⛰️",
        variant: "Peak",
        accentColor: "#6a7b6a",
        associated: [
          { char: "岩", pinyin: "yán", meaning: "rock 🪨" },
          { char: "峰", pinyin: "fēng", meaning: "peak 🏔️" },
          { char: "岛", pinyin: "dǎo", meaning: "island 🏝️" }
        ],
        examples: [
          { hanzi: "那座山很高。", pinyin: "Nà zuò shān hěn gāo.", trans: "💬 That mountain is tall." },
          { hanzi: "这个岛很漂亮。", pinyin: "Zhège dǎo hěn piàoliang.", trans: "💬 This island is beautiful." }
        ]
      },
      {
        radicalChar: "雨",
        radicalNames: ["雨"],
        pinyin: "yǔ",
        meaning: "Rain 🌧️",
        emoji: "🌧️",
        variant: "Rain drops",
        accentColor: "#5c7a9a",
        associated: [
          { char: "雪", pinyin: "xuě", meaning: "snow ❄️" },
          { char: "雷", pinyin: "léi", meaning: "thunder ⚡" },
          { char: "雾", pinyin: "wù", meaning: "fog 🌫️" }
        ],
        examples: [
          { hanzi: "今天下雨了。", pinyin: "Jīntiān xià yǔ le.", trans: "💬 It rained today." },
          { hanzi: "冬天经常下雪。", pinyin: "Dōngtiān jīngcháng xià xuě.", trans: "💬 It often snows in winter." }
        ]
      },
      {
        radicalChar: "日",
        radicalNames: ["日"],
        pinyin: "rì",
        meaning: "Sun ☀️",
        emoji: "☀️",
        variant: "Sun, day",
        accentColor: "#f0a830",
        associated: [
          { char: "明", pinyin: "míng", meaning: "bright ☀️" },
          { char: "晴", pinyin: "qíng", meaning: "sunny ☀️" },
          { char: "时", pinyin: "shí", meaning: "time ⏰" },
          { char: "星", pinyin: "xīng", meaning: "star ⭐" }
        ],
        examples: [
          { hanzi: "今天是晴天。", pinyin: "Jīntiān shì qíngtiān.", trans: "💬 Today is sunny." },
          { hanzi: "现在几点了？", pinyin: "Xiànzài jǐ diǎn le?", trans: "💬 What time is it now?" }
        ]
      },
      {
        radicalChar: "月",
        radicalNames: ["月 (moon)"],
        pinyin: "yuè",
        meaning: "Moon 🌙",
        emoji: "🌙",
        variant: "Moon, month",
        accentColor: "#7b7fc0",
        associated: [
          { char: "朋", pinyin: "péng", meaning: "friend 👫" },
          { char: "期", pinyin: "qī", meaning: "period 📅" },
          { char: "朗", pinyin: "lǎng", meaning: "bright 🌕" }
        ],
        examples: [
          { hanzi: "月亮很漂亮。", pinyin: "Yuèliàng hěn piàoliang.", trans: "💬 The moon is beautiful." },
          { hanzi: "我们下个星期见面。", pinyin: "Wǒmen xià gè xīngqī jiànmiàn.", trans: "💬 We will meet next week." }
        ]
      },
      {
        radicalChar: "虫",
        radicalNames: ["虫"],
        pinyin: "chóng",
        meaning: "Insect 🐛",
        emoji: "🐛",
        variant: "Worm, insect",
        accentColor: "#6b8e4a",
        associated: [
          { char: "蛇", pinyin: "shé", meaning: "snake 🐍" },
          { char: "蚊", pinyin: "wén", meaning: "mosquito 🦟" },
          { char: "蜜", pinyin: "mì", meaning: "honey 🍯" },
          { char: "蝶", pinyin: "dié", meaning: "butterfly 🦋" }
        ],
        examples: [
          { hanzi: "夏天有很多蚊子。", pinyin: "Xiàtiān yǒu hěnduō wénzi.", trans: "💬 There are many mosquitoes in summer." },
          { hanzi: "蜂蜜很甜。", pinyin: "Fēngmì hěn tián.", trans: "💬 Honey is sweet." }
        ]
      },
      {
        radicalChar: "鸟",
        radicalNames: ["鸟"],
        pinyin: "niǎo",
        meaning: "Bird 🐦",
        emoji: "🐦",
        variant: "Bird pictogram",
        accentColor: "#b89b5b",
        associated: [
          { char: "鸡", pinyin: "jī", meaning: "chicken 🐔" },
          { char: "鸭", pinyin: "yā", meaning: "duck 🦆" },
          { char: "鹅", pinyin: "é", meaning: "goose 🦢" }
        ],
        examples: [
          { hanzi: "树上有一只小鸟。", pinyin: "Shù shàng yǒu yì zhī xiǎo niǎo.", trans: "💬 There is a small bird on the tree." },
          { hanzi: "北京烤鸭很有名。", pinyin: "Běijīng kǎoyā hěn yǒumíng.", trans: "💬 Beijing roast duck is famous." }
        ]
      },
      {
        radicalChar: "鱼",
        radicalNames: ["鱼"],
        pinyin: "yú",
        meaning: "Fish 🐟",
        emoji: "🐟",
        variant: "Fish shape",
        accentColor: "#5c9eb0",
        associated: [
          { char: "鲜", pinyin: "xiān", meaning: "fresh 🐠" },
          { char: "鲤", pinyin: "lǐ", meaning: "carp 🎏" },
          { char: "鲸", pinyin: "jīng", meaning: "whale 🐋" }
        ],
        examples: [
          { hanzi: "这条鱼很新鲜。", pinyin: "Zhè tiáo yú hěn xīnxiān.", trans: "💬 This fish is very fresh." },
          { hanzi: "鲸鱼是最大的动物。", pinyin: "Jīngyú shì zuì dà de dòngwù.", trans: "💬 The whale is the largest animal." }
        ]
      },
      {
        radicalChar: "马",
        radicalNames: ["马"],
        pinyin: "mǎ",
        meaning: "Horse 🐴",
        emoji: "🐴",
        variant: "Horse, often phonetic",
        accentColor: "#8b6b4a",
        associated: [
          { char: "妈", pinyin: "mā", meaning: "mom 👩" },
          { char: "吗", pinyin: "ma", meaning: "question ❓" },
          { char: "码", pinyin: "mǎ", meaning: "code 🔢" }
        ],
        examples: [
          { hanzi: "你好吗？", pinyin: "Nǐ hǎo ma?", trans: "💬 How are you?" },
          { hanzi: "扫描二维码。", pinyin: "Sǎomiáo èrwéimǎ.", trans: "💬 Scan the QR code." }
        ]
      },
      {
        radicalChar: "田",
        radicalNames: ["田"],
        pinyin: "tián",
        meaning: "Field 🌾",
        emoji: "🌾",
        variant: "Rice field",
        accentColor: "#b89b5b",
        associated: [
          { char: "男", pinyin: "nán", meaning: "male 👨" },
          { char: "界", pinyin: "jiè", meaning: "boundary 🌐" },
          { char: "留", pinyin: "liú", meaning: "stay 🛑" }
        ],
        examples: [
          { hanzi: "田里有很多稻子。", pinyin: "Tián lǐ yǒu hěnduō dàozi.", trans: "💬 There is a lot of rice in the field." },
          { hanzi: "请留下来。", pinyin: "Qǐng liú xiàlái.", trans: "💬 Please stay." }
        ]
      },
      {
        radicalChar: "米",
        radicalNames: ["米"],
        pinyin: "mǐ",
        meaning: "Rice 🍚",
        emoji: "🍚",
        variant: "Grain, rice",
        accentColor: "#e8983e",
        associated: [
          { char: "粉", pinyin: "fěn", meaning: "powder 🧂" },
          { char: "糖", pinyin: "táng", meaning: "sugar 🍬" },
          { char: "粮", pinyin: "liáng", meaning: "grain 🌾" },
          { char: "粗", pinyin: "cū", meaning: "coarse 🍞" }
        ],
        examples: [
          { hanzi: "我早饭吃米饭。", pinyin: "Wǒ zǎofàn chī mǐfàn.", trans: "💬 I eat rice for breakfast." },
          { hanzi: "糖太甜了。", pinyin: "Táng tài tián le.", trans: "💬 Sugar is too sweet." }
        ]
      },
      {
        radicalChar: "竹",
        radicalNames: ["竹", "⺮"],
        pinyin: "zhú",
        meaning: "Bamboo 🎋",
        emoji: "🎋",
        variant: "Top: ⺮",
        accentColor: "#7da87b",
        associated: [
          { char: "笔", pinyin: "bǐ", meaning: "pen 🖊️" },
          { char: "筷", pinyin: "kuài", meaning: "chopsticks 🥢" },
          { char: "篮", pinyin: "lán", meaning: "basket 🧺" }
        ],
        examples: [
          { hanzi: "请给我一双筷子。", pinyin: "Qǐng gěi wǒ yì shuāng kuàizi.", trans: "💬 Please give me chopsticks." },
          { hanzi: "我用笔记笔记。", pinyin: "Wǒ yòng bǐ jì bǐjì.", trans: "💬 I take notes with a pen." }
        ]
      },
      {
        radicalChar: "犭",
        radicalNames: ["犭 (犬)"],
        pinyin: "quǎn",
        meaning: "Dog / beast 🐕",
        emoji: "🐕",
        variant: "Animal radical",
        accentColor: "#9e7b5c",
        associated: [
          { char: "狗", pinyin: "gǒu", meaning: "dog 🐶" },
          { char: "猫", pinyin: "māo", meaning: "cat 🐱" },
          { char: "猪", pinyin: "zhū", meaning: "pig 🐷" },
          { char: "猴", pinyin: "hóu", meaning: "monkey 🐒" }
        ],
        examples: [
          { hanzi: "我有一只小狗。", pinyin: "Wǒ yǒu yì zhī xiǎo gǒu.", trans: "💬 I have a small dog." },
          { hanzi: "猫喜欢吃鱼。", pinyin: "Māo xǐhuān chī yú.", trans: "💬 Cats like to eat fish." }
        ]
      },
      {
        radicalChar: "气",
        radicalNames: ["气"],
        pinyin: "qì",
        meaning: "Air / gas 💨",
        emoji: "💨",
        variant: "Air, gas, energy",
        accentColor: "#5b8c99",
        associated: [
          { char: "汽", pinyin: "qì", meaning: "steam/car 🚗" },
          { char: "气", pinyin: "qì", meaning: "air 💨" },
          { char: "氛", pinyin: "fēn", meaning: "atmosphere 🌫️" },
          { char: "氧", pinyin: "yǎng", meaning: "oxygen 🫁" }
        ],
        examples: [
          { hanzi: "天气很好。", pinyin: "Tiānqì hěn hǎo.", trans: "💬 The weather is nice." },
          { hanzi: "汽车来了。", pinyin: "Qìchē lái le.", trans: "💬 The car is coming." }
        ]
      },
      {
        radicalChar: "风",
        radicalNames: ["风"],
        pinyin: "fēng",
        meaning: "Wind 🌬️",
        emoji: "🌬️",
        variant: "Wind, breeze",
        accentColor: "#7e9b9b",
        associated: [
          { char: "飘", pinyin: "piāo", meaning: "float 🎈" },
          { char: "飓", pinyin: "jù", meaning: "hurricane 🌀" },
          { char: "飒", pinyin: "sà", meaning: "rustling 🍃" }
        ],
        examples: [
          { hanzi: "今天风很大。", pinyin: "Jīntiān fēng hěn dà.", trans: "💬 It's very windy today." },
          { hanzi: "风筝在飞。", pinyin: "Fēngzhēng zài fēi.", trans: "💬 The kite is flying." }
        ]
      },
      {
        radicalChar: "羽",
        radicalNames: ["羽"],
        pinyin: "yǔ",
        meaning: "Feather 🪶",
        emoji: "🪶",
        variant: "Feather, wing",
        accentColor: "#8b7a6b",
        associated: [
          { char: "翅", pinyin: "chì", meaning: "wing 🦋" },
          { char: "翔", pinyin: "xiáng", meaning: "soar 🕊️" },
          { char: "翻", pinyin: "fān", meaning: "flip 🤸" },
          { char: "翁", pinyin: "wēng", meaning: "old man 👴" }
        ],
        examples: [
          { hanzi: "鸟儿张开翅膀。", pinyin: "Niǎoer zhāngkāi chìbǎng.", trans: "💬 The bird spreads its wings." },
          { hanzi: "他翻了一页书。", pinyin: "Tā fān le yí yè shū.", trans: "💬 He turned a page of the book." }
        ]
      },
      {
        radicalChar: "隹",
        radicalNames: ["隹"],
        pinyin: "zhuī",
        meaning: "Short bird 🐦",
        emoji: "🐦",
        variant: "Bird radical (right side)",
        accentColor: "#b8956a",
        associated: [
          { char: "难", pinyin: "nán", meaning: "difficult 😣" },
          { char: "谁", pinyin: "shéi", meaning: "who ❓" },
          { char: "集", pinyin: "jí", meaning: "gather 📦" }
        ],
        examples: [
          { hanzi: "这个问题很难。", pinyin: "Zhège wèntí hěn nán.", trans: "💬 This question is difficult." },
          { hanzi: "你是谁？", pinyin: "Nǐ shì shéi?", trans: "💬 Who are you?" }
        ]
      }
    ]
  },

  // ── 🌄 More Nature (NEW) ─────────────────────────
  {
    id: "more-nature",
    emoji: "🌄",
    title: "More Nature",
    radicals: [
      {
        radicalChar: "谷",
        radicalNames: ["谷"],
        pinyin: "gǔ",
        meaning: "Valley 🏞️",
        emoji: "🏞️",
        variant: "Valley, grain (phonetic)",
        accentColor: "#6a7b6a",
        associated: [
          { char: "欲", pinyin: "yù", meaning: "desire 💭" },
          { char: "浴", pinyin: "yù", meaning: "bathe 🛁" },
          { char: "裕", pinyin: "yù", meaning: "abundant 💰" }
        ],
        examples: [
          { hanzi: "他很有食欲。", pinyin: "Tā hěn yǒu shíyù.", trans: "💬 He has a good appetite." },
          { hanzi: "洗澡很舒服。", pinyin: "Xǐzǎo hěn shūfu.", trans: "💬 Bathing is comfortable." }
        ]
      },
      {
        radicalChar: "穴",
        radicalNames: ["穴"],
        pinyin: "xué",
        meaning: "Cave / hole 🕳️",
        emoji: "🕳️",
        variant: "Cave, den",
        accentColor: "#7e8a8b",
        associated: [
          { char: "空", pinyin: "kōng", meaning: "empty 🈳" },
          { char: "穿", pinyin: "chuān", meaning: "wear/pierce 👗" },
          { char: "窗", pinyin: "chuāng", meaning: "window 🪟" },
          { char: "究", pinyin: "jiū", meaning: "research 🔍" }
        ],
        examples: [
          { hanzi: "房间里很空。", pinyin: "Fángjiān lǐ hěn kōng.", trans: "💬 The room is empty." },
          { hanzi: "请打开窗户。", pinyin: "Qǐng dǎkāi chuānghu.", trans: "💬 Please open the window." }
        ]
      },
      {
        radicalChar: "厂",
        radicalNames: ["厂"],
        pinyin: "hǎn",
        meaning: "Cliff / shelter 🏔️",
        emoji: "🏔️",
        variant: "Cliff, often a building",
        accentColor: "#9b8b7a",
        associated: [
          { char: "历", pinyin: "lì", meaning: "calendar 📅" },
          { char: "压", pinyin: "yā", meaning: "press 🏋️" },
          { char: "原", pinyin: "yuán", meaning: "original 🔙" },
          { char: "厅", pinyin: "tīng", meaning: "hall 🏛️" }
        ],
        examples: [
          { hanzi: "日历在墙上。", pinyin: "Rìlì zài qiáng shàng.", trans: "💬 The calendar is on the wall." },
          { hanzi: "客厅很大。", pinyin: "Kètīng hěn dà.", trans: "💬 The living room is big." }
        ]
      }
    ]
  },

  // ── 🚶 Movement & Direction (NEW) ───────────────
  {
    id: "movement",
    emoji: "🚶",
    title: "Movement & Direction",
    radicals: [
      {
        radicalChar: "辶",
        radicalNames: ["辶"],
        pinyin: "chuò",
        meaning: "Walk 🚶",
        emoji: "🚶",
        variant: "Movement radical",
        accentColor: "#5e8b7c",
        associated: [
          { char: "过", pinyin: "guò", meaning: "pass 🚶" },
          { char: "还", pinyin: "hái", meaning: "still 🔙" },
          { char: "这", pinyin: "zhè", meaning: "this 👈" },
          { char: "进", pinyin: "jìn", meaning: "enter 🚪" }
        ],
        examples: [
          { hanzi: "请进！", pinyin: "Qǐng jìn!", trans: "💬 Please come in!" },
          { hanzi: "我还没吃饭。", pinyin: "Wǒ hái méi chīfàn.", trans: "💬 I haven't eaten yet." }
        ]
      },
      {
        radicalChar: "彳",
        radicalNames: ["彳"],
        pinyin: "chì",
        meaning: "Step 🚶",
        emoji: "🚶",
        variant: "Step, walk",
        accentColor: "#7da87b",
        associated: [
          { char: "行", pinyin: "xíng", meaning: "go 🚶" },
          { char: "很", pinyin: "hěn", meaning: "very 👍" },
          { char: "得", pinyin: "de", meaning: "get 🎯" },
          { char: "往", pinyin: "wǎng", meaning: "toward ➡️" }
        ],
        examples: [
          { hanzi: "我很好，谢谢！", pinyin: "Wǒ hěn hǎo, xièxie!", trans: "💬 I'm very well, thank you!" },
          { hanzi: "往前走。", pinyin: "Wǎng qián zǒu.", trans: "💬 Go forward." }
        ]
      },
      {
        radicalChar: "走",
        radicalNames: ["走"],
        pinyin: "zǒu",
        meaning: "Walk / run 🏃",
        emoji: "🏃",
        variant: "Movement radical",
        accentColor: "#b87c4b",
        associated: [
          { char: "起", pinyin: "qǐ", meaning: "rise ⬆️" },
          { char: "超", pinyin: "chāo", meaning: "surpass 🏆" },
          { char: "赶", pinyin: "gǎn", meaning: "catch up 🏃" },
          { char: "越", pinyin: "yuè", meaning: "cross 🚶" }
        ],
        examples: [
          { hanzi: "我们走吧！", pinyin: "Wǒmen zǒu ba!", trans: "💬 Let's go!" },
          { hanzi: "他跑得很快。", pinyin: "Tā pǎo de hěn kuài.", trans: "💬 He runs very fast." }
        ]
      },
      {
        radicalChar: "至",
        radicalNames: ["至"],
        pinyin: "zhì",
        meaning: "Arrive 🎯",
        emoji: "🎯",
        variant: "Reach, arrive",
        accentColor: "#f0a830",
        associated: [
          { char: "到", pinyin: "dào", meaning: "arrive 🚪" },
          { char: "致", pinyin: "zhì", meaning: "cause 💌" },
          { char: "臻", pinyin: "zhēn", meaning: "attain ✨" }
        ],
        examples: [
          { hanzi: "他到医院了。", pinyin: "Tā dào yīyuàn le.", trans: "💬 He arrived at the hospital." }
        ]
      },
      {
        radicalChar: "止",
        radicalNames: ["止"],
        pinyin: "zhǐ",
        meaning: "Stop 🛑",
        emoji: "🛑",
        variant: "Stop, foot",
        accentColor: "#e05555",
        associated: [
          { char: "步", pinyin: "bù", meaning: "step 🚶" },
          { char: "此", pinyin: "cǐ", meaning: "this 👈" },
          { char: "武", pinyin: "wǔ", meaning: "martial 🥋" }
        ],
        examples: [
          { hanzi: "请止步。", pinyin: "Qǐng zhǐbù.", trans: "💬 Please stop." },
          { hanzi: "他练武术。", pinyin: "Tā liàn wǔshù.", trans: "💬 He practices martial arts." }
        ]
      }
    ]
  },

  // ── 🍺 Food & Drink ───────────────────────────── (unchanged)
  {
    id: "food",
    emoji: "🍺",
    title: "Food & Drink",
    radicals: [
      {
        radicalChar: "食",
        radicalNames: ["食", "饣"],
        pinyin: "shí",
        meaning: "Food 🍽️",
        emoji: "🍽️",
        variant: "Side: 饣",
        accentColor: "#e8983e",
        associated: [
          { char: "饭", pinyin: "fàn", meaning: "meal 🍚" },
          { char: "饺", pinyin: "jiǎo", meaning: "dumpling 🥟" },
          { char: "饿", pinyin: "è", meaning: "hungry 😋" },
          { char: "饱", pinyin: "bǎo", meaning: "full 🍔" }
        ],
        examples: [
          { hanzi: "我饿了，想吃饺子。", pinyin: "Wǒ è le, xiǎng chī jiǎozi.", trans: "💬 I'm hungry, I want dumplings." },
          { hanzi: "我吃饱了。", pinyin: "Wǒ chībǎo le.", trans: "💬 I'm full." }
        ]
      },
      {
        radicalChar: "酉",
        radicalNames: ["酉"],
        pinyin: "yǒu",
        meaning: "Wine / alcohol 🍷",
        emoji: "🍷",
        variant: "Alcohol, fermentation",
        accentColor: "#c49b3f",
        associated: [
          { char: "酒", pinyin: "jiǔ", meaning: "alcohol 🍺" },
          { char: "酸", pinyin: "suān", meaning: "sour 🍋" },
          { char: "醒", pinyin: "xǐng", meaning: "wake up ⏰" },
          { char: "醉", pinyin: "zuì", meaning: "drunk 🥴" }
        ],
        examples: [
          { hanzi: "我不喝酒。", pinyin: "Wǒ bù hē jiǔ.", trans: "💬 I don't drink alcohol." },
          { hanzi: "早上我醒了。", pinyin: "Zǎoshang wǒ xǐng le.", trans: "💬 I woke up in the morning." }
        ]
      },
      {
        radicalChar: "豆",
        radicalNames: ["豆"],
        pinyin: "dòu",
        meaning: "Bean 🫘",
        emoji: "🫘",
        variant: "Bean, container",
        accentColor: "#8b6b4a",
        associated: [
          { char: "豌", pinyin: "wān", meaning: "pea 🟢" },
          { char: "豉", pinyin: "chǐ", meaning: "fermented bean 🫘" },
          { char: "登", pinyin: "dēng", meaning: "climb 🧗" },
          { char: "短", pinyin: "duǎn", meaning: "short 📏" }
        ],
        examples: [
          { hanzi: "我喜欢吃豌豆。", pinyin: "Wǒ xǐhuān chī wāndòu.", trans: "💬 I like to eat peas." },
          { hanzi: "他登上了山。", pinyin: "Tā dēng shàng le shān.", trans: "💬 He climbed the mountain." }
        ]
      }
    ]
  },

  // ── 🍽️ Food & Taste (NEW) ───────────────────────
  {
    id: "more-food",
    emoji: "🍽️",
    title: "Food & Taste",
    radicals: [
      {
        radicalChar: "辛",
        radicalNames: ["辛"],
        pinyin: "xīn",
        meaning: "Bitter / spicy 🌶️",
        emoji: "🌶️",
        variant: "Acrid, hardship",
        accentColor: "#e85d3a",
        associated: [
          { char: "辣", pinyin: "là", meaning: "spicy 🌶️" },
          { char: "辨", pinyin: "biàn", meaning: "distinguish 🔍" },
          { char: "辩", pinyin: "biàn", meaning: "debate 🗣️" },
          { char: "辫", pinyin: "biàn", meaning: "braid 💇" }
        ],
        examples: [
          { hanzi: "这个菜很辣。", pinyin: "Zhège cài hěn là.", trans: "💬 This dish is spicy." },
          { hanzi: "你能分辨颜色吗？", pinyin: "Nǐ néng fēnbiàn yánsè ma?", trans: "💬 Can you distinguish colors?" }
        ]
      },
      {
        radicalChar: "臼",
        radicalNames: ["臼"],
        pinyin: "jiù",
        meaning: "Mortar 🧂",
        emoji: "🧂",
        variant: "Mortar, pounding",
        accentColor: "#a0785a",
        associated: [
          { char: "舅", pinyin: "jiù", meaning: "uncle 👨" },
          { char: "旧", pinyin: "jiù", meaning: "old 📜" },
          { char: "舂", pinyin: "chōng", meaning: "pound 🔨" }
        ],
        examples: [
          { hanzi: "我舅舅很高。", pinyin: "Wǒ jiùjiu hěn gāo.", trans: "💬 My uncle is tall." },
          { hanzi: "这件衣服很旧。", pinyin: "Zhè jiàn yīfu hěn jiù.", trans: "💬 This clothes is old." }
        ]
      },
      {
        radicalChar: "甘",
        radicalNames: ["甘"],
        pinyin: "gān",
        meaning: "Sweet 🍭",
        emoji: "🍭",
        variant: "Sweet, pleasant",
        accentColor: "#d4789b",
        associated: [
          { char: "甜", pinyin: "tián", meaning: "sweet 🍬" },
          { char: "某", pinyin: "mǒu", meaning: "some ❓" },
          { char: "甚", pinyin: "shèn", meaning: "very 💯" }
        ],
        examples: [
          { hanzi: "这个苹果很甜。", pinyin: "Zhège píngguǒ hěn tián.", trans: "💬 This apple is sweet." },
          { hanzi: "某人来了。", pinyin: "Mǒurén lái le.", trans: "💬 Someone is coming." }
        ]
      }
    ]
  },

  // ── 🏠 Shelter & Places (unchanged) ──────────────
  {
    id: "shelter",
    emoji: "🏠",
    title: "Shelter & Places",
    radicals: [
      {
        radicalChar: "门",
        radicalNames: ["门"],
        pinyin: "mén",
        meaning: "Door 🚪",
        emoji: "🚪",
        variant: "Gate, door",
        accentColor: "#8b6b4a",
        associated: [
          { char: "间", pinyin: "jiān", meaning: "between 📏" },
          { char: "问", pinyin: "wèn", meaning: "ask ❓" },
          { char: "闭", pinyin: "bì", meaning: "close 🔒" }
        ],
        examples: [
          { hanzi: "请问，图书馆在哪儿？", pinyin: "Qǐngwèn, túshūguǎn zài nǎr?", trans: "💬 Excuse me, where is the library?" },
          { hanzi: "请把门关上。", pinyin: "Qǐng bǎ mén guān shàng.", trans: "💬 Please close the door." }
        ]
      },
      {
        radicalChar: "宀",
        radicalNames: ["宀"],
        pinyin: "mián",
        meaning: "Roof 🏠",
        emoji: "🏠",
        variant: "Roof top",
        accentColor: "#b0926a",
        associated: [
          { char: "家", pinyin: "jiā", meaning: "home 🏡" },
          { char: "安", pinyin: "ān", meaning: "peace 😌" },
          { char: "字", pinyin: "zì", meaning: "character 🔤" }
        ],
        examples: [
          { hanzi: "我家有三口人。", pinyin: "Wǒ jiā yǒu sān kǒu rén.", trans: "💬 My family has three people." },
          { hanzi: "晚安！", pinyin: "Wǎn'ān!", trans: "💬 Good night!" }
        ]
      },
      {
        radicalChar: "户",
        radicalNames: ["户"],
        pinyin: "hù",
        meaning: "Door / household 🚪",
        emoji: "🚪",
        variant: "Household",
        accentColor: "#b87c4b",
        associated: [
          { char: "房", pinyin: "fáng", meaning: "room 🏠" },
          { char: "所", pinyin: "suǒ", meaning: "place 📍" },
          { char: "扇", pinyin: "shàn", meaning: "fan 🪭" }
        ],
        examples: [
          { hanzi: "我的房间很干净。", pinyin: "Wǒ de fángjiān hěn gānjìng.", trans: "💬 My room is clean." },
          { hanzi: "这个地方很安静。", pinyin: "Zhège dìfāng hěn ānjìng.", trans: "💬 This place is quiet." }
        ]
      },
      {
        radicalChar: "广",
        radicalNames: ["广"],
        pinyin: "yǎn",
        meaning: "Wide / shelter 🏬",
        emoji: "🏬",
        variant: "Building roof",
        accentColor: "#9b8b7a",
        associated: [
          { char: "店", pinyin: "diàn", meaning: "shop 🏪" },
          { char: "床", pinyin: "chuáng", meaning: "bed 🛏️" },
          { char: "座", pinyin: "zuò", meaning: "seat 💺" }
        ],
        examples: [
          { hanzi: "我去商店买东西。", pinyin: "Wǒ qù shāngdiàn mǎi dōngxi.", trans: "💬 I go to the store to buy things." },
          { hanzi: "这座桥很长。", pinyin: "Zhè zuò qiáo hěn cháng.", trans: "💬 This bridge is long." }
        ]
      },
      {
        radicalChar: "尸",
        radicalNames: ["尸"],
        pinyin: "shī",
        meaning: "Corpse / roof 🏠",
        emoji: "🏠",
        variant: "Dwelling, body",
        accentColor: "#7e8a8b",
        associated: [
          { char: "层", pinyin: "céng", meaning: "layer 🏢" },
          { char: "屋", pinyin: "wū", meaning: "house 🏡" },
          { char: "居", pinyin: "jū", meaning: "reside 🏘️" }
        ],
        examples: [
          { hanzi: "我住在五层。", pinyin: "Wǒ zhù zài wǔ céng.", trans: "💬 I live on the fifth floor." },
          { hanzi: "那间屋子很大。", pinyin: "Nà jiān wūzi hěn dà.", trans: "💬 That room is big." }
        ]
      },
      {
        radicalChar: "阝",
        radicalNames: ["阝 (right)"],
        pinyin: "yì",
        meaning: "City 🏙️",
        emoji: "🏙️",
        variant: "Right side, place",
        accentColor: "#6a7b6a",
        associated: [
          { char: "都", pinyin: "dū", meaning: "capital 🏛️" },
          { char: "那", pinyin: "nà", meaning: "that 👉" },
          { char: "邮", pinyin: "yóu", meaning: "mail ✉️" }
        ],
        examples: [
          { hanzi: "北京是中国的首都。", pinyin: "Běijīng shì Zhōngguó de shǒudū.", trans: "💬 Beijing is the capital of China." },
          { hanzi: "邮局在哪里？", pinyin: "Yóujú zài nǎlǐ?", trans: "💬 Where is the post office?" }
        ]
      },
      {
        radicalChar: "阝",
        radicalNames: ["阝 (left)"],
        pinyin: "fù",
        meaning: "Mound ⛰️",
        emoji: "⛰️",
        variant: "Left side, hill",
        accentColor: "#5e8b7c",
        associated: [
          { char: "阳", pinyin: "yáng", meaning: "sun ☀️" },
          { char: "队", pinyin: "duì", meaning: "team 👥" },
          { char: "险", pinyin: "xiǎn", meaning: "danger ⚠️" }
        ],
        examples: [
          { hanzi: "我们的队伍很棒。", pinyin: "Wǒmen de duìwǔ hěn bàng.", trans: "💬 Our team is great." },
          { hanzi: "山路很险。", pinyin: "Shānlù hěn xiǎn.", trans: "💬 The mountain road is dangerous." }
        ]
      }
    ]
  },

  // ── 🛠️ Tools & Objects (unchanged) ───────────────
  {
    id: "tools",
    emoji: "🛠️",
    title: "Tools & Objects",
    radicals: [
      {
        radicalChar: "金",
        radicalNames: ["金", "钅"],
        pinyin: "jīn",
        meaning: "Metal 🥇",
        emoji: "🥇",
        variant: "Side: 钅",
        accentColor: "#9b9b9b",
        associated: [
          { char: "钱", pinyin: "qián", meaning: "money 💰" },
          { char: "铁", pinyin: "tiě", meaning: "iron ⚙️" },
          { char: "银", pinyin: "yín", meaning: "silver 🥈" }
        ],
        examples: [
          { hanzi: "我的钱在这里。", pinyin: "Wǒ de qián zài zhèlǐ.", trans: "💬 My money is here." },
          { hanzi: "这把刀很锋利。", pinyin: "Zhè bǎ dāo hěn fēnglì.", trans: "💬 This knife is sharp." }
        ]
      },
      {
        radicalChar: "车",
        radicalNames: ["车"],
        pinyin: "chē",
        meaning: "Vehicle 🚗",
        emoji: "🚗",
        variant: "Cart, car",
        accentColor: "#5e6472",
        associated: [
          { char: "轮", pinyin: "lún", meaning: "wheel 🛞" },
          { char: "辆", pinyin: "liàng", meaning: "vehicle 🚙" },
          { char: "转", pinyin: "zhuǎn", meaning: "turn 🔄" }
        ],
        examples: [
          { hanzi: "我有一辆新车。", pinyin: "Wǒ yǒu yí liàng xīn chē.", trans: "💬 I have a new car." },
          { hanzi: "请转左。", pinyin: "Qǐng zhuǎn zuǒ.", trans: "💬 Please turn left." }
        ]
      },
      {
        radicalChar: "贝",
        radicalNames: ["贝"],
        pinyin: "bèi",
        meaning: "Shell / money 💰",
        emoji: "💰",
        variant: "Ancient currency",
        accentColor: "#c9a04b",
        associated: [
          { char: "贵", pinyin: "guì", meaning: "expensive 💸" },
          { char: "买", pinyin: "mǎi", meaning: "buy 🛒" },
          { char: "卖", pinyin: "mài", meaning: "sell 🏷️" }
        ],
        examples: [
          { hanzi: "这个包很贵。", pinyin: "Zhège bāo hěn guì.", trans: "💬 This bag is expensive." },
          { hanzi: "我买了一个苹果。", pinyin: "Wǒ mǎi le yí gè píngguǒ.", trans: "💬 I bought an apple." }
        ]
      },
      {
        radicalChar: "糸",
        radicalNames: ["糸", "纟"],
        pinyin: "mì",
        meaning: "Silk 🧵",
        emoji: "🧵",
        variant: "Side: 纟",
        accentColor: "#b06d7a",
        associated: [
          { char: "红", pinyin: "hóng", meaning: "red 🔴" },
          { char: "绿", pinyin: "lǜ", meaning: "green 🟢" },
          { char: "纸", pinyin: "zhǐ", meaning: "paper 📄" }
        ],
        examples: [
          { hanzi: "我喜欢红色的花。", pinyin: "Wǒ xǐhuān hóngsè de huā.", trans: "💬 I like red flowers." },
          { hanzi: "请给我一张纸。", pinyin: "Qǐng gěi wǒ yì zhāng zhǐ.", trans: "💬 Please give me a piece of paper." }
        ]
      },
      {
        radicalChar: "衣",
        radicalNames: ["衣", "衤"],
        pinyin: "yī",
        meaning: "Clothing 👚",
        emoji: "👚",
        variant: "Side: 衤",
        accentColor: "#b85c7a",
        associated: [
          { char: "裤", pinyin: "kù", meaning: "pants 👖" },
          { char: "袜", pinyin: "wà", meaning: "socks 🧦" },
          { char: "被", pinyin: "bèi", meaning: "blanket 🛌" }
        ],
        examples: [
          { hanzi: "这条裤子很舒服。", pinyin: "Zhè tiáo kùzi hěn shūfu.", trans: "💬 These pants are comfortable." },
          { hanzi: "袜子是蓝色的。", pinyin: "Wàzi shì lán sè de.", trans: "💬 The socks are blue." }
        ]
      },
      {
        radicalChar: "皿",
        radicalNames: ["皿"],
        pinyin: "mǐn",
        meaning: "Dish 🍽️",
        emoji: "🍽️",
        variant: "Utensil, dish",
        accentColor: "#7e8a8b",
        associated: [
          { char: "盘", pinyin: "pán", meaning: "plate 🍛" },
          { char: "盆", pinyin: "pén", meaning: "basin 🪣" },
          { char: "盒", pinyin: "hé", meaning: "box 📦" }
        ],
        examples: [
          { hanzi: "盘子里有水果。", pinyin: "Pánzi lǐ yǒu shuǐguǒ.", trans: "💬 There is fruit on the plate." },
          { hanzi: "打开盒子看看。", pinyin: "Dǎkāi hézi kàn kàn.", trans: "💬 Open the box and have a look." }
        ]
      },
      {
        radicalChar: "革",
        radicalNames: ["革"],
        pinyin: "gé",
        meaning: "Leather 👜",
        emoji: "👜",
        variant: "Leather, hide",
        accentColor: "#b89b5b",
        associated: [
          { char: "鞋", pinyin: "xié", meaning: "shoe 👟" },
          { char: "鞭", pinyin: "biān", meaning: "whip 🏇" },
          { char: "靴", pinyin: "xuē", meaning: "boot 👢" }
        ],
        examples: [
          { hanzi: "我买了一双新鞋。", pinyin: "Wǒ mǎi le yì shuāng xīn xié.", trans: "💬 I bought a pair of new shoes." },
          { hanzi: "这双靴子很暖和。", pinyin: "Zhè shuāng xuēzi hěn nuǎnhuo.", trans: "💬 These boots are warm." }
        ]
      },
      {
        radicalChar: "舟",
        radicalNames: ["舟"],
        pinyin: "zhōu",
        meaning: "Boat 🚢",
        emoji: "🚢",
        variant: "Ship, vessel",
        accentColor: "#5c7a9a",
        associated: [
          { char: "船", pinyin: "chuán", meaning: "boat 🛥️" },
          { char: "航", pinyin: "háng", meaning: "navigate ✈️" },
          { char: "般", pinyin: "bān", meaning: "sort 🔄" }
        ],
        examples: [
          { hanzi: "我们坐船去岛上。", pinyin: "Wǒmen zuò chuán qù dǎo shàng.", trans: "💬 We take a boat to the island." },
          { hanzi: "这艘船很大。", pinyin: "Zhè sōu chuán hěn dà.", trans: "💬 This ship is big." }
        ]
      },
      {
        radicalChar: "刀",
        radicalNames: ["刀", "刂"],
        pinyin: "dāo",
        meaning: "Knife ⚔️",
        emoji: "⚔️",
        variant: "Side: 刂",
        accentColor: "#9b7b5b",
        associated: [
          { char: "刻", pinyin: "kè", meaning: "carve 🖋️" },
          { char: "到", pinyin: "dào", meaning: "arrive 🚪" },
          { char: "别", pinyin: "bié", meaning: "separate 👋" }
        ],
        examples: [
          { hanzi: "我到家了。", pinyin: "Wǒ dào jiā le.", trans: "💬 I arrived home." },
          { hanzi: "请别走。", pinyin: "Qǐng bié zǒu.", trans: "💬 Please don't go." }
        ]
      },
      {
        radicalChar: "寸",
        radicalNames: ["寸"],
        pinyin: "cùn",
        meaning: "Inch / rule 📏",
        emoji: "📏",
        variant: "Measurement, hand",
        accentColor: "#b8956a",
        associated: [
          { char: "时", pinyin: "shí", meaning: "time ⏰" },
          { char: "对", pinyin: "duì", meaning: "correct ✅" },
          { char: "村", pinyin: "cūn", meaning: "village 🏘️" }
        ],
        examples: [
          { hanzi: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", trans: "💬 What time is it now?" },
          { hanzi: "对的，谢谢！", pinyin: "Duì de, xièxie!", trans: "💬 That's right, thank you!" }
        ]
      },
      {
        radicalChar: "工",
        radicalNames: ["工"],
        pinyin: "gōng",
        meaning: "Work 🔧",
        emoji: "🔧",
        variant: "Tool, craft",
        accentColor: "#8b6b4a",
        associated: [
          { char: "左", pinyin: "zuǒ", meaning: "left 👈" },
          { char: "巧", pinyin: "qiǎo", meaning: "skillful ✨" },
          { char: "功", pinyin: "gōng", meaning: "merit 🏆" }
        ],
        examples: [
          { hanzi: "他很努力工作。", pinyin: "Tā hěn nǔlì gōngzuò.", trans: "💬 He works very hard." },
          { hanzi: "左手拿笔。", pinyin: "Zuǒshǒu ná bǐ.", trans: "💬 Hold the pen with the left hand." }
        ]
      },
      {
        radicalChar: "示",
        radicalNames: ["示", "礻"],
        pinyin: "shì",
        meaning: "Spirit / altar 🛐",
        emoji: "🛐",
        variant: "Side: 礻",
        accentColor: "#c49b3f",
        associated: [
          { char: "礼", pinyin: "lǐ", meaning: "ceremony 🎁" },
          { char: "神", pinyin: "shén", meaning: "god 🙏" },
          { char: "祝", pinyin: "zhù", meaning: "wish 🎉" }
        ],
        examples: [
          { hanzi: "祝你生日快乐！", pinyin: "Zhù nǐ shēngrì kuàilè!", trans: "💬 Happy birthday to you!" },
          { hanzi: "礼物很漂亮。", pinyin: "Lǐwù hěn piàoliang.", trans: "💬 The gift is beautiful." }
        ]
      }
    ]
  },

  // ── 🏹 More Tools & Weapons (NEW) ──────────────
  {
    id: "more-tools",
    emoji: "🏹",
    title: "More Tools & Weapons",
    radicals: [
      {
        radicalChar: "弓",
        radicalNames: ["弓"],
        pinyin: "gōng",
        meaning: "Bow 🏹",
        emoji: "🏹",
        variant: "Bow, curve",
        accentColor: "#8b6b4a",
        associated: [
          { char: "张", pinyin: "zhāng", meaning: "open 👐" },
          { char: "弯", pinyin: "wān", meaning: "bend 🌙" },
          { char: "引", pinyin: "yǐn", meaning: "pull ⬅️" },
          { char: "弹", pinyin: "dàn", meaning: "bullet 💣" }
        ],
        examples: [
          { hanzi: "张开你的手。", pinyin: "Zhāng kāi nǐ de shǒu.", trans: "💬 Open your hand." },
          { hanzi: "这条路很弯。", pinyin: "Zhè tiáo lù hěn wān.", trans: "💬 This road is very winding." }
        ]
      },
      {
        radicalChar: "矛",
        radicalNames: ["矛"],
        pinyin: "máo",
        meaning: "Spear 🗡️",
        emoji: "🗡️",
        variant: "Spear, contradiction",
        accentColor: "#9e7b5c",
        associated: [
          { char: "柔", pinyin: "róu", meaning: "soft 🤲" },
          { char: "茅", pinyin: "máo", meaning: "thatch 🏠" }
        ],
        examples: [
          { hanzi: "丝绸很柔软。", pinyin: "Sīchóu hěn róuruǎn.", trans: "💬 Silk is soft." }
        ]
      },
      {
        radicalChar: "瓦",
        radicalNames: ["瓦"],
        pinyin: "wǎ",
        meaning: "Tile 🧱",
        emoji: "🧱",
        variant: "Earthenware",
        accentColor: "#7e8a8b",
        associated: [
          { char: "瓶", pinyin: "píng", meaning: "bottle 🍾" },
          { char: "瓷", pinyin: "cí", meaning: "porcelain 🍵" },
          { char: "瓮", pinyin: "wèng", meaning: "urn 🏺" }
        ],
        examples: [
          { hanzi: "一瓶水。", pinyin: "Yì píng shuǐ.", trans: "💬 A bottle of water." },
          { hanzi: "瓷器很漂亮。", pinyin: "Cíqì hěn piàoliang.", trans: "💬 Porcelain is beautiful." }
        ]
      },
      {
        radicalChar: "缶",
        radicalNames: ["缶"],
        pinyin: "fǒu",
        meaning: "Jar 🏺",
        emoji: "🏺",
        variant: "Pottery jar",
        accentColor: "#a0785a",
        associated: [
          { char: "缸", pinyin: "gāng", meaning: "vat 🪣" },
          { char: "缺", pinyin: "quē", meaning: "lack ❌" },
          { char: "罐", pinyin: "guàn", meaning: "can 🥫" }
        ],
        examples: [
          { hanzi: "一罐可乐。", pinyin: "Yí guàn kělè.", trans: "💬 A can of cola." },
          { hanzi: "不要缺课。", pinyin: "Búyào quē kè.", trans: "💬 Don't miss class." }
        ]
      },
      {
        radicalChar: "网",
        radicalNames: ["网", "罒"],
        pinyin: "wǎng",
        meaning: "Net 🕸️",
        emoji: "🕸️",
        variant: "Net, mesh",
        accentColor: "#5e8b7c",
        associated: [
          { char: "罗", pinyin: "luó", meaning: "gauze 👗" },
          { char: "罚", pinyin: "fá", meaning: "punish 🚫" },
          { char: "罩", pinyin: "zhào", meaning: "cover 🛡️" },
          { char: "罪", pinyin: "zuì", meaning: "crime 🔗" }
        ],
        examples: [
          { hanzi: "不要做坏事，会犯罪的。", pinyin: "Búyào zuò huàishì, huì fànzuì de.", trans: "💬 Don't do bad things, you'll commit a crime." }
        ]
      },
      {
        radicalChar: "戈",
        radicalNames: ["戈"],
        pinyin: "gē",
        meaning: "Halberd / weapon ⚔️",
        emoji: "⚔️",
        variant: "Weapon radical",
        accentColor: "#b06d7a",
        associated: [
          { char: "战", pinyin: "zhàn", meaning: "war ⚔️" },
          { char: "或", pinyin: "huò", meaning: "or 🅾️" },
          { char: "成", pinyin: "chéng", meaning: "become ✅" }
        ],
        examples: [
          { hanzi: "战争不好。", pinyin: "Zhànzhēng bù hǎo.", trans: "💬 War is not good." },
          { hanzi: "你喝茶或咖啡？", pinyin: "Nǐ hē chá huò kāfēi?", trans: "💬 Do you drink tea or coffee?" }
        ]
      }
    ]
  },

  // ── 🎨 Colors & Abstract (partially new) ────────
  {
    id: "abstract",
    emoji: "💬",
    title: "Communication & Abstract",
    radicals: [
      {
        radicalChar: "言",
        radicalNames: ["言", "讠"],
        pinyin: "yán",
        meaning: "Speech 💬",
        emoji: "💬",
        variant: "Side: 讠",
        accentColor: "#8d6e9e",
        associated: [
          { char: "说", pinyin: "shuō", meaning: "speak 🗣️" },
          { char: "话", pinyin: "huà", meaning: "speech 💬" },
          { char: "读", pinyin: "dú", meaning: "read 📖" }
        ],
        examples: [
          { hanzi: "他会说英语。", pinyin: "Tā huì shuō Yīngyǔ.", trans: "💬 He can speak English." },
          { hanzi: "我喜欢读书。", pinyin: "Wǒ xǐhuān dúshū.", trans: "💬 I like reading." }
        ]
      },
      {
        radicalChar: "王",
        radicalNames: ["王", "玉"],
        pinyin: "wáng / yù",
        meaning: "Jade / king 👑",
        emoji: "👑",
        variant: "Jewel, royalty",
        accentColor: "#c49b3f",
        associated: [
          { char: "玩", pinyin: "wán", meaning: "play 🎮" },
          { char: "现", pinyin: "xiàn", meaning: "now 🕒" },
          { char: "球", pinyin: "qiú", meaning: "ball ⚽" }
        ],
        examples: [
          { hanzi: "我喜欢打乒乓球。", pinyin: "Wǒ xǐhuān dǎ pīngpāngqiú.", trans: "💬 I like playing table tennis." },
          { hanzi: "现在出发吧。", pinyin: "Xiànzài chūfā ba.", trans: "💬 Let's go now." }
        ]
      },
      {
        radicalChar: "音",
        radicalNames: ["音"],
        pinyin: "yīn",
        meaning: "Sound 🎵",
        emoji: "🎵",
        variant: "Sound, music",
        accentColor: "#b89b5b",
        associated: [
          { char: "意", pinyin: "yì", meaning: "meaning 💡" },
          { char: "韵", pinyin: "yùn", meaning: "rhyme 🎶" },
          { char: "响", pinyin: "xiǎng", meaning: "echo 📢" }
        ],
        examples: [
          { hanzi: "音乐让我快乐。", pinyin: "Yīnyuè ràng wǒ kuàilè.", trans: "💬 Music makes me happy." },
          { hanzi: "你的意思是什么？", pinyin: "Nǐ de yìsi shì shénme?", trans: "💬 What do you mean?" }
        ]
      },
      {
        radicalChar: "力",
        radicalNames: ["力"],
        pinyin: "lì",
        meaning: "Strength 💪",
        emoji: "💪",
        variant: "Power, force",
        accentColor: "#e05555",
        associated: [
          { char: "男", pinyin: "nán", meaning: "male 👨" },
          { char: "动", pinyin: "dòng", meaning: "move 🏃" },
          { char: "加", pinyin: "jiā", meaning: "add ➕" }
        ],
        examples: [
          { hanzi: "加油！你可以的！", pinyin: "Jiāyóu! Nǐ kěyǐ de!", trans: "💬 Come on! You can do it!" },
          { hanzi: "他喜欢运动。", pinyin: "Tā xǐhuān yùndòng.", trans: "💬 He likes sports." }
        ]
      },
      {
        radicalChar: "鬼",
        radicalNames: ["鬼"],
        pinyin: "guǐ",
        meaning: "Ghost 👻",
        emoji: "👻",
        variant: "Spirit, ghost",
        accentColor: "#7b7fc0",
        associated: [
          { char: "魂", pinyin: "hún", meaning: "soul 👻" },
          { char: "魔", pinyin: "mó", meaning: "demon 😈" },
          { char: "魅", pinyin: "mèi", meaning: "charm ✨" }
        ],
        examples: [
          { hanzi: "她很有魅力。", pinyin: "Tā hěn yǒu mèilì.", trans: "💬 She is charming." }
        ]
      },
      {
        radicalChar: "彡",
        radicalNames: ["彡"],
        pinyin: "shān",
        meaning: "Hair / bristle 💇",
        emoji: "💇",
        variant: "Decorative bristle",
        accentColor: "#b8956a",
        associated: [
          { char: "形", pinyin: "xíng", meaning: "shape 🔲" },
          { char: "影", pinyin: "yǐng", meaning: "shadow 🕶️" },
          { char: "彩", pinyin: "cǎi", meaning: "color 🌈" }
        ],
        examples: [
          { hanzi: "这个形状很好。", pinyin: "Zhège xíngzhuàng hěn hǎo.", trans: "💬 This shape is good." },
          { hanzi: "彩虹很漂亮。", pinyin: "Cǎihóng hěn piàoliang.", trans: "💬 The rainbow is beautiful." }
        ]
      },
      {
        radicalChar: "夂",
        radicalNames: ["夂"],
        pinyin: "zhǐ",
        meaning: "Go / winter ❄️",
        emoji: "❄️",
        variant: "Foot, go",
        accentColor: "#5c7a9a",
        associated: [
          { char: "各", pinyin: "gè", meaning: "each 🔢" },
          { char: "备", pinyin: "bèi", meaning: "prepare 🎒" },
          { char: "冬", pinyin: "dōng", meaning: "winter ☃️" }
        ],
        examples: [
          { hanzi: "冬天很冷。", pinyin: "Dōngtiān hěn lěng.", trans: "💬 Winter is cold." },
          { hanzi: "请做好准备。", pinyin: "Qǐng zuò hǎo zhǔnbèi.", trans: "💬 Please prepare well." }
        ]
      }
    ]
  },

  // ── 🔤 Basic Strokes & Numbers (EXPANDED) ──────────
{
    id: "strokes",
    emoji: "🔤",
    title: "Basic Strokes & Numbers",
    radicals: [
      {
        radicalChar: "一",
        radicalNames: ["一"],
        pinyin: "yī",
        meaning: "One 1️⃣",
        emoji: "1️⃣",
        variant: "Horizontal stroke, number one",
        accentColor: "#999",
        associated: [
          { char: "七", pinyin: "qī", meaning: "seven 7️⃣" },
          { char: "三", pinyin: "sān", meaning: "three 3️⃣" },
          { char: "万", pinyin: "wàn", meaning: "ten thousand 🄂" },
          { char: "不", pinyin: "bù", meaning: "not ❌" }
        ],
        examples: [
          { hanzi: "一加一等于二。", pinyin: "Yī jiā yī děngyú èr.", trans: "💬 One plus one equals two." },
          { hanzi: "我不会。", pinyin: "Wǒ bú huì.", trans: "💬 I don't know how." }
        ]
      },
      {
        radicalChar: "丨",
        radicalNames: ["丨"],
        pinyin: "gǔn",
        meaning: "Line ↩️",
        emoji: "↩️",
        variant: "Vertical stroke",
        accentColor: "#999",
        associated: [
          { char: "中", pinyin: "zhōng", meaning: "middle 🀄" },
          { char: "丰", pinyin: "fēng", meaning: "abundant 🌾" },
          { char: "串", pinyin: "chuàn", meaning: "skewer 🍢" }
        ],
        examples: [
          { hanzi: "中国很大。", pinyin: "Zhōngguó hěn dà.", trans: "💬 China is big." }
        ]
      },
      {
        radicalChar: "丶",
        radicalNames: ["丶"],
        pinyin: "zhǔ",
        meaning: "Dot 🔵",
        emoji: "🔵",
        variant: "Dot stroke",
        accentColor: "#999",
        associated: [
          { char: "丸", pinyin: "wán", meaning: "pill 💊" },
          { char: "丹", pinyin: "dān", meaning: "red/cinnabar 🔴" },
          { char: "主", pinyin: "zhǔ", meaning: "master 👑" }
        ],
        examples: [
          { hanzi: "他是主人。", pinyin: "Tā shì zhǔrén.", trans: "💬 He is the host." }
        ]
      },
      {
        radicalChar: "丿",
        radicalNames: ["丿"],
        pinyin: "piě",
        meaning: "Slash ⬅️",
        emoji: "⬅️",
        variant: "Left-falling stroke",
        accentColor: "#999",
        associated: [
          { char: "九", pinyin: "jiǔ", meaning: "nine 9️⃣" },
          { char: "乃", pinyin: "nǎi", meaning: "then ⏭️" },
          { char: "久", pinyin: "jiǔ", meaning: "long time ⏳" }
        ],
        examples: [
          { hanzi: "九九八十一。", pinyin: "Jiǔ jiǔ bāshíyī.", trans: "💬 Nine nines are eighty-one." }
        ]
      },
      {
        radicalChar: "乙",
        radicalNames: ["乙"],
        pinyin: "yǐ",
        meaning: "Second / hook 2️⃣",
        emoji: "2️⃣",
        variant: "Hook, second",
        accentColor: "#999",
        associated: [
          { char: "九", pinyin: "jiǔ", meaning: "nine 9️⃣" },
          { char: "飞", pinyin: "fēi", meaning: "fly ✈️" },
          { char: "乱", pinyin: "luàn", meaning: "chaos 🔀" }
        ],
        examples: [
          { hanzi: "小鸟飞了。", pinyin: "Xiǎo niǎo fēi le.", trans: "💬 The bird flew away." }
        ]
      },
      {
        radicalChar: "二",
        radicalNames: ["二"],
        pinyin: "èr",
        meaning: "Two 2️⃣",
        emoji: "2️⃣",
        variant: "Number two",
        accentColor: "#999",
        associated: [
          { char: "五", pinyin: "wǔ", meaning: "five 5️⃣" },
          { char: "井", pinyin: "jǐng", meaning: "well 🪣" },
          { char: "互", pinyin: "hù", meaning: "mutual 🤝" }
        ],
        examples: [
          { hanzi: "二个人。", pinyin: "Èr gè rén.", trans: "💬 Two people." },
          { hanzi: "五块钱。", pinyin: "Wǔ kuài qián.", trans: "💬 Five yuan." }
        ]
      },
      {
        radicalChar: "八",
        radicalNames: ["八"],
        pinyin: "bā",
        meaning: "Eight 8️⃣",
        emoji: "8️⃣",
        variant: "Divide, spread",
        accentColor: "#999",
        associated: [
          { char: "分", pinyin: "fēn", meaning: "divide ➗" },
          { char: "公", pinyin: "gōng", meaning: "public 🏛️" },
          { char: "共", pinyin: "gòng", meaning: "share 🤲" }
        ],
        examples: [
          { hanzi: "八点了。", pinyin: "Bā diǎn le.", trans: "💬 It's eight o'clock." },
          { hanzi: "我们分苹果。", pinyin: "Wǒmen fēn píngguǒ.", trans: "💬 We share the apples." }
        ]
      },
      {
        radicalChar: "十",
        radicalNames: ["十"],
        pinyin: "shí",
        meaning: "Ten 10️⃣",
        emoji: "🔟",
        variant: "Cross, ten",
        accentColor: "#999",
        associated: [
          { char: "千", pinyin: "qiān", meaning: "thousand 1️⃣0️⃣0️⃣0️⃣" },
          { char: "古", pinyin: "gǔ", meaning: "ancient 🏛️" },
          { char: "克", pinyin: "kè", meaning: "overcome 💪" }
        ],
        examples: [
          { hanzi: "十年后。", pinyin: "Shí nián hòu.", trans: "💬 Ten years later." }
        ]
      },
      {
        radicalChar: "儿",
        radicalNames: ["儿"],
        pinyin: "ér",
        meaning: "Child / legs 🚸",
        emoji: "🚸",
        variant: "Legs, child",
        accentColor: "#999",
        associated: [
          { char: "先", pinyin: "xiān", meaning: "first 🥇" },
          { char: "光", pinyin: "guāng", meaning: "light 💡" },
          { char: "元", pinyin: "yuán", meaning: "origin 💰" }
        ],
        examples: [
          { hanzi: "你先请。", pinyin: "Nǐ xiān qǐng.", trans: "💬 You first, please." },
          { hanzi: "灯光很亮。", pinyin: "Dēngguāng hěn liàng.", trans: "💬 The lamp is bright." }
        ]
      }
    ]
  },

  // ── 🎨 Colors & More (NEW) ─────────────────────
  {
    id: "colors",
    emoji: "🎨",
    title: "Colors & Descriptions",
    radicals: [
      {
        radicalChar: "黑",
        radicalNames: ["黑"],
        pinyin: "hēi",
        meaning: "Black ⚫",
        emoji: "⚫",
        variant: "Black color",
        accentColor: "#333",
        associated: [
          { char: "墨", pinyin: "mò", meaning: "ink 🖋️" },
          { char: "默", pinyin: "mò", meaning: "silent 🤫" },
          { char: "黯", pinyin: "àn", meaning: "gloomy 🌑" }
        ],
        examples: [
          { hanzi: "他穿黑色衣服。", pinyin: "Tā chuān hēisè yīfu.", trans: "💬 He wears black clothes." }
        ]
      },
      {
        radicalChar: "青",
        radicalNames: ["青"],
        pinyin: "qīng",
        meaning: "Blue/green 🔵",
        emoji: "🔵",
        variant: "Blue-green color",
        accentColor: "#5b8c99",
        associated: [
          { char: "清", pinyin: "qīng", meaning: "clear 💧" },
          { char: "晴", pinyin: "qíng", meaning: "sunny ☀️" },
          { char: "情", pinyin: "qíng", meaning: "feeling 💕" }
        ],
        examples: [
          { hanzi: "水很清。", pinyin: "Shuǐ hěn qīng.", trans: "💬 The water is clear." }
        ]
      },
      {
        radicalChar: "高",
        radicalNames: ["高"],
        pinyin: "gāo",
        meaning: "Tall / high 📏",
        emoji: "📏",
        variant: "Height radical",
        accentColor: "#f0a830",
        associated: [
          { char: "稿", pinyin: "gǎo", meaning: "draft 📄" },
          { char: "搞", pinyin: "gǎo", meaning: "do 🛠️" },
          { char: "敲", pinyin: "qiāo", meaning: "knock 👊" }
        ],
        examples: [
          { hanzi: "他很高。", pinyin: "Tā hěn gāo.", trans: "💬 He is tall." },
          { hanzi: "我搞错了。", pinyin: "Wǒ gǎo cuò le.", trans: "💬 I messed up." }
        ]
      }
    ]
  }
];