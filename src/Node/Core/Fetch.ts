import { FetchType, DataType, ScriptType } from "..";
import Base from './Base';

class Fetch extends Base {
  params?: DataType | ScriptType;
  value?: DataType | ScriptType;
  constructor(options: FetchType) {
    super(options);

    const { params, value } = options;
    this.params = params;
    this.value = value;
  };
};

export default Fetch;