const board = document.querySelector('#board');
const SQURES_NUMBER = 400;
const colors = [
  'rgb(50, 168, 84)',
  'rgb(50, 152, 168)',
  'rgb(50, 127, 168)',
  'rgb(58, 199, 197)',
  'rgb(58, 147, 199)',
  'rgb(98, 214, 66)',
  'rgb(132, 184, 59)',
  'rgb(214, 219, 53)',
];
for (let i = 0; i < SQURES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
  board.append(square);
}
function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px black';
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
