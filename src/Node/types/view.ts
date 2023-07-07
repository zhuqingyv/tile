import { TypeEnum } from ".";
import { RenderType, DataType, ScriptType, EventsType } from ".";

export type DSLViewElement = Text | BoxType | Image | Lottie;

export interface BoxType extends RenderType {
  type: TypeEnum.BOX;
  children?: DSLViewElement[];
};

export interface Text extends RenderType {
  type: TypeEnum.TEXT;
  value: string;
  numberOfLine: number;
};

enum ImageScaleMode {
  COVER = 'cover',
  CONTAIN = 'contain'
};

interface ImageEvents extends EventsType {
  onLoad: ScriptType;
};

export interface Image extends RenderType {
  type: TypeEnum.IMAGE;
  source: string | DataType;
  scaleMode: ImageScaleMode;
  events: ImageEvents;
};

export interface Lottie extends RenderType {
  type: TypeEnum.LOTTIE;
  source: string | DataType;
}