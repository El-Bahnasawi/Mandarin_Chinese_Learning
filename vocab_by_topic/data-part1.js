// data-part1.js – Topics 1-20 (Home, Basics, Daily Life)
var topics = topics || [];

// 0. Home
topics.push({
    id: 'home', emoji: '🏠', title: 'Home', cn: '首页', category: '',
    special: 'home'
});

// 1. Greetings
topics.push({
    id: 'greetings', emoji: '👋', title: 'So nice to meet you!', cn: '很高兴和您见面！', category: 'Basics',
    vocab: [
        ['👋 你好','nǐ hǎo','Hello'],['🙏 您好','nín hǎo','Hello (polite)'],['👥 大家好','dàjiā hǎo','Hello everyone'],
        ['🌅 早上好','zǎoshang hǎo','Good morning'],['🌆 下午好','xiàwǔ hǎo','Good afternoon'],
        ['🌃 晚上好','wǎnshang hǎo','Good evening'],['😊 很高兴','hěn gāoxìng','Very happy'],
        ['🤝 认识','rènshi','To know (a person)'],['👀 见面','jiàn miàn','To meet'],
        ['🗣️ 我叫…','wǒ jiào…','My name is…'],['❓ 你叫什么名字？','nǐ jiào shénme míngzi?','What’s your name?'],
        ['🙏 请问','qǐngwèn','Excuse me / May I ask'],['🤔 你呢？','nǐ ne?','And you?'],
        ['👋 再见','zài jiàn','Goodbye'],['👋 拜拜','bāibāi','Bye-bye'],['🙏 谢谢','xièxie','Thank you'],
        ['😊 不客气','bú kèqì','You’re welcome'],['😔 对不起','duìbuqǐ','Sorry'],
        ['😌 没关系','méi guānxi','It’s okay'],['🎉 欢迎','huānyíng','Welcome'],
        ['👫 朋友','péngyou','Friend'],['🧑 老师','lǎoshī','Teacher'],['🎒 学生','xuésheng','Student'],
        ['🏠 家','jiā','Home'],['🇨🇳 中国','Zhōngguó','China']
    ],
    phrases: [
        ['👋 很高兴和您见面！','hěn gāoxìng hé nín jiàn miàn!','So nice to meet you! (formal)'],
        ['👋 你好！我叫大卫。你呢？','Nǐ hǎo! Wǒ jiào Dàwèi. Nǐ ne?','Hi! I’m David. And you?'],
        ['🤝 认识你很高兴。','Rènshi nǐ hěn gāoxìng.','Nice to meet you.'],
        ['🌅 早上好！今天好吗？','Zǎoshang hǎo! Jīntiān hǎo ma?','Good morning! How are you today?'],
        ['🙏 请问，你叫什么名字？','Qǐngwèn, nǐ jiào shénme míngzi?','Excuse me, what’s your name?'],
        ['👫 他是我的朋友。','Tā shì wǒ de péngyou.','He is my friend.'],
        ['🏠 欢迎来我家。','Huānyíng lái wǒ jiā.','Welcome to my home.']
    ]
});

// 2. My family
topics.push({
    id: 'family', emoji: '👨‍👩‍👧‍👦', title: 'My family', cn: '我的家', category: 'Basics',
    vocab: [
        ['👩 妈妈','māma','Mom'],['👨 爸爸','bàba','Dad'],['👦 哥哥','gēge','Older brother'],
        ['👧 姐姐','jiějie','Older sister'],['🧒 弟弟','dìdi','Younger brother'],['👶 妹妹','mèimei','Younger sister'],
        ['👴 爷爷','yéye','Grandpa'],['👵 奶奶','nǎinai','Grandma'],['👴 外公','wàigōng','Grandpa (maternal)'],
        ['👵 外婆','wàipó','Grandma (maternal)'],['👨‍🦰 叔叔','shūshu','Uncle'],['👩‍🦰 阿姨','āyí','Aunt'],
        ['👶 孩子','háizi','Child'],['👪 家人','jiārén','Family members'],['👨‍👩‍👧 亲戚','qīnqi','Relatives'],
        ['👨 丈夫','zhàngfu','Husband'],['👩 妻子','qīzi','Wife'],['👦 儿子','érzi','Son'],['👧 女儿','nǚér','Daughter'],
        ['❤️ 爱','ài','Love'],['👶 宝宝','bǎobao','Baby'],['👴 老人','lǎorén','Elderly person']
    ],
    phrases: [
        ['👨‍👩‍👧‍👦 我家有四口人。','Wǒ jiā yǒu sì kǒu rén.','There are four people in my family.'],
        ['👫 这是我妈妈和爸爸。','Zhè shì wǒ māma hé bàba.','These are my mom and dad.'],
        ['👦👶 我有一个哥哥和一个妹妹。','Wǒ yǒu yí gè gēge hé yí gè mèimei.','I have one older brother and one younger sister.'],
        ['👨 我爸爸是医生。','Wǒ bàba shì yīshēng.','My dad is a doctor.'],
        ['👨‍👩‍👧 你们家有几口人？','Nǐmen jiā yǒu jǐ kǒu rén?','How many people are in your family?'],
        ['❤️ 我爱我的家人。','Wǒ ài wǒ de jiārén.','I love my family.']
    ]
});

