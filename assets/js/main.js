// ===============================
// إعدادات عامة
// ===============================

// اسم ملف التطبيق (APK) – موجود في جذر المستودع
const APK_FILE = "eslam-net-plus.apk";

// رابط الصفحة (للمشاركة)
const PAGE_LINK = "https://netplusy-code.github.io";

// رقم واتساب الدعم (عدّل الرقم فقط)
const WHATSAPP_NUMBER = "+967782666791";


// ===============================
// تحميل التطبيق مع تأكيد
// ===============================
function downloadApp() {
  const ok = confirm("هل تريد تحميل تطبيق إسلام بلس الآن؟");

  if (!ok) return;

  // زيادة عدّاد التحميل (شكلي)
  const counter = document.getElementById("count");
  if (counter) {
    counter.innerText = parseInt(counter.innerText) + 1;
  }

  // بدء تحميل ملف APK
  window.location.href = APK_FILE;
}


// ===============================
// فتح واتساب الدعم
// ===============================
function openWhatsApp() {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=السلام عليكم، أحتاج مساعدة`,
    "_blank"
  );
}


// ===============================
// مشاركة صفحة التحميل
// ===============================
function sharePage() {
  window.open(
    `https://wa.me/?text=تحميل تطبيق إسلام بلس ${PAGE_LINK}`,
    "_blank"
  );
}
