import S, { DataSignal } from 's-js';
import { SStyleType } from 'surplus-mixins/style';
import { SMouseEventType } from 'surplus-mixins/mouse';
import { SClassType } from 'surplus-mixins/class';
import { SAttributeType } from 'surplus-mixins/attribute';
import mixins, { ISurplusMixins } from 'surplus-mixins/all';
var extend = require('extend');

export type MdcIntentitonType = '' | 'primary' | 'accent';
export type MdcTextType =
  | 'primary'
  | 'secondary'
  | 'hint'
  | 'disabled'
  | 'icon';
export type DeviceSizeType = '' | 'phone' | 'tablet' | 'desktop';

export interface MdcBaseProps {
  ref?: any;
  fn?: <U>(node: any, state?: U) => any;
  children?: HTMLElement[] | string[] | string;
  attrs?: SAttributeType;
  classes?: SClassType;
  styles?: SStyleType;
  mouseEvents?: SMouseEventType;
}

export const sDataValue = <T>(val: DataSignal<T> | T): T => {
  return typeof val == 'function' ? (val as any)() : val;
};

export const flattenChilds = arr => {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenChilds(toFlatten) : toFlatten
    );
  }, []);
};

export const propsMixins = (props: MdcBaseProps, extra: ISurplusMixins) => {
  const target = {
    classes: props.classes,
    attrs: props.attrs,
    styles: props.styles,
    onmouse: props.mouseEvents
  };
  extend(target, extra);
  return mixins(target);
};

export const randomId = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);
