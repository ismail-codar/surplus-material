import * as Surplus from 'surplus';
Surplus;
import S from "s-js";
import { DataSignal } from "s-js";
import { MdcBaseProps } from "./base";
import onmouse from "surplus-mixins/mouse";
import styles from "surplus-mixins/style";
import classes from "surplus-mixins/class";

export type MdcIntentitonType = "primary" | "accent"

export interface MdcButtonProps extends MdcBaseProps {
    rippleEffect?: DataSignal<boolean>
    dark?: DataSignal<boolean>
    flat?: DataSignal<boolean>
    raised?: DataSignal<boolean>
    dense?: DataSignal<boolean>
    compact?: DataSignal<boolean>
    intention?: DataSignal<MdcIntentitonType>
}

export const MdcButton = (props: MdcButtonProps) => {
    const rippleEffect = !props.rippleEffect || props.rippleEffect()
    const btn =
        <button
            {...styles(props.styles, { display: props.hidden && props.hidden() ? "none" : "" }) }
            {...classes({
                "mdc-button": true,
                "button": true,
                "mdc-button--theme-dark": props.dark && props.dark(),
                "mdc-button--raised": props.raised && props.raised(),
                "mdc-button--compact": props.compact && props.compact(),
                "mdc-button--dense": props.dense && props.dense(),
                "mdc-button--primary": props.intention && props.intention() === "primary",
                "mdc-button--accent": props.intention && props.intention() === "accent"
            }, props.classes) }
            {...onmouse(props.mouseEvents) }
            disabled={props.disabled && props.disabled()}>
            {props["children"]}
        </button>,
        ripple = rippleEffect ? window["mdc"].ripple.MDCRipple.attachTo(btn) : null;

    S.cleanup(() => ripple && ripple.destroy());

    return btn;
}