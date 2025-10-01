// prettier-ignore
document.addEventListener(
  'DOMContentLoaded',
  () => {

      console.log('Adudio Jeopardy Game Loaded');
    // play audio
    const audio = new Audio('jeopardy.wav');
    audio.loop = true;
    audio.preload = 'auto';
    audio.addEventListener('pause', () => (audio.currentTime = 0), false);

    // toggle cards
    document
      .querySelectorAll('dd')
      .forEach((dd, id) => {
        dd.id = id;
        dd.addEventListener('click', () => location.hash = location.hash === `#${id}` ? '' : id);
      });

    // remove intro
    document.body.addEventListener('click', () => document.documentElement.removeAttribute('id'), { once: true });

    // skip intro on targets
    if (location.hash !== '') {
      document.documentElement.removeAttribute('id');
    }

    // key listeners
    document.addEventListener('keydown', ({ key }) => key === ' ' && audio.play(), false);
    document.addEventListener('keyup', ({ key }) => key === ' ' && audio.pause(), false);
    document.addEventListener('keyup', ({ key }) => key === 'Escape' && (location.hash = ''), false);
  },
  false
);
