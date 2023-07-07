export interface PluginBaseType {
  type: string;
};

export interface PluginPoolType {
  [key: string]: PluginType;
};