// 3. My house
topics.push({
    id: 'house', emoji: '🏠', title: 'My house', cn: '我的房子', category: 'Basics',
    vocab: [
        ['🏠 房子','fángzi','House'],['🛋️ 客厅','kètīng','Living room'],['🍳 厨房','chúfáng','Kitchen'],
        ['🛏️ 卧室','wòshì','Bedroom'],['🚽 卫生间','wèishēngjiān','Bathroom'],['🌿 阳台','yángtái','Balcony'],
        ['🚪 门','mén','Door'],['🪟 窗','chuāng','Window'],['🪑 桌子','zhuōzi','Table'],['💺 椅子','yǐzi','Chair'],
        ['🛁 浴室','yùshì','Bathroom (shower)'],['🖼️ 墙上','qiáng shàng','On the wall'],['🏡 花园','huāyuán','Garden'],
        ['🚗 车库','chēkù','Garage'],['📺 电视','diànshì','TV'],['🛋️ 沙发','shāfā','Sofa'],['🖼️ 画','huà','Painting']
    ],
    phrases: [
        ['🏠 我的房子有三个卧室。','Wǒ de fángzi yǒu sān gè wòshì.','My house has three bedrooms.'],
        ['🍳 厨房在客厅旁边。','Chúfáng zài kètīng pángbiān.','The kitchen is next to the living room.'],
        ['🛏️ 我的卧室很小。','Wǒ de wòshì hěn xiǎo.','My bedroom is small.'],
        ['🏡 我们家有一个花园。','Wǒmen jiā yǒu yí gè huāyuán.','Our house has a garden.']
    ]
});

// 4. The human body
topics.push({
    id: 'body', emoji: '🧍', title: 'The human body', cn: '人类的身体', category: 'Basics',
    vocab: [
        ['🗣️ 头','tóu','Head'],['👁️ 眼睛','yǎnjing','Eye'],['👂 耳朵','ěrduo','Ear'],['👃 鼻子','bízi','Nose'],
        ['👄 嘴巴','zuǐba','Mouth'],['✋ 手','shǒu','Hand'],['🦶 脚','jiǎo','Foot'],['🦵 腿','tuǐ','Leg'],
        ['💪 胳膊','gēbo','Arm'],['❤️ 心','xīn','Heart'],['🔙 背','bèi','Back'],['🦷 牙齿','yáchǐ','Teeth'],
        ['💇 头发','tóufa','Hair'],['🤚 手指','shǒuzhǐ','Finger'],['🦶 脚趾','jiǎozhǐ','Toe'],
        ['👅 舌头','shétou','Tongue'],['💪 肚子','dùzi','Belly'],['🦵 膝盖','xīgài','Knee']
    ],
    phrases: [
        ['🤕 我的头疼。','Wǒ de tóu téng.','My head hurts.'],
        ['👀 他眼睛很大。','Tā yǎnjing hěn dà.','His eyes are big.'],
        ['🦷 我每天刷牙。','Wǒ měitiān shuā yá.','I brush my teeth every day.']
    ]
});

// 5. Counting and numbers (expanded!)
topics.push({
    id: 'numbers', emoji: '🔢', title: 'Counting and numbers', cn: '计数和数字', category: 'Basics',
    special: 'numbers'
});

