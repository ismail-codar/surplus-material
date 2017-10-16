import S from 's-js';
import { DataSignal } from 's-js';
import * as Surplus from 'surplus';
import { mixins } from 'surplus-mixins';

import { MdcBaseProps, sDataValue } from './_base';

Surplus;
//TODO surlus svg support: https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/hooks/attribute-hook.js

export interface MdcCheckboxProps extends MdcBaseProps {
  id?: string;
  dark?: DataSignal<boolean> | boolean;
  cssOnly?: DataSignal<boolean> | boolean;
  value: DataSignal<any>;
  checked: DataSignal<boolean>;
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
        <input
          id={props.id}
          type="checkbox"
          className="mdc-checkbox__native-control"
        />
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
    checkbox = !sDataValue(props.cssOnly)
      ? new window['mdc'].checkbox.MDCCheckbox(dom)
      : null;
  if (checkbox) {
    checkbox.foundation_.adapter_.registerChangeHandler(() => {
      props.checked(checkbox.checked);
    });
    checkbox.checked = props.checked();
    S.cleanup(() => checkbox && checkbox.destroy());
  }
  return dom;
};
