export const keywords = [
  { en: "Protest", ml: "Protes", id: "Unjuk rasa", tl: "Protesta", kr: "시위", zh: "抗议", jp: "抗議" },
  { en: "Riot", ml: "Rusuhan", id: "Kerusuhan", tl: "Kaguluhan", kr: "폭동", zh: "暴乱", jp: "暴動" },
  { en: "Clash", ml: "Pertembungan", id: "Bentrokan", tl: "Sagupaan", kr: "충돌", zh: "冲突", jp: "衝突" },
  { en: "Standoff", ml: "Sekatan", id: "Barikade", tl: "Barikada", kr: "대치", zh: "对峙", jp: "対峙" },
  { en: "Barricade", ml: "Barikade", id: "Barikade", tl: "Barikada", kr: "바리케이드", zh: "路障", jp: "封鎖" },
  { en: "Demonstration", ml: "Demonstrasi", id: "Demonstrasi", tl: "Demonstrasyon", kr: "데모", zh: "游行", jp: "デモ" },
  { en: "Shooter", ml: "Penembak", id: "Penembak", tl: "Bumaril", kr: "총격범", zh: "枪手", jp: "銃撃" },
  { en: "Explosion", ml: "Letupan", id: "Ledakan", tl: "Pagsabog", kr: "폭발", zh: "爆炸", jp: "爆発" },
  { en: "Lockdown", ml: "Perintah berkurung", id: "Penguncian", tl: "Lockdown", kr: "봉쇄", zh: "封锁", jp: "封鎖" },
  { en: "Evacuation", ml: "Pemindahan", id: "Evakuasi", tl: "Paglikas", kr: "대피", zh: "疏散", jp: "避難" },
  { en: "Blast", ml: "Letusan", id: "Ledakan", tl: "Sabog", kr: "폭파", zh: "炸弹", jp: "爆破" },
  { en: "Troop movement", ml: "Pergerakan tentera", id: "Pergerakan pasukan", tl: "Pagkilos ng hukbo", kr: "군대 이동", zh: "部队调动", jp: "部隊移動" },
  { en: "Convoy", ml: "Konvoi", id: "Konvoi", tl: "Konboy", kr: "호송대", zh: "车队", jp: "車列" },
  { en: "Deployment", ml: "Penempatan", id: "Pengerahan", tl: "Deployment", kr: "배치", zh: "部署", jp: "展開" },
  { en: "Exercise", ml: "Latihan", id: "Latihan", tl: "Pagsasanay", kr: "훈련", zh: "演习", jp: "演習" },
  { en: "Mobilization", ml: "Mobilisasi", id: "Mobilisasi", tl: "Mobilisasyon", kr: "동원", zh: "动员", jp: "動員" },
  { en: "Earthquake", ml: "Gempa bumi", id: "Gempa bumi", tl: "Lindol", kr: "지진", zh: "地震", jp: "地震" },
  { en: "Tsunami", ml: "Tsunami", id: "Tsunami", tl: "Tsunami", kr: "쓰나미", zh: "海啸", jp: "津波" },
  { en: "Wildfire", ml: "Kebakaran hutan", id: "Kebakaran hutan", tl: "Wildfire", kr: "산불", zh: "山火", jp: "山火事" },
  { en: "Flood", ml: "Banjir", id: "Banjir", tl: "Baha", kr: "홍수", zh: "洪水", jp: "洪水" },
  { en: "Landfall", ml: "Daratan", id: "Daratan", tl: "Landfall", kr: "상륙", zh: "登陆", jp: "上陸" },
  { en: "Typhoon", ml: "Taufan", id: "Topan", tl: "Bagyo", kr: "태풍", zh: "台风", jp: "台風" },
  { en: "Chemical leak", ml: "Kebocoran kimia", id: "Kebocoran kimia", tl: "Kagas na kemikal", kr: "화학 유출", zh: "化学泄漏", jp: "化学漏洩" },
  { en: "Radiation", ml: "Radiasi", id: "Radiasi", tl: "Radyasyon", kr: "방사능", zh: "辐射", jp: "放射能" },
  { en: "Hazmat", ml: "Hazmat", id: "Hazmat", tl: "Hazmat", kr: "유해 물질", zh: "危险品", jp: "危険物" },
  { en: "Spill", ml: "Tumpahan", id: "Tumpahan", tl: "Tapon", kr: "유출", zh: "溢出", jp: "流出" }
];

