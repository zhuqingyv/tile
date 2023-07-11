import { DataType } from "..";
import { Base } from "..";

export class Data extends Base {
  value;
  constructor(options: DataType) {
    super(options);

    const { value } = options;
    this.value = value;
  };

  getValue = () => {};
};