import { PluginBaseType, PluginPoolType } from "../../types";

class PluginManager {
  pluginPool:PluginPoolType = {};

  create = (plugin: PluginBaseType) => {
    const { type } = plugin;
    this.pluginPool[type] = plugin;
  };

  getPlugin = (type: string) => {
    const plugin = this.pluginPool[type];
    return plugin;
  };
};

export default PluginManager;