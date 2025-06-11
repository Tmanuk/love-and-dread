
const rooms = [
  "A cold draft hits your spine. You’ve entered the Hall of Whispers.",
  "You find a note: 'The truth hides in plain sight.'",
  "The chandelier swings... but no one's touched it.",
  "Footsteps echo above. But there's no upstairs.",
  "A mirror reflects someone who isn't there."
];
let currentRoom = 0;

function nextRoom() {
  const eventBox = document.getElementById("room-event");
  if (currentRoom < rooms.length) {
    eventBox.textContent = rooms[currentRoom];
    currentRoom++;
  } else {
    eventBox.textContent = "The mansion begins to shake... you've reached the final room.";
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").textContent = "You rolled: " + roll;
  const emotion = ["Calm", "Tense", "Scared", "Angry", "Brave", "Frozen"][roll - 1];
  document.getElementById("emotion").textContent = emotion;
}

function usePower() {
  const powers = [
    "You sense hidden danger nearby.",
    "You unlock a sealed door.",
    "You see a ghostly memory play out.",
    "You resist a terrifying illusion.",
    "You vanish briefly from sight.",
    "You restore calm to another player."
  ];
  const roll = Math.floor(Math.random() * powers.length);
  document.getElementById("power-result").textContent = "Power used: " + powers[roll];
}
