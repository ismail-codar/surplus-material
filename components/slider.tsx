import * as Surplus from 'surplus';
Surplus;
import S from 's-js';
import { DataSignal } from 's-js';
import { MdcBaseProps, sDataValue } from './_base';
import { mixins } from 'surplus-mixins';

export interface MdcSliderProps extends MdcBaseProps {
  discrete?: DataSignal<boolean> | boolean;
  displayMarkers?: DataSignal<boolean> | boolean;
  min?: DataSignal<number> | number;
  max?: DataSignal<number> | number;
  value: DataSignal<number>;
  onInput?: (value: number) => void;
  onChange?: (value: number) => void;
}

export const MdcSlider = (props: MdcSliderProps) => {
  const dom = (
    <div
      fn={mixins({
        attrs: props.attrs,
        styles: props.styles,
        onmouse: props.mouseEvents,
        classes: [
          {
            'mdc-slider': true,
            'mdc-slider--discrete': sDataValue(props.discrete),
            'mdc-slider--display-markers': sDataValue(props.displayMarkers)
          },
          props.classes
        ]
      })}
      aria-valuemin={sDataValue(props.min) || 0}
      aria-valuemax={sDataValue(props.max) || 100}
      aria-valuenow={props.value()}
    >
      <div className="mdc-slider__track-container">
        <div className="mdc-slider__track" />
        <div className="mdc-slider__track-marker-container" />
      </div>
      <div className="mdc-slider__thumb-container">
        {props.discrete ? (
          <div className="mdc-slider__pin">
            <span className="mdc-slider__pin-value-marker">
              {props.value()}
            </span>
          </div>
        ) : null}
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875" />
        </svg>
        <div className="mdc-slider__focus-ring" />
      </div>
    </div>
  );
  let slider = null;
  window.requestAnimationFrame(() => {
    slider = new window['mdc'].slider.MDCSlider(dom);
    slider.listen('MDCSlider:input', function() {
      // props.value(slider.value)
      props.onInput && props.onInput(slider.value);
    });
    slider.listen('MDCSlider:change', function() {
      props.value(slider.value);
      props.onChange && props.onChange(slider.value);
    });
  });
  S.on(props.value, () => {
    if (slider) slider.value = props.value();
  });
  S.cleanup(() => slider.destroy());
  return dom;
};
