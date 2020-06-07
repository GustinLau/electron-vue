class Electron {
  isElectron = !!(window && window.process && window.process.type)

  constructor() {
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer
      this.webFrame = window.require('electron').webFrame
      this.remote = window.require('electron').remote
      this.childProcess = window.require('child_process')
      this.fs = window.require('fs')
      this.path = window.require('path')
    }
  }
}

const electron = {
  install(Vue) {
    Vue.prototype.$electron = new Electron()
  }
}

export default electron
