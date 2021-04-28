const todos = document.getElementById('todos');
const ultimos = document.getElementById('ultimos');
const clasicos = document.getElementById('clasicos');
const modernos = document.getElementById('modernos');
const fotos = document.querySelector('.photos');
let spinner = document.createElement('div');
spinner.classList.add('loader');
let aFotos = document.querySelectorAll('div[data-estilo]');

// Todas las fotos visibles
todos.addEventListener('click', (e) => {
   e.preventDefault();
   limpiarCortes();
   fotos.appendChild(spinner);
   setTimeout(() => {
      aFotos.forEach(foto => {
         foto.style.display = "block";
         foto.classList.add('fadeIn');
      });
      spinner.remove();
   }, 1200);
});

// Ultimas fotos visibles
ultimos.addEventListener('click', (e) => {
   e.preventDefault();
   limpiarCortes();
   fotos.appendChild(spinner);
   setTimeout(() => {
      aFotos.forEach(foto => {
         if (foto.dataset.estilo !== "ultimo") {
            foto.style.display = "none";
         } else {
            foto.style.display = "block";
            foto.classList.add('fadeIn');
         }
      });
      spinner.remove();
   }, 1200);
});

// Fotos clasicas visibles
clasicos.addEventListener('click', (e) => {
   e.preventDefault();
   limpiarCortes();
   fotos.appendChild(spinner);
   setTimeout(() => {
      aFotos.forEach(foto => {
         if (foto.dataset.estilo !== "clasico") {
            foto.style.display = "none";
         } else {
            foto.style.display = "block";
            foto.classList.add('fadeIn');
         }
      });
      spinner.remove();
   }, 1200);
});

// Fotos modernas visibles
modernos.addEventListener('click', (e) => {
   e.preventDefault();
   limpiarCortes();
   fotos.appendChild(spinner);
   setTimeout(() => {
      aFotos.forEach(foto => {
         if (foto.dataset.estilo !== "moderno") {
            foto.style.display = "none";
         } else {
            foto.style.display = "block";
            foto.classList.add('fadeIn');
         }
      });
      spinner.remove();
   }, 1200);
});

function limpiarCortes() {
   aFotos.forEach(foto => {
      foto.style.display = "none";
      foto.style.opacity = 0;
   });
}
