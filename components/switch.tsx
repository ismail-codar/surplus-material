import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps } from './_base';
import { mixins } from 'surplus-mixins';

export interface MdcSwitchProps extends MdcBaseProps {}

export const MdcSwitch = (props: MdcSwitchProps) => (
  <div
    fn={mixins({
      attrs: props.attrs,
      styles: props.styles,
      onmouse: props.mouseEvents,
      classes: [
        {
          'mdc-switch': true
        },
        props.classes
      ]
    })}
  >
    <input type="checkbox" className="mdc-switch__native-control" />
    <div className="mdc-switch__background">
      <div className="mdc-switch__knob" />
    </div>
  </div>
);
