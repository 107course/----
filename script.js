/**
 * Portfolio Website Main Script
 * 管理深色模式、頁面導航、表單驗證等功能
 */

(function () {
  const THEME_KEY = "portfolio-theme";
  const DARK_THEME = "dark";
  const LIGHT_THEME = "light";

  // ============================================================================
  // 深色模式管理
  // ============================================================================

  /**
   * 取得用戶偏好的主題
   */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  }

  /**
   * 設定主題
   */
  function setTheme(theme) {
    const htmlElement = document.documentElement;

    if (theme === DARK_THEME) {
      htmlElement.setAttribute("data-theme", DARK_THEME);
    } else {
      htmlElement.removeAttribute("data-theme");
    }

    localStorage.setItem(THEME_KEY, theme);
  }

  /**
   * 切換主題
   */
  function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    setTheme(newTheme);
  }

  // ============================================================================
  // 頁面導航
  // ============================================================================

  /**
   * 初始化導航連結的活躍狀態
   */
  function initializeNavigation() {
    const navLinks = document.querySelectorAll("nav a, .nav-link");
    const currentPage = getCurrentPage();

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isActive = href && href.includes(currentPage);

      if (isActive) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  }

  /**
   * 取得當前頁面名稱
   */
  function getCurrentPage() {
    const pathname = window.location.pathname;
    const fileName = pathname.substring(pathname.lastIndexOf("/") + 1) || "index.html";
    return fileName;
  }

  /**
   * 設定頁面標題與 Meta 資訊
   */
  function setupPageMetadata() {
    const currentPage = getCurrentPage();
    const metadata = {
      "index.html": {
        title: "首頁 | 個人簡介",
        description: "李明的個人作品集網站",
      },
      "about.html": {
        title: "關於我 | 個人簡介",
        description: "瞭解更多關於李明的背景、技能與經驗",
      },
      "projects.html": {
        title: "作品集 | 個人簡介",
        description: "查看李明完成的專案與案例研究",
      },
      "contact.html": {
        title: "聯絡我 | 個人簡介",
        description: "聯絡李明進行合作或諮詢",
      },
    };

    const pageData = metadata[currentPage] || metadata["index.html"];
    document.title = pageData.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageData.description);
    }
  }

  // ============================================================================
  // 表單驗證與處理
  // ============================================================================

  /**
   * 驗證電子郵件格式
   */
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /**
   * 驗證聯絡表單
   */
  function validateContactForm(formData) {
    const errors = {};

    if (!formData.name || formData.name.trim() === "") {
      errors.name = "名字為必填欄位";
    }

    if (!formData.email || formData.email.trim() === "") {
      errors.email = "電子郵件為必填欄位";
    } else if (!validateEmail(formData.email)) {
      errors.email = "請輸入有效的電子郵件地址";
    }

    if (!formData.message || formData.message.trim() === "") {
      errors.message = "訊息為必填欄位";
    } else if (formData.message.trim().length < 10) {
      errors.message = "訊息至少需要 10 個字元";
    }

    return errors;
  }

  /**
   * 初始化聯絡表單
   */
  function initializeContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject") || "無主旨",
        message: formData.get("message"),
      };

      const errors = validateContactForm(data);

      // 清除之前的錯誤訊息
      form.querySelectorAll(".error-message").forEach((el) => el.remove());

      if (Object.keys(errors).length > 0) {
        // 顯示錯誤
        Object.entries(errors).forEach(([field, message]) => {
          const input = form.querySelector(`[name="${field}"]`);
          if (input) {
            const errorEl = document.createElement("div");
            errorEl.className = "error-message";
            errorEl.textContent = message;
            input.parentNode.insertBefore(errorEl, input.nextSibling);
          }
        });
        return;
      }

      // 模擬提交（實際應用應呼叫後端 API）
      console.log("表單資料:", data);
      alert("感謝您的訊息！我將盡快回覆您。");
      form.reset();
    });
  }

  // ============================================================================
  // 頁面滾動效果
  // ============================================================================

  /**
   * 初始化平滑滾動
   */
  function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // 避免處理導航連結
        if (href === "#" || this.classList.contains("nav-link")) return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  /**
   * 初始化返回頂部按鈕
   */
  function initializeBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ============================================================================
  // 初始化函數
  // ============================================================================

  /**
   * 主要初始化函數
   */
  function initialize() {
    // 設定深色模式
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", toggleTheme);
    }

    // 系統主題變更監聽
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      darkModeQuery.addEventListener("change", (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
        }
      });
    }

    // 初始化導航與頁面元資訊
    initializeNavigation();
    setupPageMetadata();

    // 初始化表單與交互
    initializeContactForm();
    initializeSmoothScroll();
    initializeBackToTop();
  }

  // DOM 加載完成後初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
