// data-part2.js – Topics 21-40 (Education, Tech, Work, Arts, Health, Travel, Food, Culture)
var topics = topics || [];

// 21. Learning Mandarin Chinese
topics.push({
    id: 'learningmand', emoji: '🈶', title: 'Learning Mandarin Chinese', cn: '学习普通话', category: 'Education',
    vocab: [
        ['🗣️ 普通话','Pǔtōnghuà','Mandarin'],['🀄 汉字','Hànzì','Chinese characters'],
        ['🔤 拼音','pīnyīn','Pinyin'],['🎵 声调','shēngdiào','Tone'],['📖 语法','yǔfǎ','Grammar']
    ],
    phrases: [
        ['🀄 汉字很有意思。','Hànzì hěn yǒu yìsi.','Chinese characters are very interesting.'],
        ['🔤 你会拼音吗？','Nǐ huì pīnyīn ma?','Do you know pinyin?']
    ]
});

// 22. Counting words (measure words)
topics.push({
    id: 'countwords', emoji: '🔢', title: 'Counting words', cn: '量词', category: 'Basics',
    vocab: [
        ['🧩 个','gè','General measure word'],['📚 本','běn','For books'],['🖼️ 张','zhāng','Flat objects'],
        ['🐾 只','zhī','Animals'],['🥤 杯','bēi','Cup of...'],['🍎 个 (fruit)','gè','Also for fruit'],
        ['👥 位','wèi','People (polite)'],['📦 件','jiàn','Item / piece of clothing']
    ],
    phrases: [
        ['📚 一本书','yì běn shū','one book'],['🐱 三只猫','sān zhī māo','three cats'],
        ['🥤 一杯茶','yì bēi chá','a cup of tea']
    ]
});

// 23. Computers & internet
topics.push({
    id: 'computer', emoji: '💻', title: 'Computers and the internet', cn: '电脑与网络', category: 'Tech',
    vocab: [
        ['💻 电脑','diànnǎo','Computer'],['🌐 上网','shàng wǎng','Go online'],['🖥️ 网站','wǎngzhàn','Website'],
        ['📧 电子邮件','diànzǐ yóujiàn','Email'],['🔑 密码','mìmǎ','Password'],['🖱️ 鼠标','shǔbiāo','Mouse'],
        ['⌨️ 键盘','jiànpán','Keyboard']
    ],
    phrases: [
        ['💻 我每天用电脑工作。','Wǒ měitiān yòng diànnǎo gōngzuò.','I use a computer for work every day.'],
        ['📧 请发电子邮件给我。','Qǐng fā diànzǐ yóujiàn gěi wǒ.','Please send me an email.']
    ]
});

// 24. I love my smartphone
topics.push({
    id: 'smartphone', emoji: '📱', title: 'I love my smartphone', cn: '我爱我的智能手机', category: 'Tech',
    vocab: [
        ['📱 手机','shǒujī','Mobile phone'],['💬 微信','Wēixìn','WeChat'],['📸 拍照','pāi zhào','Take photo'],
        ['🔋 充电','chōng diàn','Charge'],['📲 应用','yìngyòng','App'],['🔊 音量','yīnliàng','Volume'],
        ['📞 打电话','dǎ diànhuà','Make a call']
    ],
    phrases: [
        ['📱 我的手机没电了。','Wǒ de shǒujī méi diàn le.','My phone is out of battery.'],
        ['📸 我们拍张照吧。','Wǒmen pāi zhāng zhào ba.','Let’s take a picture.']
    ]
});

// 25. At work
topics.push({
    id: 'work', emoji: '💼', title: 'At work', cn: '在工作', category: 'Daily Life',
    vocab: [
        ['💼 工作','gōngzuò','Work'],['🏢 公司','gōngsī','Company'],['👥 同事','tóngshì','Colleague'],
        ['📊 开会','kāi huì','Meeting'],['👔 老板','lǎobǎn','Boss'],['📋 任务','rènwu','Task'],
        ['🖨️ 打印机','dǎyìnjī','Printer']
    ],
    phrases: [
        ['💼 我在一家公司工作。','Wǒ zài yì jiā gōngsī gōngzuò.','I work at a company.'],
        ['📊 今天下午有会。','Jīntiān xiàwǔ yǒu huì.','There is a meeting this afternoon.']
    ]
});

