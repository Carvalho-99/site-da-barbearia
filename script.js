document.addEventListener("DOMContentLoaded", () => {
  const btnTopo = document.getElementById('btn-topo');

  if (btnTopo) {
    window.addEventListener('scroll', () => {
      btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btnTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Loader do vídeo
  const video = document.getElementById('video-bg');
  const loader = document.getElementById('loader');

  if (video && loader) {
    // Quando o vídeo estiver pronto para tocar
    video.addEventListener('canplaythrough', () => {
      loader.style.display = 'none';
    });

    // Timeout para esconder o loader após 10 segundos, caso o vídeo não carregue
    setTimeout(() => {
      if (loader.style.display !== 'none') {
        loader.style.display = 'none';
      }
    }, 10000);
  }
});

function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}
