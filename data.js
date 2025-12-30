/**
 * 專案範例資料
 */

const portfolioData = {
  // 個人資訊
  profile: {
    name: "李明",
    title: "全端工程師",
    subtitle: "UI/UX 設計師",
    bio: "我是一位充滿熱情的全端開發工程師，擁有 5+ 年的業界經驗。專注於使用現代 Web 技術創造直觀、高效且無障礙的使用者介面。",
    longBio: "熱愛解決複雜的技術問題，並將使用者體驗放在首位。在前端與後端技術間遊刃有餘，能夠獨立完成從設計到部署的全套流程。",
    email: "hello@example.com",
    phone: "+886 912 345 678",
    location: "台北市",
  },

  // 技能列表
  skills: [
    { category: "前端", items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript"] },
    { category: "後端", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"] },
    { category: "工具 & 平台", items: ["Git", "Docker", "AWS", "Vercel", "Webpack", "Figma"] },
    { category: "其他技能", items: ["Responsive Design", "無障礙設計", "性能優化", "SEO", "DevOps"] },
  ],

  // 作品集
  projects: [
    {
      id: 1,
      title: "互動式儀表板",
      description: "使用 React 與 D3.js 建置的即時數據可視化儀表板，支援深色模式與響應式設計。",
      longDescription: "這個專案展示了如何使用現代 JavaScript 框架與資料視覺化庫來創建高性能的儀表板應用。包含即時資料更新、多種圖表類型與自訂篩選功能。",
      tags: ["React", "D3.js", "Chart", "Real-time"],
      technologies: ["React", "D3.js", "Redux", "Axios", "Chart.js"],
      image: "project-1",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "電商前端應用",
      description: "完整的電商購物平台前端，包含商品列表、購物車、結帳流程及訂單管理。",
      longDescription: "打造的全功能電商應用，整合支付系統、庫存管理與訂單追蹤。具有高度優化的性能與使用者友善的介面。",
      tags: ["JavaScript", "CSS Grid", "API"],
      technologies: ["Vue.js", "Vuex", "Stripe API", "Tailwind CSS", "Webpack"],
      image: "project-2",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-02-10",
    },
    {
      id: 3,
      title: "設計系統與元件庫",
      description: "建立可重用的 UI 元件庫，統一風格、色彩、排版等設計規範，提升開發效率。",
      longDescription: "開發的企業級設計系統，包含 60+ 可重用元件、完整的文件與 Storybook 集成。大幅提升團隊的開發效率與設計一致性。",
      tags: ["Storybook", "CSS Modules", "Design System"],
      technologies: ["React", "Storybook", "CSS Modules", "TypeScript", "Jest"],
      image: "project-3",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024-01-20",
    },
    {
      id: 4,
      title: "社交媒體網站",
      description: "使用 TypeScript 與 Redux 開發的社交平台，支援即時聊天、貼文與用戶互動。",
      longDescription: "功能完整的社交媒體平台，包含用戶認證、實時通知、動態摘要與消息系統。採用微服務架構與 WebSocket 實現即時通信。",
      tags: ["TypeScript", "Redux", "WebSocket"],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT Auth"],
      image: "project-4",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-12-05",
    },
    {
      id: 5,
      title: "天氣預報應用",
      description: "整合天氣 API 的即時天氣預報應用，支援地點搜尋與多日預報。",
      longDescription: "建立的跨平台天氣應用，利用第三方 API 提供精確的天氣資訊。包含地圖整合、天氣警告通知與本地快取優化。",
      tags: ["API Integration", "Geolocation", "Progressive Web App"],
      technologies: ["React", "OpenWeather API", "Mapbox", "Service Workers", "PWA"],
      image: "project-5",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-11-12",
    },
    {
      id: 6,
      title: "任務管理系統",
      description: "功能豐富的團隊任務管理工具，支援團隊協作、截止日期與優先級排序。",
      longDescription: "企業級任務管理系統，支援團隊成員協作、實時通知與進度追蹤。整合日曆視圖、甘特圖與詳細的分析報告。",
      tags: ["Team Collaboration", "Project Management", "Calendar"],
      technologies: ["Vue.js", "Firebase", "Vuetify", "Moment.js", "ChartJS"],
      image: "project-6",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023-10-08",
    },
  ],

  // 教育背景
  education: [
    {
      school: "國立台灣大學",
      degree: "資訊工程學系",
      period: "2016 - 2020",
      description: "主修網頁開發與軟體工程",
    },
    {
      school: "線上課程平台",
      degree: "全端開發碩士認證",
      period: "2020 - 2021",
      description: "完成 500+ 小時的全端開發課程",
    },
  ],

  // 工作經驗
  experience: [
    {
      company: "科技創新公司",
      position: "資深前端工程師",
      period: "2022 - 現在",
      description: "領導前端團隊開發企業級應用，負責技術架構設計與團隊指導。",
      achievements: [
        "建立設計系統，提升開發效率 40%",
        "優化核心應用性能，減少首屏加載時間 60%",
        "帶領 3 位後輩工程師的技術成長",
      ],
    },
    {
      company: "網頁設計工作室",
      position: "前端工程師",
      period: "2020 - 2022",
      description: "開發客戶端與內部工具，與設計團隊密切協作。",
      achievements: [
        "獨立完成 15+ 個客戶專案",
        "實現無障礙設計標準 WCAG 2.1 AA 級",
        "開發內部 UI 元件庫，減少重複工作",
      ],
    },
  ],

  // 認證與獎項
  certifications: [
    { name: "Google 認證 - Web 開發者", date: "2021" },
    { name: "AWS 認證 - 解決方案架構師", date: "2022" },
    { name: "Scrum Master 認證", date: "2020" },
  ],

  // 社交媒體連結
  social: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "CodePen", url: "https://codepen.io", icon: "codepen" },
  ],
};
