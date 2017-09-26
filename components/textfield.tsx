import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps, randomId, sDataValue } from './_base';
import { mixins, attrs } from 'surplus-mixins';

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
  multiline?:
    | DataSignal<{ cols?: number; rows: number }>
    | { cols?: number; rows: number };
  label: DataSignal<string> | string;
  value?: DataSignal<string> | string;
}

export const MdcTextField = (props: MdcTextFieldProps) => {
  const multiline = sDataValue(props.multiline),
    id = randomId(),
    dom = (
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
              'mdc-textfield--multiline': multiline != null
            },
            props.classes
          ]
        })}
      >
        {multiline ? (
          <textarea
            id={id}
            className="mdc-textfield__input"
            name={sDataValue(props.name)}
            {...attrs({
              autocomplete: sDataValue(props.autocomplete),
              pattern: sDataValue(props.pattern)
            })}
            required={sDataValue(props.required)}
            cols={multiline.cols}
            rows={multiline.rows}
          >
            {sDataValue(props.value) || ''}
          </textarea>
        ) : (
          <input
            id={id}
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
              (props.value as any)(e.target['value']);
            }}
          />
        )}
        <label fn={attrs({ for: id })} className="mdc-textfield__label">
          {props.label}
        </label>
      </div>
    ),
    textfield = new window['mdc'].textfield.MDCTextfield(dom);
  S.cleanup(() => textfield.destroy());
  return dom;
};

export const MdcTextField_Helper = (props: MdcTextFieldHelperProps) => {
  const id = randomId(),
    dom = (
      <p
        fn={mixins({
          attrs: props.attrs,
          styles: props.styles,
          classes: [
            {
              'mdc-textfield-helptext': true,
              'mdc-textfield-helptext--persistent': sDataValue(
                props.persistent
              ),
              'mdc-textfield-helptext--validation-msg': sDataValue(
                props.useAsValidation
              )
            },
            props.classes
          ]
        })}
        id={id}
        aria-hidden="true"
      >
        {props.children}
      </p>
    );
  window.requestAnimationFrame(() => {
    dom.previousElementSibling.firstElementChild.setAttribute(
      'aria-controls',
      id
    );
  });
  return dom;
};