// 26. Music and Dance
topics.push({
    id: 'music', emoji: '🎵', title: 'Music and Dance', cn: '音乐与舞蹈', category: 'Arts',
    vocab: [
        ['🎵 音乐','yīnyuè','Music'],['💃 跳舞','tiào wǔ','Dance'],['🎤 唱歌','chàng gē','Sing'],
        ['🎹 钢琴','gāngqín','Piano'],['🎸 吉他','jítā','Guitar'],['🎻 小提琴','xiǎotíqín','Violin'],
        ['🥁 鼓','gǔ','Drums']
    ],
    phrases: [
        ['🎵 我喜欢听音乐。','Wǒ xǐhuān tīng yīnyuè.','I like to listen to music.'],
        ['💃 你会跳舞吗？','Nǐ huì tiào wǔ ma?','Can you dance?']
    ]
});

// 27. Seeing a doctor
topics.push({
    id: 'doctor', emoji: '🩺', title: 'Seeing a doctor', cn: '看医生', category: 'Health',
    vocab: [
        ['🩺 医生','yīshēng','Doctor'],['🏥 医院','yīyuàn','Hospital'],['💊 药','yào','Medicine'],
        ['🤒 发烧','fāshāo','Fever'],['🤕 头疼','tóuténg','Headache'],['🤧 感冒','gǎnmào','Cold'],
        ['🤮 肚子疼','dùzi téng','Stomach ache']
    ],
    phrases: [
        ['🤒 我发烧了。','Wǒ fāshāo le.','I have a fever.'],
        ['💊 我需要看医生。','Wǒ xūyào kàn yīshēng.','I need to see a doctor.']
    ]
});

// 28. Protecting the environment
topics.push({
    id: 'environment', emoji: '🌍', title: 'Protecting our environment', cn: '保护环境', category: 'Nature',
    vocab: [
        ['🌍 环境','huánjìng','Environment'],['🛡️ 保护','bǎohù','Protect'],['♻️ 回收','huíshōu','Recycle'],
        ['🏭 污染','wūrǎn','Pollution'],['⚡ 能源','néngyuán','Energy'],['🌱 绿色','lǜsè','Green / eco‑friendly'],
        ['🗑️ 垃圾','lājī','Trash']
    ],
    phrases: [
        ['♻️ 请回收塑料瓶。','Qǐng huíshōu sùliào píng.','Please recycle plastic bottles.'],
        ['🌍 保护环境很重要。','Bǎohù huánjìng hěn zhòngyào.','Protecting the environment is very important.']
    ]
});

// 29. The animal kingdom
topics.push({
    id: 'animals', emoji: '🐾', title: 'The animal kingdom', cn: '动物王国', category: 'Nature',
    vocab: [
        ['🐱 猫','māo','Cat'],['🐶 狗','gǒu','Dog'],['🐦 鸟','niǎo','Bird'],['🐟 鱼','yú','Fish'],
        ['🐼 熊猫','xióngmāo','Panda'],['🐘 大象','dàxiàng','Elephant'],['🦁 狮子','shīzi','Lion'],
        ['🐒 猴子','hóuzi','Monkey'],['🐍 蛇','shé','Snake'],['🐴 马','mǎ','Horse']
    ],
    phrases: [
        ['🐼 熊猫很可爱。','Xióngmāo hěn kě’ài.','Pandas are very cute.'],
        ['🐶 我有一只狗。','Wǒ yǒu yì zhī gǒu.','I have a dog.']
    ]
});

// 30. Let’s keep fit
topics.push({
    id: 'fitness', emoji: '🏋️', title: 'Let’s keep fit', cn: '保持健康', category: 'Health',
    vocab: [
        ['🏃 运动','yùndòng','Exercise'],['🏃‍♂️ 跑步','pǎobù','Run'],['🏊 游泳','yóuyǒng','Swim'],
        ['🧘 瑜伽','yújiā','Yoga'],['💪 健康','jiànkāng','Healthy'],['🥗 饮食','yǐnshí','Diet'],
        ['🏋️‍♀️ 健身房','jiànshēnfáng','Gym']
    ],
    phrases: [
        ['🏃‍♂️ 我每天跑步。','Wǒ měitiān pǎobù.','I run every day.'],
        ['💪 健康最重要。','Jiànkāng zuì zhòngyào.','Health is most important.']
    ]
});

// 31. Do you like to travel?
topics.push({
    id: 'travel', emoji: '✈️', title: 'Do you like to travel?', cn: '你喜欢旅游吗？', category: 'Travel',
    vocab: [
        ['🧳 旅游','lǚyóu','Travel'],['✈️ 飞机','fēijī','Airplane'],['🚄 火车','huǒchē','Train'],
        ['🏨 酒店','jiǔdiàn','Hotel'],['🛂 护照','hùzhào','Passport'],['🗺️ 地图','dìtú','Map'],
        ['🚢 船','chuán','Ship']
    ],
    phrases: [
        ['✈️ 你喜欢旅游吗？','Nǐ xǐhuān lǚyóu ma?','Do you like to travel?'],
        ['🏨 我们订了酒店。','Wǒmen dìng le jiǔdiàn.','We booked a hotel.']
    ]
});

