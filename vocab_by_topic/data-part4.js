// data-part4.js – Topics 61-73: Science, Math, Geography, Tech, Industry, Travel
var topics = topics || [];

// 61. Physical Sciences
topics.push({
    id: 'physicalsciences', emoji: '🔬', title: 'Physical Sciences', cn: '自然科学', category: 'Science & Math',
    vocab: [
        ['🔬 科学','kēxué','Science'],['⚛️ 物理','wùlǐ','Physics'],['🧪 化学','huàxué','Chemistry'],
        ['🧬 生物','shēngwù','Biology'],['🔭 实验','shíyàn','Experiment'],['📐 定律','dìnglǜ','Law (of nature)'],
        ['🧲 力','lì','Force'],['⚡ 电','diàn','Electricity'],['🔥 热','rè','Heat'],
        ['💡 光','guāng','Light'],['🌊 波','bō','Wave'],['🧪 元素','yuánsù','Element']
    ],
    phrases: [
        ['🔬 我喜欢自然科学。','Wǒ xǐhuān zìrán kēxué.','I like physical sciences.'],
        ['⚛️ 物理学家发现了新粒子。','Wùlǐxuéjiā fāxiàn le xīn lìzǐ.','Physicists discovered a new particle.'],
        ['🧪 化学实验很有趣。','Huàxué shíyàn hěn yǒuqù.','Chemistry experiments are very interesting.']
    ]
});

// 62. Earth & Environmental Sciences
topics.push({
    id: 'earthsciences', emoji: '🌍', title: 'Earth & Environmental Sciences', cn: '地球与环境科学', category: 'Science & Math',
    vocab: [
        ['🌍 地质','dìzhì','Geology'],['🌋 火山','huǒshān','Volcano'],['🗺️ 地图','dìtú','Map'],
        ['🌊 海洋','hǎiyáng','Ocean'],['🌱 生态','shēngtài','Ecology'],['♻️ 环保','huánbǎo','Environmental protection'],
        ['🌡️ 气候','qìhòu','Climate'],['💧 水资源','shuǐ zīyuán','Water resources']
    ],
    phrases: [
        ['🌍 地球是我们的家园。','Dìqiú shì wǒmen de jiāyuán.','The Earth is our home.'],
        ['🌋 活火山可能喷发。','Huó huǒshān kěnéng pēnfā.','An active volcano could erupt.'],
        ['♻️ 我们应该保护环境。','Wǒmen yīnggāi bǎohù huánjìng.','We should protect the environment.']
    ]
});

// 63. Basic Math Operations
topics.push({
    id: 'basicmath', emoji: '🧮', title: 'Basic Math Operations', cn: '基础数学运算', category: 'Science & Math',
    vocab: [
        ['➕ 加','jiā','Add (plus)'],['➖ 减','jiǎn','Subtract (minus)'],['✖️ 乘','chéng','Multiply (times)'],
        ['➗ 除以','chú yǐ','Divide (by)'],['🟰 等于','děngyú','Equals'],['🔢 数字','shùzì','Number'],
        ['📐 分数','fēnshù','Fraction'],['💯 百分比','bǎifēnbǐ','Percentage'],['📏 几何','jǐhé','Geometry']
    ],
    phrases: [
        ['➕ 二加三等于五。','Èr jiā sān děngyú wǔ.','Two plus three equals five.'],
        ['➗ 十除以二是多少？','Shí chú yǐ èr shì duōshao?','What is ten divided by two?'],
        ['📐 这个三角形有多大？','Zhège sānjiǎoxíng yǒu duō dà?','How big is this triangle?']
    ]
});

// 64. Advanced Math & Geometry
topics.push({
    id: 'advancedmath', emoji: '📊', title: 'Advanced Math & Geometry', cn: '高等数学与几何', category: 'Science & Math',
    vocab: [
        ['📈 代数','dàishù','Algebra'],['📐 角度','jiǎodù','Angle'],['🔄 方程','fāngchéng','Equation'],
        ['📏 圆周率','yuánzhōulǜ','Pi (π)'],['🔢 次数','cìshù','Power (exponent)'],
        ['📊 函数','hánshù','Function'],['🎲 概率','gàilǜ','Probability'],['📉 统计','tǒngjì','Statistics']
    ],
    phrases: [
        ['📈 代数是数学的分支。','Dàishù shì shùxué de fēnzhī.','Algebra is a branch of mathematics.'],
        ['📐 这个角多少度？','Zhège jiǎo duōshao dù?','How many degrees is this angle?'],
        ['🔄 解这个方程。','Jiě zhège fāngchéng.','Solve this equation.']
    ]
});

