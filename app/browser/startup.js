import { greet } from './components/hello-world/hello-world';
import { contextMenu } from './components/menu/context-menu';
import { externalLinks } from './components/external-links';
import menu from './components/menu/menu';

export default class Startup {
    constructor(options) {
      menu(options.remote);
      contextMenu(options.remote);
      externalLinks(options.shell);

      var envName = options.config.name;
      document.getElementById('env-name').innerHTML = envName;
      document.getElementById('greet').innerHTML = greet();
      document.getElementById('platform-info').innerHTML = options.os.platform();
    }
}
