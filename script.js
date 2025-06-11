
let rooms = [
  "A broken grandfather clock ticks backwards.",
  "Shadows flicker — but the candles are still.",
  "You hear your name whispered from behind a locked door.",
  "The room smells like ash. There's no fire."
];
let roomIndex = 0;

function nextRoom() {
  const event = document.getElementById("room-event");
  if (roomIndex < rooms.length) {
    event.textContent = rooms[roomIndex];
    roomIndex++;
  } else {
    event.textContent = "You’ve reached the heart of the mansion. It’s watching.";
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  const result = "You rolled a " + roll;
  document.getElementById("roll-result").textContent = result;

  if (roll <= 2) document.getElementById("fear").textContent = "High";
  if (roll >= 5) document.getElementById("sanity").textContent = "Unstable";
}

function usePower() {
  const powers = [
    "You freeze time for one room event.",
    "You shield another player from fear.",
    "You summon a lost memory to guide you.",
    "You vanish into the shadows temporarily."
  ];
  const power = powers[Math.floor(Math.random() * powers.length)];
  document.getElementById("power-result").textContent = "Power used: " + power;
}
