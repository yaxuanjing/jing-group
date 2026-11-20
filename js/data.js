/* ============================================================
   SITE CONTENT DATA  —  双语内容数据（真实素材，来源于 X-MOL 课题组网站）
   修改网站文字，只需编辑本文件的对应字段即可。
   ============================================================ */
const SITE = {
  name: "Green Catalysis for Waste-to-X Lab",
  subtitle: { en: "Green Catalysis & Circular Carbon Resources", zh: "绿色催化与资源循环" },
  affiliation: { en: "Nanjing University", zh: "南京大学" },
  institute: { en: "Institute of Environmental Health, Nanjing University", zh: "南京大学环境与健康研究院" },
  email: "yaxuan.jing@nju.edu.cn",
  address: { en: "Institute of Environmental Health, Nanjing University, Nanjing, China", zh: "南京大学环境与健康研究院，中国南京" }
};

/* 研究方向 */
const RESEARCH = [
  {
    en: { t: "Precision Catalysis & Surface Chemistry for Carbon Neutrality", d: "Precise catalyst design and interrogation of surface/interface chemistry toward carbon-neutral chemical transformations.", tag: "CARBON NEUTRALITY" },
    zh: { t: "面向碳中和的精准催化与表界面化学", d: "面向碳中和目标，开展精准催化剂设计与表界面化学规律的深入研究。", tag: "碳中和" },
    icon: "flask", img: "assets/event_group_2025.jpg"
  },
  {
    en: { t: "Environmental Functional Materials & Multifunctional Catalysts", d: "Design of environmental functional materials and multifunctional catalytic systems for complex reaction networks.", tag: "MATERIALS DESIGN" },
    zh: { t: "环境功能材料与多功能催化剂设计", d: "面向复杂反应网络，设计环境功能材料与多功能催化体系。", tag: "材料设计" },
    icon: "microscope", img: "assets/event_dinner_2025.jpg"
  },
  {
    en: { t: "Green Cycling of Waste Carbon Resources (Plastics & Biomass)", d: "Converting waste plastics and biomass into fuels, chemicals and advanced materials through green catalytic processes.", tag: "CIRCULAR ECONOMY" },
    zh: { t: "废弃碳资源（塑料、生物质）的绿色循环", d: "通过绿色催化过程将废塑料、生物质转化为燃料、化学品与先进功能材料。", tag: "循环经济" },
    icon: "recycle", img: "assets/event_welcome_2025.jpg"
  },
  {
    en: { t: "Waste-to-X Conversion through Frontier Interdisciplinary Approaches", d: "Frontier interdisciplinary strategies for the resource utilization of emerging contaminants and waste carbon resources.", tag: "INTERDISCIPLINARY" },
    zh: { t: "基于前沿交叉的废弃资源转化（新污染物资源化）", d: "以前沿交叉方法推动新污染物与废弃碳资源的资源化转化。", tag: "前沿交叉" },
    icon: "sun", img: "assets/event_group_2024.jpg"
  }
];