// 6. Daily activities
topics.push({
    id: 'daily', emoji: '🌞', title: 'Daily activities', cn: '日常活动', category: 'Daily Life',
    vocab: [
        ['⏰ 起床','qǐ chuáng','Get up'],['🪥 刷牙','shuā yá','Brush teeth'],['💦 洗脸','xǐ liǎn','Wash face'],
        ['🥣 吃早饭','chī zǎofàn','Eat breakfast'],['💼 上班','shàng bān','Go to work'],['🏫 上学','shàng xué','Go to school'],
        ['🍱 吃午饭','chī wǔfàn','Eat lunch'],['🏠 回家','huí jiā','Go home'],['🍲 做晚饭','zuò wǎnfàn','Cook dinner'],
        ['📺 看电视','kàn diànshì','Watch TV'],['🚿 洗澡','xǐ zǎo','Shower'],['😴 睡觉','shuì jiào','Sleep'],
        ['📱 看手机','kàn shǒujī','Look at phone'],['📚 看书','kàn shū','Read'],['🏃 运动','yùndòng','Exercise'],
        ['🛒 买东西','mǎi dōngxi','Shopping'],['🧹 打扫','dǎsǎo','Clean up'],['👚 洗衣服','xǐ yīfu','Do laundry']
    ],
    phrases: [
        ['⏰ 我每天早上七点起床。','Wǒ měitiān zǎoshang qī diǎn qǐ chuáng.','Every morning I get up at 7.'],
        ['📺 晚上我喜欢看电视。','Wǎnshang wǒ xǐhuān kàn diànshì.','In the evening I like to watch TV.'],
        ['🍱 你中午吃什么？','Nǐ zhōngwǔ chī shénme?','What do you eat for lunch?'],
        ['😴 我十一点睡觉。','Wǒ shíyī diǎn shuì jiào.','I go to sleep at 11.']
    ]
});

// 7. Colors, shapes & sizes
topics.push({
    id: 'colors', emoji: '🎨', title: 'Colors, shapes & sizes', cn: '颜色，形状与尺寸', category: 'Daily Life',
    special: 'colors',
    vocab: [
        ['🔴 圆形','yuán xíng','Circle'],['🟩 正方形','zhèngfāngxíng','Square'],['🔺 三角形','sānjiǎoxíng','Triangle'],
        ['⬆️ 大 / ⬇️ 小','dà / xiǎo','Big / Small'],['↔️ 长 / 短','cháng / duǎn','Long / Short'],
        ['↕️ 宽 / 窄','kuān / zhǎi','Wide / Narrow'],['⭐ 星星','xīngxing','Star'],['❤️ 心形','xīn xíng','Heart shape']
    ]
});

// 8. Opposites
topics.push({
    id: 'opposites', emoji: '↔️', title: 'Opposites', cn: '反义词', category: 'Daily Life',
    vocab: [
        ['🐘 大 / 🐭 小','dà / xiǎo','Big / Small'],['📚 多 / 📖 少','duō / shǎo','Many / Few'],
        ['🔥 热 / ❄️ 冷','rè / lěng','Hot / Cold'],['🐇 快 / 🐢 慢','kuài / màn','Fast / Slow'],
        ['👍 好 / 👎 坏','hǎo / huài','Good / Bad'],['🔓 开 / 🔒 关','kāi / guān','Open / Close'],
        ['🆕 新 / 🗝️ 旧','xīn / jiù','New / Old'],['🦒 高 / 🐜 矮','gāo / ǎi','Tall / Short'],
        ['💡 亮 / 🌑 暗','liàng / àn','Bright / Dark'],['🧼 干净 / 💩 脏','gānjìng / zāng','Clean / Dirty'],
        ['💧 湿 / 🏜️ 干','shī / gān','Wet / Dry'],['⬆️ 上 / ⬇️ 下','shàng / xià','Up / Down']
    ],
    phrases: [
        ['🐘 我的房间很大。','Wǒ de fángjiān hěn dà.','My room is big.'],
        ['🐭 这个手机太小了。','Zhège shǒujī tài xiǎo le.','This phone is too small.']
    ]
});

