// Contenido dinámico para cada sección
const dataJSON = {
  "inicio": {
    "titulo": "Inicio",
    "contenido": "<p>Bienvenido al inicio del sitio.</p>"
  },
  "diseno-web": {
    "titulo": "Diseño Web",
    "contenido": "<p>Servicios relacionados con diseño web.</p>"
  },
  "marketing": {
    "titulo": "Marketing",
    "contenido": "<p>Marketing digital y promoción.</p>"
  },
  "consultoria": {
    "titulo": "Consultoría",
    "contenido": "<p>Asesoría profesional.</p>"
  },
  "proyectos-web": {
    "titulo": "Proyectos Web",
    "contenido": "<p>Ejemplos de desarrollo web.</p>"
  },
  "diseno-grafico": {
    "titulo": "Diseño Gráfico",
    "contenido": "<p>Identidad visual y diseño gráfico.</p>"
  },
  "contacto": {
    "titulo": "Contacto",
    "contenido": "<p>Contáctanos aquí.</p>"
  },
  "slides-stream": {
    "titulo": "Slides para Stream",
    "contenido": `
      <div class="form">
        <label>Selecciona una imagen:</label>
        <select id="imagen"></select>

        <label>Texto para la imagen:</label>
        <textarea id="texto" placeholder="Pie de imagen..."></textarea>

        <label>Comparar con (subir imagen o URL):</label>
        <input type="file" id="comparar-file" accept="image/*"/>
        <input type="text" id="comparar-url" placeholder="o ingresa URL"/>

        <button onclick="agregarSlide()">Agregar Comparación</button>
      </div>
      <div class="preview">
        <h2>Lista de Comparaciones</h2>
        <div id="listaSlides"></div>
      </div>
    `
  }
};
