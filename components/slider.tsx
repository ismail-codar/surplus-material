import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps } from "./_base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";
import attrs from "surplus-mixins/attribute";

export interface MdcSliderProps extends MdcBaseProps {
}

export const MdcSlider = (props: MdcSliderProps) => {
    const dom = <div className="mdc-slider"
        role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30"
        aria-label="Select Value">
        <div className="mdc-slider__track-container">
            <div className="mdc-slider__track"></div>
        </div>
        <div className="mdc-slider__thumb-container">
            <svg className="mdc-slider__thumb" width="21" height="21">
                <circle {...attrs({
                    cx: 10,
                    cy: 10,
                    r: 8
                }) } ></circle>
            </svg>
            <div className="mdc-slider__focus-ring"></div>
        </div>
    </div>,
        slider = new window["mdc"].slider.MDCSlider(dom)
    S.cleanup(() => slider.destroy())
    return dom
}