const APP_LINK = window.location.origin;
const WHATSAPP = "96778266791"; // عدّل الرقم

function downloadApp() {
  window.location.href = "eslam-net-plus.apk";
}

function openWhatsApp() {
  window.open(
    `https://wa.me/${WHATSAPP}?text=السلام عليكم، أحتاج مساعدة`,
    "_blank"
  );
}

function shareWhatsApp() {
  window.open(
    `https://wa.me/?text=حمل تطبيق إسلام نت بلس الآن ${APP_LINK}`,
    "_blank"
  );
}

function copyLink() {
  navigator.clipboard.writeText(APP_LINK);
  showToast("✅ تم نسخ رابط التطبيق");
}

function showToast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.innerText = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}
