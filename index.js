document.getElementById("discord-ref").addEventListener("click", copyDiscordTag);
document.getElementById("email-ref").addEventListener("click", copyEmail);

function copyDiscordTag() {
  navigator.clipboard.writeText("kleinesleon");
}

function copyEmail() {
  navigator.clipboard.writeText("kleinesleon@gmail.com")
}

function popup(tag) {
  console.log(tag);
  const popup = document.getElementById(tag);

  popup.classList.remove("hide", "fadeOut");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show"); 
    popup.classList.add("fadeOut");

    setTimeout(() => {
      popup.classList.add("hide");
    }, 700);
  }, 700);
}