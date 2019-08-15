import './style/style.scss';

import * as dat from 'dat.gui';
import * as PIXI from 'pixi.js';
const STATS = require('stats.js');

const settings = {
  speed: 0.5,
};

// PIXI
const app = new PIXI.Application(
  { width: window.innerWidth, height: window.innerHeight, transparent: false });
document.getElementById('pixi').appendChild(app.view);

app.loader.add('cat', './assets/images/cat.jpg').load((loader: any, resources: any) => {
  const sprite = new PIXI.Sprite(resources.cat.texture);

  sprite.anchor.set(0.5, 0.5);
  sprite.position.set(500, 300);
  app.stage.addChild(sprite);

  app.ticker.add(tick);

  function tick(dt: number) {
    stats.begin();

    const newRotation = sprite.rotation + settings.speed * 0.01;
    sprite.rotation = newRotation;

    stats.end();
  }
});

// STATS.JS
const stats = new STATS();
document.body.appendChild(stats.dom);

// DAT.GUI
const gui = new dat.GUI();
gui.add(settings, 'speed', 0, 1);

window.addEventListener('resize', onResize);

function onResize() {
  app.renderer.resize(window.innerWidth, window.innerHeight);
}