// 32. Countries of the world
topics.push({
    id: 'countries', emoji: '🌏', title: 'Countries of the world', cn: '世界各国', category: 'World',
    vocab: [
        ['🇨🇳 中国','Zhōngguó','China'],['🇺🇸 美国','Měiguó','USA'],['🇬🇧 英国','Yīngguó','UK'],
        ['🇯🇵 日本','Rìběn','Japan'],['🇫🇷 法国','Fǎguó','France'],['🇩🇪 德国','Déguó','Germany'],
        ['🇰🇷 韩国','Hánguó','South Korea'],['🇮🇳 印度','Yìndù','India']
    ],
    phrases: [
        ['🇨🇳 中国很大。','Zhōngguó hěn dà.','China is very big.'],
        ['🇫🇷 我想去法国。','Wǒ xiǎng qù Fǎguó.','I want to go to France.']
    ]
});

// 33. Foreign languages
topics.push({
    id: 'languages', emoji: '🗣️', title: 'Foreign languages', cn: '外语', category: 'World',
    vocab: [
        ['🌍 外语','wàiyǔ','Foreign language'],['🇬🇧 英语','Yīngyǔ','English'],['🇫🇷 法语','Fǎyǔ','French'],
        ['🇪🇸 西班牙语','Xībānyáyǔ','Spanish'],['🇯🇵 日语','Rìyǔ','Japanese'],['🇩🇪 德语','Déyǔ','German']
    ],
    phrases: [
        ['🗣️ 你会说几种外语？','Nǐ huì shuō jǐ zhǒng wàiyǔ?','How many foreign languages can you speak?'],
        ['🇬🇧 我会说英语。','Wǒ huì shuō Yīngyǔ.','I can speak English.']
    ]
});

// 34. Do you like Chinese?
topics.push({
    id: 'likechinese', emoji: '🥡', title: 'Do you like Chinese?', cn: '你喜欢中文吗？', category: 'Culture',
    vocab: [
        ['🀄 中文','Zhōngwén','Chinese language'],['❤️ 喜欢','xǐhuān','Like'],['🍜 菜','cài','Cuisine'],
        ['🏮 文化','wénhuà','Culture'],['✒️ 书法','shūfǎ','Calligraphy'],['🐉 龙','lóng','Dragon']
    ],
    phrases: [
        ['🥡 你喜欢中文吗？','Nǐ xǐhuān Zhōngwén ma?','Do you like Chinese language?'],
        ['🍜 中国菜很好吃。','Zhōngguó cài hěn hǎochī.','Chinese food is delicious.']
    ]
});

// 35. Popular Western food
topics.push({
    id: 'westernfood', emoji: '🍔', title: 'Popular Western food', cn: '流行西餐', category: 'Food',
    vocab: [
        ['🍔 汉堡','hànbǎo','Hamburger'],['🍕 披萨','pīsà','Pizza'],['🥩 牛排','niúpái','Steak'],
        ['🍝 意大利面','Yìdàlì miàn','Spaghetti'],['🥗 沙拉','shālā','Salad'],
        ['🍟 薯条','shǔtiáo','French fries'],['🥪 三明治','sānmíngzhì','Sandwich']
    ],
    phrases: [
        ['🍔 我想吃汉堡。','Wǒ xiǎng chī hànbǎo.','I want to eat a hamburger.'],
        ['🍕 这披萨很好吃。','Zhè pīsà hěn hǎochī.','This pizza is very tasty.']
    ]
});

// 36. Drinks
topics.push({
    id: 'drinks', emoji: '🥤', title: 'Drinks', cn: '饮品', category: 'Food',
    vocab: [
        ['💧 水','shuǐ','Water'],['🍵 茶','chá','Tea'],['☕ 咖啡','kāfēi','Coffee'],
        ['🥛 牛奶','niúnǎi','Milk'],['🧃 果汁','guǒzhī','Juice'],['🍺 啤酒','píjiǔ','Beer'],
        ['🍷 红酒','hóngjiǔ','Red wine']
    ],
    phrases: [
        ['☕ 我要一杯咖啡。','Wǒ yào yì bēi kāfēi.','I want a cup of coffee.'],
        ['🍵 喝茶对身体好。','Hē chá duì shēntǐ hǎo.','Drinking tea is good for health.']
    ]
});

