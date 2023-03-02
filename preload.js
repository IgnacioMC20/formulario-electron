const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('comunicacion', {
    registroValido: (data) => ipcRenderer.send('registroValido', data),
    inicioCorrecto: (callback) => ipcRenderer.on('inicioCorrecto', callback)
})