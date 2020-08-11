(function () {
  const bideo = new Bideo();
  bideo.init({
    videoEl: document.querySelector('#background_video'),
    container: document.querySelector('body'),
    resize: true,
    autoplay: true, // true is default
    isMobile: window.matchMedia('(max-width: 768px)').matches,
    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),
    src: [
      {
        src: 'earth.mp4',
        type: 'video/mp4'
      }
    ],
    // On video loaded
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());
