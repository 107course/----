# 個人簡介網站

一個現代化、響應式的個人作品集網站，採用 HTML5 + CSS3 + JavaScript 構建，支援深色模式。

## 📋 功能特色

- 🎨 **深色模式切換** - 自動偵測系統偏好，支援手動切換並記憶用戶選擇
- 📱 **完全響應式** - 在各種設備上完美顯示（桌面、平板、手機）
- ♿ **無障礙設計** - 遵循 WCAG 標準，支援鍵盤導航與屏幕閱讀器
- 🚀 **高性能** - 輕量級資源，快速加載
- 🎯 **平滑滾動** - 錨點連結的平滑滾動效果
- 📬 **聯絡表單** - 包含客戶端驗證的聯絡表單
- 🎭 **現代設計** - 使用漸層、陰影和微交互提升視覺體驗

## 📁 專案結構

```
靜態網頁/
├── index.html              # 首頁
├── style.css               # 主要樣式表
├── script.js               # JavaScript 功能
├── data.js                 # 範例數據
├── pages/
│   ├── about.html          # 關於我頁面
│   ├── projects.html       # 作品集頁面
│   └── contact.html        # 聯絡我頁面
├── assets/                 # 靜態資源（圖片、字體等）
└── README.md               # 本文件
```

## 🚀 快速開始

### 1. 在瀏覽器中打開
直接雙擊 `index.html` 或使用以下方式：

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 2. 使用 Live Server (推薦)
如果使用 VS Code，安裝 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 擴充：

1. 右鍵點擊 `index.html`
2. 選擇 "Open with Live Server"

### 3. 使用本地服務器

**Python 3:**
```bash
python -m http.server 8000
# 訪問 http://localhost:8000
```

**Node.js (with http-server):**
```bash
npx http-server
# 訪問 http://localhost:8080
```

## 🎯 頁面說明

### 首頁 (index.html)
- 英雄區域 - 介紹與呼籲行動
- 關於我預覽 - 簡短介紹和技能展示
- 精選作品 - 代表性專案展示

### 關於我 (pages/about.html)
- 個人詳細介紹
- 技能清單（前端、後端、工具）
- 工作經驗時間軸
- 教育背景
- 認證與獎項

### 作品集 (pages/projects.html)
- 6 個精選專案案例
- 詳細的專案描述
- 使用技術標籤
- 專案連結（演示 / GitHub）

### 聯絡我 (pages/contact.html)
- 聯絡表單（帶客戶端驗證）
- 聯絡資訊（郵件、電話、位置）
- 社交媒體連結
- 常見問題 (FAQ)

## 🎨 深色模式

深色模式通過 `data-theme` 屬性控制：

```html
<!-- 淺色模式（默認）-->
<html>

<!-- 深色模式 -->
<html data-theme="dark">
```

CSS 變數會自動切換顏色方案。用戶偏好通過 `localStorage` 保存。

## 🛠️ 技術棧

- **HTML5** - 語義化標記
- **CSS3** - CSS 變數、Grid、Flexbox、漸層
- **Vanilla JavaScript** - 無框架依賴，純 JS 實現
- **響應式設計** - Mobile-first 方法

## 📝 自訂內容

### 修改個人資訊

編輯 `data.js`：
```javascript
const portfolioData = {
  profile: {
    name: "您的名字",
    title: "您的職稱",
    email: "您的郵件",
    // ... 更多欄位
  }
}
```

### 修改頁面標題和顏色

在 `style.css` 中編輯 `:root` 變數：
```css
:root {
  --color-accent: #7c5cff;         /* 主色調 */
  --color-accent-light: #4dd0e1;   /* 輔助色 */
  /* ... 其他色彩變數 */
}
```

### 添加新專案

在 `data.js` 的 `projects` 陣列中添加新項目：
```javascript
{
  id: 7,
  title: "新專案名稱",
  description: "簡短描述",
  longDescription: "詳細描述",
  tags: ["標籤1", "標籤2"],
  // ... 其他欄位
}
```

## ♿ 無障礙特性

- ✅ 語義化 HTML 標記（header, main, nav, article 等）
- ✅ 適當的標題層級 (h1, h2, h3)
- ✅ Alt 文本和 ARIA 標籤
- ✅ 鍵盤可導航
- ✅ 足夠的色彩對比度
- ✅ 聚焦指示器

## 📊 性能優化

- 無外部依賴 - 零 npm 包
- 輕量級 CSS 和 JS
- 圖片優化 - 使用 SVG 漸層代替圖片
- 沒有 render-blocking 資源
- 高 Lighthouse 分數

## 🔧 瀏覽器相容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📞 聯絡表單

聯絡表單包含客戶端驗證，但不會真的發送郵件。要連接真實的後端，在 `script.js` 中修改 `initializeContactForm()` 函數。

## 🚀 部署

### GitHub Pages
1. 上傳到 GitHub 倉庫
2. 在倉庫設置中啟用 GitHub Pages
3. 選擇主分支作為來源

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
拖放專案資料夾到 [netlify.com](https://netlify.com)

## 📄 授權

此項目為示例專案，可自由使用和修改。

## 🎓 學習資源

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Web Accessibility](https://www.w3.org/WAI/)

## 💡 改進建議

- [ ] 添加動畫過渡效果
- [ ] 集成 CMS（如 Contentful）
- [ ] 添加多語言支援
- [ ] 實現圖片懶加載
- [ ] 添加分析追蹤
- [ ] 建立博客系統

---

**最後更新**: 2025 年 12 月 30 日

享受使用！有任何問題，歡迎聯絡我。
