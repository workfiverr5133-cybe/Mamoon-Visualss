document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('click', () => {
    const video = card.querySelector('video');
    const img = card.querySelector('img');
    const title = card.getAttribute('data-title') || '';

    if(video){
      openVideoLightbox(video.getAttribute('src'), title);
    } else if(img){
      openImageLightbox(card.getAttribute('data-src'), title);
    }
  });
});

function openVideoLightbox(src, title){
  lightbox.innerHTML = `
    <div class="inner">
      <div style="padding:12px;display:flex;justify-content:space-between;align-items:center;color:#cfe6ff">
        <strong>${title}</strong>
        <button id="lbClose" style="background:transparent;border:0;color:#9fbfd6;cursor:pointer;font-size:16px">Close ✕</button>
      </div>
      <video src="${src}" controls autoplay muted loop style="max-width:90vw; max-height:80vh;"></video>
    </div>
  `;
  showLightbox();
}

function openImageLightbox(src, title){
  lightbox.innerHTML = `
    <div class="inner">
      <div style="padding:12px;display:flex;justify-content:space-between;align-items:center;color:#cfe6ff">
        <strong>${title}</strong>
        <button id="lbClose" style="background:transparent;border:0;color:#9fbfd6;cursor:pointer;font-size:16px">Close ✕</button>
      </div>
      <img src="${src}" alt="${title}" style="max-width:90vw; max-height:80vh;">
    </div>
  `;
  showLightbox();
}

function showLightbox(){
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden','false');
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
}

function closeLightbox(){
  lightbox.style.display = 'none';
  lightbox.innerHTML = '';
}
