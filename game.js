
window.onload = function () {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("character-select").style.display = "block";
    const characters = [
      { name: "Mr. Todd", img: "mr-todd.jpg", power: "Strength & Command" },
      { name: "Melanie", img: "melanie.jpg", power: "Charm & Healing" },
      { name: "Anna", img: "anna.jpg", power: "Deception & Stealth" },
      { name: "Aaron", img: "aaron.jpg", power: "Speed & Energy" },
      { name: "Nate", img: "nate.jpg", power: "Vibe Control" },
      { name: "James", img: "james.jpg", power: "Tracking & Survival" },
    ];
    const container = document.getElementById("characters");
    characters.forEach(c => {
      const div = document.createElement("div");
      div.className = "character-card";
      div.innerHTML = `<img src="${c.img}" alt="${c.name}" /><strong>${c.name}</strong><br/><em>${c.power}</em>`;
      container.appendChild(div);
    });
  }, 8000); // 8 seconds for eerie intro
};
