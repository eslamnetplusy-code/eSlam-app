// إعدادات
const APK_FILE = "eslam-net-plus.apk";
const WHATSAPP_NUMBER = "967782666791";
const PAGE_LINK = window.location.href;


// تحميل التطبيق مع تأكيد
function downloadApp() {
  if (!confirm("هل تريد تحميل تطبيق إسلام  بلس الآن؟")) return;

  const c = document.getElementById("count");
  if (c) c.innerText = parseInt(c.innerText) + 1;

  window.location.href = APK_FILE;
}


// فتح واتساب (مضمون)
function openWhatsApp() {
  const msg = encodeURIComponent("السلام عليكم، أحتاج مساعدة");
  window.location.href =
    `intent://send/${WHATSAPP_NUMBER}` +
    `#Intent;scheme=smsto;package=com.whatsapp;` +
    `S.browser_fallback_url=` +
    encodeURIComponent(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`) +
    `;end`;
}


// مشاركة الصفحة
function sharePage() {
  window.open(
    `https://wa.me/?text=${encodeURIComponent("تحميل تطبيق إسلام  بلس " + PAGE_LINK)}`,
    "_blank"
  );
}


// فتح روابط التواصل
function openLink(url) {
  window.open(url, "_blank");
}
