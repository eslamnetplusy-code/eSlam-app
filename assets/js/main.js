function downloadApp() {
  const c = document.getElementById("count");
  if (c) c.innerText = parseInt(c.innerText) + 1;
  window.location.href = "eslam-net-plus.apk";
}

function openWhatsApp() {
  window.open(
    "https://wa.me/9647XXXXXXXX?text=السلام عليكم",
    "_blank"
  );
}

function sharePage() {
  window.open(
    "https://wa.me/?text=تحميل تطبيق إسلام بلس https://netplusy-code.github.io",
    "_blank"
  );
}
