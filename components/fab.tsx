import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps, sDataValue } from './_base';
import { mixins } from 'surplus-mixins';

export interface MdcFabProps extends MdcBaseProps {
  rippleEffect?: DataSignal<boolean> | boolean;
  mini?: DataSignal<boolean> | boolean;
  plain?: DataSignal<boolean> | boolean;
  label: DataSignal<string> | string;
  icon: DataSignal<string> | string;
}

export const MdcFab = (props: MdcFabProps) => {
  const rippleEffect =
    props.rippleEffect == undefined || sDataValue(props.rippleEffect);

  const dom = (
      <button
        fn={mixins({
          classes: {
            'mdc-fab material-icons': true,
            'mdc-fab--mini': sDataValue(props.mini),
            'mdc-fab--plain': sDataValue(props.plain)
          }
        })}
        aria-label={sDataValue(props.label)}
      >
        <span className="mdc-fab__icon">{sDataValue(props.icon)}</span>
      </button>
    ),
    ripple = rippleEffect ? window['mdc'].ripple.MDCRipple.attachTo(dom) : null;

  S.cleanup(() => ripple && ripple.destroy());
  return dom;
};
