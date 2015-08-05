electron-boilerplate (Electron + Jspm + ES6 + Babel + Gulp + Karma)
==============
Boilerplate application for [Electron](http://electron.atom.io).

The repo's idea based on https://github.com/szwacz/electron-boilerplate.git

This project gives you mainly three things:

1. Cross-platform development environment (works the same way on OSX, Windows and Linux).
2. Basic structure for Electron app.
3. Scripts to generate app for all three operating systems (Tested only on OSX).

# Quick start
The project dependent on [Node.js](https://nodejs.org) and [Gulp](http://gulpjs.com/). So just make sure you have they installed.

```
npm install
npm run start
```
Also, you can use `gulp` commands, they are pretty much the same.

# Structure of the project

There are **two** `package.json` files:  

#### 1. For development
Sits on path: `electron-boilerplate/package.json`. Here you declare dependencies for your development environment and build scripts. **This file is not distributed with real application!**

Also here you declare the version of Electron runtime you want to use:
```json
"devDependencies": {
  "electron-prebuilt": "^0.30.2"
}
```

#### 2. For your application
Sits on path: `electron-boilerplate/app/package.json`. This is **real** manifest of your application. Declare your app dependencies here.

### Project's folders

- `app` - code of your application goes here.
- `config` - place for you to declare environment specific stuff.
- `build` - in this folder lands built, runnable application.
- `releases` - ready for distribution installers will land here.
- `gulp` - gulp tasks.


# Development

#### Installation

```
npm install
```
It will also download Electron runtime, and install dependencies for second `package.json` file inside `app` folder.

#### Starting the app

```
npm start
```

#### Adding native npm modules to your app

To install native module you need just run `npm install` in `app` folder. It will call `electron-rebuild` [(Read more)](https://github.com/atom/electron/blob/master/docs/tutorial/using-native-node-modules.md).

#### Unit tests

electron-boilerplate has preconfigured [karma](http://karma-runner.github.io) unit test runner. To run it go with standard:
```
npm run test
```
You don't have to declare paths to spec files in any particular place. The runner will search through the project for all `*.spec.js` files and include them automatically.

You can see your code coverage in `coverage` folder.

# Making a release

To make executable app:
```
npm run release
```
It will start the packaging process for operating system you are running this command on (Currently for OSX only). Ready for distribution file will be outputted to `releases` directory.

# License

The MIT License (MIT)
