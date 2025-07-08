alert("Carnival Games is working!");

const stats = [
    {
    label: "Bubble Bath",
    value: 1,
    image: "card01.png"
  },
  {
    label: "Cute Shoes",
    value: 2,
    image: "card02.png"
  },
  {
    label: "Fairy",
    value: 3,
    image: "card03.png"
  },
  {
    label: "Litte Grey Kitten",
    value: 4,
    image: "card04.png"
  },
  {
    label: "Puppies!",
    value: 5,
    image: "card05.png"
  },
  {
    label: "Mr Monopoly",
    value: 6,
    image: "card06.png"
  },
  {
    label: "Cupid",
    value: 7,
    image: "card07.png"
  },
  {
    label: "Love Heart",
    value: 8,
    image: "card08.png"
  },
  {
    label: "Duvet Day",
    value: 9,
    image: "card09.png"
  },
  {
    label: "Bunny",
    value: 10,
    image: "card10.png"
  },
  {
    label: "Wine",
    value: 11,
    image: "card11.png"
  },
  {
    label: "flowers",
    value: 12,
    image: "card12.png"
  },
  {
    label: "Candles",
    value: 13,
    image: "card13.png"
  },
  {
    label: "Hugs",
    value: 14,
    image: "card14.png"
  },
  {
    label: "Kisses",
    value: 15,
    image: "card15.png"
  },
  {
    label: "Horse",
    value: 16,
    image: "card16.png"
  },
  {
    label: "Crocs",
    value: 17,
    image: "card17.png"
  },
  {
    label: "Unicorn",
    value: 18,
    image: "card18.png"
  },
  {
    label: "Piglet",
    value: 19,
    image: "card19.png"
  },
  {
    label: "Lamb",
    value: 20,
    image: "card20.png"
  }
];

let currentStat = null;
let nextStat = null;
let score = 0;

const label = document.getElementById("stat-label");
const value = document.getElementById("stat-value");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const higherBtn = document.getElementById("higher");
const lowerBtn = document.getElementById("lower");
const startBtn = document.getElementById("start");

function getRandomStat(exclude = null) {
  let stat;
  do {
    stat = stats[Math.floor(Math.random() * stats.length)];
  } while (stat === exclude);
  return stat;
}

function updateCard(stat) {
  label.textContent = stat.label;
  value.textContent = stat.value;
  document.getElementById("card-image").src = "/static/images/" + stat.image;
}

function endGame() {
  message.innerHTML = `Game over! You scored <strong>${score}</strong>. Share your result with the group! 🎉`;
  higherBtn.disabled = true;
  lowerBtn.disabled = true;
  startBtn.disabled = false;
}

function guess(choice) {
  if (!nextStat) return;

  const correct =
    (choice === "higher" && nextStat.value > currentStat.value) ||
    (choice === "lower" && nextStat.value < currentStat.value);

  if (correct) {
    score++;
    scoreDisplay.textContent = score;
    currentStat = nextStat;
    updateCard(currentStat);
    nextStat = getRandomStat(currentStat);
  } else {
    endGame();
  }
}

startBtn.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
  message.textContent = "";
  startBtn.disabled = true;
  higherBtn.disabled = false;
  lowerBtn.disabled = false;

  currentStat = getRandomStat();
  nextStat = getRandomStat(currentStat);
  updateCard(currentStat);
});

higherBtn.addEventListener("click", () => guess("higher"));
lowerBtn.addEventListener("click", () => guess("lower"));
