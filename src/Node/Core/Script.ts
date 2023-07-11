import { ScriptType } from "..";
import { Base } from "..";

export class Script extends Base {
  value;
  constructor(options: ScriptType) {
    super(options);

    const { value } = options;
    this.value = value;
  };

  getValue = () => {};
};