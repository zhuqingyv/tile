import { Box, DSLElement, TypeEnum } from './Node';
import { pluginManager } from './Core';
import { PluginBaseType } from './types';

export const render = (dsl: DSLElement) => {
  const { type } = dsl;

  switch(type) {
    case TypeEnum.BOX: {
      const instance = new Box(dsl);
      return;
    }
    case TypeEnum.TEXT: {
      return;
    }
    case TypeEnum.IMAGE: {
      return;
    }
    case TypeEnum.LOTTIE: {
      return;
    }
    default: {}
  };
};

class Tile {
  dsl: DSLElement;

  constructor(dsl: DSLElement) {
    this.dsl = dsl;
  };

  use = (plugin: PluginBaseType) => {
    pluginManager.create(plugin);
  };

  render = () => {};
};

export default Tile;
export * from './Node/types';
export * from './Core/types';