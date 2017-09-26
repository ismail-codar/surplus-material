import S from 's-js';
import { DataSignal } from 's-js';
import * as Surplus from 'surplus';
import { attrs } from 'surplus-mixins';

import { MdcBaseProps, sDataValue } from './_base';

Surplus;
export interface MdcRadioProps extends MdcBaseProps {
  name: DataSignal<string> | string;
  checked?: DataSignal<boolean> | boolean;
  cssOnly?: DataSignal<boolean> | boolean;
  label?: DataSignal<string> | string;
}

export const MdcRadio = (props: MdcRadioProps) => {
  const id = 'rd_' + encodeURIComponent(sDataValue(props.label)),
    cssOnly = props.cssOnly != undefined && sDataValue(props.cssOnly),
    dom = (
      <div className="mdc-form-field">
        <div className="mdc-radio">
          <input
            id={id}
            className="mdc-radio__native-control"
            type="radio"
            checked={sDataValue(props.checked)}
            name={sDataValue(props.name)}
          />
          <div className="mdc-radio__background">
            <div className="mdc-radio__outer-circle" />
            <div className="mdc-radio__inner-circle" />
          </div>
        </div>
        {props.label ? (
          <label fn={attrs({ for: id })}>{sDataValue(props.label)}</label>
        ) : null}
      </div>
    );
  if (!cssOnly) {
    const formField = new window['mdc'].formField.MDCFormField(dom),
      radio = new window['mdc'].radio.MDCRadio(dom.children[0]);
    formField.input = radio;
    S.cleanup(() => {
      formField.destroy();
      radio.destroy();
    });
  }

  return dom;
};
