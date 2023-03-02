window.comunicacion.inicioCorrecto((event, args) => {
    document.getElementById('usernameSpan').innerText = args
})

const { remote } = require('electron');
const botonCerrar = document.getElementById('cerrar');
botonCerrar.addEventListener('click', function() {
  const win = remote.getCurrentWindow();
  win.close();
});
