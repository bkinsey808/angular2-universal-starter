import { platform } from "angular2/core";
import { WORKER_APP_PLATFORM, WORKER_APP_APPLICATION } from "angular2/platform/worker_app";
import { App } from './app/App';


platform(WORKER_APP_PLATFORM).application(WORKER_APP_APPLICATION).bootstrap(App).then(() => setTimeout(() => {
  postMessage('APP_READY', undefined);
}));