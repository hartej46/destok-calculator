import { BrowserWindow, app } from "electron/main";
import path from "node:path";
// import { fileURLToPath } from "node:url";

const createWindow = () => {
    const win = new BrowserWindow({
        width: 350,
        height: 600,
        resizable: false
    })
    // win.webContents.openDevTools()


    win.loadFile(path.join(import.meta.dirname, './dist/index.html'));
    
}

app.whenReady().then(() => {
    createWindow()
})