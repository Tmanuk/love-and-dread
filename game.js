
document.addEventListener('DOMContentLoaded', () => {
  const characters = [
    { name: "Mr. Todd", file: "mr-todd.jpg", power: "Shield of Will" },
    { name: "Melanie", file: "melanie.jpg", power: "Charm of Clarity" },
    { name: "Anna", file: "anna.jpg", power: "Deadly Grace" },
    { name: "Aaron", file: "aaron.jpg", power: "Phantom Dash" },
    { name: "Nate", file: "nate.jpg", power: "Pulse of Sound" },
    { name: "James", file: "james.jpg", power: "Survivor’s Instinct" }
  ];

  const intro = document.getElementById('intro');
  const select = document.getElementById('character-select');
  const gameScreen = document.getElementById('game-screen');
  const charactersDiv = document.getElementById('characters');
  const roomTitle = document.getElementById('room-title');
  const roomDesc = document.getElementById('room-description');
  const roomImage = document.getElementById('room-image');
  const powerEffect = document.getElementById('power-effect');
  const nextButton = document.getElementById('next-button');

  setTimeout(() => {
    intro.classList.add('hidden');
    select.classList.remove('hidden');
  }, 6000);

  characters.forEach(c => {
    const img = document.createElement('img');
    img.src = c.file;
    img.alt = c.name;
    img.onclick = () => startGame(c);
    charactersDiv.appendChild(img);
  });

  function startGame(character) {
    select.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    roomTitle.textContent = "Abandoned Library";
    roomDesc.textContent = `${character.name} steps into a room filled with ancient books whispering secrets.`;
    roomImage.src = character.file;
    powerEffect.textContent = `${character.name}'s power: ${character.power}`;
  }

  nextButton.onclick = () => {
    roomDesc.textContent = "The door creaks open... something is waiting.";
    powerEffect.textContent = "";
  };
});
