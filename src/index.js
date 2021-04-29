import Heart from '../img/heart.png';

const heartWidth = 30;
const heartAreaWidth = 100;

const trajectories = ['trajectory1', 'trajectory2', 'trajectory3', 'trajectory4'];

document.querySelector('.likerButton').addEventListener('click', () => {
  const heart = document.createElement('img');
  heart.src = Heart;
  heart.classList.add('heart');
  heart.style.bottom = '0';
  heart.style.left = `${heartAreaWidth / 2 - heartWidth / 2}px`;
  const rand = Math.floor(Math.random() * trajectories.length);
  heart.style['animation-name'] = trajectories[rand];
  heart.style['animation-duration'] = '500ms';
  heart.style['animation-timing-function'] = 'ease-out';

  heart.addEventListener('animationend', () => {
    heart.parentNode.removeChild(heart);
  }, false);

  document.querySelector('.hearts').appendChild(heart);
});
