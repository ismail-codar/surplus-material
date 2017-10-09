import S from 's-js';
import { DataSignal } from 's-js';
import * as Surplus from 'surplus';
import { mixins, styles } from 'surplus-mixins';

import { flattenChilds, MdcBaseProps, sDataValue } from './_base';

Surplus;
export interface MdcSelectProps extends MdcBaseProps {
  selectedText?: DataSignal<string> | string;
  cssOnly?: boolean;
  label?: DataSignal<string> | string;
  value?: DataSignal<any>;
}
export interface MdcSelectItemProps extends MdcBaseProps {
  value?: any;
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
    if (select) {
      if (props.value) {
        select.listen('MDCSelect:change', () => {
          props.value(select.selectedOptions[0].data);
        });
        if (props.value() != null) {
          let idx = -1;
          (flattenChilds(props.children) as HTMLElement[]).find(child => {
            idx++;
            return child['data'] === props.value();
          });
          select.foundation_.setSelectedIndex(idx);
        }
      }
    }
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
    data={props.value}
  >
    {props.children}
  </li>
);
