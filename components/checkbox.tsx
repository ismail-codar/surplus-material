import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps, sDataValue } from './_base';
import { mixins } from 'surplus-mixins';

//TODO surlus svg support: https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/hooks/attribute-hook.js

export interface MdcCheckboxProps extends MdcBaseProps {
  dark?: DataSignal<boolean> | boolean;
  cssOnly?: DataSignal<boolean> | boolean;
}
//global.mdc.checkbox.MDCCheckbox
export const MdcCheckbox = (props: MdcCheckboxProps) => {
  var mixin1 = el => (el.id = 'foo'),
    mixin2 = el => (el.id = 'bar');

  const dom = (
      <div
        fn={mixins({
          attrs: props.attrs,
          styles: props.styles,
          onmouse: props.mouseEvents,
          classes: [
            {
              'mdc-checkbox': true,
              'mdc-checkbox--disabled':
                props.attrs && sDataValue(props.attrs['disabled']),
              'mdc-checkbox--theme-dark': sDataValue(props.dark)
            },
            props.classes
          ]
        })}
      >
        <input type="checkbox" className="mdc-checkbox__native-control" />
        <div className="mdc-checkbox__background">
          <svg viewBox="0 0 24 24" className="mdc-checkbox__checkmark">
            <path
              className="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    ),
    checkbox =
      sDataValue(props.cssOnly) == false
        ? new window['mdc'].checkbox.MDCCheckbox(dom)
        : null;
  S.cleanup(() => checkbox && checkbox.destroy());
  return dom;
};
