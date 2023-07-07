import { BaseType, TypeEnum } from ".";

enum Direction {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
};
 
enum Alignment {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  BASELINE = 'baseline'
};
 
enum Position {
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative'
};
 
type Size = number | string;
type Positioning = Size;
 
type Border = {
  radius: number[] & { length: 4 };
  width: number;
  color: string;
};
 
type Background = {
  color: string;
  image: string;
};
 
type Font = {
  size: number;
  lineHeight: number;
  weight: number | string;
  color: string;
};
 
export interface StyleType extends BaseType {
  type: TypeEnum.STYLE;
  value: {
    width: Size;
    height: Size;
    opacity: number;
 
    direction: Direction;
    justify: Alignment;
    align: Alignment;
 
    position: Position;
    left: Positioning;
    top: Positioning;
 
    border: Border;
    background: Background;
    font: Font;
  }
};
 
 