// 65. Geography
topics.push({
    id: 'geography', emoji: '🗺️', title: 'Geography', cn: '地理', category: 'World',
    vocab: [
        ['🌍 大陆','dàlù','Continent'],['🏔️ 山脉','shānmài','Mountain range'],
        ['🏜️ 沙漠','shāmò','Desert'],['🌊 洋','yáng','Ocean'],['🏞️ 河流','héliú','River'],
        ['🌐 赤道','chìdào','Equator'],['🧭 方向','fāngxiàng','Direction'],['🗺️ 纬度','wěidù','Latitude']
    ],
    phrases: [
        ['🌍 世界上有七大洲。','Shìjiè shàng yǒu qī dà zhōu.','There are seven continents in the world.'],
        ['🏔️ 喜马拉雅山是世界上最高的山脉。','Xǐmǎlāyǎ Shān shì shìjiè shàng zuì gāo de shānmài.','The Himalayas are the highest mountain range.'],
        ['🌊 太平洋是最大的洋。','Tàipíng Yáng shì zuì dà de yáng.','The Pacific Ocean is the largest ocean.']
    ]
});

// 66. Chinese Provinces
topics.push({
    id: 'provinces', emoji: '🇨🇳', title: 'Chinese Provinces', cn: '中国省份', category: 'World',
    vocab: [
        ['🏙️ 北京','Běijīng','Beijing'],['🏙️ 上海','Shànghǎi','Shanghai'],['🏞️ 广东','Guǎngdōng','Guangdong'],
        ['🏔️ 四川','Sìchuān','Sichuan'],['🌊 福建','Fújiàn','Fujian'],['🏜️ 新疆','Xīnjiāng','Xinjiang'],
        ['🏯 江苏','Jiāngsū','Jiangsu'],['🌾 浙江','Zhèjiāng','Zhejiang'],['🏔️ 云南','Yúnnán','Yunnan'],
        ['🌸 湖北','Húběi','Hubei'],['🍜 湖南','Húnán','Hunan'],['🏞️ 山东','Shāndōng','Shandong']
    ],
    phrases: [
        ['🇨🇳 中国有二十三个省、五个自治区。','Zhōngguó yǒu èrshísān gè shěng, wǔ gè zìzhìqū.','China has 23 provinces and 5 autonomous regions.'],
        ['🏙️ 北京是中国的首都。','Běijīng shì Zhōngguó de shǒudū.','Beijing is the capital of China.'],
        ['🏞️ 广东菜很有名。','Guǎngdōng cài hěn yǒumíng.','Cantonese cuisine is famous.']
    ]
});

// 67. Coding
topics.push({
    id: 'coding', emoji: '💻', title: 'Coding & Programming', cn: '编程', category: 'Tech',
    vocab: [
        ['💻 代码','dàimǎ','Code'],['📝 程序','chéngxù','Program'],['🐍 Python','Páitōng','Python'],
        ['☕ Java','Jiāwǎ','Java'],['🔧 开发','kāifā','Develop'],['🕵️ 调试','tiáoshì','Debug'],
        ['📚 变量','biànliàng','Variable'],['🔁 循环','xúnhuán','Loop']
    ],
    phrases: [
        ['💻 我学习编程已经一年了。','Wǒ xuéxí biānchéng yǐjīng yì nián le.','I have been learning programming for a year.'],
        ['🐍 我最喜欢的语言是Python。','Wǒ zuì xǐhuān de yǔyán shì Python.','My favorite language is Python.'],
        ['📝 这个程序有个错误。','Zhège chéngxù yǒu gè cuòwù.','This program has a bug.']
    ]
});

// 68. Artificial Intelligence (AI)
topics.push({
    id: 'ai', emoji: '🤖', title: 'Artificial Intelligence', cn: '人工智能', category: 'Tech',
    vocab: [
        ['🤖 人工智能','réngōng zhìnéng','Artificial Intelligence'],['🧠 机器学习','jīqì xuéxí','Machine Learning'],
        ['📊 数据','shùjù','Data'],['🔍 算法','suànfǎ','Algorithm'],['🗣️ 语音识别','yǔyīn shíbié','Speech recognition'],
        ['👁️ 计算机视觉','jìsuànjī shìjué','Computer vision'],['📈 训练','xùnliàn','Train (model)']
    ],
    phrases: [
        ['🤖 人工智能正在改变世界。','Réngōng zhìnéng zhèngzài gǎibiàn shìjiè.','Artificial intelligence is changing the world.'],
        ['🧠 机器学习是AI的一部分。','Jīqì xuéxí shì AI de yíbùfen.','Machine learning is a part of AI.'],
        ['📈 我们需要大量数据来训练模型。','Wǒmen xūyào dàliàng shùjù lái xùnliàn móxíng.','We need a lot of data to train models.']
    ]
});

// 69. IT Industry
topics.push({
    id: 'itindustry', emoji: '🖥️', title: 'IT Industry', cn: '信息技术产业', category: 'Tech',
    vocab: [
        ['🖥️ 信息技术','xìnxī jìshù','Information Technology'],['💾 服务器','fúwùqì','Server'],
        ['☁️ 云计算','yún jìsuàn','Cloud computing'],['🔒 网络安全','wǎngluò ānquán','Network security'],
        ['📡 通信','tōngxìn','Telecommunication'],['💼 软件公司','ruǎnjiàn gōngsī','Software company'],
        ['👨‍💻 程序员','chéngxùyuán','Programmer'],['📊 大数据','dà shùjù','Big data']
    ],
    phrases: [
        ['🖥️ IT行业发展很快。','IT hángyè fāzhǎn hěn kuài.','The IT industry develops very fast.'],
        ['☁️ 云计算非常方便。','Yún jìsuàn fēicháng fāngbiàn.','Cloud computing is very convenient.'],
        ['💼 他在一家大型软件公司工作。','Tā zài yì jiā dàxíng ruǎnjiàn gōngsī gōngzuò.','He works at a large software company.']
    ]
});

