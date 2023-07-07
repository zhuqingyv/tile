import { TypeEnum } from "../../Node";

interface BasePlugin {
  type: TypeEnum;
  create: () => any;
  destroy: () => any;
};

export interface BoxPlugin extends BasePlugin {
  type: TypeEnum.BOX;
  render: () => any;
};