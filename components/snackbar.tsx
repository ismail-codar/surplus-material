import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps, sDataValue } from './_base';
import { MdcButtonProps } from './button';
import { mixins } from 'surplus-mixins';

export interface MdcSnackbarProps extends MdcBaseProps {
  cssOnly?: boolean;
  active: DataSignal<boolean>;
  alignStart?: DataSignal<boolean> | boolean;
  message?: DataSignal<string> | string;
  actionText?: DataSignal<string> | string;
  actionOnBottom?: DataSignal<boolean> | boolean;
  multiline?: DataSignal<boolean> | boolean;
  timeout?: DataSignal<number> | number;
  actionHandler?: () => void;
}

export const MdcSnackbar = (props: MdcSnackbarProps) => {
  const dom = (
      <div
        fn={mixins({
          attrs: [
            {
              'aria-live': 'assertive',
              'aria-atomic': true,
              'aria-hidden': true
            },
            props.attrs
          ],
          styles: props.styles,
          onmouse: props.mouseEvents,
          classes: [
            {
              'mdc-snackbar': true,
              'mdc-snackbar--align-start': sDataValue(props.alignStart),
              'mdc-snackbar mdc-snackbar--active': sDataValue(props.active)
            },
            props.classes
          ]
        })}
      >
        <div className="mdc-snackbar__text">{props.children}</div>
        <div className="mdc-snackbar__action-wrapper">
          <button
            type="button"
            className="mdc-button mdc-snackbar__action-button"
          >
            Undo
          </button>
        </div>
      </div>
    ),
    snackbar =
      props.cssOnly === undefined || !props.cssOnly
        ? new window['mdc'].snackbar.MDCSnackbar(dom)
        : null;
  if (snackbar) {
    S.cleanup(() => snackbar.destroy());
    S.on(props.active, () => {
      if (props.active()) {
        snackbar.show({
          message: sDataValue(props.message),
          actionOnBottom: sDataValue(props.actionOnBottom) || true,
          multiline: sDataValue(props.multiline) || false,
          timeout: sDataValue(props.timeout) || 2750,
          actionText: sDataValue(props.actionText) || 'Undo',
          actionHandler: props.actionHandler || function() {}
        });
      }
    });
  }
  return dom;
};
