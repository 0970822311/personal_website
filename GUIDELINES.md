# Portfolio & Project Showcase - AI 開發與維護指南

歡迎！當你（AI 助理）讀取到這份文件時，代表你正在協助我開發與維護我的「個人作品集與專案展示網」。請嚴格遵守以下所有規則與架構，以確保專案的一致性與高品質。

## 1. 這個專案的目的 (Project Purpose)
本專案是一個**多維度、跨領域的個人作品集網站**。
目的在於向面試官、評審或合作夥伴展示我的多元能力。這裡不僅包含程式開發（Tech），還涵蓋影音製作（Video）、平面設計（Design）、活動企劃（Event Planning）等不同領域的作品。
網站必須具備高度的擴充性，能夠隨著我未來技能的增加，無縫展示全新類別的作品。

## 2. 網頁的整體風格 (Overall Web Style - 必讀核心)
- **視覺語言**：復古、明豔、大膽鮮明 (Retro, Vibrant, Bold, Editorial-style)。
- **色彩計畫 (Color Palette)**：
  - **背景**：建議使用暖白色、米黃色 (如 `#F9F6F0`) 或帶有輕微紙質/雜訊紋理的底色，取代死板的純白。
  - **主色/點綴色**：使用高飽和度但溫潤的「復古色系」，例如：芥末黃 (Mustard Yellow)、番茄紅 (Tomato Red)、海軍藍 (Navy Blue)、復古橘 (Burnt Orange) 或橄欖綠 (Olive Green)。
  - 🚫 **絕對禁止**：嚴禁使用科技感、賽博龐克 (Cyberpunk) 或電競風格的「高亮度螢光色」（如螢光綠、螢光粉紅、雷射藍）。
- **排版與UI元素**：
  - **邊框與區塊**：可多運用「粗黑線條邊框 (Thick dark borders)」、「大色塊分割 (Color blocking)」或是「不對稱排版」，營造復古海報與雜誌感。
  - **字體 (Typography)**：標題可搭配具備份量感的粗黑體或復古襯線體 (Serif)；內文保持高易讀性的無襯線體 (Sans-serif)。
- **響應式設計 (RWD)**：必須是 Mobile-first，確保在手機、平板與桌機上都有完美的閱讀體驗。

## 3. 頁面結構 (Page Structure)
- `index.html`：首頁。包含自我介紹 (Hero Section)、專案動態篩選器 (Filter - All/Tech/Video/Design...)，以及專案卡片瀑布流 (Grid/Masonry)。
- `/projects/`：專案詳情頁面存放區，每個專案一個獨立的 HTML/頁面。
- `/assets/`：靜態資源，往下細分：
  - `/assets/css/`：樣式表。
  - `/assets/js/`：共用腳本（如篩選器邏輯）。
  - `/assets/images/`：專案截圖、縮圖、圖示。
  - `/assets/docs/`：附件檔案（如企劃書 PDF）。

## 4. 檔案應該如何命名與放置 (File Naming and Placement)
- **HTML 檔案命名**：統一放在 `/projects/` 目錄下。必須使用**全小寫英文**、**kebab-case (連字號)**，並加上年月前綴。
  - ✅ 範例：`/projects/2023-11-techgics-hackathon.html`
- **圖片與媒體命名**：統一放在 `/assets/images/projects/{專案名稱}/` 專屬資料夾下。
  - ✅ 範例：`/assets/images/projects/techgics-hackathon/cover.jpg`
- **附件命名**：統一放在 `/assets/docs/`，並以專案名稱為開頭。
  - ✅ 範例：`/assets/docs/techgics-hackathon-proposal.pdf`

## 5. 新增內容時要遵守的格式 (Format for Adding Content)
每個專案都具有「共通資訊」與「擴充資訊」。新增頁面時，請套用以下結構：

### A. 共通資訊區塊 (Header / Meta Data)
每個專案頁面上方必須包含：
- **Project Name** (專案名稱)
- **Timeline** (專案時程，如 YYYY.MM)
- **My Role** (我的具體貢獻與角色)
- **Category** (專案類別標籤)
- **Purpose & Target Audience** (專案目的與受眾 - 簡潔的 1~2 段話)
- **Events & Awards** (投遞的比賽、參與的活動或獲獎紀錄 - 使用陣列或列表呈現)
- **Challenges & Solutions** (遇到的困難與解決方法)

### B. 動態擴充資訊區塊 (Dynamic Content Render)
**【重要】專案類別是可無限擴充的。** 請根據我提供的專案類型，動態決定排版與專屬欄位：
- 若為 **程式/技術類 (Tech)**：需自動產生 `Tech Stack` 標籤區塊，並將 `GitHub Repo` 或 `Live Demo` 連結做成具復古按鈕風格的組件。
- 若為 **影音類 (Video)**：Hero Section 必須直接嵌入 `YouTube/Vimeo 播放器 (iframe)`，並列出使用的剪輯軟體。
- 若為 **平面/UI設計類 (Design)**：必須生成 `圖片輪播 (Carousel)` 或 `瀑布流圖片牆 (Masonry)` 來展示高解析度圖檔，圖片外框可加上復古粗框。
- 若為 **活動/企劃類 (Event)**：著重展示成效數據 (Metrics)、現場照片，並提供 PDF 企劃書下載按鈕。
- **🆕 若出現未定義的新類別**：請分析該媒材的最佳呈現方式，並自動為其設計合適的版面，**不要拘泥於現有分類**。

## 6. AI 修改或新增內容時需要遵守的規則 (AI Operation Rules)
1. **連動更新原則**：當被要求「新增一個專案」時，你除了要建立 `/projects/` 下的新檔案，還**必須主動修改 `index.html`**，將新專案的卡片插入到首頁，並確保該卡片具備正確的分類屬性 (data-category)。
2. **動態更新篩選器**：如果新專案屬於一個「全新」的類別，你必須**主動在 `index.html` 的篩選器導覽列中加入這個新類別的按鈕**。
3. **無破壞性修改**：修改現有代碼時，不可隨意更改已生效的 CSS 類別名稱或刪除其他專案的資料。
4. **防呆檢查**：如果我要求新增專案，但遺漏了「共通資訊」（如忘了給時間或負責角色），請先用佔位符（如 `[請補充專案時程]`）標示，並在對話中提醒我補充。
5. **程式碼簡潔與語意**：生成的 HTML 必須保持語意化，避免過度嵌套的 `<div>`，並寫上必要的註解 (如 `<!-- Project Info Start -->`)。
