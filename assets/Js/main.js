
/* consegna
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/

/* strumenti: 

*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgPath: 'assets/img/20220405_205943.jpg',
        alt: 'fiesta',
      }
    }
  }).mount('#app')