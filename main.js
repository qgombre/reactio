// main.js — Arrencada d'Electron per Reactio
// - Desactiva completament la barra de menú i qualsevol toggle amb ALT
// - Carrega index.html amb seguretat (sense Node integration)

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow () {
  // Eliminar qualsevol menú (evita que ALT mostri barres)
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
    width: 1200,
    height: 760,
    backgroundColor: '#0b0f1a',
    autoHideMenuBar: true,               // Oculta menús a Windows
    // Important per evitar flash de menú amb ALT a Win:
    // autoHideMenuBar + setMenu(null) + setMenuBarVisibility(false) fa que ALT no mostri res.
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: undefined
    }
  });

  // Assegura que no aparegui menu bar encara que l'usuari premi ALT
  win.setMenuBarVisibility(false);

  // Carrega l'HTML local
  win.loadFile(path.join(__dirname, 'index.html'));

  // (Opcional) obrir DevTools si cal depurar:
  // win.webContents.openDevTools({ mode: 'detach' });

  // Prevenció extra: cancel·la acceleradors per defecte (p.ex. Alt+X, etc.)
  // No és estrictament necessari sense menú, però afegeix robustesa.
  win.webContents.on('before-input-event', (event, input) => {
    // Si és un combo amb Alt i no volem que Electron el tracti com a accelerador, prevenim.
    if (input.alt) {
      // Bloqueja qualsevol Alt+{X,E,Q,Minus} i també Alt (sol)
      const blocked = new Set(['X', 'E', 'Q', '-']);
      if (blocked.has(input.key) || input.key === 'Alt') {
        event.preventDefault();
      }
    }
  });
}

app.whenReady().then(()=>{
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  // A Windows/Linux sortim; a macOS normalment es queda obert fins Cmd+Q
  if (process.platform !== 'darwin') app.quit();
});
