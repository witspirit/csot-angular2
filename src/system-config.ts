// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'socket.io-client' : 'vendor/socket.io-client'
};

/** User packages configuration. */
const packages: any = {
};

// Material components
const materialPkgs:string[] = [
  'core',
  'button',
  'card',
  'toolbar',
  'list',
  'input'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};

});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'socket.io-client',

  // App specific barrels.
  'app',
  'app/shared',
  'app/pages/chat-page',
  'app/pages/chat-page/chat',
  'app/pages/chat-page/chat/text-input',
  'app/pages/chat-page/chat/chat-bubble-list',
  'app/pages/chat-page/chat/chat-bubble-list/chat-bubble',
  'app/pages/chat-page/chat-heads-list',
  'app/pages/chat-page/chat-heads-list/channel',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  if(barrelName == 'socket.io-client') {
    cliSystemConfigPackages[barrelName] = { main: 'socket.io.js' }
  } else {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
  }
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'socket.io-client': 'vendor/socket.io-client',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
