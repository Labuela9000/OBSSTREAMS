
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    fetch(section + '.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('main-content').innerHTML = html;
        if (section === 'slides-stream') initSlidesStream();
      });
  });
});

function initSlidesStream() {
  const form = document.getElementById('slides-form');
  const lista = document.getElementById('slides-list');
  const imagen1 = document.getElementById('img1');
  const imagen2 = document.getElementById('img2');
  const texto = document.getElementById('caption');

  function previewSlides() {
    const slides = JSON.parse(localStorage.getItem('slides')) || [];
    lista.innerHTML = '';
    slides.forEach((slide, i) => {
      const div = document.createElement('div');
      div.className = 'preview-box';
      div.innerHTML = \`
        <img src="\${slide.img1}" alt="img1"/>
        <img src="\${slide.img2}" alt="img2"/>
        <p>\${slide.caption}</p>
        <button onclick="deleteSlide(\${i})">Eliminar</button>
      \`;
      lista.appendChild(div);
    });
  }

  form.onsubmit = e => {
    e.preventDefault();
    const slide = {
      img1: imagen1.value,
      img2: imagen2.value,
      caption: texto.value
    };
    const slides = JSON.parse(localStorage.getItem('slides')) || [];
    slides.push(slide);
    localStorage.setItem('slides', JSON.stringify(slides));
    form.reset();
    previewSlides();
  };

  window.deleteSlide = i => {
    const slides = JSON.parse(localStorage.getItem('slides')) || [];
    slides.splice(i, 1);
    localStorage.setItem('slides', JSON.stringify(slides));
    previewSlides();
  };

  previewSlides();
}
