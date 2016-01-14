import * as path from 'path';
import * as express from 'express';
import * as serveStatic from 'serve-static';
import { ng2engine } from  'angular2-universal-preview';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { App } from '../app/App.ts';

const PUBLIC_PATH = path.resolve(__dirname, '../../dist/public');
const INDEX_PATH  = path.resolve(__dirname, '../index.html');

export const app = express();

app.engine('html', ng2engine);
app.use(serveStatic(PUBLIC_PATH));

const providers = [
  ROUTER_PROVIDERS
];

const preboot = { 
  appRoot: 'app', 
  freeze: false,
  replay: 'rerender',
  buffer: true, 
  debug: true, 
  uglify: false 
};

app.get('/', (req, res) => res.render(INDEX_PATH, { App, providers, preboot }));
