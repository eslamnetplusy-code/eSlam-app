// ===============================
// إعدادات
// ===============================

// اسم ملف التطبيق (APK) – موجود في جذر المستودع
const APK_FILE = "eslam-net-plus.apk";

// رقم واتساب (بدون + وبدون مسافات)
const WHATSAPP_NUMBER = "967782666791";

// رابط الصفحة الحالي
const PAGE_LINK = window.location.href;


// ===============================
// تحميل التطبيق مع تأكيد
// ===============================
function downloadApp() {
  if (!confirm("هل تريد تحميل تطبيق إسلام بلس الآن؟")) return;

  const counter = document.getElementById("count");
  if (counter) {
    counter.innerText = parseInt(counter.innerText) + 1;
  }

  window.location.href = APK_FILE;
}


// ===============================
// فتح واتساب (حل مضمون للأندرويد)
// ===============================
function openWhatsApp() {
  const message = encodeURIComponent("السلام عليكم، أحتاج مساعدة");

  const intentUrl =
    `intent://send/${WHATSAPP_NUMBER}` +
    `#Intent;scheme=smsto;package=com.whatsapp;` +
    `S.browser_fallback_url=` +
    encodeURIComponent(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    ) +
    `;end`;

  window.location.href = intentUrl;
}


// ===============================
// مشاركة صفحة التحميل
// ===============================
function sharePage() {
  const text = encodeURIComponent(
    "تحميل تطبيق إسلام  بلس " + PAGE_LINK
  );

  window.location.href = `https://wa.me/?text=${text}`;
}
