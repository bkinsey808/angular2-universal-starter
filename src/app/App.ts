declare var require: any;

import { Component } from 'angular2/core';
import { NgIf } from 'angular2/common';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { PrebootPage } from './PrebootPage';
import * as style from './App.css';
import * as template from './App.html';

@Component({
  selector: 'app',
  directives: [NgIf, RouterOutlet],
  template: 'asdfasdf'
})
@RouteConfig([
  { 
    path: '/', 
    name: 'Preboot', 
    component: PrebootPage 
  }
])
export class App {
  name = 'World';
  messagePreboot = '';
  messageLazyLoading = '';

  constructor() {
    setTimeout(() => this.name = 'Angular', 1000);
  }
  
  onCheckPreboot() {
    console.log('Check preboot');
    this.messagePreboot = "Preboot is working"
  }
  
  onCheckLazyLoading() {
    require.ensure(['./greeter.ts'], (require) => {
      const greeter = require('./greeter.ts');
      greeter.greet();
      this.messageLazyLoading = 'Lazy loading is working';
    })
  }
}