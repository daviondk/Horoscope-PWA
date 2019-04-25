var installPromptEvent, count = 0,
    btnInstall = document.querySelector("#install");
    window.addEventListener("beforeinstallprompt", function(t) {
    t.preventDefault(), installPromptEvent = t, btnInstall.removeAttribute("disabled")
}), btnInstall.addEventListener("click", function() {
    btnInstall.setAttribute("disabled", ""), installPromptEvent.prompt(), installPromptEvent.userChoice.then(function(t) {
        "accepted" === t.outcome ? console.log("User accepted the A2HS prompt") : console.log("User dismissed the A2HS prompt"), installPromptEvent = null
    })
});