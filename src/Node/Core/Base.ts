import { TypeEnum, BaseType, ScriptType, DataType } from "../types";
import { manager } from "../../Core";

class Base {
  type: TypeEnum;
  id: string;
  name?: string;
  script?: ScriptType;
  data?: DataType;

  constructor(options: BaseType) {
    const {
      type,
      id,
      name,
      script,
      data
    } = options;

    this.type = type;
    this.id = id;
    if (!!name) this.name = name;
    if (script) this.script = script;
    if (data) this.data = data;

    this.created();
  };

  created = () => {
    manager.create(this);
  };
};

export default Base;