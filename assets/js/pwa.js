let deferredPrompt;
const installBtn = document.createElement("button");

installBtn.innerText = "📲 تثبيت التطبيق";
installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  installBtn.style.display = "block";
  document.querySelector(".card").appendChild(installBtn);
});

installBtn.addEventListener("click", async () => {
  installBtn.style.display = "none";
  deferredPrompt.prompt();

  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
});
    