export const sources = [
  // --- GLOBAL NODES ---
  { region: "Global", name: "USGS Earthquake Tracker", type: "Seismic Map", url: "https://earthquake.usgs.gov/earthquakes/map/" },
  { region: "Global", name: "NASA FIRMS", type: "Thermal Satellite / Fire", url: "https://firms.modaps.eosdis.nasa.gov/map/" },
  { region: "Global", name: "Liveuamap World", type: "Live Geopolitical Incidents", url: "https://liveuamap.com/" },
  { region: "Global", name: "NetBlocks Indicator", type: "Internet Outages & Censorship", url: "https://netblocks.org/" },
  { region: "Global", name: "ADS-B Exchange", type: "Unfiltered Military/Civil Flight Tracking", url: "https://www.adsbexchange.com/" },
  { region: "Global", name: "MarineTraffic", type: "Global AIS Vessel Transmissions", url: "https://www.marinetraffic.com/" },
  { region: "Global", name: "Zoom Earth", type: "Real-time High-Res Weather Satellite", url: "https://zoom.earth/" },
  { region: "Global", name: "GDACS Portal", type: "Global Disaster Alert Coordination System", url: "https://www.gdacs.org/" },
  { region: "Global", name: "Ventusky Systems", type: "Interactive Atmospheric Data Arrays", url: "https://www.ventusky.com/" },
  { region: "Global", name: "Crisis24 Risk", type: "Geopolitical Intelligence Bulletins", url: "https://crisis24.garda.com/" },

  // --- REGIONAL NORTH / EAST ASIA ---
  { region: "Japan", name: "JMA Agency", type: "Official Meteorological & Seismic Warnings", url: "https://www.jma.go.jp/" },
  { region: "Japan", name: "NHK World-Japan", type: "National Broadcaster Live Stream & Alerts", url: "https://www3.nhk.or.jp/nhkworld/" },
  { region: "Japan", name: "Nikkei Asia", type: "Macroeconomic & Regional Security Intel", url: "https://asia.nikkei.com/" },
  { region: "Japan", name: "Japan Today", type: "Domestic English-language Wire", url: "https://japantoday.com/" },
  { region: "Japan", name: "The Japan Times", type: "Independent National News Desk", url: "https://www.japantimes.co.jp/" },
  { region: "Japan", name: "UN_NERV Archive", type: "Automated High-Speed Disaster Feed", url: "https://twitter.com/UN_NERV" },
  { region: "Japan", name: "TEPCO Grid Monitor", type: "Critical Electrical Infrastructure Outages", url: "https://www.tepco.co.jp/en/" },
  { region: "China", name: "SCMP Hong Kong", type: "Regional Cross-Border Intelligence Coverage", url: "https://www.scmp.com/" },
  { region: "China", name: "What's on Weibo", type: "Social Listening & Censorship Tracking", url: "https://www.whatsonweibo.com/" },
  { region: "China", name: "Global Times Wire", type: "State-Aligned Geopolitical Perspectives", url: "https://www.globaltimes.cn/" },
  { region: "China", name: "Sixth Tone", type: "Domestic Social Dynamic Reports", url: "https://www.sixthtone.com/" },
  { region: "HK", name: "HK Observatory", type: "Subtropical Cyclone & Severe Maritime Weather", url: "https://www.hko.gov.hk/" },
  { region: "HK", name: "HK Free Press", type: "Independent Domestic Legal/Civil Wire", url: "https://hongkongfp.com/" },
  { region: "Taiwan", name: "CWA Taiwan", type: "Central Weather Administration Portal", url: "https://www.cwa.gov.tw/V8/E/" },
  { region: "Taiwan", name: "Focus Taiwan", type: "English-Language National Incident Wire", url: "https://focustaiwan.tw/" },

  // --- REGIONAL SOUTHEAST ASIA ---
  { region: "Philippines", name: "PAGASA Weather", type: "National Tropical Cyclonic Monitoring", url: "https://www.pagasa.dost.gov.ph/" },
  { region: "Philippines", name: "PHIVOLCS Volcanic", type: "Seismology & Active Magmatic Monitoring", url: "https://www.phivolcs.dost.gov.ph/" },
  { region: "Philippines", name: "Rappler News", type: "Independent National Civil & Safety Wire", url: "https://www.rappler.com/" },
  { region: "Indonesia", name: "BMKG Indonesia", type: "National Seismic, Tsunamigenic & Weather Hub", url: "https://www.bmkg.go.id/" },
  { region: "Indonesia", name: "Jakarta Post", type: "Primary Domestic English Broadcaster", url: "https://www.thejakartapost.com/" },
  { region: "Singapore", name: "CNA News Desk", type: "Pan-Asian Regional Intelligence Bureau", url: "https://www.channelnewsasia.com/" },
  { region: "Singapore", name: "Straits Times", type: "National Security & Geopolitical Tracker", url: "https://www.straitstimes.com/" },
  { region: "Malaysia", name: "The Star Desk", type: "National Incident & Civil Alert Wire", url: "https://www.thestar.com.my/" },
  { region: "Malaysia", name: "Bernama News", type: "Official State Press Agency Feed", url: "https://www.bernama.com/" },
  { region: "Vietnam", name: "VNExpress English", type: "National Civil & Infrastructure Update Stream", url: "https://e.vnexpress.net/" },
  { region: "Thailand", name: "Bangkok Post", type: "Primary National Security & Civil Incident Desk", url: "https://www.bangkokpost.com/" },

  // --- ADVANCED VERIFICATION TOOLKITS ---
  { region: "Tools", name: "IntelTechniques", type: "Advanced Frameworks & OSINT Search Arrays", url: "https://inteltechniques.com/" },
  { region: "Tools", name: "Bellingcat Toolkit", type: "Geospatial & Document Verification Indexes", url: "https://www.bellingcat.com/resources/" },
  { region: "Tools", name: "Epieos Investigator", type: "Reverse Email & Digital Identity Footprinting", url: "https://epieos.com/" },
  { region: "Tools", name: "InVID Verification", type: "Video Fragmentation & Metadata Authentication", url: "https://www.invid-project.eu/" },
  { region: "Tools", name: "SunCalc Terminal", type: "Chronological Shadow & Horizon Angle Calculator", url: "https://www.suncalc.org/" },
  { region: "Tools", name: "Wayback Machine", type: "Cached Internet Archive & Purged Data Recovery", url: "https://archive.org/web/" },
  { region: "Tools", name: "TinEye Engine", type: "Neural Network Reverse Image Matching", url: "https://tineye.com/" },

  // --- SOCIAL WIRE PLUGINS ---
  { region: "Social", name: "X Pro Terminal", type: "Multi-Column Persistent Real-Time Keyword Streams", url: "https://tweetdeck.twitter.com/" },
  { region: "Social", name: "Reddit Search Hub", type: "Crowdsourced Hyper-Local Incident Aggregator", url: "https://redditsearch.io/" },
  { region: "Social", name: "TG Analytics", type: "Public Channel Indexer & Message Tracker", url: "https://telemetr.io/" },

  // --- DOMAIN-SPECIFIC NODES ---
  { region: "Aviation", name: "FlightRadar24 Live", type: "Global MLAT/ADS-B Aircraft Telemetry Map", url: "https://www.flightradar24.com/" },
  { region: "Aviation", name: "SkyVector Charts", type: "Aeronautical VFR/IFR Flight Planning Grid", url: "https://skyvector.com/" },
  { region: "Maritime", name: "FleetMon Tracking", type: "Vessel Database & Real-Time Position Logs", url: "https://www.fleetmon.com/" },
  { region: "Cyber", name: "Shodan Intelligence", type: "Global Internet-Connected Hardware Directory", url: "https://www.shodan.io/" },
  { region: "Cyber", name: "Censys Host Engine", type: "Attack Surface & Attack Infrastructure Map", url: "https://censys.io/" },
  { region: "Cyber", name: "HaveIBeenPwned", type: "Corporate Data Breach & Credentials Index", url: "https://haveibeenpwned.com/" },
  { region: "Security", name: "Insignia Strategies", type: "Asymmetric Threat & Geopolitical Assessment", url: "https://insigniastrat.com/" },
  { region: "Security", name: "Control Risks Grid", type: "Macro Security Risks & Operational Vulnerabilities", url: "https://www.controlrisks.com/" },
  { region: "Security", name: "Janes Information Services", type: "Military Hardware & State Defense Intelligence", url: "https://www.janes.com/" },

  // --- STRATEGIC LOGISTICS & TRANSIT ---
  { region: "Safety", name: "US Travel Advisories", type: "State Dept Threat & Civil Instability Map", url: "https://travel.state.gov/" },
  { region: "Safety", name: "Smart Traveler STEP", type: "Consular Crisis Deployment Registry", url: "https://step.state.gov/" },
  { region: "Australia", name: "BOM Australia", type: "National Bureau of Meteorology Warnings", url: "http://www.bom.gov.au/" },
  { region: "Australia", name: "ABC News Wire", type: "National Crisis & Emergency Incident Stream", url: "https://www.abc.net.au/news" },
  { region: "Emergency", name: "Red Cross Incident Mapping", type: "Active Disaster Mitigation & Resource Feeds", url: "https://www.redcross.org/" }
];
