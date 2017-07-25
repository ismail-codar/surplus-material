import * as Surplus from 'surplus';
import S from "s-js";
Surplus;
import * as cx from 'classnames';
import { DataSignal } from "s-js";

export type MdcIntentitonType = "primary" | "accent"

export interface MdcButtonProps {
    flat?: DataSignal<boolean>
    raised?: DataSignal<boolean>
    dense?: DataSignal<boolean>
    intention?: DataSignal<MdcIntentitonType>
}


export const MdcButton = (props: MdcButtonProps) => {
    const btn =
        <button className={cx({
            "mdc-button": true,
            "button": true,
            "mdc-button--raised": props.raised && props.raised(),
            "mdc-button--dense": props.dense && props.dense(),
            "mdc-button--primary": props.intention && props.intention() === "primary",
            "mdc-button--accent": props.intention && props.intention() === "accent"
        })}>
            {props["children"]}
        </button>,
        ripple = window["mdc"].ripple.MDCRipple.attachTo(btn);

    S.cleanup(() => ripple.destroy());

    return btn;
}