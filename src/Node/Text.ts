import { TextType, DataType, ScriptType } from "./types";
import { Render } from "./Core";

export class Text extends Render {
  value!: string | DataType | ScriptType;
  numberOfLine: number = 1;

  constructor(options: TextType) {
    super(options);

    const { value, numberOfLine } = options;
    this.value = value;
    this.numberOfLine = numberOfLine;
  };
};