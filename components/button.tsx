import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps, sDataValue } from "./base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";

export type MdcIntentitonType = "primary" | "accent"

export interface MdcButtonProps extends MdcBaseProps {
    rippleEffect?: DataSignal<boolean> | boolean
    dark?: DataSignal<boolean> | boolean
    flat?: DataSignal<boolean> | boolean
    raised?: DataSignal<boolean> | boolean
    dense?: DataSignal<boolean> | boolean
    compact?: DataSignal<boolean> | boolean
    intention?: DataSignal<MdcIntentitonType> | MdcIntentitonType
}

export const MdcButton = (props: MdcButtonProps) => {
    const rippleEffect = !props.rippleEffect || sDataValue(props.rippleEffect)
    const dom =
        <button
            {...styles(props.styles) }
            {...classes({
                "mdc-button": true,
                "button": true,
                "mdc-button--theme-dark": sDataValue(props.dark),
                "mdc-button--raised": sDataValue(props.raised),
                "mdc-button--compact": sDataValue(props.compact),
                "mdc-button--dense": sDataValue(props.dense),
                ["mdc-button--" + sDataValue(props.intention)]: true
            }, props.classes) }
            {...onmouse(props.mouseEvents) }
            disabled={sDataValue(props.disabled)}>
            {props["children"]}
        </button>,
        ripple = rippleEffect ? window["mdc"].ripple.MDCRipple.attachTo(dom) : null;

    S.cleanup(() => ripple && ripple.destroy());

    return dom;
}