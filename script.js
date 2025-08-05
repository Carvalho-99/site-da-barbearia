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
});
<script>
  const video = document.querySelector('.video-container video');
  const loader = document.getElementById('video-loader');

  if (video && loader) {
    video.addEventListener('canplaythrough', () => {
      loader.style.display = 'none';
    });
  }
</script>