// 9. Talking about money
topics.push({
    id: 'money', emoji: '💰', title: 'Talking about money', cn: '中国钱怎么说', category: 'Shopping',
    vocab: [
        ['💵 钱','qián','Money'],['💴 元 / 块','yuán / kuài','Yuan'],['🪙 角 / 毛','jiǎo / máo','Jiao'],
        ['🪙 分','fēn','Fen'],['💶 人民币','rénmínbì','RMB'],['💳 现金','xiànjīn','Cash'],
        ['💳 信用卡','xìnyòngkǎ','Credit card'],['📱 微信支付','Wēixìn zhīfù','WeChat Pay'],
        ['❓ 多少钱？','duōshao qián?','How much?'],['🧾 收据','shōujù','Receipt'],
        ['💰 零钱','língqián','Change']
    ],
    phrases: [
        ['💰 这个多少钱？','Zhège duōshao qián?','How much is this?'],
        ['💵 十五块。','Shíwǔ kuài.','15 yuan.'],
        ['📉 太贵了，可以便宜一点吗？','Tài guì le, kěyǐ piányi yìdiǎn ma?','Too expensive, can it be a little cheaper?'],
        ['💳 我可以用信用卡吗？','Wǒ kěyǐ yòng xìnyòngkǎ ma?','Can I use a credit card?']
    ]
});

// 10. Going shopping
topics.push({
    id: 'shopping', emoji: '🛍️', title: 'Going shopping', cn: '去购物', category: 'Shopping',
    vocab: [
        ['🛒 买','mǎi','Buy'],['🏷️ 卖','mài','Sell'],['📉 便宜','piányi','Cheap'],['📈 贵','guì','Expensive'],
        ['🏷️ 折扣','zhékòu','Discount'],['📢 促销','cùxiāo','Promotion'],
        ['👗 试衣间','shì yī jiān','Fitting room'],['📏 尺码','chǐmǎ','Size'],['🎨 颜色','yánsè','Color'],
        ['💳 付款','fù kuǎn','Pay'],['🛍️ 购物袋','gòuwù dài','Shopping bag'],
        ['🔙 退换','tuìhuàn','Return/exchange']
    ],
    phrases: [
        ['🛍️ 太贵了！便宜一点吧。','Tài guì le! Piányi yìdiǎn ba.','Too expensive! Make it cheaper.'],
        ['👚 我可以试试吗？','Wǒ kěyǐ shì shì ma?','May I try it on?'],
        ['📏 有没有大一点的？','Yǒu méi yǒu dà yìdiǎn de?','Do you have a bigger size?']
    ]
});

// 11. Life in the city
topics.push({
    id: 'city', emoji: '🏙️', title: 'Life in the city', cn: '城市的生活', category: 'Travel',
    vocab: [
        ['🌆 城市','chéngshì','City'],['🌳 公园','gōngyuán','Park'],['🏪 超市','chāoshì','Supermarket'],
        ['🍽️ 餐厅','cāntīng','Restaurant'],['🏥 医院','yīyuàn','Hospital'],['🏦 银行','yínháng','Bank'],
        ['🏫 学校','xuéxiào','School'],['🚇 地铁站','dìtiě zhàn','Subway station'],
        ['🏛️ 博物馆','bówùguǎn','Museum'],['🎭 剧院','jùyuàn','Theatre']
    ],
    phrases: [
        ['🏙️ 城市的生活很热闹。','Chéngshì de shēnghuó hěn rènào.','City life is lively.'],
        ['🌳 我喜欢去公园散步。','Wǒ xǐhuān qù gōngyuán sànbù.','I like to walk in the park.'],
        ['🍽️ 这家餐厅很好吃。','Zhè jiā cāntīng hěn hǎochī.','This restaurant is delicious.']
    ]
});

// 12. Getting around
topics.push({
    id: 'gettingaround', emoji: '🚗', title: 'Getting around', cn: '美好出行', category: 'Travel',
    vocab: [
        ['🚕 出租车','chūzūchē','Taxi'],['🚇 地铁','dìtiě','Subway'],['🚌 公交车','gōngjiāochē','Bus'],
        ['🚲 自行车','zìxíngchē','Bicycle'],['🚶 走路','zǒu lù','Walk'],
        ['🗺️ 怎么走？','zěnme zǒu?','How to go?'],
        ['⬅️ 左 / ➡️ 右 / ⬆️ 直走','zuǒ / yòu / zhí zǒu','Left / Right / Straight']
    ],
    phrases: [
        ['🚇 地铁站怎么走？','Dìtiě zhàn zěnme zǒu?','How to get to the subway?'],
        ['🚶 我们走路去吧。','Wǒmen zǒu lù qù ba.','Let’s walk there.'],
        ['🚖 我打车去机场。','Wǒ dǎchē qù jīchǎng.','I’ll take a taxi to the airport.']
    ]
});

