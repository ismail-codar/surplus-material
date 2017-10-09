import S from 's-js';
import { DataSignal } from 's-js';
import * as Surplus from 'surplus';
import { attrs, mixins } from 'surplus-mixins';

import { MdcBaseProps, sDataValue } from './_base';

Surplus;
export interface MdcTextFieldHelperProps extends MdcBaseProps {
  persistent?: DataSignal<boolean> | boolean;
  useAsValidation?: DataSignal<boolean> | boolean;
}

export interface MdcTextFieldProps extends MdcBaseProps {
  type?: DataSignal<string> | string;
  name?: DataSignal<string> | string;
  pattern?: DataSignal<string> | string;
  dense?: DataSignal<boolean> | boolean;
  box?: DataSignal<boolean> | boolean;
  fullwidth?: DataSignal<boolean> | boolean;
  autocomplete?: DataSignal<string> | string;
  required?: DataSignal<boolean> | boolean;
  multiline?: { cols?: number; rows: number };
  label: DataSignal<string> | string;
  value?: DataSignal<any>;
}

export const MdcTextField = (props: MdcTextFieldProps) => {
  const dom = (
      <div
        fn={mixins({
          attrs: props.attrs,
          styles: props.styles,
          classes: [
            {
              'mdc-textfield': true,
              'mdc-textfield--dense': sDataValue(props.dense),
              'mdc-textfield--box': sDataValue(props.box),
              'mdc-textfield--fullwidth': sDataValue(props.fullwidth),
              'mdc-textfield--multiline': props.multiline != null
            },
            props.classes
          ]
        })}
      >
        {props.multiline ? (
          <textarea
            className="mdc-textfield__input"
            name={sDataValue(props.name)}
            {...attrs({
              autocomplete: sDataValue(props.autocomplete),
              pattern: sDataValue(props.pattern)
            })}
            required={sDataValue(props.required)}
            cols={props.multiline.cols}
            rows={props.multiline.rows}
          >
            {sDataValue(props.value) || ''}
          </textarea>
        ) : (
          <input
            type={sDataValue(props.type) || 'text'}
            className="mdc-textfield__input"
            name={sDataValue(props.name)}
            fn={attrs({
              autocomplete: sDataValue(props.autocomplete),
              pattern: sDataValue(props.pattern)
            })}
            required={sDataValue(props.required)}
            value={sDataValue(props.value) || ''}
            onInput={e => {
              props.value(e.target['value']);
            }}
          />
        )}
        <label className="mdc-textfield__label">{props.label}</label>
      </div>
    ),
    textfield = new window['mdc'].textfield.MDCTextfield(dom);
  S.cleanup(() => textfield.destroy());
  return dom;
};

export const MdcTextField_Helper = (props: MdcTextFieldHelperProps) => {
  const dom = (
    <p
      fn={mixins({
        attrs: props.attrs,
        styles: props.styles,
        classes: [
          {
            'mdc-textfield-helptext': true,
            'mdc-textfield-helptext--persistent': sDataValue(props.persistent),
            'mdc-textfield-helptext--validation-msg': sDataValue(
              props.useAsValidation
            )
          },
          props.classes
        ]
      })}
      aria-hidden="true"
    >
      {props.children}
    </p>
  );
  return dom;
};
