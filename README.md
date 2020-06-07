# Electron-Vue

[![Vue Logo](https://electron-store.oss-cn-shenzhen.aliyuncs.com/icon-svg/Vue.svg)](https://vuejs.org)
[![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

## Introduction

Bootstrap and package your project with Vue and Electron (SASS + Hot Reload) for creating Desktop applications.

Runs with:

- Vue 2.6.11
- VueCli v4.4.1
- Electron v9.0.2
- Electron Builder v22.7.0

With this sample, you can :

- Run your app in a local development environment with Electron & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

/!\ Hot reload only pertains to the renderer process. The main electron process is not able to be hot reloaded, only restarted.


## Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/GustinLau/electron-vue.git
```

Install dependencies with npm :

``` bash
npm install
```

## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Vue + Electron app in a local development environment with hot reload !

The application code is managed by `main.js`. In this sample, the app runs with a simple Vue App (http://localhost:9527) and an Electron window.' 

The project contains an example of Electron and NodeJS native lib import.

You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.js`.

## Included Commands

|Command|Description|
|--|--|
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run vue:serve:web`| Execute the app in the browser |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Your application is optimised. Only /dist folder and node dependencies are included in the executable.**

## You want to use a specific lib (like rxjs) in electron main thread ?

YES! You can do it! Just by importing your library in npm dependencies section (not **devDependencies**) with `npm install --save`. It will be loaded by electron during build phase and added to your final package. Then use your library by importing it in `main.js` file. Quite simple, isn't it ?

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? Just run `npm run vue:serve:web`.  
**Note that you can't use Electron or NodeJS native libraries in this case.** Please check `service/electron.js` to watch how conditional import of electron/Native libraries is done.

## Reference

- [angular-electron](https://github.com/maximegris/angular-electron)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

# License
MIT