/* 团队成员 —— 名单来自 X-MOL 新闻中出现的真实成员 */
const MEMBERS = [
  { name: "Yaxuan Jing 景亚轩", role: { en: "Principal Investigator", zh: "课题组长 / 教授" }, meta: { en: "Green catalysis & waste-to-X", zh: "绿色催化与废弃资源转化" }, color: "#1e6c93", initials: "YJ", type: "pi", photo: "assets/pi_jing.jpg" },
  { name: "Hongshun Ran 冉宏顺", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Plastic hydrogenolysis", zh: "塑料氢解" }, year: "2023", color: "#226e93", initials: "RS" },
  { name: "Tao Guo 郭涛", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Polyolefin conversion", zh: "聚烯烃转化" }, year: "2023", color: "#2b7fa8", initials: "GT" },
  { name: "Xinyang Sun 孙鑫阳", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Ru catalyst / plastic hydrogenolysis", zh: "钌催化剂 / 塑料氢解" }, year: "2024", color: "#00acc1", initials: "SX" },
  { name: "Tingxi Chen 陈庭熹", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Oxidative degradation of polyethylene", zh: "聚乙烯氧化降解" }, year: "2024", color: "#3f8fb5", initials: "CT" },
  { name: "Fan Yuan 袁繁", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Oxidative upcycling", zh: "氧化升级利用" }, year: "2024", color: "#4aa3c7", initials: "YF" },
  { name: "Mengying Zheng 郑梦颖", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "PFAS upcycling", zh: "PFAS 资源化" }, year: "2024", color: "#166b8c", initials: "ZM" },
  { name: "Yifan Liu 刘逸凡", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "IC wastewater / catalyst supply chain", zh: "集成电路废水 / 催化剂供应链" }, year: "2024", color: "#00838f", initials: "LY" },
  { name: "Wenyi Ni 倪雯怡", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Hydrogen spillover", zh: "氢溢流" }, year: "2025", color: "#2b7fa8", initials: "NW" },
  { name: "Shuo Zhang 张烁", role: { en: "Ph.D. Student", zh: "博士研究生" }, meta: { en: "Catalysis", zh: "催化" }, year: "2025", color: "#226e93", initials: "ZS" }
];

const ALUMNI = [
  { name: { en: "Dr. Wenyi Ni", zh: "倪雯怡 博士" }, info: { en: "Ph.D. 2026 · Hydrogen spillover", zh: "2026 届博士 · 氢溢流" } },
  { name: { en: "Dr. Shuo Zhang", zh: "张烁 博士" }, info: { en: "Ph.D. 2026 · Catalysis", zh: "2026 届博士 · 催化" } }
];

/* 论文 —— 真实发表记录（来源：PI 主页 Selected Publications + CrossRef 标题） */
const PUBLICATIONS = {
  2026: [
    { journal: "Angew. Chem.", authors: "Jing Y. et al.", title: { en: "Accepted manuscript (2026)", zh: "正式接收（2026）" }, meta: "Angew. Chem. Int. Ed. 2026, Accepted", highlight: true },
    { journal: "Angew. Chem.", authors: "Zheng M., Jing Y.*", title: { en: "Unlocking the Catalytic Potential of PFAS: Upcycling Forever Chemicals into Effective Catalysts", zh: "解锁“永久化学品”PFAS 的催化潜力：将持久性污染物转化为高效催化剂" }, meta: "Angew. Chem. Int. Ed. 2026, DOI: 10.1002/anie.6397678", highlight: true, doi: "10.1002/anie.6397678" },
    { journal: "Nat. Commun.", authors: "Liu Y., Jing Y.*", title: { en: "Integrating integrated circuit wastewater into the metal catalyst supply chain", zh: "将集成电路废水纳入金属催化剂供应链" }, meta: "Nat. Commun. 2026, DOI: 10.1038/s41467-026-70743-2", highlight: true, doi: "10.1038/s41467-026-70743-2" },
    { journal: "Nat. Commun.", authors: "Ni W., Ran H., Jing Y.*", title: { en: "Stepwise hydrogen spillover–engineered synergistic sites enable near-quantitative conversion of waste PET to p-xylene", zh: "逐步氢溢流构筑协同位点，实现废 PET 近乎定量转化为对二甲苯" }, meta: "Nat. Commun. 2026, 17, 2128 · DOI: 10.1038/s41467-026-68990-4", highlight: true, doi: "10.1038/s41467-026-68990-4" },
    { journal: "EES", authors: "Jing Y. et al.", title: { en: "Recent advances in green catalysis for waste-to-X conversions", zh: "废弃资源转化绿色催化研究进展" }, meta: "Energy Environ. Sci. 2026, 19, 3910–3923", highlight: true },
    { journal: "ACS Catal.", authors: "Guo T., Jing Y.*", title: { en: "Engineering Interfacial Compatibility and Dynamic Active Hydrogen Pools to Accelerate Polyolefin Hydrogenolysis", zh: "调控界面相容性与动态活性氢池促进聚烯烃氢解" }, meta: "ACS Catal. 2026, 16, 9150–9162 · DOI: 10.1021/acscatal.6c00553", highlight: false, doi: "10.1021/acscatal.6c00553" },
    { journal: "ACS Catal.", authors: "Sun X., Jing Y.*", title: { en: "In Situ Hydrogen Utilization in Plastic Waste Recycling and Upcycling", zh: "废弃塑料催化转化中的原位氢利用" }, meta: "ACS Catal. 2026 · DOI: 10.1021/acscatal.6c05704", highlight: false, doi: "10.1021/acscatal.6c05704" },
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Accepted manuscript (2026)", zh: "正式接收（2026）" }, meta: "ACS Catal. 2026, Accepted", highlight: false }
  ],
  2025: [
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Synergistic catalysis for recycling and upcycling of plastics", zh: "协同催化用于塑料回收与升级利用" }, meta: "ACS Catal. 2025, 15, 21152–21185 · DOI: 10.1021/acscatal.5c00984", highlight: true, doi: "10.1021/acscatal.5c00984" },
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Surface and interface properties of metal species for waste plastic hydroconversion", zh: "废塑料加氢转化中金属物种的表面与界面性质" }, meta: "ACS Catal. 2025, 15, 15670–15697 · DOI: 10.1021/acscatal.5c06816", highlight: false, doi: "10.1021/acscatal.5c06816" },
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Catalytic conversion of waste plastics: recent progress and perspectives", zh: "废塑料催化转化研究进展与展望" }, meta: "ACS Catal. 2025, 15, 8551–8585", highlight: false },
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Catalytic upcycling of plastics via tandem strategies", zh: "串联催化策略用于塑料升级利用" }, meta: "ACS Catal. 2025, 15, 8337–8344", highlight: false }
  ],
  2023: [
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Catalytic conversion of polyolefins over designed catalysts", zh: "设计催化剂上聚烯烃的催化转化" }, meta: "ACS Catal. 2023, 13, 13034–13042", highlight: false }
  ],
  2022: [
    { journal: "Acc. Chem. Res.", authors: "Jing Y. et al.", title: { en: "Accounts of Chemistry Research (2022)", zh: "化学研究述评（2022）" }, meta: "Acc. Chem. Res. 2022, 55, 1301–1312", highlight: true },
    { journal: "Nat. Rev. Chem.", authors: "Jing Y. et al.", title: { en: "Nature Reviews Chemistry (2022)", zh: "自然·化学评论（2022）" }, meta: "Nat. Rev. Chem. 2022, 6, 635–652", highlight: true },
    { journal: "ACS Catal.", authors: "Jing Y. et al.", title: { en: "Heterogeneous catalysis for sustainable chemistry", zh: "面向可持续化学的多相催化" }, meta: "ACS Catal. 2022, 12, 10690–10699", highlight: false }
  ],
  2021: [
    { journal: "Angew. Chem.", authors: "Jing Y. et al.", title: { en: "Angewandte Chemie International Edition (2021)", zh: "德国应用化学（2021）" }, meta: "Angew. Chem. Int. Ed. 2021, 60, 5527–5535", highlight: true }
  ],
  2019: [
    { journal: "Chem", authors: "Jing Y. et al.", title: { en: "Chem (2019)", zh: "Chem（2019）" }, meta: "Chem 2019, 5, 2520–2546", highlight: false }
  ]
};

/* 新闻 —— 真实新闻（来源：X-MOL 课题组新闻） */
const NEWS = [
  { d: "15", m: "Oct", y: "2026", badge: { en: "AWARDS", zh: "获奖" }, title: { en: "Congratulations to Hongshun Ran on receiving the Sun Xiangzhen Scholarship!", zh: "祝贺冉宏顺获得孙祥祯奖学金！" }, desc: { en: "Recognition of outstanding academic performance.", zh: "表彰其优异的学业表现。" } },
  { d: "15", m: "Oct", y: "2026", badge: { en: "AWARDS", zh: "获奖" }, title: { en: "Congratulations to Tao Guo, Fan Yuan, Mengying Zheng, Tingxi Chen and Xinyang Sun on the Yingcai Scholarship!", zh: "祝贺郭涛、袁繁、郑梦颖、陈庭熹、孙鑫阳获得英才奖学金！" }, desc: { en: "Five group members received the prestigious Yingcai Scholarship.", zh: "五名课题组成员荣获英才奖学金。" } },
  { d: "15", m: "Oct", y: "2026", badge: { en: "AWARDS", zh: "获奖" }, title: { en: "Congratulations to Yifan Liu on receiving the National Scholarship!", zh: "祝贺刘逸凡获得国家奖学金！" }, desc: { en: "A top national-level scholarship for graduate students.", zh: "国家级研究生最高荣誉奖学金。" } },
  { d: "30", m: "Sep", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Chinese Journal of Catalysis: Support-independent Ru catalyst electronic structure regulation for efficient plastic hydrogenolysis — Congratulations to Xinyang Sun!", zh: "Chinese Journal of Catalysis：载体非依赖的 Ru 催化剂电子结构调控实现高效塑料氢解——祝贺孙鑫阳！" }, desc: { en: "New strategy for regulating Ru catalyst electronic structure in plastic hydrogenolysis.", zh: "塑料氢解中钌催化剂电子结构调控新策略。" } },
  { d: "28", m: "Sep", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "ACS Catalysis: In situ hydrogen utilization in catalytic conversion of waste plastics — Congratulations to Xinyang Sun!", zh: "ACS Catalysis：废弃塑料催化转化中的原位氢利用——祝贺孙鑫阳！" }, desc: { en: "Published in ACS Catalysis on in situ hydrogen utilization.", zh: "关于原位氢利用的研究发表于 ACS Catalysis。" } },
  { d: "24", m: "Sep", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Angew: Frustrated Lewis acid–base pairs drive oxidative degradation of polyethylene — Congratulations to Tingxi Chen and Fan Yuan!", zh: "Angew：受阻路易斯酸碱对驱动聚乙烯氧化降解——祝贺陈庭熹、袁繁！" }, desc: { en: "Novel FLP strategy for polyethylene oxidative degradation.", zh: "受阻路易斯酸碱对驱动聚乙烯氧化降解的新策略。" } },
  { d: "16", m: "Sep", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Angew: Unlocking the catalytic potential of \"forever chemicals\" PFAS — Congratulations to Mengying Zheng!", zh: "Angew：解锁“永久化学品”废弃 PFAS 的催化潜力——祝贺郑梦颖！" }, desc: { en: "Turning persistent PFAS waste into effective catalysts.", zh: "将持久性 PFAS 废弃物转化为高效催化剂。" } },
  { d: "21", m: "May", y: "2026", badge: { en: "ACTIVITIES", zh: "学术活动" }, title: { en: "Prof. Xiaohao Liu from Jiangnan University visited our group", zh: "江南大学刘小浩教授应邀来访" }, desc: { en: "An invited visit and academic exchange.", zh: "受邀来访并开展学术交流。" } },
  { d: "21", m: "May", y: "2026", badge: { en: "ACTIVITIES", zh: "学术活动" }, title: { en: "Prof. Qiming Sun from Soochow University visited our group", zh: "苏州大学孙启明教授应邀来访" }, desc: { en: "An invited visit and academic exchange.", zh: "受邀来访并开展学术交流。" } },
  { d: "21", m: "May", y: "2026", badge: { en: "ACTIVITIES", zh: "学术活动" }, title: { en: "Congratulations to Wenyi Ni and Shuo Zhang on successfully defending their theses!", zh: "祝贺倪雯怡、张烁顺利通过毕业答辩！" }, desc: { en: "Two Ph.D. students successfully defended their dissertations.", zh: "两名博士生顺利通过学位论文答辩。" } },
  { d: "11", m: "May", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Energy Environ. Sci: Direct hydrogenolysis of mixed plastics into liquid alkanes — Congratulations to Hongshun Ran!", zh: "Energy Environ. Sci：混合塑料直接氢解为液态烷烃——祝贺冉宏顺！" }, desc: { en: "Direct conversion of mixed plastic waste into liquid alkanes.", zh: "混合废塑料直接转化为液态烷烃。" } },
  { d: "23", m: "Apr", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "ACS Catalysis: Interfacial compatibility and dynamic active hydrogen pools promote polyolefin hydrogenolysis — Congratulations to Tao Guo!", zh: "ACS Catalysis：调控界面相容性与动态活性氢池促进聚烯烃氢解——祝贺郭涛！" }, desc: { en: "Published in ACS Catalysis on polyolefin hydrogenolysis.", zh: "关于聚烯烃氢解的研究发表于 ACS Catalysis。" } },
  { d: "18", m: "Mar", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Our Nature Communications work featured by Science Magazine (Scienmag)", zh: "我们发表在 Nature Communications 的成果获国际科研媒体 Science Magazine (Scienmag) 专题报道" }, desc: { en: "International research media coverage of our work.", zh: "研究成果获国际知名科研媒体专题报道。" } },
  { d: "15", m: "Mar", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Nat Commun: Integrating IC wastewater into the metal catalyst supply chain — Congratulations to Yifan Liu!", zh: "Nat Commun：将集成电路废水纳入金属催化剂供应链——祝贺刘逸凡！" }, desc: { en: "Turning integrated circuit wastewater into a catalyst resource.", zh: "将集成电路废水转化为催化剂资源。" } },
  { d: "28", m: "Jan", y: "2026", badge: { en: "PUBLICATION", zh: "论文发表" }, title: { en: "Nat Commun: Stepwise hydrogen spillover strategy for synergistic sites in waste plastic degradation — Congratulations to Wenyi Ni and Hongshun Ran!", zh: "Nat Commun：逐步氢溢流策略构筑协同位点助力废弃塑料降解——祝贺倪雯怡、冉宏顺！" }, desc: { en: "Stepwise hydrogen spillover enables synergistic catalytic sites.", zh: "逐步氢溢流策略构筑协同催化位点。" } }
];

/* 组内活动（真实照片，已本地化） */
const EVENTS = [
  { img: "assets/event_group_2025.jpg", title: { en: "Group Photo · 2025-11-15", zh: "课题组合影 · 2025-11-15" } },
  { img: "assets/event_welcome_2025.jpg", title: { en: "Welcome Dinner · 2025-09-09", zh: "课题组迎新聚餐 · 2025-09-09" } },
  { img: "assets/event_dinner_2025.jpg", title: { en: "Group Dinner · 2025-01-20", zh: "课题组聚餐 · 2025-01-20" } },
  { img: "assets/event_newyear_2024.jpg", title: { en: "New Year Cake · 2024-12-31", zh: "共享蛋糕，喜迎元旦 · 2024-12-31" } },
  { img: "assets/event_pingpong_2024.jpg", title: { en: "Ping-pong Friendly Match · 2024-11-20", zh: "乒乓球师生联谊赛 · 2024-11-20" } },
  { img: "assets/event_group_2024.jpg", title: { en: "Group Photo · 2024-10-15", zh: "课题组合影 · 2024-10-15" } },
  { img: "assets/event_welcome_2024.jpg", title: { en: "Welcome Dinner · 2024-09-09", zh: "课题组迎新聚餐 · 2024-09-09" } },
  { img: "assets/event_dinner_2024.jpg", title: { en: "Group Dinner · 2024-08-26", zh: "课题组聚餐 · 2024-08-26" } }
];

/* 招聘岗位 —— 来源于课题组招生介绍 */
const OPENINGS = [
  { title: { en: "Ph.D. & M.Sc. Students", zh: "博士 / 硕士研究生" }, desc: { en: "Our group is looking for motivated students in catalysis, environment, chemistry, materials and energy. Fully funded with opportunities for domestic and international conferences.", zh: "热忱欢迎催化、环境、化学、材料、能源等相关专业背景的同学加入。课题组经费充足、设备一流，为每名学生提供参加国内外会议的机会。" }, items: { en: ["Waste plastics & biomass conversion", "Green catalytic materials & technology", "Surface/interface chemistry", "Emerging contaminant resource utilization"], zh: ["废弃塑料与生物质转化", "绿色催化材料与技术", "表界面化学", "新污染物资源化"] } },
  { title: { en: "Postdoctoral Fellows", zh: "博士后" }, desc: { en: "Positions available for researchers with a background in heterogeneous catalysis, green chemistry or reaction engineering. Support for outstanding candidates to apply for talent programs.", zh: "招聘具有多相催化、绿色化学或反应工程背景的研究人员，支持优秀申请人申报各类人才计划。" }, items: { en: ["Ph.D. in chemistry or related fields", "Strong publication record", "Independent research capability"], zh: ["化学或相关专业博士学位", "良好的发表记录", "独立科研能力"] } }
];

/* 资源链接 —— 真实的课题组与 PI 学术主页 */
const RESOURCES = [
  { title: { en: "X-MOL Group Page", zh: "X-MOL 课题组主页" }, desc: { en: "Our official group website", zh: "课题组官方主页" }, url: "https://www.x-mol.com/groups/jing_yaxuan", icon: "globe" },
  { title: { en: "Google Scholar", zh: "谷歌学术" }, desc: { en: "Prof. Jing's publication profile", zh: "景亚轩教授论文主页" }, url: "https://scholar.google.com/citations?user=w2y0FVIAAAAJ", icon: "search" },
  { title: { en: "ResearchGate", zh: "ResearchGate" }, desc: { en: "Research profile and publications", zh: "研究档案与论文" }, url: "https://www.researchgate.net/profile/Yaxuan-Jing", icon: "book" },
  { title: { en: "ORCID", zh: "ORCID" }, desc: { en: "0000-0002-9747-3044", zh: "0000-0002-9747-3044" }, url: "https://orcid.org/0000-0002-9747-3044", icon: "person" },
  { title: { en: "Twitter / X", zh: "Twitter / X" }, desc: { en: "@JingYaxuan", zh: "@JingYaxuan" }, url: "https://x.com/JingYaxuan", icon: "globe" },
  { title: { en: "Nanjing University", zh: "南京大学" }, desc: { en: "Official university website", zh: "学校官方网站" }, url: "https://www.nju.edu.cn", icon: "building" },
  { title: { en: "Institute of Environmental Health", zh: "环境与健康研究院" }, desc: { en: "Nanjing University", zh: "南京大学环境与健康研究院" }, url: "https://ieh.nju.edu.cn", icon: "building" }
];