// 70. Industry
topics.push({
    id: 'industry', emoji: '🏭', title: 'Industry', cn: '工业', category: 'Industry & Economy',
    vocab: [
        ['🏭 工厂','gōngchǎng','Factory'],['⚙️ 制造','zhìzào','Manufacture'],['🔩 机器','jīqì','Machine'],
        ['📦 生产','shēngchǎn','Produce'],['🚗 汽车工业','qìchē gōngyè','Automobile industry'],
        ['🔋 能源','néngyuán','Energy'],['👷 工人','gōngrén','Worker'],['📈 产业','chǎnyè','Industry sector']
    ],
    phrases: [
        ['🏭 这个工厂制造汽车零件。','Zhège gōngchǎng zhìzào qìchē língjiàn.','This factory manufactures car parts.'],
        ['⚙️ 工业革命改变了社会。','Gōngyè gémìng gǎibiàn le shèhuì.','The Industrial Revolution changed society.'],
        ['🔋 新能源产业发展迅速。','Xīn néngyuán chǎnyè fāzhǎn xùnsù.','The new energy industry is developing rapidly.']
    ]
});

// 71. Agriculture
topics.push({
    id: 'agriculture', emoji: '🌾', title: 'Agriculture', cn: '农业', category: 'Industry & Economy',
    vocab: [
        ['🌾 农田','nóngtián','Farmland'],['🚜 拖拉机','tuōlājī','Tractor'],['🌱 作物','zuòwù','Crop'],
        ['🍚 水稻','shuǐdào','Rice'],['🌽 玉米','yùmǐ','Corn'],['🐄 奶牛','nǎiniú','Dairy cow'],
        ['🧑‍🌾 农民','nóngmín','Farmer'],['💧 灌溉','guàngài','Irrigation'],['🍇 葡萄园','pútáoyuán','Vineyard']
    ],
    phrases: [
        ['🌾 农业是国民经济的基础。','Nóngyè shì guómín jīngjì de jīchǔ.','Agriculture is the foundation of the national economy.'],
        ['🍚 水稻是主要的粮食作物。','Shuǐdào shì zhǔyào de liángshi zuòwù.','Rice is the main food crop.'],
        ['🧑‍🌾 农民在田里劳动。','Nóngmín zài tián lǐ láodòng.','Farmers work in the fields.']
    ]
});

// 72. Tourism
topics.push({
    id: 'tourism', emoji: '🧳', title: 'Tourism', cn: '旅游业', category: 'Travel',
    vocab: [
        ['🧳 游客','yóukè','Tourist'],['🏖️ 度假','dùjià','Vacation'],['🏨 住宿','zhùsù','Accommodation'],
        ['🎫 门票','ménpiào','Admission ticket'],['📸 景点','jǐngdiǎn','Scenic spot'],
        ['🗺️ 导游','dǎoyóu','Tour guide'],['🛃 签证','qiānzhèng','Visa'],['🛫 航班','hángbān','Flight']
    ],
    phrases: [
        ['🧳 中国每年吸引数百万外国游客。','Zhōngguó měinián xīyǐn shù bǎiwàn wàiguó yóukè.','China attracts millions of foreign tourists every year.'],
        ['🎫 门票多少钱一张？','Ménpiào duōshao qián yì zhāng?','How much is an admission ticket?'],
        ['📸 这个景点非常有名。','Zhège jǐngdiǎn fēicháng yǒumíng.','This scenic spot is very famous.']
    ]
});

// 73. Transportation (comprehensive)
topics.push({
    id: 'transportation', emoji: '🚦', title: 'Transportation', cn: '交通运输', category: 'Travel',
    vocab: [
        ['🚗 汽车','qìchē','Car'],['🚌 公交车','gōngjiāochē','Bus'],['🚇 地铁','dìtiě','Subway'],
        ['✈️ 飞机','fēijī','Airplane'],['🚄 高铁','gāotiě','High‑speed train'],['🚢 船','chuán','Ship'],
        ['🛴 滑板车','huábǎnchē','Scooter'],['🚲 自行车','zìxíngchē','Bicycle'],
        ['🚦 信号灯','xìnhàodēng','Traffic light'],['🚧 堵车','dǔchē','Traffic jam']
    ],
    phrases: [
        ['🚗 你开什么车？','Nǐ kāi shénme chē?','What car do you drive?'],
        ['🚄 坐高铁从北京到上海只要四个多小时。','Zuò gāotiě cóng Běijīng dào Shànghǎi zhǐ yào sì gè duō xiǎoshí.','Taking the high‑speed train from Beijing to Shanghai only takes a little over four hours.'],
        ['🚧 早上经常堵车。','Zǎoshang jīngcháng dǔchē.','Traffic jams are common in the morning.']
    ]
});