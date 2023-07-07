import { BoxType, DSLViewElement } from "./types/view";
import { Render } from "./Core";

export class Box extends Render {
  children: DSLViewElement[];

  constructor(options: BoxType) {
    super(options);
    const { children = [] } = options;
    this.children = children;
  };
};