// 13. Asking & giving directions
topics.push({
    id: 'directions', emoji: '🗺️', title: 'Asking & giving directions', cn: '问路与指路', category: 'Travel',
    vocab: [
        ['⬆️ 一直走','yìzhí zǒu','Go straight'],['⬅️ 左转','zuǒ zhuǎn','Turn left'],
        ['➡️ 右转','yòu zhuǎn','Turn right'],['🏢 在…旁边','zài...pángbiān','Next to...'],
        ['↔️ 对面','duìmiàn','Opposite'],['🚦 红绿灯','hónglǜdēng','Traffic light'],
        ['🗺️ 远吗？','yuǎn ma?','Is it far?']
    ],
    phrases: [
        ['⬆️ 一直走，然后右转。','Yìzhí zǒu, ránhòu yòu zhuǎn.','Go straight, then turn right.'],
        ['🏦 银行在超市对面。','Yínháng zài chāoshì duìmiàn.','The bank is opposite the supermarket.'],
        ['🗺️ 请问，附近有地铁站吗？','Qǐngwèn, fùjìn yǒu dìtiě zhàn ma?','Excuse me, is there a subway station nearby?']
    ]
});

// 14. Talking about the weather
topics.push({
    id: 'weather', emoji: '☀️', title: 'Talking about the weather', cn: '谈论天气', category: 'Daily Life',
    vocab: [
        ['🌤️ 天气','tiānqì','Weather'],['☀️ 晴天','qíngtiān','Sunny'],['🌧️ 下雨','xià yǔ','Rain'],
        ['❄️ 下雪','xià xuě','Snow'],['💨 刮风','guā fēng','Windy'],['☁️ 多云','duō yún','Cloudy'],
        ['🌥️ 阴天','yīntiān','Overcast'],['🌡️ 温度','wēndù','Temperature'],
        ['🥶 冷','lěng','Cold'],['🥵 热','rè','Hot'],['🍃 凉快','liángkuai','Cool'],
        ['💧 潮湿','cháoshī','Humid'],['📡 天气预报','tiānqì yùbào','Weather forecast'],
        ['☔ 伞','sǎn','Umbrella'],['🌈 彩虹','cǎihóng','Rainbow']
    ],
    phrases: [
        ['☀️ 今天天气怎么样？','Jīntiān tiānqì zěnme yàng?','How’s the weather today?'],
        ['🥶 今天很冷，多穿衣服。','Jīntiān hěn lěng, duō chuān yīfu.','It’s cold today, wear more clothes.'],
        ['🌧️ 明天会下雨吗？','Míngtiān huì xià yǔ ma?','Will it rain tomorrow?'],
        ['☀️ 夏天北京很热。','Xiàtiān Běijīng hěn rè.','Beijing is very hot in summer.'],
        ['🌈 看，彩虹！','Kàn, cǎihóng!','Look, a rainbow!']
    ]
});

// 15. Telling time
topics.push({
    id: 'time', emoji: '🕒', title: 'Telling time', cn: '时间说法', category: 'Daily Life',
    vocab: [
        ['🕒 现在','xiànzài','Now'],['🔢 点','diǎn','O’clock'],['⏱️ 分','fēn','Minute'],
        ['🕧 半','bàn','Half past'],['🌅 早上','zǎoshang','Morning'],['🌆 下午','xiàwǔ','Afternoon'],
        ['🌃 晚上','wǎnshang','Evening'],['⏰ 闹钟','nàozhōng','Alarm clock'],
        ['⌚ 手表','shǒubiǎo','Watch'],['⏳ 时间','shíjiān','Time'],['⏱️ 秒','miǎo','Second']
    ],
    phrases: [
        ['🕒 现在几点？','Xiànzài jǐ diǎn?','What time is it?'],
        ['🕞 三点半。','Sān diǎn bàn.','3:30.'],
        ['🌅 我早上六点起床。','Wǒ zǎoshang liù diǎn qǐ chuáng.','I get up at 6 in the morning.']
    ]
});

