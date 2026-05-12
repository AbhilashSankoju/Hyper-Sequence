# Hyper Sequence

Hyper Sequence is a simple memory-based browser game inspired by the classic Simon Game.  
The game generates a sequence of colored boxes, and the player must repeat the same sequence correctly to progress to the next level.

As the levels increase, the sequence becomes longer and harder to remember.

---



## 🎮 Gameplay

1. Press any key to start the game.
2. Watch the flashing color sequence carefully.
3. Repeat the sequence by clicking the colored boxes in the same order.
4. Each level adds one more color to the sequence.
5. If you click the wrong color, the game ends.
6. Try to beat your highest score.

---

## 🚀 Features

- Random sequence generation
- Increasing difficulty with levels
- Flash animation effects
- Current score tracking
- Highest score tracking
- Game over alert effect
- Responsive and simple UI

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📂 Project Structure

```bash
Hyper-Sequence/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Game logic
└── README.md       # Project documentation
```

---

## 🧠 Game Logic Overview

### Sequence Generation
The computer randomly selects a color and stores it in the machine sequence array.

```js
machine.push(c);
```

### User Input
User clicks are stored in another array:

```js
userInput.push(e.target.id);
```

### Sequence Validation
The program checks whether the player's sequence matches the generated sequence.

```js
if(u[i] !== m[i])
```

### Level Progression
If the sequence is correct, the level increases and a new color is added.

```js
level++;
```

---

## ▶️ How to Run the Project

1. Download or clone this repository:

```bash
git clone https://github.com/your-username/Hyper-Sequence.git
```

2. Open the project folder.

3. Run `index.html` in your browser.

---

## 📸 Preview

The game contains four colored boxes:

- 🔴 Red
- 🟡 Yellow
- 🟢 Green
- 🔵 Blue

Players must memorize and repeat the flashing sequence correctly.

---

## 🎯 Future Improvements

- Add sound effects
- Add mobile touch optimization
- Add difficulty modes
- Store high scores using localStorage
- Add restart button
- Add animations and smoother transitions

---

## 📚 Learning Outcomes

This project helped in understanding:

- DOM Manipulation
- Event Handling
- Arrays and sequence tracking
- Timers using `setTimeout`
- Game state management
- Basic UI design with CSS

---

## 👨‍💻 Author

Developed by ABHI.

```
