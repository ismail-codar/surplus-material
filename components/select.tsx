import S from 's-js';
import { DataSignal } from 's-js';
import * as Surplus from 'surplus';
import { mixins, styles } from 'surplus-mixins';

import { MdcBaseProps, sDataValue } from './_base';

Surplus;
export interface MdcSelectProps extends MdcBaseProps {
  selectedText?: DataSignal<string> | string;
  cssOnly?: boolean;
  label?: DataSignal<string> | string;
}
export interface MdcSelectItemProps extends MdcBaseProps {
  data?: any;
  group?: boolean;
}

export const MdcSelect = (props: MdcSelectProps) => {
  const dom = (
    <div
      fn={mixins({
        attrs: [{ role: 'listbox' }, props.attrs],
        styles: props.styles,
        classes: [
          {
            'mdc-select': true
          },
          props.classes
        ]
      })}
    >
      <span
        className="mdc-select__selected-text"
        fn={styles({ position: 'absolute' })}
      >
        {sDataValue(props.selectedText)}
      </span>
      <div className="mdc-simple-menu mdc-select__menu">
        <ul className="mdc-list mdc-simple-menu__items">{props.children}</ul>
      </div>
      {props.label == null ? null : (
        <label
          className="mdc-textfield__label mdc-textfield__label--float-above"
          fn={styles({ position: 'relative', marginTop: '45px' })}
        >
          {sDataValue(props.label)}
        </label>
      )}
    </div>
  );
  let select = null;
  window.requestAnimationFrame(() => {
    select =
      props.cssOnly === undefined || props.cssOnly
        ? window['mdc'].select.MDCSelect.attachTo(dom)
        : null;
  });
  S.cleanup(() => select && select.destroy());

  return dom;
};

export const MdcSelect_Item = (props: MdcSelectItemProps) => (
  <li
    fn={mixins({
      attrs: [{ role: 'option', 'aria-disabled': props.group }, props.attrs],
      styles: props.styles,
      onmouse: props.mouseEvents,
      classes: [
        {
          'mdc-list-item': true
        },
        props.classes
      ]
    })}
    role="option"
    data={props.data}
  >
    {props.children}
  </li>
);
