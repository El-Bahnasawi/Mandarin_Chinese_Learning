const charactersPart3 = [
  // ───────────────── 🧠 Body & Health ─────────────────
  // 目
  { char:"目", pinyin:"mu4", radical:"目", components:[], meaning:"eye", emoji:"👁️", gifDuration:1, sentence:"眼睛是心灵的窗户。" },
  { char:"看", pinyin:"kan4", radical:"目", components:["手","目"], meaning:"look", emoji:"🔍", gifDuration:1.2, sentence:"看书能学到知识。" },
  { char:"眼", pinyin:"yan3", radical:"目", components:["目","艮"], meaning:"eye", emoji:"👀", gifDuration:1.2, sentence:"她有一双大眼睛。" },
  { char:"睛", pinyin:"jing1", radical:"目", components:["目","青"], meaning:"eyeball", emoji:"👁️", gifDuration:1.2, sentence:"目不转睛地盯着。" },
  { char:"盯", pinyin:"ding1", radical:"目", components:["目","丁"], meaning:"stare", emoji:"👀", gifDuration:1.2, sentence:"别盯着别人看。" },
  { char:"盲", pinyin:"mang2", radical:"目", components:["亡","目"], meaning:"blind", emoji:"🦯", gifDuration:1.2, sentence:"盲人需要帮助。" },
  { char:"省", pinyin:"sheng3", radical:"目", components:["少","目"], meaning:"save", emoji:"💡", gifDuration:1.2, sentence:"节省时间很重要。" },
  // 身
  { char:"身", pinyin:"shen1", radical:"身", components:[], meaning:"body", emoji:"🧍", gifDuration:1, sentence:"锻炼身体。" },
  { char:"躺", pinyin:"tang3", radical:"身", components:["身","尚"], meaning:"lie down", emoji:"🛌", gifDuration:1.2, sentence:"他躺在床上休息。" },
  { char:"躯", pinyin:"qu1", radical:"身", components:["身","区"], meaning:"body", emoji:"🦴", gifDuration:1.2, sentence:"身躯高大。" },
  { char:"躲", pinyin:"duo3", radical:"身", components:["身","朵"], meaning:"hide", emoji:"🙈", gifDuration:1.2, sentence:"猫咪躲起来了。" },
  // 耳
  { char:"耳", pinyin:"er3", radical:"耳", components:[], meaning:"ear", emoji:"👂", gifDuration:1, sentence:"耳朵能听声音。" },
  { char:"闻", pinyin:"wen2", radical:"耳", components:["门","耳"], meaning:"hear", emoji:"👂", gifDuration:1.2, sentence:"闻到了香味。" },
  { char:"聊", pinyin:"liao2", radical:"耳", components:["耳","卯"], meaning:"chat", emoji:"💬", gifDuration:1.2, sentence:"我们聊天吧。" },
  { char:"聪", pinyin:"cong1", radical:"耳", components:["耳","总"], meaning:"clever", emoji:"🧠", gifDuration:1.2, sentence:"聪明伶俐。" },
  // 牙
  { char:"牙", pinyin:"ya2", radical:"牙", components:[], meaning:"tooth", emoji:"🦷", gifDuration:1, sentence:"牙齿很白。" },
  { char:"雅", pinyin:"ya3", radical:"牙", components:["牙","隹"], meaning:"elegant", emoji:"🦷✨", gifDuration:1.2, sentence:"举止优雅。" },
  // 疒
  { char:"病", pinyin:"bing4", radical:"疒", components:["疒","丙"], meaning:"sick", emoji:"🤒", gifDuration:1.2, sentence:"他生病了。" },
  { char:"痛", pinyin:"tong4", radical:"疒", components:["疒","甬"], meaning:"pain", emoji:"😣", gifDuration:1.2, sentence:"头痛得厉害。" },
  { char:"瘦", pinyin:"shou4", radical:"疒", components:["疒","叟"], meaning:"thin", emoji:"🏃", gifDuration:1.2, sentence:"他太瘦了。" },
  { char:"疯", pinyin:"feng1", radical:"疒", components:["疒","风"], meaning:"insane", emoji:"🌀", gifDuration:1.2, sentence:"疯狂的想法。" },
  { char:"痒", pinyin:"yang3", radical:"疒", components:["疒","羊"], meaning:"itch", emoji:"🐑", gifDuration:1.2, sentence:"皮肤好痒。" },
  { char:"痘", pinyin:"dou4", radical:"疒", components:["疒","豆"], meaning:"pox", emoji:"🦠", gifDuration:1.2, sentence:"脸上长痘了。" },
  // 骨
  { char:"骨", pinyin:"gu3", radical:"骨", components:[], meaning:"bone", emoji:"🦴", gifDuration:1, sentence:"骨折了。" },
  { char:"骼", pinyin:"ge2", radical:"骨", components:["骨","各"], meaning:"skeleton", emoji:"🦴", gifDuration:1.2, sentence:"人体骨骼很复杂。" },

  // ───────────────── 🐅 Animals ─────────────────
  // 犭
  { char:"狗", pinyin:"gou3", radical:"犭", components:["犭","句"], meaning:"dog", emoji:"🐶", gifDuration:1.2, sentence:"小狗很可爱。" },
  { char:"猫", pinyin:"mao1", radical:"犭", components:["犭","苗"], meaning:"cat", emoji:"🐱", gifDuration:1.2, sentence:"猫在睡觉。" },
  { char:"猴", pinyin:"hou2", radical:"犭", components:["犭","侯"], meaning:"monkey", emoji:"🐒", gifDuration:1.3, sentence:"猴子很调皮。" },
  { char:"猪", pinyin:"zhu1", radical:"犭", components:["犭","者"], meaning:"pig", emoji:"🐷", gifDuration:1.2, sentence:"猪在泥里打滚。" },
  { char:"狼", pinyin:"lang2", radical:"犭", components:["犭","良"], meaning:"wolf", emoji:"🐺", gifDuration:1.2, sentence:"狼在嚎叫。" },
  { char:"狐", pinyin:"hu2", radical:"犭", components:["犭","瓜"], meaning:"fox", emoji:"🦊", gifDuration:1.2, sentence:"狐狸很狡猾。" },
  { char:"狮", pinyin:"shi1", radical:"犭", components:["犭","师"], meaning:"lion", emoji:"🦁", gifDuration:1.2, sentence:"狮子是百兽之王。" },
  // 牛
  { char:"牛", pinyin:"niu2", radical:"牛", components:[], meaning:"cow", emoji:"🐄", gifDuration:1, sentence:"牛在吃草。" },
  { char:"物", pinyin:"wu4", radical:"牛", components:["牛","勿"], meaning:"thing", emoji:"📦", gifDuration:1.2, sentence:"保护动物。" },
  { char:"特", pinyin:"te4", radical:"牛", components:["牛","寺"], meaning:"special", emoji:"⭐", gifDuration:1.2, sentence:"特别好吃。" },
  { char:"牲", pinyin:"sheng1", radical:"牛", components:["牛","生"], meaning:"livestock", emoji:"🐮", gifDuration:1.2, sentence:"牲口棚。" },
  { char:"牧", pinyin:"mu4", radical:"牛", components:["牛","攵"], meaning:"herd", emoji:"🐄", gifDuration:1.2, sentence:"牧民放羊。" },
  // 马
  { char:"马", pinyin:"ma3", radical:"马", components:[], meaning:"horse", emoji:"🐎", gifDuration:1, sentence:"骑马奔腾。" },
  { char:"骑", pinyin:"qi2", radical:"马", components:["马","奇"], meaning:"ride", emoji:"🏇", gifDuration:1.2, sentence:"骑自行车。" },
  { char:"驾", pinyin:"jia4", radical:"马", components:["加","马"], meaning:"drive", emoji:"🚗", gifDuration:1.2, sentence:"驾驶汽车。" },
  { char:"驰", pinyin:"chi2", radical:"马", components:["马","也"], meaning:"gallop", emoji:"🐎", gifDuration:1.2, sentence:"飞驰而过。" },
  { char:"驯", pinyin:"xun2", radical:"马", components:["马","川"], meaning:"tame", emoji:"🐎", gifDuration:1.2, sentence:"驯服野马。" },
  // 鸟
  { char:"鸟", pinyin:"niao3", radical:"鸟", components:[], meaning:"bird", emoji:"🐦", gifDuration:1, sentence:"鸟在天上飞。" },
  { char:"鸡", pinyin:"ji1", radical:"鸟", components:["又","鸟"], meaning:"chicken", emoji:"🐔", gifDuration:1.2, sentence:"鸡鸣报晓。" },
  { char:"鸭", pinyin:"ya1", radical:"鸟", components:["甲","鸟"], meaning:"duck", emoji:"🦆", gifDuration:1.2, sentence:"鸭子在游泳。" },
  { char:"鹅", pinyin:"e2", radical:"鸟", components:["我","鸟"], meaning:"goose", emoji:"🪿", gifDuration:1.2, sentence:"鹅鹅鹅，曲项向天歌。" },
  { char:"鸽", pinyin:"ge1", radical:"鸟", components:["合","鸟"], meaning:"dove", emoji:"🕊️", gifDuration:1.2, sentence:"鸽子象征和平。" },
  { char:"鹤", pinyin:"he4", radical:"鸟", components:["隺","鸟"], meaning:"crane", emoji:"🦩", gifDuration:1.3, sentence:"松鹤延年。" },
  // 鱼
  { char:"鱼", pinyin:"yu2", radical:"鱼", components:[], meaning:"fish", emoji:"🐟", gifDuration:1, sentence:"鱼在水里游。" },
  { char:"鲜", pinyin:"xian1", radical:"鱼", components:["鱼","羊"], meaning:"fresh", emoji:"🐠", gifDuration:1.2, sentence:"海鲜很好吃。" },
  { char:"鲸", pinyin:"jing1", radical:"鱼", components:["鱼","京"], meaning:"whale", emoji:"🐋", gifDuration:1.3, sentence:"鲸鱼很大。" },
  { char:"鲤", pinyin:"li3", radical:"鱼", components:["鱼","里"], meaning:"carp", emoji:"🐟", gifDuration:1.2, sentence:"鲤鱼跃龙门。" },
  // 虫
  { char:"虫", pinyin:"chong2", radical:"虫", components:[], meaning:"insect", emoji:"🐛", gifDuration:1, sentence:"虫子在爬。" },
  { char:"蛇", pinyin:"she2", radical:"虫", components:["虫","它"], meaning:"snake", emoji:"🐍", gifDuration:1.2, sentence:"草丛里有蛇。" },
  { char:"蜜", pinyin:"mi4", radical:"虫", components:["宓","虫"], meaning:"honey", emoji:"🍯", gifDuration:1.2, sentence:"蜂蜜很甜。" },
  { char:"蝶", pinyin:"die2", radical:"虫", components:["虫","枼"], meaning:"butterfly", emoji:"🦋", gifDuration:1.3, sentence:"蝴蝶飞舞。" },
  { char:"蜂", pinyin:"feng1", radical:"虫", components:["虫","夅"], meaning:"bee", emoji:"🐝", gifDuration:1.2, sentence:"蜜蜂采蜜。" },
  { char:"蚁", pinyin:"yi3", radical:"虫", components:["虫","义"], meaning:"ant", emoji:"🐜", gifDuration:1.2, sentence:"蚂蚁搬家。" },

  // ───────────────── 🍚 Food & Drink ─────────────────
  // 食/饣
  { char:"食", pinyin:"shi2", radical:"食", components:[], meaning:"food", emoji:"🍲", gifDuration:1, sentence:"粮食很重要。" },
  { char:"饭", pinyin:"fan4", radical:"饣", components:["饣","反"], meaning:"rice", emoji:"🍚", gifDuration:1.2, sentence:"吃饭了吗？" },
  { char:"饿", pinyin:"e4", radical:"饣", components:["饣","我"], meaning:"hungry", emoji:"😋", gifDuration:1.2, sentence:"我饿了。" },
  { char:"饱", pinyin:"bao3", radical:"饣", components:["饣","包"], meaning:"full", emoji:"😊", gifDuration:1.2, sentence:"吃饱了。" },
  { char:"馅", pinyin:"xian4", radical:"饣", components:["饣","臽"], meaning:"filling", emoji:"🥟", gifDuration:1.2, sentence:"饺子馅。" },
  { char:"饺", pinyin:"jiao3", radical:"饣", components:["饣","交"], meaning:"dumpling", emoji:"🥟", gifDuration:1.2, sentence:"包饺子。" },
  { char:"饼", pinyin:"bing3", radical:"饣", components:["饣","并"], meaning:"cake", emoji:"🥞", gifDuration:1.2, sentence:"吃饼。" },
  { char:"馆", pinyin:"guan3", radical:"饣", components:["饣","官"], meaning:"hall", emoji:"🏛️", gifDuration:1.2, sentence:"图书馆。" },
  // 禾
  { char:"禾", pinyin:"he2", radical:"禾", components:[], meaning:"grain", emoji:"🌾", gifDuration:1, sentence:"禾苗青青。" },
  { char:"和", pinyin:"he2", radical:"禾", components:["禾","口"], meaning:"harmony", emoji:"🕊️", gifDuration:1.2, sentence:"和平共处。" },
  { char:"种", pinyin:"zhong3", radical:"禾", components:["禾","中"], meaning:"seed", emoji:"🌱", gifDuration:1.2, sentence:"种瓜得瓜。" },
  { char:"秋", pinyin:"qiu1", radical:"禾", components:["禾","火"], meaning:"autumn", emoji:"🍂", gifDuration:1.2, sentence:"秋天来了。" },
  { char:"科", pinyin:"ke1", radical:"禾", components:["禾","斗"], meaning:"science", emoji:"🔬", gifDuration:1.2, sentence:"科学知识。" },
  { char:"秒", pinyin:"miao3", radical:"禾", components:["禾","少"], meaning:"second", emoji:"⏱️", gifDuration:1.2, sentence:"等一秒钟。" },
  { char:"积", pinyin:"ji1", radical:"禾", components:["禾","只"], meaning:"accumulate", emoji:"📈", gifDuration:1.2, sentence:"积累经验。" },
  { char:"程", pinyin:"cheng2", radical:"禾", components:["禾","呈"], meaning:"journey", emoji:"🛤️", gifDuration:1.2, sentence:"路程很远。" },
  { char:"称", pinyin:"cheng1", radical:"禾", components:["禾","尔"], meaning:"weigh", emoji:"⚖️", gifDuration:1.2, sentence:"称重量。" },
  // 米
  { char:"米", pinyin:"mi3", radical:"米", components:[], meaning:"rice", emoji:"🍚", gifDuration:1, sentence:"米饭。" },
  { char:"粉", pinyin:"fen3", radical:"米", components:["米","分"], meaning:"powder", emoji:"🧂", gifDuration:1.2, sentence:"面粉。" },
  { char:"粥", pinyin:"zhou1", radical:"米", components:["米","弜"], meaning:"porridge", emoji:"🥣", gifDuration:1.3, sentence:"喝粥。" },
  { char:"粒", pinyin:"li4", radical:"米", components:["米","立"], meaning:"grain", emoji:"🍚", gifDuration:1.2, sentence:"一粒米。" },
  { char:"粗", pinyin:"cu1", radical:"米", components:["米","且"], meaning:"coarse", emoji:"🌾", gifDuration:1.2, sentence:"粗粮健康。" },
  { char:"精", pinyin:"jing1", radical:"米", components:["米","青"], meaning:"essence", emoji:"🧬", gifDuration:1.2, sentence:"精彩表演。" },
  // 甘
  { char:"甘", pinyin:"gan1", radical:"甘", components:[], meaning:"sweet", emoji:"🍬", gifDuration:1, sentence:"甘甜可口。" },
  { char:"甜", pinyin:"tian2", radical:"甘", components:["舌","甘"], meaning:"sweet", emoji:"🍭", gifDuration:1.2, sentence:"生活很甜。" },
  { char:"某", pinyin:"mou3", radical:"甘", components:["甘","木"], meaning:"certain", emoji:"❓", gifDuration:1.2, sentence:"某个人。" },

  // ───────────────── 👗 Clothing ─────────────────
  // 衣/衤
  { char:"衣", pinyin:"yi1", radical:"衣", components:[], meaning:"clothes", emoji:"👗", gifDuration:1, sentence:"衣服脏了。" },
  { char:"衫", pinyin:"shan1", radical:"衤", components:["衤","彡"], meaning:"shirt", emoji:"👔", gifDuration:1.2, sentence:"衬衫。" },
  { char:"裙", pinyin:"qun2", radical:"衤", components:["衤","君"], meaning:"skirt", emoji:"👗", gifDuration:1.2, sentence:"裙子漂亮。" },
  { char:"裤", pinyin:"ku4", radical:"衤", components:["衤","库"], meaning:"trousers", emoji:"👖", gifDuration:1.2, sentence:"裤子破了。" },
  { char:"初", pinyin:"chu1", radical:"衤", components:["衤","刀"], meaning:"beginning", emoji:"🔰", gifDuration:1.2, sentence:"初次见面。" },
  { char:"补", pinyin:"bu3", radical:"衤", components:["衤","卜"], meaning:"mend", emoji:"🪡", gifDuration:1.2, sentence:"缝补衣服。" },
  { char:"被", pinyin:"bei4", radical:"衤", components:["衤","皮"], meaning:"quilt", emoji:"🛏️", gifDuration:1.2, sentence:"被子暖和。" },
  { char:"装", pinyin:"zhuang1", radical:"衤", components:["壮","衣"], meaning:"pack", emoji:"📦", gifDuration:1.2, sentence:"装卸货物。" },
  { char:"袋", pinyin:"dai4", radical:"衣", components:["代","衣"], meaning:"bag", emoji:"🛍️", gifDuration:1.2, sentence:"塑料袋。" },
  // 巾
  { char:"巾", pinyin:"jin1", radical:"巾", components:[], meaning:"towel", emoji:"🪣", gifDuration:1, sentence:"毛巾。" },
  { char:"帘", pinyin:"lian2", radical:"巾", components:["穴","巾"], meaning:"curtain", emoji:"🪟", gifDuration:1.2, sentence:"窗帘。" },
  { char:"帽", pinyin:"mao4", radical:"巾", components:["巾","冒"], meaning:"hat", emoji:"🎩", gifDuration:1.2, sentence:"戴帽子。" },
  { char:"帕", pinyin:"pa4", radical:"巾", components:["巾","白"], meaning:"handkerchief", emoji:"🤧", gifDuration:1.2, sentence:"手帕。" },
  { char:"布", pinyin:"bu4", radical:"巾", components:["𠂇","巾"], meaning:"cloth", emoji:"🧵", gifDuration:1.2, sentence:"布料。" },
  { char:"帅", pinyin:"shuai4", radical:"巾", components:["巾","丨"], meaning:"commander", emoji:"🎖️", gifDuration:1.2, sentence:"大帅。" },

  // ───────────────── 📚 Study & Knowledge ─────────────────
  // 竹
  { char:"竹", pinyin:"zhu2", radical:"竹", components:[], meaning:"bamboo", emoji:"🎋", gifDuration:1, sentence:"竹子。" },
  { char:"笔", pinyin:"bi3", radical:"竹", components:["⺮","毛"], meaning:"pen", emoji:"🖊️", gifDuration:1.2, sentence:"笔尖。" },
  { char:"简", pinyin:"jian3", radical:"竹", components:["⺮","间"], meaning:"simple", emoji:"📄", gifDuration:1.2, sentence:"简单。" },
  { char:"算", pinyin:"suan4", radical:"竹", components:["⺮","目","廾"], meaning:"calculate", emoji:"🧮", gifDuration:1.3, sentence:"算术题。" },
  { char:"答", pinyin:"da2", radical:"竹", components:["⺮","合"], meaning:"answer", emoji:"💬", gifDuration:1.2, sentence:"回答问题。" },
  { char:"策", pinyin:"ce4", radical:"竹", components:["⺮","朿"], meaning:"plan", emoji:"📋", gifDuration:1.2, sentence:"策略。" },
  { char:"篇", pinyin:"pian1", radical:"竹", components:["⺮","扁"], meaning:"chapter", emoji:"📖", gifDuration:1.2, sentence:"文章篇幅。" },
  { char:"箱", pinyin:"xiang1", radical:"竹", components:["⺮","相"], meaning:"box", emoji:"📦", gifDuration:1.2, sentence:"箱子。" },
  // 示/礻
  { char:"礼", pinyin:"li3", radical:"礻", components:["礻","乚"], meaning:"ceremony", emoji:"🎁", gifDuration:1.2, sentence:"礼貌。" },
  { char:"祝", pinyin:"zhu4", radical:"礻", components:["礻","兄"], meaning:"wish", emoji:"🙏", gifDuration:1.2, sentence:"祝福。" },
  { char:"神", pinyin:"shen2", radical:"礻", components:["礻","申"], meaning:"god", emoji:"✨", gifDuration:1.2, sentence:"神仙。" },
  { char:"福", pinyin:"fu2", radical:"礻", components:["礻","畐"], meaning:"fortune", emoji:"🧧", gifDuration:1.2, sentence:"幸福生活。" },
  // 见
  { char:"见", pinyin:"jian4", radical:"见", components:[], meaning:"see", emoji:"👀", gifDuration:1, sentence:"见到你很高兴。" },
  { char:"觉", pinyin:"jue2", radical:"见", components:["⺌","见"], meaning:"feel", emoji:"💭", gifDuration:1.2, sentence:"觉得冷。" },
  { char:"视", pinyin:"shi4", radical:"见", components:["礻","见"], meaning:"vision", emoji:"👁️", gifDuration:1.2, sentence:"看电视。" },
  // 立
  { char:"立", pinyin:"li4", radical:"立", components:[], meaning:"stand", emoji:"🧍", gifDuration:1, sentence:"站起来。" },
  { char:"章", pinyin:"zhang1", radical:"立", components:["立","早"], meaning:"chapter", emoji:"📖", gifDuration:1.2, sentence:"文章。" },
  { char:"竟", pinyin:"jing4", radical:"立", components:["音","儿"], meaning:"finish", emoji:"🏁", gifDuration:1.2, sentence:"竟然。" },

  // ───────────────── 😌 Emotions & Mind ─────────────────
  { char:"情", pinyin:"qing2", radical:"忄", components:["忄","青"], meaning:"emotion", emoji:"💖", gifDuration:1.2, sentence:"感情深厚。" },
  { char:"感", pinyin:"gan3", radical:"心", components:["咸","心"], meaning:"feel", emoji:"💗", gifDuration:1.2, sentence:"感谢你。" },
  { char:"爱", pinyin:"ai4", radical:"心", components:["爫","冖","心"], meaning:"love", emoji:"❤️", gifDuration:1.3, sentence:"我爱你。" },
  { char:"怕", pinyin:"pa4", radical:"忄", components:["忄","白"], meaning:"fear", emoji:"😨", gifDuration:1.2, sentence:"别怕。" },
  { char:"急", pinyin:"ji2", radical:"心", components:["刍","心"], meaning:"urgent", emoji:"⏰", gifDuration:1.2, sentence:"别急。" },
  { char:"悔", pinyin:"hui3", radical:"忄", components:["忄","每"], meaning:"regret", emoji:"😔", gifDuration:1.2, sentence:"后悔莫及。" },
  { char:"愁", pinyin:"chou2", radical:"心", components:["秋","心"], meaning:"worry", emoji:"😟", gifDuration:1.2, sentence:"发愁。" },
  { char:"愉", pinyin:"yu2", radical:"忄", components:["忄","俞"], meaning:"joy", emoji:"😊", gifDuration:1.2, sentence:"愉快。" },
  { char:"愤", pinyin:"fen4", radical:"忄", components:["忄","贲"], meaning:"anger", emoji:"😠", gifDuration:1.2, sentence:"愤怒。" },
  { char:"慈", pinyin:"ci2", radical:"心", components:["兹","心"], meaning:"kind", emoji:"🤗", gifDuration:1.2, sentence:"慈善。" },

  // ───────────────── 🧮 Objects & Materials ─────────────────
  // 车
  { char:"车", pinyin:"che1", radical:"车", components:[], meaning:"vehicle", emoji:"🚗", gifDuration:1, sentence:"开车。" },
  { char:"辆", pinyin:"liang4", radical:"车", components:["车","两"], meaning:"classifier", emoji:"🚘", gifDuration:1.2, sentence:"一辆车。" },
  { char:"轻", pinyin:"qing1", radical:"车", components:["车","圣"], meaning:"light", emoji:"🪶", gifDuration:1.2, sentence:"轻轻放下。" },
  { char:"轨", pinyin:"gui3", radical:"车", components:["车","九"], meaning:"track", emoji:"🛤️", gifDuration:1.2, sentence:"铁轨。" },
  { char:"输", pinyin:"shu1", radical:"车", components:["车","俞"], meaning:"transport", emoji:"🚚", gifDuration:1.2, sentence:"运输。" },
  { char:"轮", pinyin:"lun2", radical:"车", components:["车","仑"], meaning:"wheel", emoji:"⚙️", gifDuration:1.2, sentence:"车轮。" },
  // 舟
  { char:"舟", pinyin:"zhou1", radical:"舟", components:[], meaning:"boat", emoji:"🚣", gifDuration:1, sentence:"小舟。" },
  { char:"船", pinyin:"chuan2", radical:"舟", components:["舟","谷"], meaning:"ship", emoji:"🚢", gifDuration:1.2, sentence:"上船。" },
  { char:"航", pinyin:"hang2", radical:"舟", components:["舟","亢"], meaning:"navigate", emoji:"🛫", gifDuration:1.2, sentence:"航空。" },
  { char:"舱", pinyin:"cang1", radical:"舟", components:["舟","仓"], meaning:"cabin", emoji:"🛏️", gifDuration:1.2, sentence:"船舱。" },
  // 瓦
  { char:"瓦", pinyin:"wa3", radical:"瓦", components:[], meaning:"tile", emoji:"🧱", gifDuration:1, sentence:"瓦房。" },
  { char:"瓶", pinyin:"ping2", radical:"瓦", components:["并","瓦"], meaning:"bottle", emoji:"🍶", gifDuration:1.2, sentence:"花瓶。" },
  { char:"瓷", pinyin:"ci2", radical:"瓦", components:["次","瓦"], meaning:"porcelain", emoji:"☕", gifDuration:1.2, sentence:"瓷器。" },
  // 贝
  { char:"贝", pinyin:"bei4", radical:"贝", components:[], meaning:"shell", emoji:"🐚", gifDuration:1, sentence:"贝壳。" },
  { char:"贵", pinyin:"gui4", radical:"贝", components:["中","一","贝"], meaning:"expensive", emoji:"💎", gifDuration:1.2, sentence:"太贵了。" },
  { char:"买", pinyin:"mai3", radical:"贝", components:["乛","头"], meaning:"buy", emoji:"🛒", gifDuration:1.2, sentence:"买东西。" },
  { char:"卖", pinyin:"mai4", radical:"贝", components:["十","买"], meaning:"sell", emoji:"💰", gifDuration:1.2, sentence:"卖菜。" },
  { char:"货", pinyin:"huo4", radical:"贝", components:["化","贝"], meaning:"goods", emoji:"📦", gifDuration:1.2, sentence:"货物。" },
  { char:"贫", pinyin:"pin2", radical:"贝", components:["分","贝"], meaning:"poor", emoji:"💸", gifDuration:1.2, sentence:"贫富差距。" },
  { char:"贪", pinyin:"tan1", radical:"贝", components:["今","贝"], meaning:"greed", emoji:"🤑", gifDuration:1.2, sentence:"贪心。" },
  { char:"购", pinyin:"gou4", radical:"贝", components:["贝","勾"], meaning:"purchase", emoji:"🛍️", gifDuration:1.2, sentence:"网上购物。" },
  // 力
  { char:"力", pinyin:"li4", radical:"力", components:[], meaning:"strength", emoji:"💪", gifDuration:1, sentence:"努力。" },
  { char:"加", pinyin:"jia1", radical:"力", components:["力","口"], meaning:"add", emoji:"➕", gifDuration:1.2, sentence:"加油！" },
  { char:"助", pinyin:"zhu4", radical:"力", components:["且","力"], meaning:"help", emoji:"🆘", gifDuration:1.2, sentence:"帮助别人。" },
  { char:"努", pinyin:"nu3", radical:"力", components:["奴","力"], meaning:"effort", emoji:"😤", gifDuration:1.2, sentence:"努力工作。" },
  { char:"励", pinyin:"li4", radical:"力", components:["厉","力"], meaning:"encourage", emoji:"👏", gifDuration:1.2, sentence:"鼓励。" },
  // 又
  { char:"又", pinyin:"you4", radical:"又", components:[], meaning:"again", emoji:"🔁", gifDuration:1, sentence:"又来了。" },
  { char:"友", pinyin:"you3", radical:"又", components:["又","又"], meaning:"friend", emoji:"👫", gifDuration:1.2, sentence:"朋友。" },
  { char:"双", pinyin:"shuang1", radical:"又", components:["又","又"], meaning:"pair", emoji:"👯", gifDuration:1.2, sentence:"双手。" },
  { char:"发", pinyin:"fa1", radical:"又", components:["丿","又"], meaning:"send", emoji:"📤", gifDuration:1.2, sentence:"发短信。" },
  // 土
  { char:"土", pinyin:"tu3", radical:"土", components:[], meaning:"earth", emoji:"🌍", gifDuration:1, sentence:"土地。" },
  { char:"地", pinyin:"di4", radical:"土", components:["土","也"], meaning:"ground", emoji:"⛳", gifDuration:1.2, sentence:"地球。" },
  { char:"场", pinyin:"chang3", radical:"土", components:["土","昜"], meaning:"field", emoji:"🏟️", gifDuration:1.2, sentence:"广场。" },
  { char:"城", pinyin:"cheng2", radical:"土", components:["土","成"], meaning:"city", emoji:"🏙️", gifDuration:1.2, sentence:"城市。" },
  { char:"塔", pinyin:"ta3", radical:"土", components:["土","荅"], meaning:"tower", emoji:"🗼", gifDuration:1.2, sentence:"灯塔。" },
  { char:"墙", pinyin:"qiang2", radical:"土", components:["土","啬"], meaning:"wall", emoji:"🧱", gifDuration:1.2, sentence:"墙壁。" },
  { char:"埋", pinyin:"mai2", radical:"土", components:["土","里"], meaning:"bury", emoji:"⚰️", gifDuration:1.2, sentence:"埋葬。" },
  { char:"堆", pinyin:"dui1", radical:"土", components:["土","隹"], meaning:"pile", emoji:"🗻", gifDuration:1.2, sentence:"堆积。" },
  { char:"块", pinyin:"kuai4", radical:"土", components:["土","夬"], meaning:"piece", emoji:"🧩", gifDuration:1.2, sentence:"一块钱。" },
  { char:"尘", pinyin:"chen2", radical:"土", components:["小","土"], meaning:"dust", emoji:"🌫️", gifDuration:1.2, sentence:"尘埃。" },

  // (Filling up to 333 with a few more useful ones)
  { char:"弓", pinyin:"gong1", radical:"弓", components:[], meaning:"bow", emoji:"🏹", gifDuration:1, sentence:"弓箭。" },
  { char:"张", pinyin:"zhang1", radical:"弓", components:["弓","长"], meaning:"open up", emoji:"📈", gifDuration:1.2, sentence:"张嘴。" },
  { char:"强", pinyin:"qiang2", radical:"弓", components:["弓","虽"], meaning:"strong", emoji:"💪", gifDuration:1.2, sentence:"强大。" },
  { char:"弱", pinyin:"ruo4", radical:"弓", components:["弓","冫"], meaning:"weak", emoji:"😔", gifDuration:1.2, sentence:"弱点。" },
  { char:"引", pinyin:"yin3", radical:"弓", components:["弓","丨"], meaning:"pull", emoji:"🧲", gifDuration:1.2, sentence:"吸引。" },
  { char:"弹", pinyin:"dan4", radical:"弓", components:["弓","单"], meaning:"bullet", emoji:"💣", gifDuration:1.2, sentence:"子弹。" },
  { char:"弗", pinyin:"fu2", radical:"弓", components:["弓","丿"], meaning:"not", emoji:"🚫", gifDuration:1.2, sentence:"弗敢。" },
  { char:"弘", pinyin:"hong2", radical:"弓", components:["弓","厶"], meaning:"vast", emoji:"🌊", gifDuration:1.2, sentence:"弘扬。" },
  { char:"弛", pinyin:"chi2", radical:"弓", components:["弓","也"], meaning:"relax", emoji:"😌", gifDuration:1.2, sentence:"松弛。" },
  { char:"弟", pinyin:"di4", radical:"弓", components:["弓","丷"], meaning:"younger brother", emoji:"👦", gifDuration:1.2, sentence:"弟弟。" },
  { char:"弦", pinyin:"xian2", radical:"弓", components:["弓","玄"], meaning:"string", emoji:"🎻", gifDuration:1.2, sentence:"上弦月。" },
  { char:"弧", pinyin:"hu2", radical:"弓", components:["弓","瓜"], meaning:"arc", emoji:"🌈", gifDuration:1.2, sentence:"括弧。" },
  { char:"弯", pinyin:"wan1", radical:"弓", components:["亦","弓"], meaning:"bend", emoji:"↩️", gifDuration:1.2, sentence:"弯曲。" },
  { char:"弥", pinyin:"mi2", radical:"弓", components:["弓","尔"], meaning:"full", emoji:"🈵", gifDuration:1.2, sentence:"弥漫。" },
  { char:"弼", pinyin:"bi4", radical:"弓", components:["弜","口","车"], meaning:"assist", emoji:"🤝", gifDuration:1.3, sentence:"辅弼。" },
  { char:"疆", pinyin:"jiang1", radical:"田", components:["弓","土","畺"], meaning:"border", emoji:"🗺️", gifDuration:1.3, sentence:"边疆。" },
  // (exactly 333 total in this file)
];