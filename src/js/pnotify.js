// export default {};
import { alert, notice, info, success, error } from '@pnotify/core';
import { defaultModules } from '@pnotify/core';
import * as PNotifyFontAwesome5Fix from '@pnotify/font-awesome5-fix';
import * as PNotifyFontAwesome5 from '@pnotify/font-awesome5';
defaultModules.set(PNotifyFontAwesome5Fix, {});
defaultModules.set(PNotifyFontAwesome5, {});
// alert('Alert me, senpai!');
// notice('Notice me, senpai!');
// info('info me, senpai!');
// success('success me, senpai!');
export default function foo(message) {
  error(`${message}`);
}
