import './style/style.scss';

import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const fred = 10;
  const boy = 'adsf';

  element.innerHTML = _.join(['Hello', 'webpacker'], ' ');

  return element;
}

document.body.appendChild(component());