// 37. Fresh fruits, nuts & grain
topics.push({
    id: 'fruits', emoji: '🍎', title: 'Fresh fruits, nuts & grain', cn: '新鲜水果、坚果和谷物', category: 'Food',
    vocab: [
        ['🍎 苹果','píngguǒ','Apple'],['🍌 香蕉','xiāngjiāo','Banana'],['🍇 葡萄','pútáo','Grape'],
        ['🥜 坚果','jiānguǒ','Nut'],['🍚 米饭','mǐfàn','Rice'],['🌾 小麦','xiǎomài','Wheat'],
        ['🍊 橙子','chéngzi','Orange'],['🍓 草莓','cǎoméi','Strawberry'],['🍉 西瓜','xīguā','Watermelon'],
        ['🍑 桃子','táozi','Peach']
    ],
    phrases: [
        ['🍎 一天一苹果，医生远离我。','Yì tiān yì píngguǒ, yīshēng yuǎnlí wǒ.','An apple a day keeps the doctor away.'],
        ['🍚 中国人喜欢吃米饭。','Zhōngguó rén xǐhuān chī mǐfàn.','Chinese people like to eat rice.']
    ]
});

// 38. At the market
topics.push({
    id: 'market', emoji: '🛒', title: 'At the market', cn: '在市场', category: 'Shopping',
    vocab: [
        ['🛒 市场','shìchǎng','Market'],['🥬 蔬菜','shūcài','Vegetables'],['🍎 水果','shuǐguǒ','Fruit'],
        ['🥩 肉','ròu','Meat'],['🥚 鸡蛋','jīdàn','Egg'],['🛍️ 购物袋','gòuwù dài','Shopping bag'],
        ['🧅 洋葱','yángcōng','Onion'],['🥕 胡萝卜','húluóbo','Carrot']
    ],
    phrases: [
        ['🛒 我要买一斤苹果。','Wǒ yào mǎi yì jīn píngguǒ.','I want to buy one jin of apples.'],
        ['🥬 蔬菜新鲜吗？','Shūcài xīnxiān ma?','Are the vegetables fresh?'],
        ['💲 这个多少钱一斤？','Zhège duōshao qián yì jīn?','How much is this per jin?']
    ]
});

// 39. At the restaurant (新)
topics.push({
    id: 'restaurant', emoji: '🍽️', title: 'At the restaurant', cn: '在餐厅', category: 'Food',
    vocab: [
        ['🍽️ 菜单','càidān','Menu'],['🍲 点菜','diǎn cài','Order food'],['🏃 服务员','fúwùyuán','Waiter'],
        ['💴 账单','zhàngdān','Bill'],['🪑 预约','yùyuē','Reservation'],['🥢 筷子','kuàizi','Chopsticks'],
        ['🥣 碗','wǎn','Bowl'],['🥄 勺子','sháozi','Spoon'],['🍚 米饭','mǐfàn','Rice'],
        ['🥢 刀叉','dāo chā','Knife and fork'],['❓ 这道菜辣吗？','zhè dào cài là ma?','Is this dish spicy?'],
        ['👍 好吃','hǎochī','Delicious']
    ],
    phrases: [
        ['🍽️ 请给我菜单。','Qǐng gěi wǒ càidān.','Please give me the menu.'],
        ['🍲 我要点这个菜。','Wǒ yào diǎn zhège cài.','I want to order this dish.'],
        ['💴 买单！','Mǎidān!','Check, please!'],
        ['🪑 我想预约今天晚上。','Wǒ xiǎng yùyuē jīntiān wǎnshang.','I’d like to make a reservation for tonight.']
    ]
});

// 40. Emotions and feelings (新)
topics.push({
    id: 'feelings', emoji: '😊', title: 'Emotions and feelings', cn: '情感与感受', category: 'Daily Life',
    vocab: [
        ['😊 开心','kāixīn','Happy'],['😢 难过','nánguò','Sad'],['😠 生气','shēngqì','Angry'],
        ['😟 担心','dānxīn','Worried'],['😲 惊讶','jīngyà','Surprised'],['😌 放松','fàngsōng','Relaxed'],
        ['😰 紧张','jǐnzhāng','Nervous'],['😒 无聊','wúliáo','Bored'],['😍 兴奋','xīngfèn','Excited'],
        ['🤗 感动','gǎndòng','Moved'],['😴 累','lèi','Tired'],['😏 骄傲','jiāo’ào','Proud']
    ],
    phrases: [
        ['😊 我今天很开心。','Wǒ jīntiān hěn kāixīn.','I am very happy today.'],
        ['😢 不要难过，一切都会好起来。','Búyào nánguò, yíqiè dōu huì hǎo qǐlái.','Don’t be sad, everything will be fine.'],
        ['😠 他为什么生气？','Tā wèishénme shēngqì?','Why is he angry?'],
        ['😍 我太兴奋了！','Wǒ tài xīngfèn le!','I’m so excited!']
    ]
});