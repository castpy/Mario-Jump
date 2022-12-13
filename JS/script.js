const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}


const loop = setInterval(() => {
    const pipe_position = pipe.offsetLeft;
    const mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipe_position <= 123 && pipe_position > 0 && mario_position <= 60){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_position}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${pipe_position}px`

        mario.src = "/IMG/mario-game-over.png"
        mario.style.width = '100px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)


document.addEventListener('keydown', jump);