// 16. Years and dates
topics.push({
    id: 'dates', emoji: '📅', title: 'Years and dates', cn: '年、月、日', category: 'Daily Life',
    vocab: [
        ['📆 年','nián','Year'],['📅 月','yuè','Month'],['📌 日 / 号','rì / hào','Date'],
        ['📅 星期','xīngqī','Week'],['📍 今天','jīntiān','Today'],['📆 明天','míngtiān','Tomorrow'],
        ['🗓️ 昨天','zuótiān','Yesterday'],['📅 日历','rìlì','Calendar'],
        ['🎂 生日','shēngrì','Birthday'],['📆 去年','qùnián','Last year']
    ],
    phrases: [
        ['📅 今天是几月几号？','Jīntiān shì jǐ yuè jǐ hào?','What is the date today?'],
        ['📆 今天是六月一号。','Jīntiān shì liù yuè yī hào.','Today is June 1st.'],
        ['🗓️ 昨天是星期天。','Zuótiān shì xīngqītiān.','Yesterday was Sunday.']
    ]
});

// 17. The seasons of the year
topics.push({
    id: 'seasons', emoji: '🍂', title: 'The seasons of the year', cn: '一年四季', category: 'Nature',
    vocab: [
        ['🌸 春天','chūntiān','Spring'],['☀️ 夏天','xiàtiān','Summer'],['🍁 秋天','qiūtiān','Autumn'],
        ['⛄ 冬天','dōngtiān','Winter'],['🔄 季节','jìjié','Season']
    ],
    phrases: [
        ['🌸 春天很暖和。','Chūntiān hěn nuǎnhuo.','Spring is warm.'],
        ['🍁 秋天树叶变黄了。','Qiūtiān shùyè biàn huáng le.','Leaves turn yellow in autumn.']
    ]
});

// 18. Celebrating the holidays
topics.push({
    id: 'holidays', emoji: '🎉', title: 'Celebrating the holidays', cn: '节日庆祝', category: 'Culture',
    vocab: [
        ['🧧 春节','Chūn Jié','Spring Festival'],['🥮 中秋节','Zhōngqiū Jié','Mid‑Autumn Festival'],
        ['🇨🇳 国庆节','Guóqìng Jié','National Day'],['🎉 节日快乐','jiérì kuàilè','Happy holiday'],
        ['🎆 烟花','yānhuā','Fireworks'],['🧨 鞭炮','biānpào','Firecrackers'],
        ['👻 万圣节','Wànshèngjié','Halloween'],['🎄 圣诞节','Shèngdàn Jié','Christmas']
    ],
    phrases: [
        ['🧧 春节快乐！','Chūn Jié kuàilè!','Happy Spring Festival!'],
        ['🥮 中秋节吃月饼。','Zhōngqiū Jié chī yuèbǐng.','We eat mooncakes during Mid‑Autumn Festival.']
    ]
});

// 19. I love to learn
topics.push({
    id: 'lovelearn', emoji: '📚', title: 'I love to learn', cn: '我爱学习', category: 'Education',
    vocab: [
        ['📖 学习','xuéxí','Study'],['📕 读书','dú shū','Read'],['✍️ 写字','xiě zì','Write'],
        ['👩‍🏫 老师','lǎoshī','Teacher'],['🧑‍🎓 学生','xuésheng','Student'],['📚 知识','zhīshi','Knowledge']
    ],
    phrases: [
        ['📚 我爱学习中文。','Wǒ ài xuéxí Zhōngwén.','I love learning Chinese.'],
        ['👩‍🏫 老师很好。','Lǎoshī hěn hǎo.','The teacher is good.']
    ]
});

// 20. At school
topics.push({
    id: 'school', emoji: '🏫', title: 'At school', cn: '在学校', category: 'Education',
    vocab: [
        ['🏫 学校','xuéxiào','School'],['🏢 教室','jiàoshì','Classroom'],['📘 课本','kèběn','Textbook'],
        ['📝 作业','zuòyè','Homework'],['📋 考试','kǎoshì','Exam'],['🖊️ 笔','bǐ','Pen'],
        ['📏 尺子','chǐzi','Ruler'],['🎒 书包','shūbāo','Backpack'],
        ['📚 图书馆','túshūguǎn','Library'],['🔬 科学','kēxué','Science'],['📐 数学','shùxué','Math']
    ],
    phrases: [
        ['🏫 我每天去学校。','Wǒ měitiān qù xuéxiào.','I go to school every day.'],
        ['📝 作业做完了吗？','Zuòyè zuò wán le ma?','Have you finished your homework?']
    ]
});