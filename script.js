/* ====== EDIT BAGIAN INI ====== */
const profile = {
  name: "Nama Kamu",
  bio: "Content creator & desainer dari Bandung. Semua link penting ada di bawah.",
  links: [
    { title: "Portfolio terbaru", desc: "Kumpulan karya 2026", url: "https://example.com", main: true },
    { title: "Instagram", url: "https://instagram.com/username" },
    { title: "TikTok", url: "https://tiktok.com/@username" },
    { title: "YouTube", url: "https://youtube.com/@username" },
    { title: "WhatsApp", desc: "Untuk kerja sama", url: "https://wa.me/6281234567890" },
    { title: "Email", url: "mailto:halo@example.com" }
  ]
};
/* ============================= */
document.title = profile.name + " — Link";
document.getElementById("name").textContent = profile.name;
document.getElementById("bio").textContent = profile.bio;
document.getElementById("initial").textContent = profile.name.trim().charAt(0).toUpperCase();
document.getElementById("foot").textContent = "© " + profile.name;
const box = document.getElementById("links");
profile.links.forEach(l => {
  const a = document.createElement("a");
  a.className = "link" + (l.main ? " main" : "");
  a.href = l.url; a.target = "_blank"; a.rel = "noopener";
  a.textContent = l.title;
  if (l.desc) { const s = document.createElement("small"); s.textContent = l.desc; a.appendChild(s); }
  box.appendChild(a);
});