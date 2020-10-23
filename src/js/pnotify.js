import {  defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import { defaults } from '@pnotify/core';
import { defaults } from '@pnotify/core';
defaults.delay = 2000;


  defaultModules.set(PNotifyMobile, {});

import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
// alert('Alert me, senpai!');
// notice('Notice me, senpai!');
// info('info me, senpai!');
// success('success me, senpai!');
function errorNote(message) {
  error(`${message}`);
  }

function errorClose() {
  error.close();
  }

export { errorNote, errorClose };