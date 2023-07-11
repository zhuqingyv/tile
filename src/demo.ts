import Tile, { TypeEnum } from './index';

const dsl = {
  type: 'Box',
  id: 'XXX-XXXXXXX-XXXX',

};

const tile = new Tile(dsl);

const BoxPlugin = {
  type: 'Box',
  onCreated(instance) {},
};

tile.use(BoxPlugin);

tile.render();