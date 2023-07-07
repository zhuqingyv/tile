import { TypeEnum } from './base';

interface FromOrToType {
  opacity: number;
  scale: number;
};

interface FrameType {
  from: FromOrToType;
  to:FromOrToType;
  duration: number;
  delay: number;
  loop: boolean;
};

export interface AnimationType {
  type: TypeEnum.ANIMATION;
  value: FrameType[];
};
