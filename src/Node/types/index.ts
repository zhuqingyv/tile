export * from './base';
export * from './style';
export * from './view';
export * from './animation';

import { DSLLogicElement } from './base';
import { DSLViewElement } from './view';

export type DSLElement = DSLLogicElement | DSLViewElement;