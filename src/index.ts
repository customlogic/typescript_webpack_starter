import './style/style.scss';

import * as _ from 'lodash';

function component() {
  let element = document.createElement('div');
  const fred = 10;
  const boy = 'adsf';

  element.innerHTML = _.join([ 'HelloXX!!', 'webpacker' ], ' ');

  return element;
}

document.body.appendChild(component());
