import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-app-host',
  templateUrl: './external-app-host.component.html',
  styleUrls: ['./external-app-host.component.css']
})
export class ExternalAppHostComponent implements OnInit {

  constructor() { }

  config = {
    "client-a": {
      loaded: false,
      path: 'http://localhost:5000/main.js',
      element: 'external-dashboard-tile-a'
    },
    "client-c": {
      loaded: false,
      path: 'http://localhost:5001/main.js',
      element: 'external-dashboard-tile-c'
    },
    "client-b": {
      loaded: false,
      path: 'http://localhost:5003/main.js',
      element: 'external-app-b'
    },
  };
  ngOnInit() {
  }

  load(name: string): void {
    console.log(name);

    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    console.log(element);
    content.appendChild(element);

    element.setAttribute('a', '210');
    element.setAttribute('b', '510');
    element.setAttribute('c', '310');

    // element.addEventListener('message', msg => this.handleMessage(msg));
    // element.setAttribute('state', 'init');

    // script.onerror = () => console.error(`error loading ${configItem.path}`);


    // this.stateService.registerClient(element);

  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

}
