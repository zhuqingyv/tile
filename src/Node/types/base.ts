import { AnimationType } from "./animation";
import { StyleType } from "./style";

export enum TypeEnum {
  // 容器(布局组件)
  BOX = 'Box',
  // 图片
  IMAGE = 'Image',
  // 文字
  TEXT = 'Text',
  // Lottie - (动画配置)
  LOTTIE = 'Lottie',
  // 网络请求组件
  FETCH = 'Fetch',
  // 列表组件(待定)
  LIST = 'List',

  // 数据源组件(动态渲染)
  DATA = 'Data',
  // 脚本组件 - 处理复杂场景
  SCRIPT = 'Script',
  // 样式描述
  STYLE = 'Style',
  // 动画描述
  ANIMATION = 'Animation',

  // 资源库
  ASSETS = 'Assets',
  // 资源取用占位
  ASSET = 'Asset',
};

export interface EventsType {
  onClick: ScriptType;
  [key: string]: ScriptType;
};

export interface DataType extends BaseType {
  type: TypeEnum.DATA;
  // 这里可以指向另外一个数据源，可以是动态数据源
  value: string | number | DataType | ScriptType | {
    [key: string]: string | number;
  };
};

export interface ScriptType extends BaseType {
  type: TypeEnum.SCRIPT;
  value: string;
};

export interface BaseType {
  type: TypeEnum;
  id: string;
  name?: string;
  script?: ScriptType;
  data?: DataType;
};

export interface FetchType extends BaseType {
  type: TypeEnum.FETCH;
  params?: DataType | ScriptType;
  value?: DataType | ScriptType;
};

export interface RenderType extends BaseType {
  style?: StyleType;
  animation?: AnimationType;
  events?: EventsType;
};

export type DSLLogicElement = ScriptType | DataType | FetchType;