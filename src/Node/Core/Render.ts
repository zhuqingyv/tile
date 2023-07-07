import { RenderType, StyleType, AnimationType } from '../types';
import Base from './Base';

class Render extends Base {
  style?: StyleType;
  animation?: AnimationType;

  constructor(options: RenderType) {
    super(options);
    const {
      style,
      animation
    } = options;

    this.style = style;
    this.animation = animation;
  };
};

export default Render;